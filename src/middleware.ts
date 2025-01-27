import { Client } from "@neondatabase/serverless";
import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import { excludedPatterns } from "./utils/excludedUserAgentPatterns";

const botRegex = new RegExp(excludedPatterns.join("|"), "i");

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function addUser(client: Client, userAgent: string, ip: string, isBot: boolean) {
  try {
    const query = "INSERT INTO users (user_agent, ip, date, is_bot) VALUES ($1, $2, NOW(), $3)";
    await client.query(query, [userAgent, ip, isBot]);
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

async function incrementVisitToday(client: Client) {
  try {
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

    await client
      .connect()
      .catch((error) => console.error("Error connecting to the database:", error));

    const userAgent = request.headers.get("user-agent") || "";

    const isBot = botRegex.test(userAgent);
    addUser(client, userAgent, ip, isBot);
    if (isBot) return response;

    const host = request.headers.get("host") || "";
    if (host.includes("localhost") || ip === "127.0.0.1" || host !== "pierre-lhoste.vercel.app") {
      return response;
    }

    await incrementVisitToday(client);
    await client.end();
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
