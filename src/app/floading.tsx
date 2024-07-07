"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Loading() {
    const loader = useRef<HTMLDivElement | null>(null);
    useGSAP(
        () => {
            const circles = gsap.utils.toArray("span", loader);
            console.log(circles);
        },
        { scope: loader }
    );
    return (
        <div className="flex items-center justify-center">
            <div
                className="flex gap-2 items-center justify-center"
                ref={loader}
            >
                {Array.from({ length: 5 }, (_v, indx) => (
                    <span
                        key={indx}
                        className="block w-5 h-5 rounded-full bg-primaryForeground animate-pulse"
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Loading;