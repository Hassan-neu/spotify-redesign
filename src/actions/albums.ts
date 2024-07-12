"use server";

export async function getAlbums({
    id,
    activetab,
}: {
    id: string;
    activetab: string;
}) {
    const token_access = await fetch(`https://accounts.spotify.com/api/token`, {
        next: {
            revalidate: 3600,
        },
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
    });
    const { access_token } = await token_access.json();
    console.log(activetab);
    const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/albums?include_groups=${
            activetab == "albums" ? "album" : "compilation"
        }`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.items;
}

export async function getAlbumTracks({ id }: { id: string }) {
    const token_access = await fetch(`https://accounts.spotify.com/api/token`, {
        next: {
            revalidate: 3600,
        },
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
    });
    const { access_token } = await token_access.json();

    const response = await fetch(
        `https://api.spotify.com/v1/albums/${id}/tracks`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.items;
}

export async function getAlbum({ id }: { id: string }) {
    const token_access = await fetch(`https://accounts.spotify.com/api/token`, {
        next: {
            revalidate: 3600,
        },
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
    });

    const { access_token } = await token_access.json();

    const response = await fetch(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
    const data = await response.json();
    return data;
}

export async function getLatestRelease() {
    const token_access = await fetch(`https://accounts.spotify.com/api/token`, {
        next: {
            revalidate: 3600,
        },
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
    });
    const { access_token } = await token_access.json();

    const response = await fetch(
        `https://api.spotify.com/v1/browse/new-releases?limit=10`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.albums.items;
}
export async function getFeaturedPlaylists() {
    const token_access = await fetch(`https://accounts.spotify.com/api/token`, {
        next: {
            revalidate: 3600,
        },
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
    });
    const { access_token } = await token_access.json();

    const response = await fetch(
        `https://api.spotify.com/v1/browse/featured-playlists?limit=10`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.playlists.items;
}
