import { Podcasts } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Show({ data }: { data: Podcasts }) {
    const {
        show: {
            type,
            id,
            images,
            name,
            total_episodes,
            publisher,
            description,
        },
    } = data;
    return (
        <Link
            href={`/podcast/${id}`}
            key={id}
            className={`w-[150px] max-h-[253px] flex flex-col gap-[6px] relative rounded-[7.25px]`}
        >
            <div className={`relative`}>
                <div className="w-[150px] h-[150px] relative">
                    <Image
                        src={images[0]["url"]}
                        fill
                        alt={name}
                        className={"object-cover rounded-[7.25px]"}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className={`flex items-center text-sm`}>
                    <span className="font-medium text-primaryForeground tracking-wide truncate text-ellipsis">
                        {name}
                    </span>
                </div>
                <span className={`text-xs text-secondaryForeground`}>
                    {publisher}
                </span>
            </div>
        </Link>
    );
}

export default Show;
