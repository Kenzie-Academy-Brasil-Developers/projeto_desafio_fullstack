import { useNavigate } from 'react-router-dom';
import { createContext } from "react";
import { api } from '../services/api';
import { useState } from 'react';
import { AuthContextProps, AuthContextValues, IContact, IUser, TLoginData, TRegisterData } from "../interfaces";
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';


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
            toast.success("Login realizado com sucesso", { autoClose: 2000, pauseOnHover: false, theme: "dark" })
            setTimeout(() => {
                navigate("/dashboard")
            }, 3000)
            return response
        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(`${error.response?.data.message}`, { autoClose: 2000, pauseOnHover: false, theme: "dark" })
            }
            return error
        }

    }

    const register = async (data: TRegisterData) => {
        try {
            const response = await api.post("/clients", data)
            const { password } = data
            const { email, id } = response.data;
            localStorage.setItem("clientId", JSON.stringify(id));
            const res = await api.post("/login", { email, password })
            localStorage.setItem("clientToken", res.data.token)
            contacts.forEach(async (data) => await api.post("/contacts", { data }, { headers: { Authorization: `Bearer ${res.data.token}` } }))
            setUser(response.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message)
                return error
            }
            return error
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, register, user, setUser, contacts, setContacts, loading, setLoading }}>{children}</AuthContext.Provider>
    )
}

