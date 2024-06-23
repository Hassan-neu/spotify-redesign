import React from "react";
import MostPlayed from "./mostplayed";
import ArtistePick from "./artistepick";

function Home({ artiste }: { artiste: string }) {
    return (
        <div className="flex gap-[47px] px-[25px] py-[40px]">
            <MostPlayed />
            <ArtistePick artiste={artiste} />
        </div>
    );
}

export default Home;
