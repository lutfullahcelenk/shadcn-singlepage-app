import React from "react";
import UserNavigation from "@/components/partials/UserNavigation";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { globalAgentList } from "@/constants/globalAgentList";

const Home = () => {
    return (
        <div className="flex-1 mt-10 mx-10">
            <div className="flex justify-end">
                <UserNavigation />
            </div>

            <div className="mt-2">
                <Table>
                    <TableBody>
                        {globalAgentList?.map((agent) => (
                            <TableRow key={agent.id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarFallback>
                                            {agent.name?.slice(0, 2).toLocaleUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{agent.name}</TableCell>
                                <TableCell>{agent.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Home;
