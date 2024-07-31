import Signin from "@/components/pages/signin/signin";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
    title: "Spotify Redesign | Login",
    description: "Spotify Redesign By Juxtopposed",
};
function Page() {
    return <Signin />;
}

export default Page;
