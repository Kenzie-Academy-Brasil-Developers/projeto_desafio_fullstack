import { StyledModalContainer } from "./style"
import { useForm } from 'react-hook-form';
import { ModalSchema, TModalSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import { useAuth } from "../../hooks/useAuth";
import { ModalProps } from "../../interfaces/props.interface";


export const Modal = ({ toggleModal }: ModalProps) => {

    const { handleSubmit, register, formState: { errors } } = useForm<TModalSchema>({ resolver: zodResolver(ModalSchema) })
    const { contacts, setContacts, modalUser, setModalUser } = useAuth()
    const submit = (data: TModalSchema) => {
        if (modalUser) {
            const newList = contacts.filter((_, i) => i !== Number(modalUser.id))
            setContacts([...newList, data])
            setModalUser(null)
            return toggleModal()
        }
        setContacts([...contacts, data])
        setModalUser(null)
        toggleModal()
    }

    return (
        <StyledModalContainer>
            <div className="modal_card">
                <h2>Cadastrar Contatos</h2>
                <button className="modal_card--close" onClick={toggleModal}>X</button>

                <form className="form_container" onSubmit={handleSubmit(submit)}>
                    <Input id="modal_name" type="text" placeholder="Nome completo" {...register("full_name")} error={errors.full_name && errors.full_name.message} />
                    <Input id="modal_email" type="text" placeholder="Email" {...register("email")} error={errors.email && errors.email.message} />
                    <Input id="modal_tel" type="tel" placeholder="Telefone" {...register("telephone")} error={errors.telephone && errors.telephone.message} />
                    <input id="id_number" type="number" value={contacts.length} {...register("id")} />
                    <button type="submit" className="form_button--submit">Cadastrar</button>
                </form>
            </div>
        </StyledModalContainer>
    )
}