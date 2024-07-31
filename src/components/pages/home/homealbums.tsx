import { getLatestRelease } from "@/actions/albums";
import PlaylistCard from "@/components/spotify/playlistCard";
import { Album } from "@/utils/types";

import React from "react";

async function HomeAlbums() {
    const latest: Album[] = await getLatestRelease();

    return (
        <>
            {latest.map((item) => (
                <PlaylistCard variant={item.type} key={item.id} data={item} />
            ))}
        </>
    );
}

export default HomeAlbums;
