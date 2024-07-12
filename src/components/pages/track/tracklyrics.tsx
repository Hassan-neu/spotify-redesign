"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

function Tracklyrics() {
    const [showNotes, setShowNotes] = useState(false);
    return (
        <div className="flex flex-col">
            <div className="flex gap-[50px] text-secondaryForeground text-sm px-[46px] border-b-2 border-secondaryForeground border-opacity-15 bg-secondaryForeground bg-opacity-20 backdrop-blur-[10px] sticky top-0">
                <button className="py-4">Lyrics</button>
                <button className="py-4">Credits</button>
                <button className="py-4">More like this</button>
            </div>
            <div className="flex gap-[200px] px-[37px] pt-9  bg-secondaryForeground bg-opacity-20">
                <div className="flex flex-col gap-3 shrink-0">
                    <button>
                        <Image
                            src={"/assets/spotify-icons/synced-lyrics.png"}
                            alt="lyrics-action"
                            width={40.41}
                            height={40.41}
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/translate.png"}
                            alt="lyrics-action"
                            width={40.41}
                            height={40.41}
                        />
                    </button>
                    <button onClick={() => setShowNotes(!showNotes)}>
                        <Image
                            src={
                                showNotes
                                    ? "/assets/spotify-icons/notes-stroke.png"
                                    : "/assets/spotify-icons/notes.png"
                            }
                            alt="lyrics-action"
                            width={40.41}
                            height={40.41}
                        />
                    </button>
                    <button>
                        <Image
                            src={"/assets/spotify-icons/font.png"}
                            alt="lyrics-action"
                            width={40.41}
                            height={40.41}
                        />
                    </button>
                </div>
                <div className="flex gap-6">
                    <div className="text-primaryForeground text-[28px] font- text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolorem rem impedit voluptates veniam beatae architecto
                        fugit blanditiis praesentium facilis voluptatibus
                        reprehenderit quisquam saepe cumque aliquid, eos, nemo
                        tempore, facere iste illum! Ea in eius, autem
                        repudiandae eos sint quis. Quasi, suscipit commodi
                        voluptatum dolorem magni hic, vero dolores itaque,
                        libero exercitationem fugiat praesentium fugit dicta
                        nulla deserunt quia! Vel reiciendis assumenda, tenetur
                        voluptatum sit quam tempore culpa accusamus quisquam
                        blanditiis ducimus numquam, commodi corporis recusandae
                        earum error vero necessitatibus voluptas.
                    </div>

                    <div
                        className={cn(
                            "w-[405px] shrink-0 border-2 self-start border-secondaryForeground border-opacity-15 rounded-[10px] transition-[visibility,_opacity] duration-300",
                            showNotes
                                ? "visible opacity-100"
                                : "invisible opacity-0"
                        )}
                    >
                        <div className="flex px-5 items-center text-sm text-secondaryForeground border-b-2 border-secondaryForeground border-opacity-15">
                            <span className="mr-2">From</span>
                            <span> Genius</span>
                            <Link href="https://www.genius.com" target="_blank">
                                <Image
                                    src={"/assets/spotify-icons/arrow-left.png"}
                                    alt="arrow-link"
                                    width={40.41}
                                    height={40.41}
                                    className="rotate-[135deg]"
                                />
                            </Link>
                        </div>
                        <div className=" px-5 py-[17px] items-center  text-primaryForeground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Atque debitis adipisci, ex odio eveniet
                            officiis quam sunt quis porro unde dolor? Obcaecati
                            accusamus omnis rem tenetur. Atque odit nihil
                            expedita!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tracklyrics;
