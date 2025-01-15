import { kv } from "@vercel/kv";
import { type NextFetchEvent, NextResponse } from "next/server";

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

export default function middleware(request: Request, context: NextFetchEvent) {
  console.log("---------");
  console.log("Request to", request.url);
  const response = NextResponse.next();

  context.waitUntil(
    (async () => {
      try {
        const userAgent = request.headers.get("user-agent") || "";
        console.log("🚀 ~ userAgent:", userAgent);
        if (userAgent.includes("vercel-screenshot")) return;

        const today = new Date().toISOString().split("T")[0];
        const ip = (
          request.headers.get("x-real-ip") ||
          request.headers.get("x-forwarded-for")?.split(",")[0] ||
          "UNKNOWN"
        ).trim();

        const host = request.headers.get("host") || "";
        console.log("🚀 ~ ip-host:", ip, host);
        if (host.includes("localhost") || ip === "127.0.0.1") return;

        const userKey = `user:${today}:${ip.replace(/:/g, "-")}`;
        const visitsKey = `visits:${today}`;

        const alreadyVisited = await kv.get<number>(userKey);
        if (alreadyVisited) {
          console.log("Already visited today");
          await kv.incr(userKey);
        } else {
          console.log("Visiting for the first time today");
          const alreadyDay = await kv.get<number>(visitsKey);
          if (alreadyDay) {
            console.log("Not the first visit today");
            await kv.incr(visitsKey);
          } else {
            console.log("First visit today");
            await kv.set(visitsKey, 1);
          }
          await kv.set(userKey, 1, { ex: 86400 });
        }
      } catch (error) {
        console.error("Error in middleware:", error);
      }
    })()
  );

  return response;
}
