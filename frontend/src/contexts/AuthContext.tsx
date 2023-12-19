import { useNavigate } from 'react-router-dom';
import { MouseEvent, createContext } from "react";
import { api } from '../services/api';
import { useState } from 'react';
import { AuthContextProps, AuthContextValues, IUser, TLoginData, TRegisterData } from "../interfaces";
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import { TModalSchema } from '../components/Modal/validator';


export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)


export const AuthProvider = ({ children }: AuthContextProps) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser | null>(null);
    const [contacts, setContacts] = useState<TModalSchema[]>([])
    const [modalUser, setModalUser] = useState<TModalSchema | null>(null);
    const [loading, setLoading] = useState(true)
    const [modalState, setModalState] = useState<boolean>(false)

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
            localStorage.setItem("clientId", id);
            const res = await api.post("/login", { email, password })
            localStorage.setItem("clientToken", res.data.token)
            contacts.forEach(async (contactData) => await api.post("/contacts", { ...contactData }, { headers: { Authorization: `Bearer ${res.data.token}` } }))
            setUser(response.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message)
                return error
            }
            return error
        }
    }

    const removeItem = async (id: string) => {
        const newList = contacts.filter((_, i) => i !== Number(id))
        setContacts(newList)
    }

    const toggleModal = () => {
        if (modalState) {
            setModalState(false)

        } else {
            setModalState(true)
        }
    }

    const getModalInfo = (event: MouseEvent) => {
        const element = event.currentTarget;
        if (!(event.target instanceof HTMLButtonElement)) {
            const foundContact: TModalSchema | undefined = contacts.find((_, i) => element.id === String(i));
            if (!foundContact) {
                return undefined
            }
            setModalUser(foundContact)
            toggleModal()
        }

    }

    return (
        <AuthContext.Provider value={{
            signIn, register, user, setUser,
            contacts, setContacts, loading,
            setLoading, removeItem, modalUser,
            setModalUser, getModalInfo, modalState, setModalState, toggleModal
        }}>{children}</AuthContext.Provider>
    )
}

