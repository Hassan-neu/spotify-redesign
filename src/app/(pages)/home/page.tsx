import HomeAlbums from "@/components/pages/home/homealbums";
import HomeMenu from "@/components/pages/home/homemenu";
import HomeItems from "@/components/pages/home/homeitems";
import HomePlaylists from "@/components/pages/home/homeplaylists";
import Friends from "@/components/activities/useractivities";
import PlaylistCard from "@/components/spotify/playlistCard";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { getUserTops } from "@/actions/activities";
import { cookies } from "next/headers";
import PodShows from "@/components/pages/podcast/podshows";
import HomeSkeleton from "@/components/spotify/homeskeleton";

export const metadata: Metadata = {
    title: "Spotify Redesign | Home",
    description: "Spotify Redesign By Juxtopposed",
};
async function Page({
    searchParams: { filter },
}: {
    searchParams: { filter: string };
}) {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <Suspense fallback={<div>Loadiingggg...</div>}>
                <HomeMenu />
            </Suspense>
            <div className="mx-[25px] mt-[15px] pb-[10px] flex flex-col gap-[11px]">
                {!filter ? (
                    <>
                        <Suspense fallback={<HomeSkeleton />}>
                            <HomeItems type="Latest Releases">
                                <HomeAlbums />
                            </HomeItems>
                        </Suspense>
                        <Suspense fallback={<HomeSkeleton />}>
                            <HomeItems type="Recommended Playlists">
                                <HomePlaylists />
                            </HomeItems>
                        </Suspense>
                        <Suspense fallback={<HomeSkeleton />}>
                            <HomeItems type="Saved Podcasts">
                                <PodShows />
                            </HomeItems>
                        </Suspense>
                    </>
                ) : filter == "podcast" ? (
                    <Suspense fallback={<HomeSkeleton />}>
                        <HomeItems type="Saved Podcasts">
                            <PodShows />
                        </HomeItems>
                    </Suspense>
                ) : (
                    filter == "music" && (
                        <>
                            <Suspense fallback={<HomeSkeleton />}>
                                <HomeItems type="Latest Releases">
                                    <HomeAlbums />
                                </HomeItems>
                            </Suspense>
                            <Suspense fallback={<HomeSkeleton />}>
                                <HomeItems type="Recommended Playlists">
                                    <HomePlaylists />
                                </HomeItems>
                            </Suspense>
                        </>
                    )
                )}
                <HomeSkeleton />

                {/* <HomePlaylists length={10} variant="album" />
                <HomePlaylists length={10} variant="playlist" /> */}
            </div>
        </div>
    );
}

export default Page;
