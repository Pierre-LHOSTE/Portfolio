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
      try {
        const today = new Date().toISOString().split("T")[0];
        const ip =
          request.headers.get("x-real-ip") ||
          request.headers.get("x-forwarded-for")?.split(",")[0] ||
          "UNKNOWN";
        const userKey = `visits:${today}:${ip}`;

        const alreadyVisited = await kv.get(userKey);
        if (!alreadyVisited) {
          await kv.incr(`visits:${today}`);
          await kv.set(userKey, "1", { ex: 86400 });
        }
        await kv.incr(`visits:${today}`);
      } catch (error) {
        console.error("Failed to update views:", error);
      }
    })()
  );

  return response;
}
