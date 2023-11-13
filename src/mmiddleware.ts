// import { authMiddleware  } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export default authMiddleware();

// // Stop Middleware running on static files
// // export const config = {
// //     matcher: [
// //         /*
// //          * Match all request paths except for the ones starting with:
// //          * - _next
// //          * - static (static files)
// //          * - favicon.ico (favicon file)
// //          * - public folder
// //          */
// //         "/((?!static|.*\\..*|_next|favicon.ico).*)",
// //         "/",
// //     ],
// // }

// export const config = {
//     matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
//   };