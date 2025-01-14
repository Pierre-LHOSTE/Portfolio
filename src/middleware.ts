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
  const response = NextResponse.next();

  context.waitUntil(
    (async () => {
      const today = new Date().toISOString().split("T")[0];
      const ip = (
        request.headers.get("x-real-ip") ||
        request.headers.get("x-forwarded-for")?.split(",")[0] ||
        "UNKNOWN"
      ).trim();
      const host = request.headers.get("host") || "";

      if (host.includes("localhost") || ip === "127.0.0.1") return;

      const userKey = `user:${today}:${ip.replace(/:/g, "-")}`;
      const lockKey = `lock:${userKey}`;

      try {
        const acquired = await kv.set(lockKey, "1", { nx: true, ex: 1 });
        if (!acquired) return;

        const alreadyVisited = await kv.get(userKey);
        if (!alreadyVisited) {
          console.log(`New visitor from ${ip}`);
          await kv.incr(`visits:${today}`);
          await kv.set(userKey, "1", { ex: 86400 });
        }
      } catch (error) {
        console.error("Failed to update visits:", error);
      } finally {
        await kv.del(lockKey);
      }
    })()
  );

  return response;
}
