"use client";
import PlaylistCard from "@/components/spotify/playlistCard";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { VariantProp } from "@/components/spotify/playlistCard";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { cn } from "@/lib/utils";
gsap.registerPlugin(ScrollToPlugin);
function HomePlaylists({
    type,
    hasMore = true,
    children,
}: {
    type: string;
    hasMore?: boolean;
    children: React.ReactNode;
}) {
    const slide = useRef<HTMLDivElement | null>(null);
    const playlist = useRef<HTMLDivElement | null>(null);
    const [showMore, setShowMore] = useState<boolean>(false);
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
    function handleHideSection() {
        const tl = gsap.timeline({
            defaults: {
                duration: "0.5",
            },
        });
        tl.to(playlist.current, {
            opacity: 0,
            ease: "back.inOut",
        }).to(playlist.current, {
            display: "none",
        });
    }
    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(
                (entry) => !entry.isIntersecting && setShowMore(false)
            );
        });

        observer.observe(playlist.current!);
        return () => observer.disconnect();
    }, []);
    return (
        <div className={cn("flex flex-col gap-[15.41px]")} ref={playlist}>
            <div className="flex justify-between items-center">
                <div className="text-primaryForeground text-xl shadow-[0_4px_4px_0_#0000] font-bold capitalize">
                    <p>{type}</p>
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
                        <div className="relative">
                            <button
                                onClick={() => setShowMore((prev) => !prev)}
                                className=""
                            >
                                <Image
                                    src="/assets/spotify-icons/more.png"
                                    width={40.41}
                                    height={40.41}
                                    alt="more"
                                />
                            </button>
                            {showMore && (
                                <div className="w-[215px] h-[119px] flex flex-col justify-center gap-[15px] rounded-[5px] absolute top-full right-0 text-primaryForeground px-4 py-[17px] bg-secondaryBackground z-20">
                                    <button className="flex gap-4 items-center">
                                        <Image
                                            src={
                                                "/assets/spotify-icons/pin.png"
                                            }
                                            width={31}
                                            height={31}
                                            alt="album-cover"
                                            className="rounded-[10px]"
                                        />
                                        Pin to Home
                                    </button>
                                    <button
                                        className="flex gap-4 items-center"
                                        onClick={handleHideSection}
                                    >
                                        <Image
                                            src={
                                                "/assets/spotify-icons/hide.png"
                                            }
                                            width={31}
                                            height={31}
                                            alt="album-cover"
                                            className="rounded-[10px]"
                                        />
                                        Hide this section
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div
                className="grid grid-cols-[repeat(auto-fit,_minmax(170px,1fr))] grid-flow-col auto-rows-auto overflow-hidden hide-scroll gap-3"
                ref={slide}
            >
                {children}
            </div>
        </div>
    );
}

export default HomePlaylists;
