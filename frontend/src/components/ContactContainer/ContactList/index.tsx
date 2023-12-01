import { useRegister } from "../../../hooks/useRegister"
import { ContactItem } from "./ContactItem"


export const ContactList = () => {
    const { contacts } = useRegister()
    return (
        <ul className="contact__list">
            {contacts.length === 0 ?
                <span className="contact__list--span">Você ainda não possui nenhum contato associado.</span>
                :
                contacts.map(({ name, telephone }) => <ContactItem name={name} tel={telephone} />)
            }
        </ul>
    )
}