import { StyledRegisterPage } from './style.ts';
import { useRegister } from '../../hooks/useRegister.tsx';
import { FormContainer } from '../../components/FormContainer/index.tsx';
import { ContactContainer } from '../../components/ContactContainer/index.tsx';
import { ToastContainer } from 'react-toastify';
import { StagesContainer } from '../../components/StagesContainer/index.tsx';

export const RegisterPage = () => {

    const { count } = useRegister();

    return (
        <StyledRegisterPage>
            <div className='div_container'>

                <StagesContainer count={count} />

                {count == 1 && <FormContainer />}

                {count == 2 && <ContactContainer />}

                {count == 3 && <h3 id="loading">Carregando suas informações ...</h3>}

                <ToastContainer />
            </div>
        </StyledRegisterPage>
    )
}