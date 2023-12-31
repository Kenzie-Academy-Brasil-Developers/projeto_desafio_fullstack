import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { RegisterProvider } from "../contexts/RegisterContext"
import { NotFound } from "../pages/NotFound"
import { DashboardPage } from '../pages/DashboardPage';


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
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard" element={
                <RegisterProvider>
                    <DashboardPage />
                </RegisterProvider>}
            />
        </Routes>
    )
}