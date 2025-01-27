import { Client } from "@neondatabase/serverless";
import { kv } from "@vercel/kv";
import { hashSync } from "bcryptjs";
import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import { excludedPatterns } from "./utils/excludedUserAgentPatterns";

const RATE_LIMIT_PER_SECOND = 10;
const RATE_LIMIT_PER_MINUTE = 60;
const EXPIRATION_SECONDS = 1;
const EXPIRATION_MINUTES = 60;

const botRegex = new RegExp(excludedPatterns.join("|"), "i");

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

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function addUser(userAgent: string, ip: string, isBot: boolean) {
  try {
    const id = hashSync(ip, 10);
    await client.connect();
    const query = "INSERT INTO users (user_agent, ip, date, is_bot) VALUES ($1, $2, NOW(), $3)";
    await client.query(query, [userAgent, id, isBot]);
    await client.end();
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

async function incrementVisitToday() {
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
    await client.end();
  } catch (error) {
    console.error("Error incrementing visit count:", error);
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

    const rateLimitKeySecond = `rate_limit_second:${ip.replace(/:/g, "-")}`;
    const rateLimitKeyMinute = `rate_limit_minute:${ip.replace(/:/g, "-")}`;
    const requestCountSecond = (await kv.get<number>(rateLimitKeySecond)) || 0;
    const requestCountMinute = (await kv.get<number>(rateLimitKeyMinute)) || 0;
    if (
      requestCountSecond >= RATE_LIMIT_PER_SECOND ||
      requestCountMinute >= RATE_LIMIT_PER_MINUTE
    ) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }
    await kv.set(rateLimitKeySecond, requestCountSecond + 1, { ex: EXPIRATION_SECONDS });
    await kv.set(rateLimitKeyMinute, requestCountMinute + 1, { ex: EXPIRATION_MINUTES });

    const userAgent = request.headers.get("user-agent") || "";

    const isBot = botRegex.test(userAgent);
    addUser(userAgent, ip, isBot);
    if (isBot) return response;

    const host = request.headers.get("host") || "";
    if (host.includes("localhost") || ip === "127.0.0.1" || host !== "pierre-lhoste.vercel.app") {
      return response;
    }

    await incrementVisitToday();
  } catch (error) {
    console.error("Error in middleware:", error);
  }

  return response;
}
