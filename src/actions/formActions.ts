"use server";
import { prisma } from "@/lib/prismaClient";
import { revalidatePath } from "next/cache";

export async function submitForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    await prisma.user.create({
        data: {
            name,
            password,
            email,
        },
    });
    revalidatePath("/");
}

export async function deleteUser({ id }: { id: string }) {
    await prisma.user.delete({
        where: {
            id,
        },
    });
    revalidatePath("/");
}
