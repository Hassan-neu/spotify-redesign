import { cn } from "@/lib/utils";
import { Album } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type VariantProp = "album" | "artiste" | "playlist";
interface CardProp {
    data: Album;
    variant: VariantProp;
    pinned?: boolean;
}
function PlaylistCard({ variant, pinned, data }: CardProp) {
    const { id, images, type, name, total_tracks, description, artists } = data;
    const imageClass =
        variant == "artiste" ? "rounded-full" : "rounded-[7.25px]";
    const alignText =
        variant == "artiste" ? "justify-center" : "justify-between";
    const numberColor =
        variant == "playlist" ? "text-[#CCF665]" : "text-secondaryForeground";
    const addShadow =
        variant === "playlist"
            ? "before:w-[154px] before:h-[6px] before:bg-[#CCF665] before:bg-opacity-30 before:rounded-t-[7.25px] before:-top-[8px] before:absolute before:left-1/2 before:-translate-x-1/2 after:w-[133px] after:h-[3px] after:bg-[#CCF665] after:bg-opacity-15 after:rounded-t-[7.25px] after:-top-[13px] after:absolute after:left-1/2 after:-translate-x-1/2"
            : "";
    return (
        <Link
            href={`/${type}/${id}`}
            className={cn(
                `w-[170px] max-h-[253px] flex flex-col gap-[6px] relative rounded-[7.25px]`,
                addShadow
            )}
        >
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

            <div className={cn(`relative`, addShadow)}>
                <div className="w-[170px] h-[170px] relative">
                    <Image
                        src={images[0]["url"]}
                        fill
                        alt={name}
                        className={cn(imageClass, "object-cover")}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className={`flex items-center ${alignText} text-sm`}>
                    <span className="font-medium text-primaryForeground tracking-wide truncate text-ellipsis">
                        {name}
                    </span>
                    <span className={cn("text-xs", numberColor)}>
                        {total_tracks}
                    </span>
                </div>
                <span
                    className={cn(
                        `text-xs text-secondaryForeground`,
                        variant == "playlist" ? "hidden" : "block"
                    )}
                >
                    {artists?.[0]["name"]}
                </span>
                <div className="text-secondaryForeground text-xs truncate text-ellipsis">
                    {description}
                </div>
            </div>
        </Link>
    );
}

export default PlaylistCard;
