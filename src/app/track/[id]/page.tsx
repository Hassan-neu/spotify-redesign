import AlbumInfo from "@/components/pages/album/albuminfo";
import TrackAction from "@/components/pages/track/trackaction";
import Tracklyrics from "@/components/pages/track/tracklyrics";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Track() {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <div className="flex flex-col">
                <TrackAction />
                <Tracklyrics />
            </div>
        </div>
    );
}

export default Track;
