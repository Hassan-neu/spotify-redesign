import { getShow } from "@/actions/podcast";
import { Podcast } from "@/utils/types";
import Image from "next/image";
import React from "react";

async function PodcastInfo({ id }: { id: string }) {
    const podcast: Podcast = await getShow({ id });
    const { description, images, name, publisher } = podcast;

    return (
        <div className="flex flex-col gap-[30px] w-[280px]">
            <div className="w-[280px] h-[280px] rounded-[10px] overflow-clip relative">
                <Image
                    src={images[0].url}
                    fill
                    alt={name}
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-[10px]">
                <p className="text-primaryForeground text-xl">About</p>
                <span className="text-secondaryForeground">{description}</span>
            </div>
        </div>
    );
}

export default PodcastInfo;
