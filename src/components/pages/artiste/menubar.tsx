"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { artistenav } from "@/utils/projectData";
import {
    usePathname,
    useSearchParams,
    useRouter,
    useParams,
} from "next/navigation";
import Image from "next/image";
import React from "react";
function ArtisteMenu() {
    const { artiste } = useParams();
    const path = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const activeTab = searchParams.get("activetab");
    const setActiveTab = (param: string) => {
        const newParams = new URLSearchParams(searchParams);
        if (param) {
            newParams.set("activetab", encodeURIComponent(param));
            newParams.toString();
        } else {
            newParams.delete("activetab");
        }
        replace(`/artiste/${artiste}?${newParams}`);
    };

    return (
        <div className="w-full border-b px-[46px] border-secondaryForeground border-opacity-25 sticky top-0 bg-mainBackground">
            <div className="flex gap-[44px]">
                {artistenav.map((nav, indx) => (
                    <button
                        key={nav.id}
                        className={cn(
                            "px-[6px] py-5 text-sm font-medium text-secondaryForeground  border-b-2 border-transparent",
                            activeTab == encodeURIComponent(nav.href)
                                ? "border-primary"
                                : !activeTab && indx == 0 && "border-primary"
                        )}
                        onClick={() => setActiveTab(nav.href)}
                    >
                        {nav.label}
                    </button>
                ))}

                <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                        <Image
                            src={"/assets/spotify-icons/Search.png"}
                            width={40.41}
                            height={40.41}
                            alt={`search-icon`}
                        />
                    </div>
                    <input
                        className="bg-transparent outline-none focus:outline-none placeholder:text-secondaryForeground text-white text-sm hidden"
                        placeholder="Search"
                        // onChange={(e) => setSearchOption(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default ArtisteMenu;
