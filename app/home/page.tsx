"use client";

import React, { useState } from "react";
import AgentForm from "@/components/partials/AgentForm";
import UserNavigation from "@/components/partials/UserNavigation";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { globalAgentList } from "@/constants/globalAgentList";
import { IAgent } from "@/lib/type";

const Home = () => {
    const [agentList, setAgentList] = useState(globalAgentList);
    console.log('agentList', agentList)

    const createAgent = (data: IAgent) => {
        const id = crypto.randomUUID();
        const agent = { ...data, id };
        setAgentList([...agentList, agent]);
    };

    const editAgent = (data: IAgent) => {
        const index = agentList.findIndex((agent) => agent.id === data.id);
        agentList[index] = { ...agentList[index], ...data };
        setAgentList([...agentList]);
    };

    const agentHandler = (data: IAgent) => {
        const isEdit = data.id !== undefined;
        if (isEdit) {
            editAgent(data);
        } else {
            createAgent(data);
        }
    };

    return (
        <div className="flex-1 mt-10 mx-10">
            <div className="flex justify-end">
                <UserNavigation />
            </div>

            <div className="flex justify-end mt-10">
                <AgentForm
                    buttonText={"CREATE AGENT"}
                    isEdit={false}
                    agent={{ name: "", status: undefined }}
                    onAgentHandler={agentHandler}
                />
            </div>

            <div className="mt-2">
                <Table>
                    <TableBody>
                        {agentList?.map((agent) => (
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
                                <TableCell className="text-right">
                                    <AgentForm
                                        buttonText={"EDIT"}
                                        isEdit={true}
                                        agent={agent}
                                        onAgentHandler={agentHandler}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Home;
