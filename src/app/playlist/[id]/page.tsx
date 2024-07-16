import PlaylistActions from "@/components/pages/playlist/playlistactions";
import PlaylistInfo from "@/components/pages/playlist/playlistinfo";
import PlaylistTracks from "@/components/pages/playlist/playlisttracks";
import { cn } from "@/lib/utils";
import React from "react";

function Page({ params: { id } }: { params: { id: string } }) {
    return (
        <div className="border rounded-[10px] bg-[#333842] bg-opacity-45 border-secondaryBackground overflow-scroll hide-scroll">
            <div className="pl-[37px] py-[22px] flex gap-[48px]">
                <div className="grow flex flex-col gap-[30px]">
                    <PlaylistActions id={id} />
                    <div className="flex flex-col gap-[20px]">
                        <div className="grid grid-cols-[35px,_260px,_260px,_1fr] text-secondaryForeground gap-[10px] border-b-2 border-secondaryForeground border-opacity-15 text-sm px-[10px] pb-3">
                            <span className="flex justify-center items-center">
                                #
                            </span>
                            <span>Title</span>
                            <span>Album</span>
                            <span>Duration</span>
                        </div>
                        <div className={cn("flex flex-col gap-[5px]")}>
                            <PlaylistTracks id={id} />
                        </div>
                    </div>
                </div>
                <PlaylistInfo id={id} />
            </div>
        </div>
    );
}

export default Page;
