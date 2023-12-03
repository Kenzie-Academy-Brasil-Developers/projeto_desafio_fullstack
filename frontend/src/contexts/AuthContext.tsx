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
    const [loading, setLoading] = useState(true)

    const signIn = async (data: TLoginData) => {
        try {
            const response = await api.post("/login", data)
            localStorage.setItem("clientToken", response.data.token)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }

    }

    const register = async (data: TRegisterData) => {
        try {
            const response = await api.post("/clients", data)
            const { email, password } = data;
            const logged = await api.post("/login", { email, password })
                .then(res => {
                    localStorage.setItem("clientToken", res.data)
                    localStorage.setItem("clientId", res.data.user.id)
                })
            contacts.forEach(async (data) => await api.post("/contacts", { data }))
            setUser(response.data)
            return logged
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, register, user, setUser, contacts, setContacts, loading, setLoading }}>{children}</AuthContext.Provider>
    )
}

