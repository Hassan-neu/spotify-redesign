import PlaylistCard from "@/components/spotify/playlistCard";
import React from "react";
import { VariantProp } from "@/components/spotify/playlistCard";
import Image from "next/image";
function HomePlaylists({
    length,
    variant,
}: {
    length: number;
    variant: VariantProp;
}) {
    return (
        <div className="flex flex-col gap-[15.41px]">
            <div className="flex justify-between">
                <div className="text-primaryForeground text-xl shadow-[0_4px_4px_0_#0000]">
                    TITLE
                </div>
                <div className="flex gap-[5px]">
                    <button>
                        <Image
                            src="/assets/spotify-icons/arrow-left.png"
                            width={40.41}
                            height={40.41}
                            alt="arrow-left"
                        />
                    </button>
                    <button>
                        <Image
                            src="/assets/spotify-icons/arrow-left.png"
                            width={40.41}
                            height={40.41}
                            alt="arrow-right"
                            className="rotate-180"
                        />
                    </button>
                    <button>
                        <Image
                            src="/assets/spotify-icons/more.png"
                            width={40.41}
                            height={40.41}
                            alt="arrow-left"
                        />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-[repeat(5,_minmax(170px,1fr))] grid-flow-col auto-rows-auto overflow-scroll hide-scroll gap-3">
                {Array.from({ length }, (_v, indx) => (
                    <PlaylistCard
                        variant={variant}
                        pinned={Boolean(indx % 2)}
                        key={indx}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePlaylists;
