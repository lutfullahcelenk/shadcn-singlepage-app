"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IAgent } from "@/lib/type";
import Spinner from "@/components/icons/Spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

interface AgentFormProps extends React.HTMLAttributes<HTMLDivElement> {
    buttonText: string;
    isEdit: boolean;
    agent: IAgent;
    // onAgentHandler: (agent: z.infer<typeof formSchema>) => void;
}

const formSchema = z.object({
    name: z.string().trim().min(1, {
        message: "Please enter a name mininum length 1.",
    }),
    status: z.string({
        required_error: "Please select an status.",
    }),
});

const AgentForm = (props: AgentFormProps) => {
    const { buttonText, isEdit, agent } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: agent.name,
            status: agent.status,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        setTimeout(() => {
            setOpen(false);
            // onAgentHandler({ ...agent, ...values });
            setIsLoading(false);
        }, 1000);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={isEdit ? "outline" : "default"}>{buttonText}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{isEdit ? "EDIT" : "CREATEAGENT"}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            autoFocus={false}
                                            placeholder="Entry a name"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="text-right">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading && <Spinner className="mr-2 h-4 w-4 animate-spin" />}
                                {isEdit ? "UPDATE" : "CREATE"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default AgentForm;
