import styled from "styled-components";

export const StyledLoginPage = styled.main`
  @media (min-width: 768px) {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    color: var(--color-secondary);
    > .title_container {
      width: 50%;
      height: 100%;
      background-color: var(--color-primary);
      color: var(--color-secondary);
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        width: 50%;
        font-size: 2rem;
      }
    }

    > .login_container {
      width: 50%;
      height: 100%;
      color: var(--gray-2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: var(--gray-0);
      h2 {
        align-self: center;
      }
      .form_container {
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 2rem;
        border: 1px solid var(--color-secondary);
        border-radius: 8px;

        .form_button--register {
          border: none;
          background: none;
          color: var(--color-secondary);
        }

        .form_button--register:hover {
          color: white;
        }

        .form_button--submit {
          margin-top: 0.75rem;
          background-color: transparent;
          padding: 0.5rem 2rem;
          font-size: 1rem;
          color: var(--gray-3);
          border: 1px solid var(--color-secondary);
          border-radius: 4px;
        }
        .form_button--submit:hover {
          color: var(--gray-0);
          background-color: var(--color-secondary);
        }

        .input_container {
          width: 100%;
          height: 2.1rem;
          position: relative;
          margin: 1rem 0;
          small {
            color: var(--color-error);
            position: absolute;
            top: 2.35rem;
            left: 20%;
          }
          .input_fieldset {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > input {
              width: 80%;
              height: 2.25rem;
              background-color: transparent;
              border: 1px solid white;
              border-radius: 8px;
              padding: 0.5rem;
            }
            > label {
              width: 20%;
            }
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    > .login_container .form_container {
      width: 60%;
    }
  }
`;
