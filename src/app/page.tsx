import PlaylistCard from "@/components/spotify/playlistCard";
import Form from "@/components/ui/form/form";
import { ListUser } from "@/components/ui/form/userList";
import { prisma } from "@/lib/prismaClient";

export default async function Home() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        },
    });
    return (
        <main className="flex flex-col items-center justify-between p-24 space-y-3">
            <Form />
            {/* {users.map((user) => (
                <ListUser key={user.id} {...user} />
            ))} */}
        </main>
    );
}
