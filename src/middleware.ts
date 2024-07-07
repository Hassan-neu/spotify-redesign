import { NextResponse, NextMiddleware, NextRequest } from "next/server";
const session: boolean = true;
export async function middleware(req: NextRequest) {
    if (session && req.nextUrl.pathname === "/")
        return NextResponse.redirect(new URL("/home", req.url));
    if (!session && req.nextUrl.pathname !== "/") {
        return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/home", "/library", "/artiste/:path"],
};
