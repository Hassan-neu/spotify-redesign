import LibraryMenu from "@/components/pages/library/librarymenu";
import React, { Suspense } from "react";

function Library() {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <Suspense>
                <LibraryMenu />
            </Suspense>
        </div>
    );
}

export default Library;
