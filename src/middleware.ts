import { NextResponse, NextMiddleware, NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { AuthOptions } from "./lib/AuthOptions";
// export async function middleware(req: NextRequest) {
//     const session = await getServerSession(AuthOptions);
//     if (session && req.nextUrl.pathname === "/")
//         return NextResponse.redirect(new URL("/home", req.url));
//     if (!session && req.nextUrl.pathname !== "/") {
//         return NextResponse.redirect(new URL("/", req.url));
//     }
//     return NextResponse.next();
// }
export { default } from "next-auth/middleware";
export const config = {
    matcher: ["/home", "/library", "/artiste/:path"],
};
