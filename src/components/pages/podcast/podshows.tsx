import { getSavedShows } from "@/actions/podcast";
import { Podcasts } from "@/utils/types";
import React from "react";
import Show from "./show";

async function PodShows() {
    const getSavedPods: Podcasts[] = await getSavedShows();
    return (
        <>
            {getSavedPods.map((item) => (
                <Show key={item.show.id} data={item} />
            ))}
        </>
    );
}

export default PodShows;
