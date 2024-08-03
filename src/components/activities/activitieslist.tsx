import { useSpotifyContext } from "@/utils/store/store";
import Image from "next/image";
import React from "react";
import FriendActivity from "./activity";
import { getUserTops } from "@/actions/activities";
type imageType = {
    url: string;
    height: number;
    width: number;
};
type Artiste = {
    external_urls: {
        spotify: string;
    };
    followers: {
        href: string;
        total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: imageType[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
};
async function ActivitiesList() {
    const userTopItems: Artiste[] = await getUserTops({ type: "artists" });
    const userTopTracks: Artiste[] = await getUserTops({ type: "tracks" });

    return (
        <>
            {userTopItems.map((data, indx) => (
                <FriendActivity key={data.id} indx={indx} data={data} />
            ))}
        </>
    );
}

export default ActivitiesList;
