import { createContext, useState } from "react";
import { RegisterContextProps, RegisterContextValues } from "../interfaces";


export const RegisterContext = createContext<RegisterContextValues>({} as RegisterContextValues)


export const RegisterProvider = ({ children }: RegisterContextProps) => {
    const [count, setCount] = useState<number>(1);

    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () => {
        setCount(count - 1)
    }

    return <RegisterContext.Provider value={{ count, setCount, addCount, removeCount }}>
        {children}
    </RegisterContext.Provider>
}



