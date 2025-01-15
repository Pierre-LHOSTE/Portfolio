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

// export default function middleware(request: Request, context: NextFetchEvent) {
//   console.log("----------");
//   console.log("Request to", request.url);
//   const response = NextResponse.next();

//   context.waitUntil(
//     (async () => {
//       const today = new Date().toISOString().split("T")[0];
//       console.log("🚀 ~ today:", today);
//       const ip = (
//         request.headers.get("x-real-ip") ||
//         request.headers.get("x-forwarded-for")?.split(",")[0] ||
//         "UNKNOWN"
//       ).trim();
//       console.log("🚀 ~ ip:", ip);
//       const host = request.headers.get("host") || "";
//       console.log("🚀 ~ host:", host);

//       if (host.includes("localhost") || ip === "127.0.0.1") return;

//       const userKey = `user:${today}:${ip.replace(/:/g, "-")}`;
//       console.log("🚀 ~ userKey:", userKey);
//       const lockKey = `lock:${userKey}`;

//       try {
//         const acquired = await kv.set(lockKey, "1", { nx: true, ex: 1 });
//         console.log("🚀 ~ acquired:", acquired);
//         if (!acquired) return;

//         const alreadyVisited = await kv.get(userKey);
//         console.log("🚀 ~ alreadyVisited:", alreadyVisited);
//         if (!alreadyVisited) {
//           console.log(`New visitor from ${ip}`);
//           await kv.incr(`visits:${today}`);
//           await kv.set(userKey, "1", { ex: 86400 });
//         }
//       } catch (error) {
//         console.error("Failed to update visits:", error);
//       } finally {
//         await kv.del(lockKey);
//       }
//     })()
//   );

//   return response;
// }

export default function middleware(request: Request, context: NextFetchEvent) {
  console.log("----------");
  console.log("Request to", request.url);
  const response = NextResponse.next();

  context.waitUntil(
    (async () => {
      try {
        const today = new Date().toISOString().split("T")[0];
        const ip = (
          request.headers.get("x-real-ip") ||
          request.headers.get("x-forwarded-for")?.split(",")[0] ||
          "UNKNOWN"
        ).trim();
        console.log("🚀 ~ ip:", ip);
        const host = request.headers.get("host") || "";
        console.log("🚀 ~ host:", host);

        if (host.includes("localhost") || ip === "127.0.0.1") {
          console.log("Skipping localhost request");
          return;
        }

        const userKey = `user:${today}:${ip.replace(/:/g, "-")}`;
        console.log("🚀 ~ userKey:", userKey);

        const todayKey = `visits:${today}`;

        const exists = await kv.get<number>(userKey);
        console.log("🚀 ~ exists:", exists);
        if (exists === null) {
          await kv.set(userKey, 1);

          const todayViews = await kv.get<number>(todayKey);
          console.log("🚀 ~ todayViews:", todayViews);
          if (todayViews === null) {
            await kv.set(todayKey, 1);
          } else {
            await kv.incr(todayKey);
          }
        } else {
          await kv.incr(userKey);
        }
      } catch (error) {
        console.error("Failed to update views:", error);
      }
    })()
  );

  return response;
}
