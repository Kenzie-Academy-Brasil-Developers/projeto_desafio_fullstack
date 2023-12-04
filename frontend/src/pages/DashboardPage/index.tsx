import { useEffect } from "react"
import { DashboardList } from "../../components/DashboardList"
import { Fieldset } from "../../components/Fieldset"
import { StyledDashboardContainer } from "./style"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { toast, ToastContainer } from 'react-toastify';


export const DashboardPage = () => {
    const navigate = useNavigate()
    const { setUser, setContacts, user } = useAuth()
    const token = localStorage.getItem("clientToken");
    const clientId = localStorage.getItem("clientId")

    useEffect(() => {
        const checkVerifications = async () => {

            try {
                if (!token) return navigate("/")

                const response = await api.get(`/clients/${clientId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const contacts = await api.get(`/contacts`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setContacts(contacts.data)
                setUser(response.data)
            } catch (error) {
                console.error(error)
                return navigate("/")
            }
        }
        checkVerifications()
    }, [])

    if (!user) {
        return navigate("/")
    }

    const logout = () => {
        toast.success("Logout realizado com sucesso", { pauseOnHover: false, autoClose: 2000, theme: "dark" })
        return setTimeout(() => {
            localStorage.clear()
            setUser(null)
            setContacts([])
        }, 2500)
    }

    return (
        <StyledDashboardContainer>
            <div className="client_card">
                <div className="client_card--profile">
                    <h3>Informações Gerais</h3>
                    <button id="logout" onClick={logout}>Sair</button>
                    <Fieldset label={"Nome Completo"} info={user.full_name} />
                    <Fieldset label={"Email"} info={user.email} />
                    <Fieldset label={"Telefone"} info={user.telephone} />
                </div>

                <div className="client_card--contacts">
                    <h3>Informações dos contatos</h3>
                    <DashboardList />
                </div>

                <ToastContainer />

            </div>
        </StyledDashboardContainer>
    )
}