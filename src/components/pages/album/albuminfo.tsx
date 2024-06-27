import Image from "next/image";
import Link from "next/link";
import React from "react";

function AlbumInfo() {
    return (
        <div className="flex flex-col gap-[30px] w-[30%]">
            <Image
                src={"/assets/spotify-icons/kanye-west.jpg"}
                width={400}
                height={400}
                alt="album-cover"
                className="rounded-[10px]"
            />
            <div className="flex gap-[10px] flex-wrap">
                {[
                    "funk",
                    "electronic music",
                    "disco",
                    "soft rock",
                    "progressive pop",
                ].map((item, indx) => (
                    <div
                        key={indx}
                        className="text-sm text-secondaryForeground rounded-full py-[10px] px-[20px] border-2 border-opacity-25 border-secondaryForeground capitalize"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-[15px]">
                <Link
                    href={`/artiste/pharell williams`}
                    className="flex gap-[20px] items-center"
                >
                    <Image
                        src={"/assets/spotify-icons/kanye-west.jpg"}
                        width={61}
                        height={61}
                        alt="artiste-cover"
                        className="rounded-full object-cover h-[61px]"
                    />
                    <div className="text-sm text-secondaryForeground font-medium">
                        Pharell Williams
                    </div>
                </Link>
                <Link
                    href={`/artiste/pharell williams`}
                    className="flex gap-[20px] items-center"
                >
                    <Image
                        src={"/assets/spotify-icons/kanye-west.jpg"}
                        width={61}
                        height={61}
                        alt="artiste-cover"
                        className="rounded-full object-cover h-[61px]"
                    />
                    <div className="text-sm text-secondaryForeground font-medium">
                        Pharell Williams
                    </div>
                </Link>
                <Link
                    href={`/artiste/pharell williams`}
                    className="flex gap-[20px] items-center"
                >
                    <Image
                        src={"/assets/spotify-icons/kanye-west.jpg"}
                        width={61}
                        height={61}
                        alt="artiste-cover"
                        className="rounded-full object-cover h-[61px]"
                    />
                    <div className="text-sm text-secondaryForeground font-medium">
                        Pharell Williams
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AlbumInfo;
