import { useRegister } from "../../../hooks/useRegister"


export const ContactList = () => {
    const { contacts } = useRegister()
    return (
        <ul className="contact__list">
            {contacts.length === 0 ?
                <span className="contact__list--span">Você ainda não possui nenhum contato associado.</span>
                :
                <li></li>
            }
        </ul>
    )
}