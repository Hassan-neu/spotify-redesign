import HomePlaylists from "@/components/pages/home/homeplaylists";
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
                    <HomePlaylists
                        length={10}
                        variant="Discover"
                        showText={false}
                        hasMore={false}
                    />
                    <HomePlaylists
                        length={10}
                        variant="Genres"
                        showText={false}
                        hasMore={false}
                    />
                    <HomePlaylists
                        length={10}
                        variant="Mood and Activity"
                        showText={false}
                        hasMore={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default Search;
