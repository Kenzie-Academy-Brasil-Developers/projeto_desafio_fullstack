import { ReactNode, createContext } from "react";
import { TLoginData } from "../pages/LoginPage/validator";
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';


interface AuthContextProps {
    children: ReactNode
}

interface AuthContextValues {
    signIn: (data: TLoginData) => void;
}


export const AuthContext = createContext<AuthContextValues>({} as AuthContextValues)


export const AuthProvider = ({ children }: AuthContextProps) => {

    const navigate = useNavigate();

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

    return (
        <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
    )
}

