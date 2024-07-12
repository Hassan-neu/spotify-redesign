import React from "react";
import { PlaylistTrack as PlaylistTrackType, Track } from "@/utils/types";
import { getPlaylistTracks } from "@/actions/playlist";
import PlaylistTrack from "./playlisttrack";

async function PlaylistTracks({ id }: { id: string }) {
    const playlistTracks: PlaylistTrackType[] = await getPlaylistTracks({ id });
    return (
        <div className={"flex flex-col gap-[5px]"}>
            {playlistTracks.map((data, indx) => (
                <PlaylistTrack key={data.id} data={data} indx={indx} />
            ))}
        </div>
    );
}

export default PlaylistTracks;
