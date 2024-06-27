"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
function HomeMenu() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const path = usePathname();
    function setFilterOption({ param }: { param: string }) {
        const newParams = new URLSearchParams(searchParams);
        if (param) {
            newParams.set("filter", param);
            newParams.toString();
        } else {
            newParams.delete("filter");
        }
        return replace(`${path}?${newParams}`);
    }
    const activeSort = searchParams.get("filter");
    const sortClassName = ({ param }: { param: string }) =>
        activeSort == param &&
        "text-primaryBackground bg-primaryForeground font-bold bg-opacity-100";
    return (
        <div className="px-[26px] py-[9.2px] items-center flex justify-between">
            <div className="flex gap-[10px]">
                <button
                    className={cn(
                        "px-[15px] py-2 text-sm rounded-lg text-white bg-secondaryBackground bg-opacity-50",
                        !activeSort &&
                            "text-primaryBackground bg-primaryForeground font-bold bg-opacity-100"
                    )}
                    onClick={() => setFilterOption({ param: "" })}
                >
                    All
                </button>
                <button
                    className={cn(
                        "px-[15px] py-2 text-white text-sm rounded-lg bg-secondaryBackground bg-opacity-50",
                        sortClassName({ param: "music" })
                    )}
                    onClick={() => setFilterOption({ param: "music" })}
                >
                    Music
                </button>
                <button
                    className={cn(
                        "px-[15px] py-2 text-white text-sm rounded-lg bg-secondaryBackground bg-opacity-50",
                        sortClassName({ param: "podcast" })
                    )}
                    onClick={() => setFilterOption({ param: "podcast" })}
                >
                    Podcasts
                </button>
                <button
                    className={cn(
                        "px-[15px] py-2 text-white text-sm rounded-lg bg-secondaryBackground bg-opacity-50",
                        sortClassName({ param: "audiobook" })
                    )}
                    onClick={() => setFilterOption({ param: "audiobook" })}
                >
                    Audiobooks
                </button>
            </div>
            <button onClick={() => alert("Hello")}>
                <Image
                    src={"/assets/spotify-icons/adjust.png"}
                    alt=""
                    width={40.41}
                    height={40.41}
                />
            </button>
        </div>
    );
}

export default HomeMenu;
