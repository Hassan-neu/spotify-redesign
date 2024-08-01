import { Star } from "lucide-react";
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
function FriendActivity({ data, indx }: { data: Artiste; indx: number }) {
    const { id, images, name, popularity, genres } = data;
    return (
        <Link href={`/artiste/${id}`} className="flex gap-3 items-center">
            <div className="text-primaryForeground">{indx + 1}</div>
            <div className="flex gap-3 items-center grow">
                <div className="w-[40px] h-[40px] rounded-full overflow-clip relative shrink-0">
                    <Image
                        src={images[0].url}
                        fill
                        alt={name}
                        className="object-cover"
                    />
                </div>

                <div className="flex justify-between grow ">
                    <p className="text-sm text-primaryForeground text-ellipsis">
                        {name}
                    </p>
                    <div className="flex gap-2 text-secondaryForeground text-sm items-center">
                        {popularity}
                        <Star className="text-primary" size={12} />
                    </div>
                    {/* <div className="flex gap-[10px] items-center">
                        <p className="text-secondaryForeground text-sm">
                            Active
                        </p>
                        <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                    </div> */}
                </div>
            </div>
        </Link>
    );
}

export default FriendActivity;
