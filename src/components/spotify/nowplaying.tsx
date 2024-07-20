"use client";
import { getNowPlaying } from "@/actions/nowplaying";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function NowPlaying() {
    // const [currentState, setCurrentState] = useState({});
    // async function getCurrentState() {
    //     const data = await getNowPlaying();
    //     setCurrentState(data);
    // }
    // useEffect(() => {
    //     getCurrentState();
    // }, []);
    return (
        <div className="pl-[21px] pr-[18px] py-3 rounded-[10px] flex items-center bg-[#333842] col-[2/-1] row-[3/4] mt-[7px]">
            <div className="flex gap-[5px] items-center">
                <div className="flex items-center gap-[4.75px]">
                    <button>
                        <Image
                            src="/assets/spotify-icons/pause-fill.png"
                            width={38.02}
                            height={38.02}
                            alt="pause-icon"
                        />
                    </button>
                    <button>
                        <Image
                            src="/assets/spotify-icons/prev.png"
                            width={38.02}
                            height={38.02}
                            alt="prev-icon"
                        />
                    </button>
                    <button>
                        <Image
                            src="/assets/spotify-icons/prev.png"
                            width={38.02}
                            height={38.02}
                            alt="next-icon"
                            className="rotate-180"
                        />
                    </button>
                    <button>
                        <Image
                            src="/assets/spotify-icons/shuffle.png"
                            width={38.02}
                            height={38.02}
                            alt="shuffle-icon"
                        />
                    </button>
                </div>
                <div className="flex items-center gap-[10px] text-secondaryForeground text-xs">
                    <p>2:23</p>
                    <div className="flex w-[317px] bg-secondaryForeground h-[3px] rounded-full overflow-clip">
                        <span className="w-1/2 bg-white"></span>
                    </div>
                    <p>4:45</p>
                </div>
                <button>
                    <Image
                        src="/assets/spotify-icons/volume.png"
                        width={38.02}
                        height={38.02}
                        alt="volume-icon"
                    />
                </button>
            </div>
            <div className="flex gap-[10px] items-center">
                <div>
                    <div className="w-[51px] h-[51px] relative">
                        <Image
                            src="/assets/spotify-icons/playlistimage.png"
                            fill
                            alt="nowplaying-cover"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col text-sm">
                    <p className="text-primaryForeground">Song</p>
                    <p className="text-secondaryForeground">Artiste</p>
                    <p className="text-secondaryForeground">Abum</p>
                </div>
            </div>
            <div className="flex items-center divide-x-2 divide-secondaryForeground divide-opacity-30 ml-auto">
                <div className="flex items-center gap-[6px]">
                    <button>
                        <Image
                            src={"/assets/spotify-icons/like.png"}
                            width={40.41}
                            height={40.41}
                            alt="like-cover"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/to-playlist.png"}
                            width={40.41}
                            height={40.41}
                            alt="playlist-cover"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/lyrics.png"}
                            width={40.41}
                            height={40.41}
                            alt="lyrics-cover"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/device.png"}
                            width={40.41}
                            height={40.41}
                            alt="device-cover"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/more.png"}
                            width={40.41}
                            height={40.41}
                            alt="more-icon"
                        />
                    </button>
                </div>
                <div className="flex items-center gap-[6px]">
                    <button>
                        <Image
                            src={"/assets/spotify-icons/dj.png"}
                            width={40.41}
                            height={40.41}
                            alt="dj-icon"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/queue.png"}
                            width={40.41}
                            height={40.41}
                            alt="queue-icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NowPlaying;
