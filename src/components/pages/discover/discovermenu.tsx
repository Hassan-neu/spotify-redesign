"use client";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { discoverMenu } from "@/utils/projectData";

function DiscoverMenu() {
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
    const activeFilter = searchParams.get("filter");
    const sortClassName = ({ param }: { param: string }) =>
        activeFilter == decodeURIComponent(param) &&
        "text-primaryBackground bg-primaryForeground font-normal bg-opacity-100";
    return (
        <div className="px-[26px] py-[9.2px] items-center flex justify-between">
            <div className="flex gap-[10px]">
                {discoverMenu.map((item) => (
                    <button
                        key={item.id}
                        className={cn(
                            "px-[15px] py-2 text-white text-sm rounded-lg bg-secondaryBackground bg-opacity-50",
                            sortClassName({ param: item.href })
                        )}
                        onClick={() => setFilterOption({ param: item.href })}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default DiscoverMenu;
