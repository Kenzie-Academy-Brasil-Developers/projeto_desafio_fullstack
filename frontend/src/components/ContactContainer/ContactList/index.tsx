// import { useRegister } from "../../../hooks/useRegister"
import { ContactItem } from "./ContactItem"


export const ContactList = () => {
    // const { contacts } = useRegister()

    const contatos = [{ name: "eric", email: "eric", telephone: "323423424" }]

    return (
        <ul className="contact__list">
            {contatos.length === 0 ?
                <span className="contact__list--span">Você ainda não possui nenhum contato associado.</span>
                :
                contatos.map(({ name, telephone }, index) => <ContactItem key={index + 1} name={name} tel={telephone} />)
            }
        </ul>
    )
}