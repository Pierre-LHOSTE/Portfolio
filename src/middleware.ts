import { kv } from "@vercel/kv";
import { type NextFetchEvent, type NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

const excludedUserAgents = ["vercel-screenshot", "Google-PageRenderer"];

export default async function middleware(request: NextRequest, context: NextFetchEvent) {
  console.log("---------");
  console.log(request.url);

  const response = NextResponse.next();

  try {
    if (request.method !== "GET" || request.nextUrl.pathname !== "/") return response;

    const userAgent = request.headers.get("user-agent") || "";
    console.log("🚀 ~ userAgent:", userAgent);
    if (excludedUserAgents.some((ua) => userAgent.includes(ua))) return response;

    const today = new Date().toISOString().split("T")[0];
    const ip = (
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      "UNKNOWN"
    ).trim();

    const host = request.headers.get("host") || "";
    console.log("🚀 ~ ip-host:", ip, host);
    if (host.includes("localhost") || ip === "127.0.0.1" || host !== "pierre-lhoste.vercel.app")
      return response;

    const userKey = `user:${today}:${ip.replace(/:/g, "-")}`;
    const visitsKey = `visits:${today}`;

    const alreadyVisited = await kv.get<number>(userKey);
    if (alreadyVisited) {
      await kv.incr(userKey);
    } else {
      const alreadyDay = await kv.get<number>(visitsKey);
      if (alreadyDay) {
        await kv.incr(visitsKey);
      } else {
        await kv.set(visitsKey, 1);
      }
      await kv.set(userKey, 1, { ex: 86400 });
    }
  } catch (error) {
    console.error("Error in middleware:", error);
  }
  console.log("Async task finished.");

  return response;
}
