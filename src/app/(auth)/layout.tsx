import localFont from "next/font/local";
import "../globals.css";
const myFont = localFont({
    src: [
        {
            path: "../../../public/fonts/Satoshi-regular.woff2",
            style: "normal",
            weight: "400",
        },
        {
            path: "../../../public/fonts/Satoshi-Medium.woff2",
            style: "normal",
            weight: "500",
        },
        {
            path: "../../../public/fonts/Satoshi-Bold.woff2",
            style: "normal",
            weight: "700",
        },
        {
            path: "../../../public/fonts/Satoshi-black.woff2",
            style: "normal",
            weight: "900",
        },
    ],
});
export const metadata = {
    title: "Spotify Redesign | Login",
    description: "Spotify Redesign By Juxtopposed",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${myFont.className} bg-mainBackground`}>
                {children}
            </body>
        </html>
    );
}
