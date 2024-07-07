import Image from "next/image";
import Link from "next/link";
import React from "react";

function AlbumActions() {
    return (
        <div className="flex flex-col gap-[20px] px-3">
            <div className="font-bold text-4xl text-primaryForeground">
                Album Title
            </div>
            <div className="text-secondaryForeground text-sm flex items-center gap-[10px]">
                <Link
                    href={"/artiste/Kanye West"}
                    className="text-primaryForeground font-medium flex items-center gap-[5px]"
                >
                    <span>Spotify</span>
                </Link>
                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                <span>2023</span>
                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                <span>22 songs</span>
                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                <span>1 hr 41 min</span>
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
