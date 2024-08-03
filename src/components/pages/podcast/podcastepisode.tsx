"use client";
import { convertTIme } from "@/utils/timeconvert";
import { Episode } from "@/utils/types";
import Image from "next/image";
import React, { useRef } from "react";

function PodcastEpisode({ data }: { data: Episode }) {
    const {
        audio_preview_url,
        images,
        name,
        release_date,
        duration_ms,
        description,
    } = data;
    const audioEl = useRef<HTMLAudioElement | null>(null);
    return (
        <div className="flex flex-row gap-[18px] py-[30px]">
            <div className="relative rounded-[7.25px] overflow-clip w-[114px] h-[114px]">
                <Image
                    src={images[0].url}
                    alt={name}
                    fill
                    className={"object-cover"}
                />
            </div>

            <div className="flex flex-col gap-[10px]">
                <div className="text-lg text-primaryForeground">{name}</div>
                <div className="text-secondaryForeground text-xs flex items-center gap-[10px]">
                    <span>{release_date.split("-")[0]}</span>
                    <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                    <span>{convertTIme(duration_ms)}</span>
                </div>
                <div className="text-secondaryForeground text-xs flex items-center gap-[10px]">
                    {description.slice(0, 50)}
                </div>
                <audio src={audio_preview_url} ref={audioEl}></audio>
                <div className="flex gap-[14px]">
                    <button
                        onClick={() => {
                            audioEl.current!.currentTime = 0;
                            audioEl.current?.play();
                        }}
                    >
                        <Image
                            src={"/assets/spotify-icons/play-fill.png"}
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
                </div>
            </div>
        </div>
    );
}

export default PodcastEpisode;
