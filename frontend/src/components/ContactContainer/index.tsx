import { useState } from "react"
import { useRegister } from "../../hooks/useRegister"
import { ContactList } from "./ContactList"
import { StyledContactContainer } from "./style"
import { Modal } from "../Modal"


export const ContactContainer = () => {

    const { removeCount } = useRegister()
    const [modalState, setModalState] = useState<boolean>(false)
    const toggleModal = () => {
        setModalState(!modalState)
    }
    const register = () => {
        // const clientInfo = localStorage.getItem("client_info")
        
    }

    return (
        <StyledContactContainer>
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
        </StyledContactContainer>
    )
}