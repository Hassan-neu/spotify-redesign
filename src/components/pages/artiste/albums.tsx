import PlaylistCard from "@/components/spotify/playlistCard";
import { cn } from "@/lib/utils";
import React from "react";
import ProjectCard from "./projectcard";
import { getAlbums } from "@/actions/getAlbums";
type imageType = {
    url: string;
    height: number;
    width: number;
};
type Album = {
    id: string;
    name: string;
    total_tracks: number;
    release_date: string;
    images: imageType[];
};

async function Albums({ activeview = "grid" }: { activeview: string }) {
    const getArtisteAlbums = await getAlbums();

    return (
        <div
            className={cn(
                "px-[25px] py-[40px]",
                activeview == "grid"
                    ? "grid gap-[11px] grid-cols-[repeat(auto-fit,_170px)] auto-rows-auto"
                    : "flex flex-col divide-y-2 divide-primaryBackground"
            )}
        >
            {getArtisteAlbums.map((data: Album) => (
                <ProjectCard
                    key={data.id}
                    data={data}
                    activeview={activeview}
                />
            ))}
        </div>
    );
}

export default Albums;
