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
    artists: Artiste[];
    id: string;
    name: string;
    duration_ms: number;
    track: {
        album: {
            href: string;
            id: string;
            name: string;
            images: imageType[];
        };
    };
}
export type Playlist = {
    id: string;
    name: string;
    owner: {
        id: string;
        type: string;
    };
    tracks: {
        total: number;
        items: {
            duration_ms: number;
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
