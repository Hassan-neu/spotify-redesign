"use server";

import { Album, Track as TrackType } from "@/utils/types";
type Track = TrackType & { album: Album };
import { getTrack } from "./tracks";
import { cookies } from "next/headers";

export async function getArtiste({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const data = await response.json();
    return data;
}
export async function getAboutArtiste({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const data = await response.json();
}
export async function getTopTracks({ id }: { id: string }) {
    const cookieStore = cookies();
    const access_token = cookieStore.get("oauth-access")?.value;

    const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/top-tracks`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.tracks;
}

export async function getArtisteInfo({ name }: { name: string }) {
    const fetchArtisteId = await fetch(
        `https://api.genius.com/search?q=${encodeURIComponent(name)}`,
        {
            headers: {
                Authorization: `Bearer 8xD0abdTD-7oB36uXeHrLJO80qhWav-dyuGbnVQMYeggRL8xhc0krJtcgNh9zfl5`,
            },
        }
    );
    const artisteInfoId = await fetchArtisteId.json();
    // const id =
    //     artisteInfoId["response"]["hits"][0]["result"]["primary_artist"]["id"];
    const id = artisteInfoId["response"]["hits"].find(
        (item) =>
            !item.result.artist_names.includes("&") &&
            item.result.artist_names == name
    )["result"]["primary_artist"]["id"];

    const fetchArtisteInfo = await fetch(
        `https://api.genius.com/artists/${id}?text_format=html%2Cplain`,
        {
            headers: {
                Authorization: `Bearer 8xD0abdTD-7oB36uXeHrLJO80qhWav-dyuGbnVQMYeggRL8xhc0krJtcgNh9zfl5`,
            },
        }
    );
    const artisteInfo = await fetchArtisteInfo.json();
    const artistBrief =
        artisteInfo["response"]["artist"]["description"]["plain"];
    return artistBrief;
}
