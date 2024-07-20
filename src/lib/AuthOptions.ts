import Spotify from "next-auth/providers/spotify";
import { NextAuthOptions } from "next-auth";
export const AuthOptions: NextAuthOptions = {
    providers: [
        Spotify({
            clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env
                .NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string,
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
