"use server";

import { cookies } from "next/headers";

export async function getPlaylistTracks({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;
    const response = await fetch(
        `https://api.spotify.com/v1/playlists/${id}/tracks?fields=items(track(album(name,id,images),name,id,duration_ms,artists))`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const { items } = await response.json();
    return items;
}
export async function getPlaylistInfo({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(
        `https://api.spotify.com/v1/playlists/${id}?fields=id,name,description,images,owner(id,type),tracks(total,items.track(duration_ms))`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data;
}
