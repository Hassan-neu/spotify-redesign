import Image from "next/image";
import React from "react";

function ArtisteBanner({ artiste }: { artiste: string }) {
    return (
        <div className="w-full h-[426px] relative">
            <div className="relative h-full">
                <Image
                    src="/assets/spotify-icons/kanye-west.jpg"
                    alt="artiste-cover"
                    fill
                    className="object-cover object-top"
                />
            </div>
            <div className="flex justify-between px-[37px] absolute bottom-9 left-0 w-full">
                <div className="flex flex-col gap-5">
                    <span className="text-primaryForeground font-black text-[50px] capitalize">
                        {decodeURIComponent(artiste)}
                    </span>
                    <span className="text-primaryForeground text-sm font-medium">
                        1,200,3000 monthly listener
                    </span>
                </div>
                <div className="flex gap-[14px] items-center">
                    <button>
                        <Image
                            src={"/assets/spotify-icons/play-fill.png"}
                            width={40.41}
                            height={40.41}
                            alt="icon"
                        />
                    </button>
                    <button className="px-5 py-[10px] rounded-full text-primaryForeground bg-secondaryForeground bg-opacity-25 text-sm">
                        follow
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/to-playlist.svg"}
                            width={40.41}
                            height={40.41}
                            alt="add-to-playlist-icon"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/to-queue.svg"}
                            width={40.41}
                            height={40.41}
                            alt="add-to-queue-icon"
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/more.svg"}
                            width={40.41}
                            height={40.41}
                            alt="more-icon"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ArtisteBanner;
