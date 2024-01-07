import styled from "styled-components";

export const DashboardListContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  li {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    .info_fieldset {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2px;
      .info_fieldset--info {
        color: var(--gray-1);
      }
    }
  }
  @media (min-width: 768px) {
    li {
      width: 48%;
      height: 50%;
      .info_fieldset {
        height: 20%;
        justify-content: space-between;
        flex-direction: row;
      }
    }
  }
`;
