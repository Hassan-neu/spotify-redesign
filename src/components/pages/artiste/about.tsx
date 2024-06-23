import React from "react";

function About() {
    return (
        <div className="flex gap-[120px] px-[25px] py-[40px]">
            <div className="bg-primary rounded-full w-[132px] h-[132px] font-bold flex flex-col text-primaryForeground justify-center items-center">
                <span className="text-2xl">#293</span>
                <span className="text-xs tracking-widest">in the world</span>
            </div>
            <div className="text-primaryForeground w-1/2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore suscipit placeat accusantium. Laborum sequi atque
                velit nulla culpa placeat rem aut deserunt est corrupti! Quasi,
                veritatis, repellendus impedit cupiditate deserunt eaque veniam
                quae odit ducimus aperiam ipsum fugit perferendis nam sint amet?
                Iste impedit voluptate culpa, recusandae reprehenderit autem,
                tempore quidem deserunt ab corporis nisi quia facilis id nemo
                deleniti ipsum est, dolor numquam explicabo laboriosam.
                Repudiandae dolorum veritatis totam ratione dicta accusamus,
                temporibus impedit vero cupiditate dolore. Laboriosam aliquam
                officiis debitis! Dolor at beatae suscipit sequi quam quas
                consequuntur, in facere. Ratione minima culpa reprehenderit
                soluta vitae consequuntur alias voluptas suscipit reiciendis
                officiis sunt maiores nesciunt eos, earum, deleniti tenetur ab
                dignissimos nemo delectus rerum voluptatum iusto ducimus
                quibusdam. Ipsa dignissimos dolore cupiditate facere itaque
                molestiae repudiandae repellat omnis dolorem hic quasi similique
                voluptas necessitatibus, iure eligendi nam, molestias ipsam
                praesentium vero modi earum, odio velit totam eaque. Voluptatum,
                perferendis! Qui suscipit officiis vel sed recusandae numquam
                autem aliquam quisquam praesentium voluptates, exercitationem,
                aliquid magni a. Natus velit debitis inventore voluptate quae
                odio rerum dolore saepe veniam, adipisci ducimus mollitia,
                perferendis optio, suscipit explicabo expedita reiciendis
                numquam exercitationem. Aliquid velit adipisci facilis, sequi
                animi et porro deserunt quae dolor, delectus corrupti magni
                necessitatibus quasi dicta ea omnis facere optio placeat impedit
                voluptas numquam. Nihil, voluptatibus id! Facilis, nobis
                nesciunt consequatur voluptatem tempore beatae laborum eius
                voluptate laboriosam commodi cumque inventore quisquam,
                doloribus nihil iure fugit? Asperiores consequuntur beatae
                inventore provident deleniti nihil non, culpa aspernatur? Ex
                consectetur quam voluptates maxime laboriosam distinctio error
                iusto, quis inventore placeat aliquam ea dolorem ipsum sit. Odit
                ad non nulla accusantium assumenda officia aspernatur recusandae
                sunt temporibus? Suscipit aspernatur unde optio porro facere
                quae quia quisquam beatae omnis? Vel, amet. Earum optio numquam
                veniam magni obcaecati at dolorem rerum, eius porro placeat
                sapiente.
            </div>
            <div className="flex flex-col gap-[23px]">
                {[
                    {
                        title: 9000000,
                        subtitle: "followers",
                    },
                    {
                        title: 24000000,
                        subtitle: "monthly listeners",
                    },
                    {
                        title: 24000000,
                        subtitle: "monthly listeners",
                    },
                    {
                        title: "Paris, FR",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "Mexico city, MX",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "Santiago, CL",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "London, GB",
                        subtitle: "300,000 listeners",
                    },
                    {
                        title: "Bogota, CO",
                        subtitle: "300,000 listeners",
                    },
                ].map((item, indx) => (
                    <div className="flex flex-col gap-1" key={indx}>
                        <span className="text-primaryForeground text-xl font-semibold">
                            {item.title}
                        </span>
                        <span className="text-secondaryForeground text-xs">
                            {item.subtitle}
                        </span>
                    </div>
                ))}
                <div></div>
            </div>
        </div>
    );
}

export default About;
