"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGlobalContext } from "@/context/store";

export default function UserNav() {
    const { username, setIsLogin, setUserName } = useGlobalContext();
    const router = useRouter();

    function logOut() {
        setIsLogin(false);
        setUserName("");
        router.replace("/");
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center">
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full px-5">
                        {username}
                        <Avatar className="h-8 w-8 px-4">
                            <AvatarFallback> {username.slice(0, 2).toUpperCase()} </AvatarFallback>
                        </Avatar>
                    </Button>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{username}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {username}@lutfullah.com
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logOut}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
