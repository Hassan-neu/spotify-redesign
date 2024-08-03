import { getAlbum } from "@/actions/albums";
import AlbumActions from "@/components/pages/album/albumactions";
import AlbumInfo from "@/components/pages/album/albuminfo";
import AlbumTrack from "@/components/pages/album/albumtrack";
import AlbumTracks from "@/components/pages/album/albumtracks";
import Tracks from "@/components/spotify/track";
import { cn } from "@/lib/utils";
import { Album } from "@/utils/types";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export async function generateMetadata({
    params: { album },
}: {
    params: { album: string };
    parent: ResolvingMetadata;
}): Promise<Metadata> {
    const uniqueAlbum: Album = await getAlbum({ id: album });
    const {
        images,
        name,
        genres,
        tracks: { items },
    } = uniqueAlbum;
    return {
        title: `Album | ${name}`,
        description: `Album page for ${name}`,
    };
}
function Page({ params: { album } }: { params: { album: string } }) {
    return (
        <div className="border rounded-[10px] bg-[#333842] bg-opacity-45 border-secondaryBackground overflow-scroll hide-scroll">
            <div className="pl-[37px] pr-[50px] py-[22px] flex gap-[48px]">
                <div className="grow flex flex-col gap-[30px]">
                    <AlbumActions id={album} />

                    <div className="flex flex-col gap-[20px]">
                        <div className="grid grid-cols-[35px,_350px,_350px] items-center text-secondaryForeground gap-[10px] border-b-2 border-secondaryForeground border-opacity-15 text-sm px-[10px] pb-3">
                            <span className="w-10 flex justify-center items-center">
                                #
                            </span>
                            <span>Title</span>
                            <span>Duration</span>
                        </div>
                        <AlbumTracks id={album} />
                    </div>
                </div>
                <AlbumInfo id={album} />
            </div>
        </div>
    );
}

export default Page;
