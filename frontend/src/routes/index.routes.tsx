import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { RegisterProvider } from "../contexts/RegisterContext"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
                path="/register"
                element={
                    <RegisterProvider>
                        <RegisterPage />
                    </RegisterProvider>}
            />
        </Routes>
    )
}