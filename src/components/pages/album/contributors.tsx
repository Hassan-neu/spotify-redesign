import { getArtiste } from "@/actions/artiste";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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
async function Contributors({ id }: { id: string }) {
    const artiste: Artiste = await getArtiste({ id });
    const { name, images } = artiste;
    return (
        <Link
            key={id}
            href={`/artiste/${id}`}
            className="flex gap-[20px] items-center"
        >
            <div className="w-[61px] h-[61px] rounded-full overflow-clip relative">
                <Image
                    src={images[0].url}
                    fill
                    alt={name}
                    className="object-cover"
                />
            </div>
            <div className="text-sm text-secondaryForeground font-medium">
                {name}
            </div>
        </Link>
    );
}

export default Contributors;
