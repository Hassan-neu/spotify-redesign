import HomeItems from "@/components/pages/home/homeitems";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";
import PodShows from "@/components/pages/podcast/podshows";
import { Podcast } from "@/utils/types";
import { getShow } from "@/actions/podcast";
import PodcastInfo from "@/components/pages/podcast/podcastinfo";
import PodcastActions from "@/components/pages/podcast/podcastaction";
import PodcastEpisodes from "@/components/pages/podcast/podcastepisodes";

export async function generateMetadata({
    params: { id },
}: {
    params: { id: string };
    parent: ResolvingMetadata;
}): Promise<Metadata> {
    const uniqueAlbum: Podcast = await getShow({ id });
    const { name } = uniqueAlbum;
    return {
        title: `Podcast | ${name}`,
        description: `Artiste page for ${name}`,
    };
}
async function Page({
    params: { id },
    searchParams: { offset },
}: {
    params: { id: string };
    searchParams: { offset: string };
}) {
    return (
        <div className="border rounded-[10px] bg-[#333842] bg-opacity-45 border-secondaryBackground overflow-scroll hide-scroll">
            <div className="pl-[37px] pr-[50px] py-[22px] flex gap-[48px]">
                <div className="grow flex flex-col gap-[30px]">
                    <PodcastActions id={id} />

                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-secondaryForeground gap-[10px] border-secondaryForeground px-[10px] py-1">
                            <span className="text-xl font-bold text-primaryForeground">
                                All Episodes
                            </span>
                        </div>
                        <PodcastEpisodes id={id} offset={offset} />
                    </div>
                </div>
                <PodcastInfo id={id} />
            </div>
        </div>
    );
}

export default Page;
