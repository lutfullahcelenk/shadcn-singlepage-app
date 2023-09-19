import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/store";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shadcn Single Page App",
    description: "demo project by Lutfullah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <GlobalContextProvider>
                <body className={inter.className} suppressHydrationWarning>
                    {children}
                </body>
            </GlobalContextProvider>
        </Fragment>
    );
}
