import styled from "styled-components";

export const StyledStagesContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  .stage_circle {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--color-bar-hover);
    color: var(--gray-2);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    p {
      font-weight: 600;
    }
    small {
      color: var(--color-bar-hover);
      position: absolute;
      width: 200px;
      font-size: 0.75rem;
      left: 2.5rem;
      bottom: 1rem;
    }
  }
  .stage_line {
    background-color: var(--color-bar-hover);
    width: 30%;
    height: 1px;
  }
  .finished {
    background-color: var(--color-bar);
  }
`;
