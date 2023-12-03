import { useEffect } from "react"
import { DashboardList } from "../../components/DashboardList"
import { Fieldset } from "../../components/Fieldset"
import { StyledDashboardContainer } from "./style"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


export const DashboardPage = () => {
    const navigate = useNavigate()
    const { setUser, setContacts, user } = useAuth()
    const token = localStorage.getItem("clientToken");
    const clientId = localStorage.getItem("clientId")

    useEffect(() => {
        const checkVerifications = async () => {

            try {
                if (!token) return navigate("/")


                if (!token) {
                    return navigate("/")
                }
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
                console.log(error)
            }
        }
        checkVerifications()
    }, [])

    if (!user) {
        return navigate("/")
    }

    const logout = () => {
        localStorage.clear()
        setUser(null)
        setContacts([])
        return navigate("/")
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

            </div>
        </StyledDashboardContainer>
    )
}