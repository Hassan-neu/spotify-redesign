import { VariantProp } from "@/components/spotify/playlistCard";

export type NavLink = {
    id: number;
    icon: string;
    label: string;
    href: string;
    btnFunc?: (action: Function) => Function;
};
export type SideMenu = NavLink & {
    collapsible?: boolean;
    subMenu?: SideMenu[];
};

export interface Artiste {
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}
export interface Track {
    artists: Artiste[];
    id: string;
    name: string;
    duration_ms: number;
    track_number: number;
}
export interface PlaylistTrack {
    track: {
        album: {
            id: string;
            name: string;
            images: imageType[];
        };
        name: string;
        id: string;
        duration_ms: number;
        artists: Artiste[];
    };
}
export type Playlist = {
    id: string;
    name: string;
    description: string;
    images: imageType[];
    owner: {
        id: string;
        type: string;
    };
    tracks: {
        total: number;
        items: {
            track: {
                duration_ms: number;
            };
        }[];
    };
    // description?: string;
    // total_tracks: number;
    // release_date: string;
    // images: imageType[];
    // tracks: {
    //     items: Track[];
    // };
    // type: VariantProp;
    // genres: string[];
    // artists?: Artiste[];
};

type imageType = {
    url: string;
    height: number;
    width: number;
};
export type Album = {
    id: string;
    name: string;
    description?: string;
    total_tracks: number;
    release_date: string;
    images: imageType[];
    tracks: {
        items: Track[];
    };
    type: VariantProp;
    genres: string[];
    artists?: Artiste[];
};

export interface Podcasts {
    show: {
        description: string;
        id: string;
        explicit: boolean;
        images: imageType[];
        name: string;
        publisher: string;
        type: string;
        total_episodes: number;
        media_type: string;
    };
}
export interface Podcast {
    description: string;
    id: string;
    explicit: boolean;
    images: imageType[];
    name: string;
    publisher: string;
    type: string;
    total_episodes: number;
    media_type: string;
}
export interface ShowEpisode {
    previous: boolean | string;
    next: boolean | string;
    items: Episode[];
}

export interface Episode {
    audio_preview_url: string;
    description: string;
    duration_ms: number;
    id: string;
    images: imageType[];
    name: string;
    release_date: string;
}
