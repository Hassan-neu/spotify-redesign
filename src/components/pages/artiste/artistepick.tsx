import React from "react";
import Image from "next/image";
function ArtistePick({ artiste }: { artiste: string }) {
    return (
        <div className="flex flex-col gap-[20px] w-[320px]">
            <div className="text-primaryForeground text-xl self-start font-semibold">
                Artiste Pick
            </div>
            <div className="flex flex-col gap-[30px] w-[320px] items-center">
                <div className="w-[314px] h-[150px] rounded-[10px] bg-[#18191E] bg-opacity-30 pl-[13px] flex items-center">
                    <div className="flex gap-[13px]">
                        <div className="w-[120px] h-[120px] rounded-[5.12px] overflow-clip relative">
                            <Image
                                src={"/assets/spotify-icons/kanye-west.jpg"}
                                fill
                                alt="artist-pick-cover"
                                className="object-cover"
                            />
                        </div>
                        <div className="text-sm font-medium text-primaryForeground">
                            Listen to the Best of {decodeURIComponent(artiste)}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="w-[320px] h-[320px] rounded-[10px] overflow-clip relative">
                        <Image
                            src={"/assets/spotify-icons/kanye-west.jpg"}
                            fill
                            alt="artist-cover"
                            className="object-cover"
                        />
                    </div>
                    <div className="text-base text-primaryForeground">
                        As they evolved from &apos;90s French house pioneers to
                        2000s dance tastemakers to mainstream heroes in the
                        2010s, Daft Punk remained one of dance music&apos;s most
                        iconic acts...
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
                </div>
            </div>
        </div>
    );
}

export default ArtistePick;
