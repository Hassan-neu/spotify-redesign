"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../card";
import { Label } from "../label";
import { Input } from "../input";
import { Button } from "../button";
import { submitForm } from "@/actions/formActions";

function Form() {
    return (
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Local DB Test</CardTitle>
                <CardDescription>
                    Testing Sqlite with Prisma locally
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form action={submitForm}>
                    <div className="flex flex-col space-y-5">
                        <div className="flex flex-col space-y-3">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                name="name"
                                type="text"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                            ></Input>
                        </div>
                        <Button>Submit</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default Form;
