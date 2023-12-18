import styled from "styled-components";

export const StyledContactContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 32rem;
  .contact__heading {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .contact_heading--title {
      color: var(--gray-3);
      font-size: 18px;
    }
    .contact_heading--button {
      width: 15%;
      padding: 0.5rem 1rem;
      color: var(--gray-3);
      font-size: 1rem;
      font-weight: 600;
      border-radius: 4px;
      background-color: var(--color-secondary);
    }
    .contact_heading--button:hover {
      color: var(--color-secondary);
      background-color: #fff;
    }
  }

  .contact__list {
    padding: 2rem;
    height: 24rem;
    border: 1px solid var(--color-secondary);
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 20%);
    overflow-y: auto;
    .contact__list--item {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      flex-direction: column;
      width: 25%;
      height: 70%;
      border: 1px solid white;
      padding: 0.5rem;
      border-radius: 4px;
      transition: 0.5s ease;
      position: relative;

      .contact_item--delete {
        position: absolute;
        font-weight: 600;
        width: 1.75rem;
        height: 1.5rem;
        right: 0.4rem;
        top: 0.4rem;
        border-radius: 8px;
        color: var(--gray-2);
        background: transparent;
      }
      .contact_item--delete:hover {
        background-color: var(--color-error);
      }

      img {
        width: 70%;
        height: 70%;
      }
      p {
        color: gray;
      }
      small {
        color: greenyellow;
        letter-spacing: 1px;
      }
    }
    .contact__list--item:hover {
      transition: 0.5s ease;
      cursor: pointer;
      scale: 1.1;
      background-color: var(--color-primary);
      border: 1px solid var(--color-secondary);
    }
    .contact__list--span {
      align-self: center;
      margin: 0 auto;
      color: var(--gray-1);
    }
  }

  .contact__buttons {
    display: flex;
    align-self: center;
    width: 70%;
    justify-content: space-between;
    .contact__button {
      align-self: center;
      padding: 0.5rem 1rem;
      width: 45%;
      border-radius: 0.5rem;
      border: 1px solid var(--color-secondary);
      color: var(--color-secondary);
      font-size: 1rem;
      background-color: transparent;
      transition: 0.3s ease;
    }
    .contact__button:hover {
      transition: 0.5s ease;
      background-color: var(--color-secondary);
      color: var(--gray-0);
    }
  }
`;
