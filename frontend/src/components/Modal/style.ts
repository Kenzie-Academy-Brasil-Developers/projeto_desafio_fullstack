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
  > .modal_card {
    position: relative;
    color: var(--color-secondary);
    width: 100%;
    max-width: 400px;
    height: 300px;
    padding: 20px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.25);
    background-color: var(--gray-0);
    border: 1px solid var(--color-secondary);
    border-radius: 8px;
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
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  .form_container {
    .form_button--submit {
        
    }
  }
`;
