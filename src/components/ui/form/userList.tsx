"use client";
import { Button } from "../button";
import { Card, CardContent } from "../card";
interface User {
    id: string;
    name: string;
    email: string;
}
import { deleteUser } from "@/actions/formActions";
export const ListUser = ({ id, name, email }: User) => {
    return (
        <Card className="w-[400px]" draggable="true">
            <CardContent className="p-2 pt-2">
                <div className="flex space-x-3 justify-between items-center">
                    <div className="flex flex-col justify-between">
                        <h3 className="font-semibold">{name}</h3>
                        <p className="text-sm">{email}</p>
                    </div>
                    <Button onClick={() => deleteUser({ id })}>Delete</Button>
                </div>
            </CardContent>
        </Card>
    );
};
