import { useForm, SubmitHandler } from "react-hook-form"
import { StyledLoginPage } from "./style"
import { TLoginData, loginSchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "../../components/Input"



export const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<TLoginData>({
        resolver: zodResolver(loginSchema)
    });

    const submit: SubmitHandler<TLoginData> = (data: TLoginData): void => {
        console.log(data)
    }
    return (
        <StyledLoginPage>
            <div className="title_container">
                <h1>Torne-se cliente agora mesmo</h1>
            </div>

            <div className="login_container">

                <form className="form_container" onSubmit={handleSubmit(submit)}>
                    <h2>Login</h2>
                    <Input
                        id="email"
                        label="Email"
                        type="text"
                        placeholder="Insira seu email"
                        {...register("email")}
                        error={errors.email && errors.email.message}
                    />
                    <Input
                        id="password"
                        label="Senha"
                        type="password"
                        placeholder="Insira sua senha"
                        {...register("password")}
                        error={errors.password && errors.password.message}
                    />
                    <button className="form_button--submit " type="submit">Entrar</button>
                </form>
            </div>
        </StyledLoginPage>
    )
}