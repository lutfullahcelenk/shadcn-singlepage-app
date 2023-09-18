"use client";

import { Inter } from "next/font/google";
import { useGlobalContext } from "@/context/store";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const { username, isLogin } = useGlobalContext();

    return (
        <html lang="en">
            <body className={inter.className}>
                <h1> Username : {username}</h1>
                {children}
            </body>
        </html>
    );
}
