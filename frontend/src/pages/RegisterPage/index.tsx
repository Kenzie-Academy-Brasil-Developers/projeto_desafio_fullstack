import { SubmitHandler, useForm } from 'react-hook-form';
import './style.ts';
import { StyledRegisterPage } from './style.ts';
import { TRegisterData, registerSchema } from './validator.ts';
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js';
import Input from '../../components/Input/index';

export const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TRegisterData>({
        resolver: zodResolver(registerSchema)
    })

    const submit: SubmitHandler<TRegisterData> = (data: TRegisterData) => {
        console.log(data)
    }
    //TODO Criar componente de estágio de registro

    return (
        <StyledRegisterPage>
            <div className='div_container'>
                <form onSubmit={handleSubmit(submit)} className="form_container">
                    <Input
                        id='nome'
                        label='nome'
                        placeholder='nome'
                        type='text'
                        {...register("name")}
                        error={errors.name && errors.name.message}
                    />
                    <Input
                        id='email'
                        label='email'
                        placeholder='email'
                        type='text'
                        {...register("email")}
                        error={errors.email && errors.email.message}
                    />
                    <Input
                        id='password'
                        label='password'
                        placeholder='password'
                        type='password'
                        {...register("password")}
                        error={errors.password && errors.password.message}
                    />
                    <Input
                        id='telephone'
                        label='telephone'
                        placeholder='telephone'
                        type='number'
                        {...register("telephone")}
                        error={errors.telephone && errors.telephone.message}
                    />
                    <button type="submit">Registrar</button>
                </form>
            </div>
        </StyledRegisterPage>
    )
}