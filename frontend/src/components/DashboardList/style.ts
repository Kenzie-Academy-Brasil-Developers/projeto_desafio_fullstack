import styled from "styled-components";

export const DashboardListContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  li {
    width: 48%;
    height: 50%;
    padding: 0.5rem;
    .info_fieldset {
      width: 100%;
      height: 20%;
      display: flex;
      justify-content: space-between;
      .info_fieldset--info {
        color: var(--gray-1);
      }
    }
  }
`;
