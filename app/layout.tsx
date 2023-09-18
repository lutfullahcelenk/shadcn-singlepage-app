import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "@/context/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Shadcn Single Page App",
    description: "demo project by Lutfullah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
