"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Loading() {
    const loader = useRef<HTMLDivElement | null>(null);
    useGSAP(
        () => {
            const circles: HTMLSpanElement[] = gsap.utils.toArray(
                loader.current?.childNodes!,
                loader
            );
            const tl = gsap.timeline({});
            tl.to(circles, {
                y: 8,
                duration: 0.5,
                stagger: {
                    repeat: -1,
                    yoyo: true,
                    each: 0.9,
                },
            });
        },
        { scope: loader }
    );
    return (
        <div className="flex items-center justify-center h-screen">
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
