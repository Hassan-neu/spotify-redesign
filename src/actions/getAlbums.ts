"use server";

export async function getAlbums() {
    const token_access = await fetch(`https://accounts.spotify.com/api/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
    });
    const { access_token } = await token_access.json();

    const response = await fetch(
        `https://api.spotify.com/v1/artists/3a1tBryiczPAZpgoZN9Rzg/albums?include_groups=album,compilation`,
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    );
    const data = await response.json();
    return data.items;
}
