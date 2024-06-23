import type { NavLink, SideMenu } from "./types";
export const navLinks: NavLink[] = [
    {
        id: 1,
        href: "/library",
        icon: "/assets/spotify-icons/library.png",
        label: "My Library",
    },
    {
        id: 2,
        href: "/home",
        icon: "/assets/spotify-icons/home.png",
        label: "Home",
    },
    {
        id: 3,
        href: "/#discover",
        icon: "/assets/spotify-icons/Discover.png",
        label: "Discover",
    },
];

export const userNav: NavLink[] = [
    {
        id: 100,
        href: "/",
        icon: "/assets/spotify-icons/news.png",
        label: "notifications",
    },
    {
        id: 101,
        href: "/",
        icon: "/assets/spotify-icons/private.png",
        label: "private",
    },
    {
        id: 102,
        href: "/",
        btnFunc: (action) => action(),
        icon: "/assets/spotify-icons/friends.png",
        label: "friends",
    },
    {
        id: 103,
        href: "/",
        icon: "/assets/spotify-icons/settings.png",
        label: "settings",
    },
];

export const sideMenu: SideMenu[] = [
    {
        id: 200,
        href: "/",
        icon: "/assets/spotify-icons/pin.png",
        label: "Pins",
        collapsible: true,
    },
    {
        id: 201,
        href: "/",
        icon: "/assets/spotify-icons/playlist.png",
        label: "Playlist",
        collapsible: true,
    },
    {
        id: 202,
        href: "/",
        icon: "/assets/spotify-icons/like.png",
        label: "Liked songs",
    },
    {
        id: 203,
        href: "/",
        icon: "/assets/spotify-icons/save.png",
        label: "Saves",
    },
    {
        id: 204,
        href: "/",
        icon: "/assets/spotify-icons/album.png",
        label: "Albums",
    },
    {
        id: 205,
        href: "/",
        icon: "/assets/spotify-icons/folder.png",
        label: "Folders",
    },
    {
        id: 206,
        href: "/",
        icon: "/assets/spotify-icons/podcast.png",
        label: "Podcasts",
    },
    {
        id: 207,
        href: "/",
        icon: "/assets/spotify-icons/audiobook.png",
        label: "Audio books",
    },
    {
        id: 208,
        href: "/",
        icon: "/assets/spotify-icons/artist.png",
        label: "Artist",
    },
];

export const artistenav: NavLink[] = [
    {
        id: 101,
        href: "",
        icon: "",
        label: "Home",
        btnFunc: (action) => action(),
    },
    {
        id: 102,
        href: "albums",
        icon: "",
        label: "Albums",
        btnFunc: (action) => action(),
    },
    {
        id: 103,
        href: "singles and ep",
        icon: "",
        label: "Singles and EPs",
        btnFunc: (action) => action(),
    },
    {
        id: 104,
        href: "compilation",
        icon: "",
        label: "Compilations",
        btnFunc: (action) => action(),
    },
    {
        id: 105,
        href: "merch",
        icon: "",
        label: "Merch",
        btnFunc: (action) => action(),
    },
    {
        id: 106,
        href: "about",
        icon: "",
        label: "About",
        btnFunc: (action) => action(),
    },
    {
        id: 107,
        href: "feature and more",
        icon: "",
        label: "Features & More",
        btnFunc: (action) => action(),
    },
];
