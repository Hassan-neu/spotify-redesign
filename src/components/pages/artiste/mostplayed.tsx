import React from "react";
import Track from "../../spotify/track";
import { getTopTracks } from "@/actions/artiste";
import { Album, Track as TrackType } from "@/utils/types";
type Tracks = TrackType & { album: Album };
async function MostPlayed({ id }: { id: string }) {
    const topTracks: Tracks[] = await getTopTracks({ id });

    return (
        <div className="flex flex-col gap-[20px] grow">
            <div className="text-primaryForeground text-xl self-start font-semibold">
                Top Tracks
            </div>
            <div className="flex flex-col gap-[5px]">
                {topTracks.map((item, indx) => (
                    <Track key={item.id} indx={indx} data={item} />
                ))}
            </div>
        </div>
    );
}

export default MostPlayed;
