import Image from "next/image";
import Link from "next/link";
import React from "react";

function AlbumInfo() {
    return (
        <div className="flex flex-col gap-[30px] w-[30%]">
            <div className="w-[400px] h-[400px] rounded-[10px] overflow-clip relative">
                <Image
                    src="/assets/spotify-icons/kanye-west.jpg"
                    fill
                    alt="album-cover"
                    className="object-cover"
                />
            </div>
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
                    <div className="w-[61px] h-[61px] rounded-full overflow-clip relative">
                        <Image
                            src="/assets/spotify-icons/kanye-west.jpg"
                            fill
                            alt="artiste-cover"
                            className="object-cover"
                        />
                    </div>
                    <div className="text-sm text-secondaryForeground font-medium">
                        Pharell Williams
                    </div>
                </Link>
                <Link
                    href={`/artiste/pharell williams`}
                    className="flex gap-[20px] items-center"
                >
                    <div className="w-[61px] h-[61px] rounded-full overflow-clip relative">
                        <Image
                            src="/assets/spotify-icons/kanye-west.jpg"
                            fill
                            alt="artiste-cover"
                            className="object-cover"
                        />
                    </div>
                    <div className="text-sm text-secondaryForeground font-medium">
                        Pharell Williams
                    </div>
                </Link>
                <Link
                    href={`/artiste/pharell williams`}
                    className="flex gap-[20px] items-center"
                >
                    <span className="w-[61px] h-[61px] rounded-full overflow-clip relative">
                        <Image
                            src="/assets/spotify-icons/kanye-west.jpg"
                            fill
                            alt="artiste-cover"
                            className="object-cover"
                        />
                    </span>
                    <div className="text-sm text-secondaryForeground font-medium">
                        Pharell Williams
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default AlbumInfo;
