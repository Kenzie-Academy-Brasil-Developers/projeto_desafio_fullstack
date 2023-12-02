import { useState } from "react"
import { useRegister } from "../../hooks/useRegister"
import { ContactList } from "./ContactList"
import { StyledContactContainer } from "./style"
import { Modal } from "../Modal"
// import { api } from "../../services/api"


export const ContactContainer = () => {

    const { removeCount } = useRegister()
    const [modalState, setModalState] = useState<boolean>(false)
    const toggleModal = () => {
        setModalState(!modalState)
    }
    const [loading, setLoading] = useState(false)
    const register = async () => {
        try {
            setLoading(true)
            const clientInfo = localStorage.getItem("client_info")
            const parsedInfo = JSON.parse(clientInfo!)
            console.log(parsedInfo)
            // const response = await api.post("/client", { parsedInfo })
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    return (
        <StyledContactContainer>
            {loading ?
                <h3 id="loading">Carregando suas informações ...</h3>
                :
                <>
                    <div className="contact__heading">
                        <h3 className="contact_heading--title">Seus contatos</h3>
                        <button className="contact_heading--button" onClick={toggleModal}>Adicionar</button>
                    </div>

                    {modalState && <Modal toggleModal={toggleModal} />}

                    <ContactList />

                    <div className="contact__buttons">
                        <button className="contact__button" onClick={removeCount}>Voltar</button>
                        <button className="contact__button" onClick={register}>Registrar</button>
                    </div>
                </>
            }
        </StyledContactContainer>
    )
}