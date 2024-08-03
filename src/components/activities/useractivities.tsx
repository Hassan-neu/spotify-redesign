"use client";
import React from "react";
import FriendActivity from "./activity";
import ActivityMenu from "./activitieslist";
import { useSpotifyContext } from "@/utils/store/store";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useSession } from "next-auth/react";

function Friends({ children }: { children: React.ReactNode }) {
    const toOpenFriendTab = useSpotifyContext((prev) => prev.isFriendsTabOpen);
    const closeFriendsTab = useSpotifyContext((prev) => prev.closeFriendsTab);
    const { data: session } = useSession();
    return (
        <>
            {toOpenFriendTab ? (
                <div
                    className={cn(
                        `px-[21px] py-5 rounded-[10px] w-[313px] border border-secondaryBackground overflow-scroll hide-scroll `
                    )}
                >
                    <div className="flex flex-col gap-[22px]">
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <h2 className="font-medium text-lg text-primaryForeground">
                                    {session?.user?.name}&apos;s Top Artists
                                </h2>
                                <div className="flex gap-[5px]">
                                    <button onClick={closeFriendsTab}>
                                        <Image
                                            src="/assets/spotify-icons/close.png"
                                            width={40.41}
                                            height={40.41}
                                            alt="close-tab"
                                        />
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="py-1 px-3 rounded-full  text-sm text-primaryBackground bg-primaryForeground">
                                    Artists
                                </button>
                                <button className="py-1 px-3 rounded-full  text-sm bg-secondaryBackground text-white">
                                    Tracks
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">{children}</div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default Friends;
