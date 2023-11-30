import React, { ReactNode, createContext, useState } from "react";


interface RegisterContextProps {
    children: ReactNode
}

export interface IContact {
    name: string;
    email: string;
    telephone: string;
}

interface RegisterContextValues {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    contacts: IContact[]
    setContacts: React.Dispatch<React.SetStateAction<IContact[]>>
    addCount: () => void
    removeCount: () => void
}


export const RegisterContext = createContext<RegisterContextValues>({} as RegisterContextValues)


export const RegisterProvider = ({ children }: RegisterContextProps) => {
    const [count, setCount] = useState<number>(1);
    const [contacts, setContacts] = useState<IContact[]>([])

    const addCount = () => {
        setCount(count + 1)
    }
    const removeCount = () => {
        setCount(count - 1)
    }

    return <RegisterContext.Provider value={{ count, setCount, contacts, setContacts, addCount, removeCount }}>
        {children}
    </RegisterContext.Provider>
}



