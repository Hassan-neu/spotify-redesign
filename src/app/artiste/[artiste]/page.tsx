import { cookies, headers } from "next/headers";
import ArtisteBanner from "@/components/pages/artiste/artistecover";
import ArtisteMenu from "@/components/pages/artiste/menubar";
import React from "react";
import Home from "@/components/pages/artiste/home";
import About from "@/components/pages/artiste/about";
function ArtistePage({
    params: { artiste },
    searchParams: { activetab },
}: {
    params: { artiste: string };
    searchParams: { activetab: string };
}) {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <ArtisteBanner artiste={artiste} />
            <ArtisteMenu />
            {!decodeURIComponent(activetab) ? (
                <Home artiste={artiste} />
            ) : (
                <About />
            )}
        </div>
    );
}

export default ArtistePage;
