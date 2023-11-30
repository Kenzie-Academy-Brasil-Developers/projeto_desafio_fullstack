import { useRegister } from "../../hooks/useRegister"
import { ContactItem } from "./ContactList/ContactItem"
import { StyledContactContainer } from "./style"


export const ContactContainer = () => {

    const { removeCount } = useRegister()


    return (
        <StyledContactContainer>
            <div className="contact__heading">
                <h3 className="contact_heading--title">Seus contatos</h3>
                <button className="contact_heading--button">Adicionar</button>
            </div>

            <ul className="contact__list">
                {/* {contacts.length === 0 ?
                    <span className="contact__list--span">Você ainda não possui nenhum contato associado.</span>
                    :
                    <ContactItem name={"ericzin"} tel={"88585594"} />
                } */}
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzinaaa"} tel={"88585594"} />
                <ContactItem name={"ericzin"} tel={"88585594"} />
                <ContactItem name={"ericzinaasdfsdf"} tel={"88585594"} />
            </ul>

            <div className="contact__buttons">
                <button className="contact__button" onClick={removeCount}>Voltar</button>
                <button className="contact__button">Registrar</button>
            </div>
        </StyledContactContainer>
    )
}