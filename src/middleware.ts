import { kv } from "@vercel/kv";
import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";
import { excludedPatterns } from "./utils/excludedUserAgentPatterns";

const botRegex = new RegExp(excludedPatterns.join("|"), "i");

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

    const host = request.headers.get("host") || "";
    if (host.includes("localhost") || ip === "127.0.0.1" || host !== "pierre-lhoste.vercel.app")
      return response;

    const userAgent = request.headers.get("user-agent") || "";

    const isBot = botRegex.test(userAgent);

    await fetch(`${request.nextUrl.origin}/api/addUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userAgent, ip, isBot }),
    });

    if (isBot) return response;

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

    await fetch(`${request.nextUrl.origin}/api/addVisit`);
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
