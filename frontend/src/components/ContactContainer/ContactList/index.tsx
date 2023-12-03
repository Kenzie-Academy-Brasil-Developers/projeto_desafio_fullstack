// import { useRegister } from "../../../hooks/useRegister"
import { useAuth } from "../../../hooks/useAuth"
import { ContactItem } from "./ContactItem"


export const ContactList = () => {

    const { contacts } = useAuth()

    return (
        <ul className="contact__list">
            {contacts.length === 0 ?
                <span className="contact__list--span">Você ainda não possui nenhum contato associado.</span>
                :
                contacts.map(({ name, telephone }, index) => <ContactItem key={index + 1} name={name} tel={telephone} />)
            }
        </ul>
    )
}