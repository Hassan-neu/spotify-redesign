"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
function HomeMenu() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const path = usePathname();
    function setSortOption({ param }: { param: string }) {
        const newParams = new URLSearchParams(searchParams);
        newParams.set("sort", param);
        newParams.toString();
        return replace(`${path}?${newParams}`);
    }
    const activeSort = searchParams.get("sort");
    const sortClassName = ({ param }: { param: string }) =>
        activeSort == param &&
        "text-primaryBackground bg-primaryForeground font-bold bg-opacity-100";
    return (
        <div className="px-[26px] py-[9.2px] items-center flex justify-between">
            <div className="flex gap-[10px]">
                <button
                    className={cn(
                        "px-[15px] py-2 text-sm rounded-lg text-white bg-secondaryBackground bg-opacity-50",
                        sortClassName({ param: "all" })
                    )}
                    onClick={() => setSortOption({ param: "all" })}
                >
                    All
                </button>
                <button
                    className={cn(
                        "px-[15px] py-2 text-white text-sm rounded-lg bg-secondaryBackground bg-opacity-50",
                        sortClassName({ param: "music" })
                    )}
                    onClick={() => setSortOption({ param: "music" })}
                >
                    Music
                </button>
                <button
                    className={cn(
                        "px-[15px] py-2 text-white text-sm rounded-lg bg-secondaryBackground bg-opacity-50",
                        sortClassName({ param: "podcast" })
                    )}
                    onClick={() => setSortOption({ param: "podcast" })}
                >
                    Podcasts
                </button>
                <button
                    className={cn(
                        "px-[15px] py-2 text-white text-sm rounded-lg bg-secondaryBackground bg-opacity-50",
                        sortClassName({ param: "audiobook" })
                    )}
                    onClick={() => setSortOption({ param: "audiobook" })}
                >
                    Audiobooks
                </button>
            </div>
            <div>
                <Image
                    src={"/assets/spotify-icons/adjust.png"}
                    alt=""
                    width={40.41}
                    height={40.41}
                />
            </div>
        </div>
    );
}

export default HomeMenu;
