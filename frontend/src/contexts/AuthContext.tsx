import { ReactNode, createContext } from "react";
import { TLoginData } from "../pages/LoginPage/validator";
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


interface AuthContextProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: TLoginData) => void;
    register: (data: string) => void;
    user: IUser | null;
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IUser {
    full_name: string;
    email: string;
    telephone: string;
}


export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)


export const AuthProvider = ({ children }: AuthContextProps) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser | null>(null);

    const signIn = async (data: TLoginData) => {
        try {
            const response = await api.post("/login", data)
            const { token } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("clientToken", token)
            navigate("dashboard")
        } catch (error) {
            console.log(error)
        }

    }

    const register = async (data: string) => {
        try {
            const response = await api.post("/users", data)
            const { token } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("clientToken", token)
            navigate("contacts")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, register, user, setUser }}>{children}</AuthContext.Provider>
    )
}

