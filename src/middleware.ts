import { Client } from "@neondatabase/serverless";
import { kv } from "@vercel/kv";
import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import { excludedPatterns } from "./utils/excludedUserAgentPatterns";

const botRegex = new RegExp(excludedPatterns.join("|"), "i");

async function addUser(userAgent: string, ip: string, isBot: boolean) {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    const query = `
      INSERT INTO users (user_agent, ip, date, is_bot, count)
      VALUES ($1, $2, NOW(), $3, 1)
      ON CONFLICT (ip)
      DO UPDATE SET count = users.count + 1
    `;
    await client.query(query, [userAgent, ip, isBot]);
  } catch (error) {
    console.error("Error adding user:", error);
  } finally {
    await client.end();
  }
}

async function incrementVisitToday() {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  try {
    await client.connect();
    const today = new Date().toISOString().split("T")[0];
    const query = `
    INSERT INTO visits (date, count)
    VALUES ($1, 1)
    ON CONFLICT (date)
    DO UPDATE SET count = visits.count + 1
    `;
    await client.query(query, [today]);
  } catch (error) {
    console.error("Error incrementing visit count:", error);
  } finally {
    await client.end();
  }
}

// biome-ignore lint/correctness/noUnusedFunctionParameters: <explanation>
export default async function middleware(request: NextRequest, context: NextFetchEvent) {
  const response = NextResponse.next();
  try {
    if (request.method !== "GET" || request.nextUrl.pathname !== "/") return response;

    const ip = (
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      "UNKNOWN"
    ).trim();

    const userAgent = request.headers.get("user-agent") || "";

    const isBot = botRegex.test(userAgent);
    addUser(userAgent, ip, isBot);
    if (isBot) return response;

    const host = request.headers.get("host") || "";
    if (host.includes("localhost") || ip === "127.0.0.1" || host !== "pierre-lhoste.vercel.app") {
      return response;
    }

    const userKey = `user:${ip}`;
    const isVisited = (await kv.get<number>(userKey)) ?? 0;

    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const secondsUntilMidnight = Math.floor((tomorrow.getTime() - now.getTime()) / 1000);

    if (isVisited > 0) {
      await kv.set(userKey, isVisited + 1, { ex: secondsUntilMidnight });
      return response;
    }

    await kv.set(userKey, 1, { ex: secondsUntilMidnight });

    await incrementVisitToday();
  } catch (error) {
    console.error("Error in middleware:", error);
  }

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
