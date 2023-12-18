import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  > .div_container {
    width: 90%;
    background-color: var(--gray-0);
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--color-secondary);
  }
  #loading {
    align-self: center;
    margin: auto;
  }
`;
