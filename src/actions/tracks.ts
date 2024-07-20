"use server";

export async function getTrack({ id }: { id: string }) {
    const token_access = await fetch(`https://accounts.spotify.com/api/token`, {
        next: {
            revalidate: 3600,
        },
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
    });
    const { access_token } = await token_access.json();

    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const data = await response.json();
    return data;
}

import { Album, Track as TrackType } from "@/utils/types";
import { NextResponse } from "next/server";
import { parse } from "node-html-parser";
type Track = TrackType & { album: Album };

export async function getLyrics({ id }: { id: string }) {
    const trackDetails: Track = await getTrack({ id });
    const {
        album: { images, release_date },
        artists,
        duration_ms,
        name,
    } = trackDetails;
    const fetchLyrics = await fetch(
        `https://api.genius.com/search?q=${encodeURIComponent(
            name
        )} ${encodeURIComponent(artists[0].name)}`,
        {
            headers: {
                Authorization: `Bearer 8xD0abdTD-7oB36uXeHrLJO80qhWav-dyuGbnVQMYeggRL8xhc0krJtcgNh9zfl5`,
            },
        }
    );
    const lyricsPage = await fetchLyrics.json();
    const scrubPage = await fetch(
        lyricsPage["response"]["hits"][0]["result"]["url"]
    );
    const scrubRes = await scrubPage.text();
    const parsed = parse(scrubRes);

    const el = parsed
        .querySelectorAll("[data-lyrics-container]")
        ?.map((item) => item.innerHTML);
    // const content = el
    //     ?.filter((item) => item.textContent !== "")
    //     .flatMap((el) =>
    //         el.rawTagName == "a"
    //             ? {
    //                   href: null,
    //                   content: el.textContent,
    //               }
    //             : { href: null, content: el.innerText }
    //     );

    return el;
}
