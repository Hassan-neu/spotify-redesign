import { convertTIme } from "@/utils/timeconvert";
import { PlaylistTrack as PlaylistTrackType, Track } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function PlaylistTrack({
    data,
    indx,
}: {
    data: PlaylistTrackType;
    indx: number;
}) {
    const {
        track: {
            album: { id: album_id, images, name: album_name },
            id,
            artists,
            duration_ms,
            name,
        },
    } = data;
    return (
        <div className="group/track hover:bg-secondaryForeground hover:bg-opacity-10 rounded-[10px]  py-2 px-[10px] grid grid-cols-[35px,_260px,_260px,_1fr] gap-[10px] items-center">
            <span className="flex justify-center items-center text-base font-medium text-secondaryForeground w-10">
                {indx + 1}
            </span>

            <div className="flex gap-[10px] items-center">
                <div className="w-[51px] h-[51px] relative shrink-0">
                    <Image
                        src={images[0].url}
                        alt={name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1 text-sm truncate">
                    <Link
                        href={`/track/${id}`}
                        className="text-base font-medium truncate text-ellipsis text-primaryForeground "
                    >
                        {name}
                    </Link>
                    <div className="text-sm text-secondaryForeground flex items-center gap-[2px] truncate overflow-ellipsis">
                        {artists.map(({ id, name }, index, self) => (
                            <Link
                                href={`/artiste/${id}`}
                                key={id}
                                className="text-ellipsis"
                            >
                                {name}
                                {self.length - 1 == index ? "" : ", "}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="text-secondaryForeground text-sm truncate overflow-ellipsis">
                <Link href={`/album/${album_id}`}>{album_name}</Link>
            </div>
            <div className="flex items-center gap-5">
                <span className="text-sm text-secondaryForeground">
                    {convertTIme(duration_ms)}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                    <button>
                        <Image
                            src={"/assets/spotify-icons/like-stroke.png"}
                            width={40}
                            height={40}
                            alt="like-button"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/to-playlist.png"}
                            width={40}
                            height={40}
                            alt="like-button"
                            className="opacity-0 group-hover/track:opacity-100 transition-[opacity] duration-3 ease-in"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/download.png"}
                            width={40}
                            height={40}
                            alt="like-button"
                            className="opacity-0 group-hover/track:opacity-100 transition-[opacity] duration-3 ease-in"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/more.png"}
                            width={40}
                            height={40}
                            alt="like-button"
                            className="opacity-0 group-hover/track:opacity-100 transition-[opacity] duration-3 ease-in"
                        />
                    </button>
                    <div className="flex items-center justify-center relative">
                        <input
                            type="checkbox"
                            name="select"
                            id="select"
                            className="appearance-none w-[40px] h-[40px]  opacity-0 peer/check z-[3]"
                        />
                        <Image
                            src={"/assets/spotify-icons/check.png"}
                            width={40.41}
                            height={40.41}
                            alt="like-button"
                            className="opacity-0 group-hover/track:opacity-100 transition-[opacity] duration-3 ease-in  absolute top-0 left-0 peer-checked/check:hidden"
                        />
                        <Image
                            src={"/assets/spotify-icons/check-stroke.png"}
                            width={40.41}
                            height={40.41}
                            alt="like-button"
                            className="absolute top-0 left-0 hidden peer-checked/check:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaylistTrack;
