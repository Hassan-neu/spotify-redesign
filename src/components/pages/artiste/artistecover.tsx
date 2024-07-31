import { getArtiste } from "@/actions/artiste";
import Image from "next/image";
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
async function ArtisteBanner({ artiste }: { artiste: string }) {
    const artisteDetails: Artiste = await getArtiste({ id: artiste });
    const { images, name, genres, followers } = artisteDetails;
    function addCommas(value: number) {
        const intl = new Intl.NumberFormat("en-us");
        const formatted = intl.format(value);
        return formatted;
    }
    return (
        <div className="w-full h-[426px] relative">
            <div className="relative h-full">
                <Image
                    src={images[0].url}
                    alt={name}
                    fill
                    className="object-cover object-[50%_20%]"
                />
            </div>
            <div className="flex justify-between px-[37px] absolute bottom-9 left-0 w-full">
                <div className="flex flex-col gap-5">
                    <span className="text-primaryBackground font-black text-[50px] capitalize mix-blend-darken">
                        {name}
                    </span>
                    <span className="text-primaryForeground text-sm font-medium capitalize">
                        {addCommas(followers.total)} spotify followers
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
