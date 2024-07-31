import React from "react";
import Image from "next/image";
import { getArtiste, getArtisteInfo } from "@/actions/artiste";
type imageType = {
    url: string;
    height: number;
    width: number;
};
type Artiste = {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: imageType[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
};
async function ArtistePick({ id }: { id: string }) {
    const artiste: Artiste = await getArtiste({ id });
    const { images, name, genres } = artiste;
    const artisteBrief = (await getArtisteInfo({ name })) as string;
    return (
        <div className="flex flex-col gap-[20px] w-[280px]">
            <div className="text-primaryForeground text-xl self-start font-semibold">
                Artiste Pick
            </div>
            <div className="flex flex-col gap-[30px] items-center">
                <div className="h-[150px] rounded-[10px] bg-[#18191E] bg-opacity-30 pl-[13px] flex items-center">
                    <div className="flex gap-[13px]">
                        <div className="w-[105px] h-[105px] rounded-[5.12px] overflow-clip relative shrink-0">
                            <Image
                                src={images[0].url}
                                fill
                                alt={name}
                                className="object-cover"
                            />
                        </div>
                        <div className="text-sm font-medium text-primaryForeground">
                            Listen to the Best of {name}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[30px]">
                    <div className="w-[280px] h-[175px] rounded-[10px] overflow-clip relative">
                        <Image
                            src={images[0].url}
                            fill
                            alt="artist-cover"
                            className="object-cover"
                        />
                    </div>
                    <div className="text-base text-primaryForeground">
                        {`${artisteBrief.substring(0, 400)}${
                            artisteBrief.length > 400 ? "..." : ""
                        }`}
                    </div>
                    <div className="flex gap-[10px] flex-wrap">
                        {genres.map((item, indx) => (
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
