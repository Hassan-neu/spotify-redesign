import Image from "next/image";
import React from "react";
import FriendActivity from "./friendactivity";
import { useSpotifyContext } from "@/utils/store/store";
function Friends() {
    const closeFriendsTab = useSpotifyContext((prev) => prev.closeFriendsTab);
    return (
        <div className="px-[21px] py-5 rounded-[10px] w-[313px] border border-secondaryBackground overflow-scroll hide-scroll">
            <div className="flex flex-col gap-[33px]">
                <div className="flex justify-between items-center">
                    <h2 className="font-medium text-sm text-primaryForeground">
                        Friends Activity
                    </h2>
                    <div className="flex gap-[5px]">
                        <button>
                            <Image
                                src="/assets/spotify-icons/add-friend.png"
                                width={40.41}
                                height={40.41}
                                alt="add-friends"
                            />
                        </button>
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
                <div className="flex flex-col gap-6">
                    {Array.from({ length: 3 }, (_v, indx) => (
                        <FriendActivity key={indx} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Friends;
