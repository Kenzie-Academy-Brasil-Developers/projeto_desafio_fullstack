import { useEffect } from "react"
import { DashboardList } from "../../components/DashboardList"
import { Fieldset } from "../../components/Fieldset"
import { StyledDashboardContainer } from "./style"
// import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"


export const DashboardPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("clientToken");
        const client = localStorage.getItem("client_info");
        if (!client || !token) {
            return navigate("/")
        }
        try {
            // const response = await api.get(`/clients`)
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <StyledDashboardContainer>
            <div className="client_card">
                <div className="client_card--profile">
                    <h3>Informações Gerais</h3>
                    <Fieldset label={"Nome Completo"} info={"Eric Vinicius Felix Silva"} />
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