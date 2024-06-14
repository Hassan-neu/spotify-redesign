"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
function LibraryMenu() {
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
            <div className="flex gap-[35px]">
                <div className="flex gap-[10px]">
                    <button
                        className={cn(
                            "text-secondaryForegroundunded-xs text-white bg-opacity-50",
                            sortClassName({ param: "all" })
                        )}
                        onClick={() => setSortOption({ param: "all" })}
                    >
                        <Image
                            src={"/assets/spotify-icons/list.png"}
                            alt="list-icon"
                            width={40.41}
                            height={40.41}
                        />
                    </button>
                    <button
                        className={cn(
                            "text-secondaryForeground text-xs rounded-lg bg-opacity-50",
                            sortClassName({ param: "music" })
                        )}
                        onClick={() => setSortOption({ param: "music" })}
                    >
                        <Image
                            src={"/assets/spotify-icons/grid.png"}
                            alt="list-icon"
                            width={40.41}
                            height={40.41}
                        />
                    </button>
                </div>
                <div className="flex gap-[10px]">
                    <button
                        className={cn(
                            "text-secondaryForeground text-xs rounded-lg bg-opacity-50 flex gap-[5px] items-center",
                            sortClassName({ param: "podcast" })
                        )}
                        onClick={() => setSortOption({ param: "podcast" })}
                    >
                        <Image
                            src={"/assets/spotify-icons/sort.png"}
                            alt="list-icon"
                            width={40.41}
                            height={40.41}
                        />
                        <span>Recent</span>
                    </button>
                    <button
                        className={cn(
                            "text-secondaryForeground text-xs rounded-lg bg-opacity-50 flex gap-[5px] items-center",
                            sortClassName({ param: "audiobook" })
                        )}
                        onClick={() => setSortOption({ param: "audiobook" })}
                    >
                        <Image
                            src={"/assets/spotify-icons/filter.png"}
                            alt="list-icon"
                            width={40.41}
                            height={40.41}
                        />
                        <span>Group</span>
                    </button>
                </div>
                <button
                    className={cn(
                        "text-secondaryForeground text-xs rounded-lg bg-opacity-50 flex gap-[5px] items-center",
                        sortClassName({ param: "audiobook" })
                    )}
                    onClick={() => setSortOption({ param: "audiobook" })}
                >
                    <Image
                        src={"/assets/spotify-icons/search.png"}
                        alt="list-icon"
                        width={40.41}
                        height={40.41}
                    />
                </button>
            </div>
            <div>
                <Image
                    src={"/assets/spotify-icons/add-simple.png"}
                    alt=""
                    width={40.41}
                    height={40.41}
                />
            </div>
        </div>
    );
}

export default LibraryMenu;
