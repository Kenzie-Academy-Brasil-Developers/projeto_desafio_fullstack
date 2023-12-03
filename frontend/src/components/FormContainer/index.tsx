import { useNavigate } from "react-router-dom"
import { StyledFormContainer } from "./styles"
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerSchema } from "../../pages/RegisterPage/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../../hooks/useRegister";
import Input from "../Input";
import { TRegisterData } from "../../interfaces";


export const FormContainer = () => {
    const { addCount } = useRegister()

    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
        resolver: zodResolver(registerSchema)
    });

    const submit: SubmitHandler<TRegisterData> = (data: TRegisterData) => {
        localStorage.setItem("client_info", JSON.stringify(data))
        addCount()
    };

    const navigate = useNavigate();

    return (
        <StyledFormContainer>
            <h2>Cadastre-se</h2>
            <small>Rápido e fácil</small>

            <form onSubmit={handleSubmit(submit)} className="form_container">
                <Input
                    id='nome'
                    label='Nome'
                    placeholder='Insira seu nome'
                    type='text'
                    {...register("full_name")}
                    error={errors.full_name && errors.full_name.message}
                />
                <Input
                    id='email'
                    label='Email'
                    placeholder='Insira seu email'
                    type='text'
                    {...register("email")}
                    error={errors.email && errors.email.message}
                />
                <Input
                    id='password'
                    label='Password'
                    placeholder='Insira sua senha'
                    type='password'
                    {...register("password")}
                    error={errors.password && errors.password.message}
                />
                <Input
                    id='telephone'
                    label='Telephone(+55)'
                    placeholder='Insira seu telefone'
                    type='number'
                    maxLength={11}
                    pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                    {...register("telephone")}
                    error={errors.telephone && errors.telephone.message}
                />
                <div className="form_buttons">
                    <button className='form_button' onClick={() => navigate("/")}>Voltar</button>
                    <button className='form_button' type="submit">Próximo passo</button>
                </div>
            </form>
        </StyledFormContainer>
    )
}