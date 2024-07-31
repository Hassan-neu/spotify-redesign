"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const { data: session, status } = useSession();
    const { replace } = useRouter();
    useEffect(() => {
        if (status == "authenticated") {
            return replace("/home");
        }
        return replace("/login");
    }, [replace, status]);
    return (
        <main className="flex flex-col items-center justify-between p-24 space-y-3">
            {/* <Form />
            {/* {users.map((user) => (
                <ListUser key={user.id} {...user} />
            ))} */}
            <div>HELLOOOO</div>
        </main>
    );
}
