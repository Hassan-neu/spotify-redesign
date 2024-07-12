// import { getTrack } from "@/actions/tracks";
// import { Album, Track as TrackType } from "@/utils/types";
// import React from "react";
// import { parse } from "node-html-parser";
// type Track = TrackType & { album: Album };
// async function Lyrics({ id }: { id: string }) {
//     const trackDetails: Track = await getTrack({ id });
//     const {
//         album: { images, release_date },
//         artists,
//         duration_ms,
//         name,
//     } = trackDetails;
//     const fetchLyrics = await fetch(
//         `https://api.genius.com/search?q=${encodeURIComponent(
//             name
//         )} ${encodeURIComponent(artists[0].name)}`,
//         {
//             headers: {
//                 Authorization: `Bearer 8xD0abdTD-7oB36uXeHrLJO80qhWav-dyuGbnVQMYeggRL8xhc0krJtcgNh9zfl5`,
//             },
//         }
//     );
//     const lyricsPage = await fetchLyrics.json();
//     const scrubPage = await fetch(
//         lyricsPage["response"]["hits"][0]["result"]["url"]
//     );
//     const scrubRes = await scrubPage.text();
//     const parsed = parse(scrubRes);
//     const el = parsed.querySelector("[data-lyrics-container]")?.childNodes;
//     const content = el
//         ?.filter((item) => item.textContent !== "")
//         .flatMap((el) =>
//             el.rawTagName == "a"
//                 ? { href: Node.ATTRIBUTE_NODE.split(`" `)[0], content: el.textContent }
//                 : { href: null, content: el.innerText }
//         );
//     console.log(content);
//     return <div>{"Hello"}</div>;
// }

// export default Lyrics;
