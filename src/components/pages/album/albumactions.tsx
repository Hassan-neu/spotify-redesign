import { getAlbum } from "@/actions/albums";
import { convertTIme } from "@/utils/timeconvert";
import { Album } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function AlbumActions({ id }: { id: string }) {
    const album: Album = await getAlbum({ id });

    const {
        id: album_id,
        images,
        name,
        genres,
        release_date,
        total_tracks,
        tracks: { items },
    } = album;
    const time = items
        .map((item) => item.duration_ms)
        .reduce((a, b) => a + b, 0);
    return (
        <div className="flex flex-col gap-[20px] px-3">
            <div className="font-black text-4xl text-primaryForeground">
                {name}
            </div>
            <div className="text-secondaryForeground text-sm flex items-center gap-[10px]">
                <Link
                    href={`/artiste/${items.at(0)?.artists.at(0)?.id}`}
                    className="text-primaryForeground font-medium flex items-center gap-[5px]"
                >
                    <Image
                        src="/assets/spotify-icons/artiste.png"
                        alt="artiste-icon"
                        width={24}
                        height={24}
                    />
                    <span>{items.at(0)?.artists.at(0)?.name}</span>
                </Link>
                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                <Link
                    href={`/album/${album_id}`}
                    className="text-primaryForeground font-medium flex items-center gap-[5px]"
                >
                    <Image
                        src="/assets/spotify-icons/album.png"
                        alt="artiste-icon"
                        width={24}
                        height={24}
                    />
                    <span>{name}</span>
                </Link>
                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                <span>{release_date.split("-")[0]}</span>
                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                <span>{total_tracks} songs</span>
                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                <span>{convertTIme(time)}</span>
            </div>
            <div className="flex gap-[14px]">
                <button>
                    <Image
                        src={"/assets/spotify-icons/play-fill.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
                <button>
                    <Image
                        src={"/assets/spotify-icons/shuffle.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
                <button>
                    <Image
                        src={"/assets/spotify-icons/add.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
                <button>
                    <Image
                        src={"/assets/spotify-icons/to-queue.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
                <button>
                    <Image
                        src={"/assets/spotify-icons/download.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
                <button>
                    <Image
                        src={"/assets/spotify-icons/share.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
                <button>
                    <Image
                        src={"/assets/spotify-icons/more.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
                <button className="ml-auto">
                    <Image
                        src={"/assets/spotify-icons/search.png"}
                        width={40.41}
                        height={40.41}
                        alt="button"
                    />
                </button>
            </div>
        </div>
    );
}

export default AlbumActions;
