"use client";
import PlaylistCard from "@/components/spotify/playlistCard";
import React, { useCallback, useRef } from "react";
import { VariantProp } from "@/components/spotify/playlistCard";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);
function HomePlaylists({
    length,
    variant,
    showText = true,
    hasMore = true,
}: {
    length: number;
    variant: VariantProp;
    showText?: boolean;
    hasMore?: boolean;
}) {
    const slide = useRef<HTMLDivElement | null>(null);

    function controlSlider({ action }: { action: "forward" | "backward" }) {
        const offsetScrollWidth =
            slide.current?.scrollWidth! - slide.current?.clientWidth!;
        const movement =
            offsetScrollWidth /
            (slide.current?.scrollWidth! / slide.current?.clientWidth!);
        if (action === "forward") {
            gsap.to(slide.current, {
                scrollTo: {
                    x: slide.current?.scrollLeft! + Math.ceil(movement),
                },
            });
        } else {
            gsap.to(slide.current, {
                scrollTo: {
                    x: slide.current?.scrollLeft! - Math.ceil(movement),
                },
            });
        }
    }
    return (
        <div className="flex flex-col gap-[15.41px]">
            <div className="flex justify-between">
                <div className="text-primaryForeground text-xl shadow-[0_4px_4px_0_#0000] font-bold capitalize">
                    {variant}
                </div>
                <div className="flex gap-[5px]">
                    <button
                        onClick={() => controlSlider({ action: "backward" })}
                    >
                        <Image
                            src="/assets/spotify-icons/arrow-left.png"
                            width={40.41}
                            height={40.41}
                            alt="arrow-left"
                        />
                    </button>
                    <button
                        onClick={() => controlSlider({ action: "forward" })}
                    >
                        <Image
                            src="/assets/spotify-icons/arrow-left.png"
                            width={40.41}
                            height={40.41}
                            alt="arrow-right"
                            className="rotate-180"
                        />
                    </button>
                    {hasMore && (
                        <button>
                            <Image
                                src="/assets/spotify-icons/more.png"
                                width={40.41}
                                height={40.41}
                                alt="more"
                            />
                        </button>
                    )}
                </div>
            </div>
            <div
                className="grid grid-cols-[repeat(auto-fit,_minmax(170px,1fr))] grid-flow-col auto-rows-auto overflow-hidden hide-scroll gap-3"
                ref={slide}
            >
                {Array.from({ length }, (_v, indx) => (
                    <PlaylistCard
                        variant={variant}
                        pinned={Boolean(indx % 2)}
                        showText={showText}
                        key={indx}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePlaylists;
