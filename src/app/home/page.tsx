import HomeMenu from "@/components/pages/home/homemenu";
import Friends from "@/components/spotify/friends";
import PlaylistCard from "@/components/spotify/playlistCard";
import React from "react";

function Page() {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <HomeMenu />
            <div className="mx-[25px] mt-[15px] h-full grid grid-cols-[repeat(auto-fill,_minmax(170px,_1fr))] auto-rows-auto gap-[11px] justify-items-center">
                {Array.from({ length: 20 }, (_v, indx) => (
                    <PlaylistCard
                        variant="artiste"
                        pinned={Boolean(indx % 2)}
                        key={indx}
                    />
                ))}
            </div>
        </div>
    );
}

export default Page;
