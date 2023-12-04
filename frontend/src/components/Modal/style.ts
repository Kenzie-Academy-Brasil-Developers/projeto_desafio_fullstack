import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  > .modal_card {
    position: relative;
    color: var(--color-secondary);
    width: 100%;
    max-width: 550px;
    height: 418px;
    padding: 2rem 4rem;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    background-color: var(--gray-0);
    border: 1px solid var(--color-secondary);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    h2 {
      align-self: center;
      font-weight: 500;
    }
    > .modal_card--close {
      padding: 0.25rem 0.5rem;
      background-color: transparent;
      position: absolute;
      right: 16px;
      top: 20px;
      border-radius: 4px;
      font-size: 1rem;
      color: #fff;
    }
    > .modal_card--close:hover {
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  .form_container {
    width: 100%;
    height: 85%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    > .input_container {
      width: 100%;
      position: relative;
      .input_fieldset {
        padding: 0.75rem 1rem;
        height: 3rem;
        border: 1px solid var(--color-secondary);
        border-radius: 8px;
        background-color: transparent;
        font-size: 0.8rem;
        color: var(--gray-3);
        display: flex;
        align-items: center;
        input {
          border: none;
          background: none;
          color: var(--gray-3);
          font-size: 1rem;
          width: 100%;
        }
      }
      small {
        color: var(--color-error);
        position: absolute;
        top: 3.2rem;
        left: 0;
        font-size: 0.75rem;
      }
    }
    .form_button--submit {
      background-color: var(--color-secondary);
      border-radius: 8px;
      padding: 0.75rem 1rem;
      color: white;
      font-size: 1rem;
      font-weight: 600;
    }
    .form_button--submit:hover {
      background-color: #fff;
      color: var(--color-secondary);
    }
  }
`;
