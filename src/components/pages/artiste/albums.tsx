import PlaylistCard from "@/components/spotify/playlistCard";
import { cn } from "@/lib/utils";
import React from "react";
import ProjectCard from "./projectcard";
import { getAlbums } from "@/actions/albums";
import { Album } from "@/utils/types";

async function Albums({
    activeview = "grid",
    id,
    activetab,
}: {
    activeview: string;
    activetab: string;
    id: string;
}) {
    const getArtisteAlbums: Album[] = await getAlbums({ id, activetab });

    return (
        <div
            className={cn(
                "px-[25px] py-[40px]",
                activeview == "grid"
                    ? "grid gap-[11px] grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))] auto-rows-auto"
                    : activeview == "list" &&
                          "flex flex-col divide-y-2 divide-primaryBackground"
            )}
        >
            {getArtisteAlbums.map((data) => (
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
