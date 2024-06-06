import Image from "next/image";
import React from "react";
type VariantProp = "album" | "artiste" | "playlist";
interface CardProp {
    variant: VariantProp;
    pinned?: boolean;
}
function PlaylistCard({ variant, pinned }: CardProp) {
    const imageClass =
        variant == "artiste" ? "rounded-full" : "rounded-[7.25px]";
    const alignText =
        variant == "artiste" ? "justify-center" : "justify-between";
    const numberColor =
        variant == "playlist" ? "text-[#CCF665]" : "text-primaryForeground";
    const addShadow =
        variant == "playlist"
            ? "before:w-[154px] before:h-[6px] before:bg-[#CCF665] before:bg-opacity-30 before:rounded-t-[7.25px] before:-top-[8px] before:absolute before:left-1/2 before:-translate-x-1/2 after:w-[133px] after:h-[3px] after:bg-[#CCF665] after:bg-opacity-15 after:rounded-t-[7.25px] after:-top-[13px] after:absolute after:left-1/2 after:-translate-x-1/2"
            : "";
    return (
        <div className="w-[170px] h-[253px] flex flex-col gap-[6px] relative rounded-[7.25px]">
            {pinned && (
                <div
                    className={`z-10 absolute rounded-full bg-primaryBackground top-0 right-0`}
                >
                    <Image
                        src={"/assets/spotify-icons/pin-stroke.png"}
                        width={40.41}
                        height={40.41}
                        alt="pin-icon"
                    />
                </div>
            )}

            <div className={`${addShadow} relative`}>
                <Image
                    src={"/assets/spotify-icons/playlistimage.png"}
                    alt=""
                    width={170}
                    height={170}
                    className={imageClass}
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className={`flex items-center ${alignText} text-sm`}>
                    <span className="font-medium text-primaryForeground tracking-wide">
                        Rock Mix
                    </span>
                    <span className={numberColor}>50</span>
                </div>
                <div className="text-secondaryForeground text-xs">
                    Red Hot Chili Peppers, R.E.M., Guns N&apos; Roses...
                </div>
            </div>
        </div>
    );
}

export default PlaylistCard;
