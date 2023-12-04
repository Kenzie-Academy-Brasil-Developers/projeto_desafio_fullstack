import { useAuth } from '../../../../hooks/useAuth';
import { IContactItemProps } from '../../../../interfaces/props.interface';


export const ContactItem = ({ id, full_name, tel }: IContactItemProps) => {

    const { removeItem } = useAuth()

    return (
        <li className="contact__list--item" id={id} >
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Imagem de perfil padrão" />
            <p>Nome: {full_name.length > 9 ? full_name.substring(0, 7) + "..." : full_name}</p>
            <small>Tel: {tel}</small>
            <button className="contact_item--delete" onClick={() => removeItem(id)}>X</button>
        </li>
    )
}