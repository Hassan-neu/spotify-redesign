"use server";

export async function getNowPlaying() {
    const token_access = await fetch(
        `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&scope=user-read-private user-read-email&redirect_uri=http://localhost:3000/callback&state=PSb+STxrsQ6SQhkuX7Tulrg/pSRspQSB90mQEny+X1Q=`,
        {
            next: {
                revalidate: 3600,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    const res = await token_access.json();
    console.log(res);
    const response = await fetch(`https://api.spotify.com/v1/me/player`, {
        headers: {
            Authorization: `Bearer ${res.access_token}`,
        },
    });
    const data = await response.json();
    return data;
}
