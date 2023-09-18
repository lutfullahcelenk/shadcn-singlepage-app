"use client";
import React, { useState } from "react";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { useGlobalContext } from "@/context/store";
import Spinner from "@/components/icons/Spinner";

const formSchema = z.object({
    username: z.string().trim().min(5, {
        message: "Username must be at least 5 characters",
    }),
    password: z.string().trim().min(8, {
        message: "Password must be at least 8 characters.",
    }),
});

const UserAuthForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { username, isLogin, setUserName, setIsLogin } = useGlobalContext();
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setTimeout(() => {
            setUserName(values.username);
            setIsLogin(true);
            router.push("/home");
        }, 1000);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder="username" {...field} disabled={isLoading} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    placeholder="password"
                                    type="password"
                                    {...field}
                                    disabled={isLoading}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                </Button>
            </form>
        </Form>
    );
};

export default UserAuthForm;
