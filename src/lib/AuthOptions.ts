import Spotify from "next-auth/providers/spotify";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { cookies } from "next/headers";
export const AuthOptions: NextAuthOptions = {
    providers: [
        Spotify({
            clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env
                .NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string,
            authorization: {
                params: {
                    scope: "user-read-email playlist-read-private user-read-private user-library-read user-library-modify user-read-recently-played user-top-read",
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ account, token }): Promise<JWT> {
            console.log({ from: "jwt", ...account });
            if (account) {
                const cookieStore = cookies();
                cookieStore.set(
                    "oauth-access",
                    account.access_token as string,
                    {
                        maxAge: 3600,
                        httpOnly: true,
                    }
                );
                cookieStore.set(
                    "oauth-refresh",
                    account.refresh_token as string,
                    { httpOnly: true }
                );
            }
            return token;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
