import styled from "styled-components";

export const StyledFormContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .form_container {
    width: 80%;
    height: 100%;
    display: flex;
    gap: 3rem;
    flex-direction: column;
    margin: 2rem 0;
    > .input_container {
      width: 100%;
      position: relative;

      small {
        color: var(--color-error);
        position: absolute;
        top: 2.6rem;
        left: 15%;
      }
      > .input_fieldset {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        input {
          width: 85%;
          height: 2.5rem;
          padding: 0.5rem 1rem;
          color: var(--gray-3);
          border: 1px solid var(--color-secondary);
          background-color: transparent;
          font-size: 0.9rem;
          border-radius: 4px;
        }
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
        label {
          width: 15%;
        }
      }
    }
  }

  .form_buttons {
    display: flex;
    align-self: center;
    width: 70%;
    justify-content: space-between;
    .form_button {
      align-self: center;
      padding: 0.5rem 1rem;
      width: 45%;
      border-radius: 0.5rem;
      border: 1px solid var(--color-secondary);
      color: var(--color-secondary);
      font-size: 1rem;
      background-color: transparent;
      transition: 0.3s ease;
    }
    .form_button:hover {
      transition: 0.5s ease;
      background-color: var(--color-secondary);
      color: var(--gray-0);
    }
  }
`;
