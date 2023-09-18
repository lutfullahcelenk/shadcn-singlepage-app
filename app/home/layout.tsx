"use client";

import { Inter } from "next/font/google";
import { useGlobalContext } from "@/context/store";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { username, isLogin } = useGlobalContext();

    useLayoutEffect(() => {
        if (!isLogin) {
            router.replace("/");
        }
    }, [isLogin, router]);

    return (
        <html lang="en">
            <body className={inter.className}>
                <h1> Username : {username}</h1>
                {children}
            </body>
        </html>
    );
}
