"use client";
import Track from "@/components/spotify/track";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
function ProjectCard({ activeview }: { activeview: string }) {
    const [showTracks, setShowTracks] = useState<boolean>(false);
    return (
        <>
            <div
                className={cn(
                    "flex",
                    activeview == "list"
                        ? "flex-row gap-[18px] py-[30px]"
                        : "flex-col w-[170px] max-h-[253px] gap-[6px]"
                )}
            >
                <div
                    className={cn(
                        `relative rounded-[7.25px] overflow-clip`,
                        activeview == "grid"
                            ? "w-[170px] h-[170px]"
                            : "w-[130px] h-[130px]"
                    )}
                >
                    <Image
                        src={"/assets/spotify-icons/playlistimage.png"}
                        alt=""
                        fill
                        className={"object-cover"}
                    />
                </div>

                <div className="flex flex-col gap-[10px]">
                    <div
                        className={cn(
                            `flex items-center justify-between text-sm`,
                            activeview == "list" ? "text-xl" : "text-sm"
                        )}
                    >
                        <Link
                            href={`/album/rockmix`}
                            className="font-medium text-primaryForeground tracking-wide"
                        >
                            Rock Mix
                        </Link>
                        <span
                            className={cn(
                                "text-secondaryForeground font-normal",
                                activeview == "list" ? "hidden" : "block"
                            )}
                        >
                            50
                        </span>
                    </div>
                    <div
                        className={cn(
                            "text-secondaryForeground text-xs",
                            activeview == "list" ? "hidden" : "block"
                        )}
                    >
                        2002
                    </div>
                    {activeview == "list" && (
                        <>
                            <div className="text-secondaryForeground text-xs flex items-center gap-[10px]">
                                <span>2023</span>
                                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                                <span>22 songs</span>
                                <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                                <span>1 hr 41 min</span>
                            </div>
                            <div className="flex gap-[14px]">
                                <button>
                                    <Image
                                        src={
                                            "/assets/spotify-icons/play-fill.png"
                                        }
                                        width={40.41}
                                        height={40.41}
                                        alt="button"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={
                                            "/assets/spotify-icons/shuffle.png"
                                        }
                                        width={40.41}
                                        height={40.41}
                                        alt="button"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={"/assets/spotify-icons/add.png"}
                                        width={40.41}
                                        height={40.41}
                                        alt="button"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={
                                            "/assets/spotify-icons/to-queue.png"
                                        }
                                        width={40.41}
                                        height={40.41}
                                        alt="button"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={
                                            "/assets/spotify-icons/download.png"
                                        }
                                        width={40.41}
                                        height={40.41}
                                        alt="button"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={"/assets/spotify-icons/share.png"}
                                        width={40.41}
                                        height={40.41}
                                        alt="button"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src={"/assets/spotify-icons/more.png"}
                                        width={40.41}
                                        height={40.41}
                                        alt="button"
                                    />
                                </button>
                            </div>
                        </>
                    )}
                </div>

                <button
                    className={cn(
                        "ml-auto self-start",
                        activeview == "list" ? "block" : "hidden"
                    )}
                    onClick={() => setShowTracks((prev) => !prev)}
                >
                    <Image
                        src={"/assets/spotify-icons/chevron.png"}
                        width={40.41}
                        height={40.41}
                        alt="collapse"
                        className={cn(
                            "rotate-90 transition-[transform]",
                            showTracks && "rotate-180"
                        )}
                    />
                </button>
            </div>
            {activeview == "list" && (
                <div
                    className={cn(
                        "lg:w-[60%] max-h-0 transition-[max-height] duration-200 overflow-hidden ease-out",
                        activeview == "list" &&
                            showTracks &&
                            "max-h-96 transition-[max-height] duration-200 ease-in"
                    )}
                >
                    {Array.from({ length: 5 }, (_v, indx) => (
                        <Track key={indx} indx={indx} />
                    ))}
                </div>
            )}

            {/* {activeview == "list" &&
                showTracks &&
                Array.from({ length: 5 }, (_v, indx) => (
                    <Track key={indx} indx={indx} />
                ))} */}
        </>
    );
}

export default ProjectCard;
