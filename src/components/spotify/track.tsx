import Image from "next/image";
import React from "react";

function Track({ indx }: { indx: number }) {
    return (
        <div className="py-2 px-[10px] flex gap-5 justify-between items-center">
            <div className="flex items-center gap-[10px]">
                <span className="text-base font-medium text-secondaryForeground w-10">
                    {indx + 1}
                </span>
                <div className="flex gap-[10px] items-center">
                    <Image
                        src={"/assets/spotify-icons/kanye-west.jpg"}
                        width={51}
                        height={51}
                        alt={"track-cover"}
                    />
                    <div className="flex flex-col gap-1">
                        <span className="text-base font-medium text-primaryForeground">
                            Track name
                        </span>
                        <span className="text-sm text-secondaryForeground">
                            Artiste Name
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <span className="text-sm text-secondaryForeground">5:20</span>
                <button>
                    <Image
                        src={"/assets/spotify-icons/like-stroke.png"}
                        width={40}
                        height={40}
                        alt="like-button"
                    />
                </button>
            </div>
        </div>
    );
}

export default Track;
