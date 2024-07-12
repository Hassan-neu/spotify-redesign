import React from "react";
import AlbumTrack from "./albumtrack";
import { getAlbumTracks } from "@/actions/albums";
import { Track } from "@/utils/types";

async function AlbumTracks({ id }: { id: string }) {
    const albumTracks: Track[] = await getAlbumTracks({ id });
    return (
        <div className={"flex flex-col gap-[5px]"}>
            {albumTracks.map((data) => (
                <AlbumTrack key={data.id} data={data} />
            ))}
        </div>
    );
}

export default AlbumTracks;
