import { getFeaturedPlaylists, getLatestRelease } from "@/actions/albums";
import PlaylistCard from "@/components/spotify/playlistCard";
import { Album } from "@/utils/types";
import React from "react";

async function HomePlaylists() {
    const latest: Album[] = await getFeaturedPlaylists();
    return (
        <>
            {latest.map((item) => (
                <PlaylistCard variant={item.type} key={item.id} data={item} />
            ))}
        </>
    );
}

export default HomePlaylists;
