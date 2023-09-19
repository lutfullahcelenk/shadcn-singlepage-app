"use client";

import {
    Dispatch,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useLayoutEffect,
    useState,
} from "react";

interface ContextProps {
    username: string;
    setUserName: Dispatch<SetStateAction<string>>;
    isLogin: any;
    setIsLogin: Dispatch<SetStateAction<any>>;
}

const GlobalContext = createContext<ContextProps>({
    username: "",
    isLogin: false,
    setIsLogin: () => false,
    setUserName: () => "",
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [username, setUserName] = useState("");

    useLayoutEffect(() => {
        const initIsLogin: any = localStorage.getItem("isLogin") || false;
        const initUsername: string = localStorage.getItem("username") || "";
        setIsLogin(JSON.parse(initIsLogin));
        setUserName(initUsername);
    }, []);

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
