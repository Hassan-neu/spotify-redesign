import Image from "next/image";
import Link from "next/link";
import React from "react";

function TrackAction() {
    return (
        <div className="flex gap-[62px] px-[37px] pt-[37px] pb-[41px]  bg-secondaryForeground bg-opacity-20">
            <div className="w-[500px] h-[500px] relative rounded-[10px] overflow-clip">
                <Image
                    src={"/assets/spotify-icons/kanye-west.jpg"}
                    alt="album cover"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-4xl text-primaryForeground">
                        Album title
                    </div>
                    <div className="text-secondaryForeground text-sm flex items-center gap-[10px]">
                        <Link
                            href={"/artiste/Kanye West"}
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
                            <span>Kanye West</span>
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
                        <Link
                            href={`/artiste/pharell williams`}
                            className="flex gap-[20px] items-center"
                        >
                            <div className="w-[61px] h-[61px] rounded-full overflow-clip relative">
                                <Image
                                    src="/assets/spotify-icons/kanye-west.jpg"
                                    fill
                                    alt="artiste-cover"
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-sm text-secondaryForeground font-medium">
                                Pharell Williams
                            </div>
                        </Link>
                        <Link
                            href={`/artiste/pharell williams`}
                            className="flex gap-[20px] items-center"
                        >
                            <div className="w-[61px] h-[61px] rounded-full overflow-clip relative">
                                <Image
                                    src="/assets/spotify-icons/kanye-west.jpg"
                                    fill
                                    alt="artiste-cover"
                                    className="object-cover"
                                />
                            </div>
                            <div className="text-sm text-secondaryForeground font-medium">
                                Pharell Williams
                            </div>
                        </Link>
                        <Link
                            href={`/artiste/pharell williams`}
                            className="flex gap-[20px] items-center"
                        >
                            <span className="w-[61px] h-[61px] rounded-full overflow-clip relative">
                                <Image
                                    src="/assets/spotify-icons/kanye-west.jpg"
                                    fill
                                    alt="artiste-cover"
                                    className="object-cover"
                                />
                            </span>
                            <div className="text-sm text-secondaryForeground font-medium">
                                Pharell Williams
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackAction;
