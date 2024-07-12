"use server";
export async function getPlaylistTracks({ id }: { id: string }) {
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
        `https://api.spotify.com/v1/playlists/${id}/tracks?fields=items(track(name,href,id,artists.id,artists.name,duration_ms,album(name,href)))`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data;
}
export async function getPlaylistInfo({ id }: { id: string }) {
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
        `https://api.spotify.com/v1/playlists/${id}?fields=id,name,owner(id,type),tracks(total,items(track(duration_ms))))`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    console.log(data);
    return data;
}
