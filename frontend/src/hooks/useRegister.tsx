import { useContext } from "react"
import { RegisterContext } from "../contexts/RegisterContext"


export const useRegister = () => {
    const registerContext = useContext(RegisterContext)

    return registerContext
}