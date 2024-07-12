import HomePlaylists from "@/components/pages/home/homeitems";
import React from "react";

function Search({
    searchParams: { query },
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <div className="mx-[25px] mt-[15px] min-h-screen flex flex-col gap-5">
                <div className="text-primaryForeground">
                    <p className="font-bold text-xl">Browse all</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="text-primaryForeground text-xl shadow-[0_4px_4px_0_#0000] font-bold capitalize">
                        Discover
                    </div>
                    <HomePlaylists
                        length={10}
                        variant="playlist"
                        hasMore={false}
                    />
                    <div className="text-primaryForeground text-xl shadow-[0_4px_4px_0_#0000] font-bold capitalize">
                        Genres
                    </div>
                    <HomePlaylists
                        length={10}
                        variant="playlist"
                        hasMore={false}
                    />
                    <div className="text-primaryForeground text-xl shadow-[0_4px_4px_0_#0000] font-bold capitalize">
                        Mood and Activity
                    </div>
                    <HomePlaylists
                        length={10}
                        variant="playlist"
                        hasMore={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
