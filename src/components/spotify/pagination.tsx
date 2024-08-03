"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

function Pagination({
    status: { hasNext, hasPrev },
}: {
    status: { hasNext: string | boolean; hasPrev: string | boolean };
}) {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const path = usePathname();
    function setOffset({ param }: { param: string }) {
        const newParams = new URLSearchParams(searchParams);
        if (param) {
            newParams.set("offset", param);
            newParams.toString();
        } else {
            newParams.delete("offset");
        }
        return replace(`${path}?${newParams}`, { scroll: true });
    }
    return (
        <div className=" flex justify-between items-center">
            <button
                disabled={!Boolean(hasPrev)}
                className="px-[15px] py-2 text-sm rounded-lg text-primaryBackground bg-primaryForeground font-bold bg-opacity-100"
                onClick={() =>
                    setOffset({
                        param: (
                            Number(searchParams.get("offset")) - 20
                        ).toString(),
                    })
                }
            >
                Previous
            </button>
            <button
                disabled={!Boolean(hasNext)}
                className="px-[15px] py-2 text-sm rounded-lg text-primaryBackground bg-primaryForeground font-bold bg-opacity-100"
                onClick={() =>
                    setOffset({
                        param: (
                            Number(searchParams.get("offset")) + 20
                        ).toString(),
                    })
                }
            >
                Next
            </button>
        </div>
    );
}

export default Pagination;
