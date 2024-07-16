import { getAlbum } from "@/actions/albums";
import { Album, Artiste, Track } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Contributors from "./contributors";

async function AlbumInfo({ id }: { id: string }) {
    const album: Album = await getAlbum({ id });
    const {
        images,
        name,
        genres,
        tracks: { items },
    } = album;
    const contributors = items
        .flatMap((item) => item.artists)
        .filter(
            (artiste, indx, self) =>
                indx == self.findIndex((item) => item.id == artiste.id)
        );

    return (
        <div className="flex flex-col gap-[30px] w-[350px]">
            <div className="w-[350px] h-[350px] rounded-[10px] overflow-clip relative">
                <Image
                    src={images[0].url}
                    fill
                    alt={name}
                    className="object-cover"
                />
            </div>
            <div className="flex gap-[10px] flex-wrap">
                {genres.map((item, indx) => (
                    <div
                        key={indx}
                        className="text-sm text-secondaryForeground rounded-full py-[10px] px-[20px] border-2 border-opacity-25 border-secondaryForeground capitalize"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-[15px]">
                {contributors.map(({ id, name }) => (
                    <Contributors key={id} id={id} />
                ))}
            </div>
        </div>
    );
}

export default AlbumInfo;
