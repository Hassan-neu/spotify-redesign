import { sideMenu } from "@/utils/projectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SideMenu() {
    return (
        <div className="bg-primaryBackground col-[1/2] row-[2/-1] p-[11px] pr-0">
            <div className="h-full flex flex-col gap-[11px]">
                {sideMenu.map((menu) => (
                    <Link
                        key={menu.id}
                        href={menu.href}
                        className="flex justify-between items-center "
                    >
                        <div className="flex gap-[10px] items-center">
                            <Image
                                src={menu.icon}
                                width={40.41}
                                height={40.41}
                                alt={`${menu.label}-icon`}
                            />
                            <p className="text-secondaryForeground text-sm">
                                {menu.label}
                            </p>
                        </div>
                        {menu.collapsible && (
                            <Image
                                src={"/assets/spotify-icons/chevron.png"}
                                width={40.41}
                                height={40.41}
                                className="rotate-90"
                                alt={`${menu.label}-open`}
                            />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideMenu;
