import React from "react";
import Track from "../../spotify/track";

function MostPlayed() {
    return (
        <div className="flex flex-col gap-[20px] grow">
            <div className="text-primaryForeground text-xl self-start font-semibold">
                Your most played
            </div>
            <div className="flex flex-col gap-[5px]">
                {Array.from({ length: 6 }, (_v, indx) => (
                    <Track key={indx} indx={indx} />
                ))}
            </div>
        </div>
    );
}

export default MostPlayed;
