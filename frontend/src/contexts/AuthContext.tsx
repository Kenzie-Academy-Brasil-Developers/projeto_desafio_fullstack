import { useNavigate } from 'react-router-dom';
import { createContext } from "react";
import { api } from '../services/api';
import { useState } from 'react';
import { AuthContextProps, AuthContextValues, IContact, IUser, TLoginData, TRegisterData } from "../interfaces";
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';


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
            const decoded = jwtDecode(response.data.token)
            localStorage.setItem("clientId", decoded.sub!)
            toast.success("Login realizado com sucesso", { autoClose: 3000 })
            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)
            return response
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(`${error.response?.data.message}`)
            }
            console.log(error)
        }

    }

    const register = async (data: TRegisterData) => {
        try {
            const response = await api.post("/clients", data)
            const { data: { email, password, id } } = response;
            localStorage.setItem("clientId", JSON.stringify(id));
            const logged = await api.post("/login", { email, password })
                .then(res => {
                    localStorage.setItem("clientToken", JSON.stringify(res.data.token))
                })
            contacts.forEach(async (data) => await api.post("/contacts", { data }))
            return logged
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, register, user, setUser, contacts, setContacts, loading, setLoading }}>{children}</AuthContext.Provider>
    )
}

