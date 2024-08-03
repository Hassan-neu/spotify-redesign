import React from "react";
import { Skeleton } from "../ui/skeleton";

function HomeSkeleton() {
    return (
        <div className={"flex flex-col gap-[15.41px]"}>
            <div className="flex justify-between items-center">
                <Skeleton className="h-5 w-36" />
                <div className="flex gap-[5px]">
                    <Skeleton className="w-10 h-5" />
                    <Skeleton className="w-10 h-5" />
                    <Skeleton className="w-10 h-5" />
                </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] grid-flow-col auto-rows-auto overflow-hidden hide-scroll gap-3">
                {Array.from({ length: 8 }, (_v, indx) => (
                    <div
                        className="flex flex-col w-[150p] gap-[6px]"
                        key={indx}
                    >
                        <Skeleton className="w-[150px] h-[150px] " />
                        <div className="flex flex-col gap-2">
                            <Skeleton className="h-[20px] " />
                            <Skeleton className=" h-[16px] " />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeSkeleton;
