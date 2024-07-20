import DiscoverItems from "@/components/pages/discover/discoveritems";
import DiscoverMenu from "@/components/pages/discover/discovermenu";
import React, { Suspense } from "react";

function Discover() {
    return (
        <div className="border rounded-[10px] border-secondaryBackground overflow-scroll hide-scroll">
            <Suspense fallback={<div>Loadiingggg...</div>}>
                <DiscoverMenu />
            </Suspense>
            <DiscoverItems />
        </div>
    );
}

export default Discover;
