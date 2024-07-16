import { getAlbum } from "@/actions/albums";
import { getPlaylistInfo } from "@/actions/playlist";
import { Album, Artiste, Playlist, Track } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function PlaylistInfo({ id }: { id: string }) {
    const album: Playlist = await getPlaylistInfo({ id });
    const {
        images,
        name,
        description,
        tracks: { items },
    } = album;
    // const contributors = items
    //     .flatMap((item) => item.artists)
    //     .filter(
    //         (artiste, indx, self) =>
    //             indx == self.findIndex((item) => item.id == artiste.id)
    //     );

    return (
        <div className="flex flex-col gap-[30px] w-[280px]">
            <div className="w-[280px] h-[280px] rounded-[10px] overflow-clip relative">
                <Image
                    src={images[0].url}
                    fill
                    alt={name}
                    className="object-cover"
                />
            </div>
            <div className="flex gap-[10px] flex-wrap">
                {/* {genres.map((item, indx) => (
                    <div
                        key={indx}
                        className="text-sm text-secondaryForeground rounded-full py-[10px] px-[20px] border-2 border-opacity-25 border-secondaryForeground capitalize"
                    >
                        {item}
                    </div>
                ))} */}
            </div>
            {/* <div className="flex flex-col gap-[15px]">
                {contributors.map(({ id, name }) => (
                    <Contributors key={id} id={id} />
                ))}
            </div> */}
        </div>
    );
}

export default PlaylistInfo;
