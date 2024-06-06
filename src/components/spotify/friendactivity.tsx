import Image from "next/image";
import React from "react";

function FriendActivity() {
    return (
        <div className="flex gap-3 items-center">
            <div>
                <Image
                    src={"/assets/spotify-icons/playlistimage.png"}
                    width={40.41}
                    height={40.41}
                    alt="profilePicture"
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col gap-[6px]">
                <p className="text-xs text-primaryForeground">User name</p>
                <div className="flex gap-[10px] items-center">
                    <p className="text-secondaryForeground text-sm">Active</p>
                    <p className="text-sm text-primaryForeground">Song title</p>
                    <span className="w-[3px] h-[3px] rounded-full bg-secondaryForeground"></span>
                    <p className="text-secondaryForeground text-sm">
                        Artiste name
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FriendActivity;
