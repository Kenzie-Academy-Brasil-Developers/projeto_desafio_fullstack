import styled from "styled-components";

export const StyledRegisterPage = styled.main`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  > .div_container {
    width: 90%;
    height: 100%;
    background-color: var(--gray-0);
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--color-secondary);
    > .stages_container {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      margin: 2rem 0;
    }
  }
`;
