import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/utils/AuthProvider";
const myFont = localFont({
    src: [
        {
            path: "../../public/fonts/Satoshi-regular.woff2",
            style: "normal",
            weight: "400",
        },
        {
            path: "../../public/fonts/Satoshi-Medium.woff2",
            style: "normal",
            weight: "500",
        },
        {
            path: "../../public/fonts/Satoshi-Bold.woff2",
            style: "normal",
            weight: "700",
        },
        {
            path: "../../public/fonts/Satoshi-black.woff2",
            style: "normal",
            weight: "900",
        },
    ],
});
// export const metadata: Metadata = {
//     title: "Create Next App",
//     description: "Generated by create next app",
// };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${myFont.className} bg-mainBackground`}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
