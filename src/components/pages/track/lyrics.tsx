import { getLyrics, getTrack } from "@/actions/tracks";
import { Album, Track as TrackType } from "@/utils/types";
import React from "react";
type Track = TrackType & { album: Album };
async function Lyrics({ id }: { id: string }) {
    const content = await getLyrics({ id });
    return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
}

export default Lyrics;
