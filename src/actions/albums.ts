"use server";
import { cookies } from "next/headers";
export async function getAlbums({
    id,
    activetab,
}: {
    id: string;
    activetab: string;
}) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;
    const decodedURI = decodeURIComponent(activetab);
    const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/albums?include_groups=${
            decodedURI == "albums"
                ? "album"
                : decodedURI == "compilation"
                ? "compilation"
                : decodedURI == "feature and more"
                ? "appears_on"
                : "single"
        }`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const { items } = await response.json();
    return items;
}

export async function getAlbumTracks({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(
        `https://api.spotify.com/v1/albums/${id}/tracks`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const { items } = await response.json();
    return items;
}

export async function getAlbum({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const data = await response.json();
    return data;
}

export async function getLatestRelease() {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(
        `https://api.spotify.com/v1/browse/new-releases?limit=10`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.albums.items;
}
export async function getFeaturedPlaylists() {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(
        `https://api.spotify.com/v1/browse/featured-playlists?limit=10`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const {
        playlists: { items },
    } = await response.json();
    return items;
}
