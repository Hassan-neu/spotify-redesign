import { getShow } from "@/actions/podcast";
import { Podcast } from "@/utils/types";
import { Star } from "lucide-react";
import React from "react";

async function PodcastActions({ id }: { id: string }) {
    const podcast: Podcast = await getShow({ id });

    const { name, publisher, explicit, total_episodes } = podcast;

    return (
        <div className="flex flex-col gap-[20px] px-3">
            <div className="font-black text-4xl text-primaryForeground">
                {name}
            </div>
            <div className="text-secondaryForeground text-sm flex items-center gap-[10px]">
                {publisher}
            </div>
            <div className="flex gap-[14px] text-sm text-primaryForeground">
                <div className="py-[8px] px-5 rounded-full border border-secondaryForeground border-opacity-25">
                    {explicit ? "Explicit ontent" : "Non Explicit Content"}
                </div>
                <div className="py-[8px] px-5 ">
                    {`${total_episodes}  episodes`}{" "}
                    <Star size={12} className="text-primary inline" />
                </div>
            </div>
        </div>
    );
}

export default PodcastActions;
