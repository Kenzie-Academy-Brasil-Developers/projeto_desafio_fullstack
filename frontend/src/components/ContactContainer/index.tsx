import { useState } from "react"
import { useRegister } from "../../hooks/useRegister"
import { ContactList } from "./ContactList"
import { StyledContactContainer } from "./style"
import { Modal } from "../Modal"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/useAuth"


export const ContactContainer = () => {

    const { removeCount, addCount } = useRegister()
    const { setUser, contacts } = useAuth()
    const [modalState, setModalState] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)

    const toggleModal = () => {
        setModalState(!modalState)
    }
    const register = async () => {
        addCount()
        try {
            setLoading(true)
            const clientInfo = localStorage.getItem("client_info")
            const parsedInfo = JSON.parse(clientInfo!)
            const response = await api.post("/clients", { ...parsedInfo })
            contacts.forEach(async (data) => await api.post("/contacts", { data }))
            setUser(response.data)
        } catch (error) {
            removeCount()
            setLoading(false)
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