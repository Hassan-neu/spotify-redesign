import Image from "next/image";
import Link from "next/link";
import React from "react";

function Track({ indx }: { indx: number }) {
    return (
        <div className="group/track hover:bg-secondaryForeground hover:bg-opacity-10 rounded-[10px]  py-2 px-[10px] flex gap-5 justify-between items-center">
            <div className="flex items-center gap-[10px]">
                <span className="text-base font-medium text-secondaryForeground w-10">
                    {indx + 1}
                </span>
                <div className="flex gap-[10px] items-center">
                    <div className="w-[51px] h-[51px] relative">
                        <Image
                            src="/assets/spotify-icons/kanye-west.jpg"
                            fill
                            alt={"track-cover"}
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Link
                            href={`/track/${indx}`}
                            className="text-base font-medium text-primaryForeground"
                        >
                            Track name
                        </Link>
                        <Link
                            href={`/artiste/${indx}`}
                            className="text-sm text-secondaryForeground"
                        >
                            Artiste Name
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <span className="group-hover/track:opacity-0 text-sm text-secondaryForeground">
                    5:20
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
                            className="opacity-0 group-hover/track:opacity-100 transition-[opacity] duration-2 ease-in"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/more.png"}
                            width={40}
                            height={40}
                            alt="like-button"
                            className="opacity-0 group-hover/track:opacity-100 transition-[opacity] duration-2 ease-in"
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
                            className="opacity-0 group-hover/track:opacity-100 transition-[opacity] duration-2 ease-in absolute top-0 left-0 peer-checked/check:hidden"
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

export default Track;
