import { withAuth } from "next-auth/middleware";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const cookieStore = cookies();
    const access_cookie = req.cookies.get("oauth-access");
    if (!access_cookie?.value) {
        const refresh_cookie = req.cookies.get("oauth-refresh")?.value;
        const getaccess_token = await fetch(
            `https://accounts.spotify.com/api/token`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Basic ${Buffer.from(
                        process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID +
                            ":" +
                            process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
                    ).toString("base64")}`,
                },
                body: `grant_type=refresh_token&refresh_token=${refresh_cookie}`,
            }
        );
        const data = await getaccess_token.json();
        const { access_token, refresh_token } = data;
        console.log({ from: "middleware", ...data, refresh_cookie });
        res.cookies.set("oauth-access", access_token, {
            httpOnly: true,
            maxAge: 3600,
        });
    }
    return res;
}
export default withAuth(middleware);
export const config = {
    matcher: ["/home", "/library", "/artiste/:path"],
};
