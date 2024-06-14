import LibraryMenu from "@/components/pages/library/librarymenu";
import React from "react";

function Library() {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <LibraryMenu />
        </div>
    );
}

export default Library;
