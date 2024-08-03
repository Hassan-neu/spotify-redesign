"use server";

import { cookies } from "next/headers";

export async function getSavedShows() {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(`https://api.spotify.com/v1/me/shows`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const { items } = await response.json();
    return items;
}

export async function getShow({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(`https://api.spotify.com/v1/shows/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const data = await response.json();
    return data;
}

export async function getShowEpisodes({
    id,
    offset = "0",
}: {
    id: string;
    offset?: string;
}) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(
        `https://api.spotify.com/v1/shows/${id}/episodes?offset=${offset}&limit=${20}`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data;
}
