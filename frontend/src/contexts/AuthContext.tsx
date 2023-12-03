import { useNavigate } from 'react-router-dom';
import { createContext } from "react";
import { api } from '../services/api';
import { useState } from 'react';
import { AuthContextProps, AuthContextValues, IContact, IUser, TLoginData, TRegisterData } from "../interfaces";


export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)


export const AuthProvider = ({ children }: AuthContextProps) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser | null>(null);
    const [contacts, setContacts] = useState<IContact[]>([])

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

    const register = async (data: TRegisterData) => {
        try {
            const response = await api.post("/clients", data)
            const { token } = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("clientToken", token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, register, user, setUser, contacts, setContacts }}>{children}</AuthContext.Provider>
    )
}

