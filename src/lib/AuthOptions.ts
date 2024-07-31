import Spotify from "next-auth/providers/spotify";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { cookies } from "next/headers";
interface NewSession extends Session {
    access_token?: string;
    refresh_token?: string;
}

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
            if (account) {
                (token.access_token = account?.access_token),
                    (token.refresh_token = account?.refresh_token);
            }
            return token;
        },
        async session({
            session,
            token,
        }: {
            session: Session;
            token: JWT;
        }): Promise<Session> {
            if (token) {
                const cookieStore = cookies();
                cookieStore.set("oauth-access", token.access_token as string, {
                    secure: true,
                });
                cookieStore.set(
                    "oauth-refresh",
                    token.refresh_token as string,
                    { secure: true }
                );
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
