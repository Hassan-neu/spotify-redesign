import { cookies, headers } from "next/headers";
import ArtisteBanner from "@/components/pages/artiste/artistecover";
import ArtisteMenu from "@/components/pages/artiste/menubar";
import React from "react";
import Home from "@/components/pages/artiste/home";
import About from "@/components/pages/artiste/about";
import Albums from "@/components/pages/artiste/albums";
function ArtistePage({
    params: { artiste },
    searchParams: { activetab, view },
}: {
    params: { artiste: string };
    searchParams: { [key: string]: string };
}) {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <ArtisteBanner artiste={artiste} />
            <ArtisteMenu />
            {!activetab ? (
                <Home artiste={artiste} />
            ) : decodeURIComponent(activetab) == "about" ? (
                <About />
            ) : (
                decodeURIComponent(activetab) == "albums" && (
                    <Albums activeview={view} />
                )
            )}
        </div>
    );
}

export default ArtistePage;
