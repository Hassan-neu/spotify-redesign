"use client";
import { navLinks, userNav } from "@/utils/projectData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
    useSelectedLayoutSegment,
    useRouter,
    useSearchParams,
} from "next/navigation";
import { useSpotifyContext } from "@/utils/store/store";
function Menubar() {
    const searchParams = useSearchParams();
    const { push, replace } = useRouter();
    const currentLayout = useSelectedLayoutSegment();
    const openFriendsTab = useSpotifyContext((prev) => prev.openFriendsTab);
    function setSearchOption(param: string) {
        const newParams = new URLSearchParams(searchParams);
        if (param) {
            newParams.set("query", param);
            newParams.toString();
        } else {
            newParams.delete("query");
        }
        replace(`/search?${newParams}`);
    }
    return (
        <div className="flex justify-between col-[1/-1] bg-mainBackground mb-[3px]">
            <div className="flex shrink-0 [&>:nth-child(1)]:w-[262px] [&>:nth-child(2)]:w-[210px] [&>:nth-child(3)]:w-[210px] [&>:nth-child(4)]:w-[350px]">
                {navLinks.map((link, indx) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        scroll={false}
                        className="group flex gap-[10px] py-[6.79px] pl-[15px] items-center data-[active='true']:bg-primaryBackground rounded-[10px] data-[active='true']:my-1"
                        data-active={
                            currentLayout === link.href.replace("/", "")
                        }
                    >
                        <div className="flex justify-center items-center">
                            <Image
                                src={link.icon}
                                width={40.41}
                                height={40.41}
                                alt={`${link.label}-icon`}
                            />
                        </div>
                        <p className="text-secondaryForeground text-sm group-data-[active='true']:text-white">
                            {link.label}
                        </p>
                    </Link>
                ))}
                <div className="group flex gap-[10px] py-[6.79px] pl-[15px] items-center focus-within:bg-primaryBackground focus-within:rounded-[10px] focus-within:my-1">
                    <div className="flex justify-center items-center">
                        <Image
                            src={"/assets/spotify-icons/Search.png"}
                            width={40.41}
                            height={40.41}
                            alt={`search-icon`}
                        />
                    </div>
                    <input
                        className="bg-transparent outline-none focus:outline-none placeholder:text-secondaryForeground text-white text-sm"
                        placeholder="Search"
                        onChange={(e) => setSearchOption(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex shrink-0 justify-end">
                <div className="flex items-center gap-[13px] ">
                    {userNav.map((nav) => (
                        <button
                            key={nav.id}
                            onClick={() => nav?.btnFunc(openFriendsTab)}
                        >
                            <Image
                                src={nav.icon}
                                width={40.41}
                                height={40.41}
                                alt={`${nav.label}-icon`}
                            />
                        </button>
                    ))}
                    <div className="bg-primary w-[40px] h-[40px] rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

export default Menubar;
