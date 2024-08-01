"use server";

import { cookies } from "next/headers";

export async function getUserTops({ type }: { type: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(
        `https://api.spotify.com/v1/me/top/${type}?time_range=medium_term&limit=10`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.items;
}
