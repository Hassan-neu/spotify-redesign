import { getArtiste, getArtisteInfo } from "@/actions/artiste";
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
async function About({ artiste: id }: { artiste: string }) {
    const artiste: Artiste = await getArtiste({ id });
    const { images, name, genres } = artiste;
    const artisteBrief = (await getArtisteInfo({ name })) as string;
    return (
        <div className="flex gap-[120px] px-[25px] py-[40px]">
            <div className="bg-[url('/assets/spotify-icons/about-star.png')] rounded-full w-[132px] h-[132px] font-bold flex flex-col text-primaryForeground justify-center items-center bg-no-repeat bg-cover">
                <span className="text-2xl">#293</span>
                <span className="text-xs tracking-widest">in the world</span>
            </div>
            <div className="text-primaryForeground w-1/2 text-pretty text-justify">
                {artisteBrief}
            </div>
            <div className="flex flex-col gap-[23px]">
                {[
                    {
                        title: 9000000,
                        subtitle: "followers",
                    },
                    {
                        title: 24000000,
                        subtitle: "monthly listeners",
                    },
                    {
                        title: 24000000,
                        subtitle: "monthly listeners",
                    },
                    {
                        title: "Paris, FR",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "Mexico city, MX",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "Santiago, CL",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "London, GB",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "Bogota, CO",
                        subtitle: "300,000 listeners",
                    },
                ].map((item, indx) => (
                    <div className="flex flex-col gap-1" key={indx}>
                        <span className="text-primaryForeground text-xl font-semibold">
                            {item.title}
                        </span>
                        <span className="text-secondaryForeground text-xs">
                            {item.subtitle}
                        </span>
                    </div>
                ))}
                <div></div>
            </div>
        </div>
    );
}

export default About;
