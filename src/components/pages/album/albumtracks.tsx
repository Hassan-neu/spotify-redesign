import React from "react";
import AlbumTrack from "./albumtrack";
import { getAlbumTracks } from "@/actions/getAlbumTracks";
type artist = {
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
};
type track = {
    artists: artist[];
    id: string;
    name: string;
    duration_ms: number;
    track_number: number;
};
async function AlbumTracks({ id }: { id: string }) {
    const albumTracks: track[] = await getAlbumTracks({ id });
    return (
        <div className={"flex flex-col gap-[5px]"}>
            {albumTracks.map((data) => (
                <AlbumTrack key={data.id} data={data} />
            ))}
        </div>
    );
}

export default AlbumTracks;
