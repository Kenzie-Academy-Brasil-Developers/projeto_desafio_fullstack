


interface IContactItemProps {
    name: string;
    tel: string
}

export const ContactItem = ({ name, tel }: IContactItemProps) => {
    return (
        <li className="contact__list--item">
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Imagem de perfil padrão" />
            <p>Nome:{name.length > 10 ? name.substring(0, 7) + "..." : name}</p>
            <small>Tel: {tel}</small>
        </li>
    )
}