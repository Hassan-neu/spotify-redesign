import { getShowEpisodes } from "@/actions/podcast";
import { ShowEpisode } from "@/utils/types";
import React from "react";
import PodcastEpisode from "./podcastepisode";
import Pagination from "@/components/spotify/pagination";

async function PodcastEpisodes({ id, offset }: { id: string; offset: string }) {
    const episodes: ShowEpisode = await getShowEpisodes({ id, offset });
    const { next, previous, items } = episodes;
    return (
        <div>
            {items.map((item) => (
                <PodcastEpisode key={item.id} data={item} />
            ))}
            <Pagination status={{ hasNext: next, hasPrev: previous }} />
        </div>
    );
}

export default PodcastEpisodes;
