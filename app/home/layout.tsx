"use client";

import { Inter } from "next/font/google";
import { useGlobalContext } from "@/context/store";
import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarNav from "@/components/partials/SidebarNav";

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
            {isLogin ? (
                <body className={`flex ${inter.className}`}>
                    <aside className="w-1/5">
                        <h1 className="text-4xl font-bold text-center my-8">
                            {username ?? "Lutfullah CELENK"}
                        </h1>
                        <SidebarNav />
                    </aside>
                    {children}
                </body>
            ) : null}
        </html>
    );
}
