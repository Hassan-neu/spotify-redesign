"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function Signin() {
    const { replace } = useRouter();
    const { status } = useSession();
    useEffect(() => {
        if (status === "authenticated") {
            replace("/home");
        }
    }, [status, replace]);
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex flex-col m-auto  gap-5 h-1/2 p-10">
                <div className="self-center">
                    <Image
                        src={"/assets/spotify-icons/spotify-logo.png"}
                        alt="spotify-logo"
                        width={200}
                        height={80}
                    />
                </div>
                <div className="flex flex-col gap-3 mt-12">
                    <div className="text-3xl text-primaryForeground font-bold">
                        Login to Spotify
                    </div>
                    <div className="flex flex-col">
                        <button
                            className="text-base bg-primary rounded-full py-2 px-2 font-bold"
                            onClick={() => signIn("spotify")}
                        >
                            Sign in
                        </button>
                    </div>
                </div>
                <div className="text-sm text-secondaryForeground self-center">
                    Redesigned By Juxtopposed
                </div>
            </div>
        </div>
    );
}

export default Signin;
