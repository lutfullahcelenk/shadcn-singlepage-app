"use client";

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
    username: string;
    setUserName: Dispatch<SetStateAction<string>>;
    isLogin: boolean | undefined;
    setIsLogin: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext<ContextProps>({
    username: "",
    isLogin: false,
    setIsLogin: () => false,
    setUserName: () => "",
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const initUsername = localStorage.getItem("username") || "";
    const initIsLogin = localStorage.getItem("isLogin") || false;

    const [username, setUserName] = useState(initUsername);
    const [isLogin, setIsLogin] = useState();

    useEffect(() => {
        localStorage.setItem("isLogin", JSON.stringify(isLogin));
        localStorage.setItem("username", username);
    }, [isLogin, username]);

    return (
        <GlobalContext.Provider value={{ isLogin, setIsLogin, username, setUserName }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
