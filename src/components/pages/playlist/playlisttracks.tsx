import React from "react";
import { PlaylistTrack as PlaylistTrackType, Track } from "@/utils/types";
import { getPlaylistTracks } from "@/actions/playlist";
import PlaylistTrack from "./playlisttrack";

async function PlaylistTracks({ id }: { id: string }) {
    const playlistTracks: PlaylistTrackType[] = await getPlaylistTracks({ id });
    console.log(playlistTracks.map((item) => item.track?.name));
    console.log(playlistTracks[playlistTracks.length - 6]);
    return (
        <div className={"flex flex-col gap-[5px]"}>
            {playlistTracks.map((data, indx) => {
                const { track } = data;
                return <PlaylistTrack key={track.id} data={data} indx={indx} />;
            })}
        </div>
    );
}

export default PlaylistTracks;
