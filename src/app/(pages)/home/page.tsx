import HomeAlbums from "@/components/pages/home/homealbums";
import HomeMenu from "@/components/pages/home/homemenu";
import HomeItems from "@/components/pages/home/homeitems";
import HomePlaylists from "@/components/pages/home/homeplaylists";
import Friends from "@/components/activities/useractivities";
import PlaylistCard from "@/components/spotify/playlistCard";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { getUserTops } from "@/actions/activities";

export const metadata: Metadata = {
    title: "Spotify Redesign | Home",
    description: "Spotify Redesign By Juxtopposed",
};
async function Page() {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <Suspense fallback={<div>Loadiingggg...</div>}>
                <HomeMenu />
            </Suspense>
            <div className="mx-[25px] mt-[15px] pb-[10px] flex flex-col gap-[11px]">
                <HomeItems type="Latest Releases">
                    <HomeAlbums />
                </HomeItems>
                <HomeItems type="Recommended Playlists">
                    <HomePlaylists />
                </HomeItems>
                {/* <HomePlaylists length={10} variant="album" />
                <HomePlaylists length={10} variant="playlist" /> */}
            </div>
        </div>
    );
}

export default Page;
