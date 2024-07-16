import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Album, Track as TrackType } from "@/utils/types";
import { getTrack } from "@/actions/tracks";
import { convertTIme } from "@/utils/timeconvert";
import Contributors from "../album/contributors";
type Track = TrackType & { album: Album };
async function TrackAction({ id }: { id: string }) {
    const trackDetails: Track = await getTrack({ id });
    const {
        album: { images, release_date },
        artists,
        duration_ms,
        name,
    } = trackDetails;
    return (
        <div className="flex gap-[62px] px-[37px] pt-[37px] pb-[41px]  bg-secondaryForeground bg-opacity-20">
            <div className="w-[438px] h-[438px] relative rounded-[10px] overflow-clip">
                <Image
                    src={images[0]["url"]}
                    alt="album cover"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-4xl text-primaryForeground">
                        {name}
                    </div>
                    <div className="text-secondaryForeground text-sm flex items-center gap-[10px]">
                        <Link
                            href={`/artiste/${artists[0].id}`}
                            className="text-primaryForeground font-medium flex items-center gap-[5px]"
                        >
                            <div className="w-[24px] h-[24px] relative">
                                <Image
                                    src="/assets/spotify-icons/artiste.png"
                                    fill
                                    alt="artiste-icon"
                                    className="object-cover"
                                />
                            </div>
                            <span>{artists[0].name}</span>
                        </Link>
                        <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                        <span>{release_date.split("-")[0]}</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                        <span>{convertTIme(duration_ms)}</span>
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
                                src={"/assets/spotify-icons/to-playlist.png"}
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
                    </div>
                    <div className="flex gap-[10px] flex-wrap">
                        {[
                            "funk",
                            "electronic music",
                            "disco",
                            "soft rock",
                            "progressive pop",
                        ].map((item, indx) => (
                            <div
                                key={indx}
                                className="text-sm text-secondaryForeground rounded-full py-[10px] px-[20px] border-2 border-opacity-25 border-secondaryForeground capitalize"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-[15px]">
                        {artists.map((artiste) => (
                            <Contributors key={artiste.id} id={artiste.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackAction;
