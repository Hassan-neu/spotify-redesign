import PlaylistCard from "@/components/spotify/playlistCard";
import { cn } from "@/lib/utils";
import React from "react";
import ProjectCard from "./projectcard";

function Albums({ activeview = "grid" }: { activeview: string }) {
    return (
        <div
            className={cn(
                "px-[25px] py-[40px]",
                activeview == "grid"
                    ? "grid gap-[11px] grid-cols-[repeat(auto-fit,_minmax(170px,1fr))] auto-rows-auto"
                    : "flex flex-col divide-y-2 divide-primaryBackground"
            )}
        >
            {Array.from({ length: 10 }, (_v, indx) => (
                <ProjectCard key={indx} activeview={activeview} />
            ))}
        </div>
    );
}

export default Albums;
