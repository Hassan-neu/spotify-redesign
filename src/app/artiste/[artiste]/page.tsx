import { cookies, headers } from "next/headers";
import ArtisteBanner from "@/components/pages/artiste/artistecover";
import ArtisteMenu from "@/components/pages/artiste/menubar";
import React, { Suspense } from "react";
import Home from "@/components/pages/artiste/home";
import About from "@/components/pages/artiste/about";
import Albums from "@/components/pages/artiste/albums";
import { Metadata, ResolvingMetadata } from "next";
import { getArtiste } from "@/actions/artiste";
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

export async function generateMetadata({
    params: { artiste },
}: {
    params: { artiste: string };
    parent: ResolvingMetadata;
}): Promise<Metadata> {
    const artisteDetails: Artiste = await getArtiste({ id: artiste });
    const { images, name, genres } = artisteDetails;

    return {
        title: `Spotify | ${name}`,
        description: `Artiste page for ${name}`,
    };
}

async function ArtistePage({
    params: { artiste },
    searchParams: { activetab, view },
}: {
    params: { artiste: string };
    searchParams: { [key: string]: string };
}) {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <ArtisteBanner artiste={artiste} />
            <Suspense fallback={<div>Loadiingggg...</div>}>
                <ArtisteMenu />
            </Suspense>
            {!activetab ? (
                <Home artiste={artiste} />
            ) : decodeURIComponent(activetab) == "about" ? (
                <About />
            ) : decodeURIComponent(activetab) == "albums" ? (
                <Albums activeview={view} activetab={activetab} id={artiste} />
            ) : (
                decodeURIComponent(activetab) == "compilation" && (
                    <Albums
                        activeview={view}
                        activetab={activetab}
                        id={artiste}
                    />
                )
            )}
        </div>
    );
}

export default ArtistePage;
