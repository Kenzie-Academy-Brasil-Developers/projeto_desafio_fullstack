import { StyledModalContainer } from "./style"
import { useForm } from 'react-hook-form';
import { ModalSchema, TModalSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import { useAuth } from "../../hooks/useAuth";
import { IModalFields, ModalProps } from "../../interfaces/props.interface";


export const Modal = ({ toggleModal }: ModalProps) => {

    const { handleSubmit, register, formState: { errors } } = useForm<TModalSchema>({ resolver: zodResolver(ModalSchema) })
    const { contacts, setContacts } = useAuth()
    const submit = (data: IModalFields) => {
        setContacts([...contacts, data])
        toggleModal()
    }

    return (
        <StyledModalContainer>
            <div className="modal_card">
                <h2>Cadastrar Contatos</h2>
                <button className="modal_card--close" onClick={toggleModal}>X</button>

                <form className="form_container" onSubmit={handleSubmit(submit)}>
                    <Input id="modal_name" type="text" placeholder="Nome completo" {...register("name")} error={errors.name && errors.name.message} />
                    <Input id="modal_email" type="text" placeholder="Email" {...register("email")} error={errors.email && errors.email.message} />
                    <Input id="modal_tel" type="tel" placeholder="Telefone" {...register("telephone")} error={errors.telephone && errors.telephone.message} />
                    <button type="submit" className="form_button--submit" >Cadastrar</button>
                </form>
            </div>
        </StyledModalContainer>
    )
}