"use client";

import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
    username: string;
    setUserName: Dispatch<SetStateAction<string>>;
    isLogin: boolean;
    setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
    username: "",
    isLogin: false,
    setIsLogin: () => false,
    setUserName: () => "",
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [username, setUserName] = useState("Lutfullah");
    const [isLogin, setIsLogin] = useState(false);

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
