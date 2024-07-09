import { getAlbumTracks } from "@/actions/getAlbumTracks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type artist = {
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
};
type track = {
    artists: artist[];
    id: string;
    name: string;
    duration_ms: number;
    track_number: number;
};
async function AlbumTrack({ data }: { data: track }) {
    const { artists, duration_ms, name, track_number } = data;
    const toseconds = duration_ms / 1000;
    const toHours = Math.floor(toseconds / 3600);
    const remHours = toseconds % 3600;
    const toMinutes = Math.floor(remHours / 60);
    const remMinutes = Math.floor(toseconds % 60);
    const duration = `${toHours ? toHours + ":" : ""}${
        toMinutes ? toMinutes + ":" : ""
    }${remMinutes ? remMinutes.toString().padStart(2, "0") : ""}`;
    return (
        <div className="group/track hover:bg-secondaryForeground hover:bg-opacity-10 rounded-[10px]  py-2 px-[10px] flex gap-5 justify-between items-center">
            <div className="flex items-center gap-[10px]">
                <span className="flex justify-center items-center text-base font-medium text-secondaryForeground w-10">
                    {track_number}
                </span>
                <div className="flex gap-[10px] items-center">
                    <div className="flex flex-col gap-1">
                        <span className="text-base font-medium text-primaryForeground">
                            {name}
                        </span>
                        <div className="text-sm text-secondaryForeground flex items-center gap-[2px]">
                            {artists.map(({ id, name }) => (
                                <Link href={id} key={id}>
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <span className="text-sm text-secondaryForeground">
                    {duration}
                </span>
                <div className="flex items-center gap-2">
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

export default AlbumTrack;
