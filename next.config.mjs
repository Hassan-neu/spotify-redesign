/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.scdn.co",
                protocol: "https",
            },
            {
                hostname: "thisis-images.spotifycdn.com",
                protocol: "https",
            },
        ],
    },
};

export default nextConfig;
