import { StyledModalContainer } from "./style"
import { useForm } from 'react-hook-form';
import { ModalSchema, TModalSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";


interface ModalProps {
    toggleModal: () => void
}

interface IModalFields {
    name: string;
    email: string;
    password: string;
}

export const Modal = ({ toggleModal }: ModalProps) => {

    const { handleSubmit, register, /*formState: { errors }*/ } = useForm<TModalSchema>({ resolver: zodResolver(ModalSchema) })

    const submit = (data: IModalFields) => {
        console.log(data)
    }

    return (
        <StyledModalContainer>
            <div className="modal_card">
                <h2>Cadastrar Contatos</h2>
                <button className="modal_card--close" onClick={toggleModal}>X</button>

                <form className="form_container" onClick={handleSubmit(submit)}>
                    <input id="name" placeholder="Insira o nome completo" {...register("name")} />
                    <input id="email" placeholder="Insira o nome completo" {...register("email")} />
                    <input id="tel" placeholder="Insira o nome completo" {...register("password")} />
                    <button type="submit" className="form_button--submit">Cadastrar</button>
                </form>
            </div>
        </StyledModalContainer>
    )
}