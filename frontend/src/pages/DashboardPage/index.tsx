import { useEffect } from "react"
import { DashboardList } from "../../components/DashboardList"
import { Fieldset } from "../../components/Fieldset"
import { StyledDashboardContainer } from "./style"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


export const DashboardPage = () => {
    const navigate = useNavigate()
    const { setUser, setContacts } = useAuth()

    useEffect(() => {
        async () => {
            try {
                const token = localStorage.getItem("clientToken");
                const clientId = localStorage.getItem("clientId")
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
    }, [])

    return (
        <StyledDashboardContainer>
            <div className="client_card">
                <div className="client_card--profile">
                    <h3>Informações Gerais</h3>
                    <Fieldset label={"Nome Completo"} info={"full_name"} />
                    <Fieldset label={"Email"} info={"ericviniciusfelixsilva@gmail.com"} />
                    <Fieldset label={"Telefone"} info={"69981596969"} />
                </div>

                <div className="client_card--contacts">
                    <h3>Informações dos contatos</h3>
                    <DashboardList />
                </div>

            </div>
        </StyledDashboardContainer>
    )
}