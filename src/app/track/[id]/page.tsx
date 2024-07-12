import AlbumInfo from "@/components/pages/album/albuminfo";
// import Lyrics from "@/components/pages/track/lyrics";
import TrackAction from "@/components/pages/track/trackaction";
import Tracklyrics from "@/components/pages/track/tracklyrics";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Album, Track as TrackType } from "@/utils/types";
import { getTrack } from "@/actions/tracks";
type Track = TrackType & { album: Album };
export async function generateMetadata({
    params: { id },
}: {
    params: { id: string };
    parent: ResolvingMetadata;
}): Promise<Metadata> {
    const trackDetails: Track = await getTrack({ id });
    const { artists, name } = trackDetails;
    return {
        title: `${name}`,
        description: `${name} by ${artists[0].name}`,
    };
}
function Track({ params: { id } }: { params: { id: string } }) {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <div className="flex flex-col">
                <TrackAction id={id} />
                <Tracklyrics />
                {/* <Lyrics id={id} /> */}
            </div>
        </div>
    );
}

export default Track;
