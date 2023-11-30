import styled from "styled-components";

export const StyledLandingPage = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--color-darkred);
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 90%;
    height: 100%;
    background-color: var(--gray-0);
    .div_container {
      color: var(--color-secundary);
    }
  }
`;
