import AlbumActions from "@/components/pages/album/albumactions";
import AlbumInfo from "@/components/pages/album/albuminfo";
import AlbumTrack from "@/components/pages/album/albumtrack";
import Track from "@/components/spotify/track";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page({ params }: { params: { [key: string]: string } }) {
    return (
        <div className="border rounded-[10px] bg-[#333842] bg-opacity-45 border-secondaryBackground overflow-scroll hide-scroll">
            <div className="pl-[37px] py-[22px] flex gap-[48px]">
                <div className="grow flex flex-col gap-[30px]">
                    <AlbumActions />
                    <div className="flex flex-col gap-[20px]">
                        <div className="flex items-center text-secondaryForeground gap-[10px] border-b-2 border-secondaryForeground border-opacity-15 text-sm px-[10px] pb-3">
                            <span className="w-10 flex justify-center items-center">
                                #
                            </span>
                            <div className="flex items-center gap-40 grow">
                                <span>Title</span>
                                <span className="mx-auto">Duration</span>
                            </div>
                        </div>
                        <div className={cn("flex flex-col gap-[5px]")}>
                            {Array.from({ length: 10 }, (_v, indx) => (
                                <AlbumTrack key={indx} indx={indx} />
                            ))}
                        </div>
                    </div>
                </div>
                <AlbumInfo />
            </div>
        </div>
    );
}

export default Page;
