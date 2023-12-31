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
      width: 75%;
      height: 40%;
      color: var(--gray-2);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      position: relative;
      #logout {
        width: 30%;
        height: 18%;
        background-color: var(--color-secondary);
        border-radius: 4px;
        font-size: 1rem;
        font-family: "Poppins", sans-serif;
        position: absolute;
        top: 0;
        right: 0;
      }
      #logout:hover {
        background-color: var(--color-error);
      }
      h3 {
        width: 60%;
        color: var(--color-secondary);
      }
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

  @media (min-width: 768px) {
    .client_card .client_card--profile #logout {
      width: 15%;
      height: 15%;
    }
    .client_card .client_card--profile {
      height: 32%;

      h3 {
        color: var(--color-secondary);
      }
    }
  }
`;
