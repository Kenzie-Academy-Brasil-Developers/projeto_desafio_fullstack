import { StyledRegisterPage } from './style.ts';
import { useRegister } from '../../hooks/useRegister.tsx';
import { FormContainer } from '../../components/FormContainer/index.tsx';
import { ContactContainer } from '../../components/ContactContainer/index.tsx';

export const RegisterPage = () => {

    const { count } = useRegister();
    //TODO Criar componente de estágio de registro

    return (
        <StyledRegisterPage>
            <div className='div_container'>

                <div className='stages_container'> {count} </div>

                {count == 1 && <FormContainer />}

                {count == 2 && <ContactContainer />}

                {count == 3 && <h3 id="loading">Carregando suas informações ...</h3>}

            </div>
        </StyledRegisterPage>
    )
}