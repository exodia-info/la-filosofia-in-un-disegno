import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
[];
export default authMiddleware({
  publicRoutes: [
    "/",
    // "/api/trpc/post.hello",
    // "/filosofi/schopenhauer",
    // "/filosofi/kierkegaard",
    // "/filosofi/feuerbach",
    // "/filosofi/marx",
    // "/filosofi/comte",
    // "/filosofi/bergson",
    // "/filosofi/nietzsche",
  ],
});

// Stop Middleware running on static files
// export const config = {
//     matcher: [
//         /*
//          * Match all request paths except for the ones starting with:
//          * - _next
//          * - static (static files)
//          * - favicon.ico (favicon file)
//          * - public folder
//          */
//         "/((?!static|.*\\..*|_next|favicon.ico).*)",
//         "/",
//     ],
// }

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
