import { Routes, Route } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { LandingPage } from "../pages/LandingPage"


export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<LandingPage />} />
        </Routes>
    )
}