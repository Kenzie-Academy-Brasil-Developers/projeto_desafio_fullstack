import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  > .client_card {
    width: 80%;
    height: 100%;
    background-color: var(--gray-0);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > .client_card--profile {
      h3 {
        color: var(--color-secondary);
      }
      width: 75%;
      height: 30%;
      color: var(--gray-2);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .info_fieldset {
        display: flex;
        justify-content: space-between;
      }
    }
    > .client_card--contacts {
      h3 {
        color: var(--color-secondary);
      }
      width: 75%;
      height: 50%;
      color: var(--gray-2);
      display: flex;
      flex-direction: column;
    }
  }
`;
