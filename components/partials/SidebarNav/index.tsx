import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { sidebarNavItems } from "@/constants/sidebarNavItems";

function SidebarNav() {
    const pathname = usePathname();

    return (
        <nav className={cn("flex space-x-2 flex-col space-y-1")}>
            {sidebarNavItems?.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        pathname === item.href
                            ? "bg-muted hover:bg-muted"
                            : "hover:bg-transparent hover:underline",
                        "justify-start"
                    )}
                >
                    {item.title}
                </Link>
            ))}
        </nav>
    );
}

export default SidebarNav;
