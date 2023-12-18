import { useState } from "react"
import { useRegister } from "../../hooks/useRegister"
import { ContactList } from "./ContactList"
import { StyledContactContainer } from "./style"
import { Modal } from "../Modal"
import { useAuth } from "../../hooks/useAuth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


export const ContactContainer = () => {

    const { removeCount, addCount } = useRegister()
    const { register, contacts, setContacts, setUser } = useAuth();
    const [modalState, setModalState] = useState<boolean>(false)
    const navigate = useNavigate()

    const toggleModal = () => {
        setModalState(!modalState)
    }

    const backPage = () => {
        setContacts([])
        removeCount()
    }

    const createUser = async () => {
        if (contacts.length === 0) {
            return toast.warn("É necessário adicionar contatos")
        }
        try {
            addCount()
            const clientInfo = localStorage.getItem("client_info")
            const parsedInfo = JSON.parse(clientInfo!)
            register(parsedInfo)
            toast.success("Usuário criado com sucesso")
            setTimeout(() => navigate("/dashboard"), 3000)
        } catch (error) {
            setContacts([])
            setUser(null)
            navigate("/")
            return console.log(error)
        }
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
                <button className="contact__button" onClick={backPage}>Voltar</button>
                <button className="contact__button" onClick={createUser}>Registrar</button>
            </div>
        </StyledContactContainer>
    )
}