import styled from "styled-components";

export const ButtonContainer = styled.a<{ size: string; color: string }>`
  padding-left: 46px;
  padding-right: 46px;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: .2s linear;
  background-color: ${(props) =>
    props.color === "blue"
      ? "var(--color-blue-strong);"
      : "var(--color-white-text);"};
  border: ${(props) =>
    props.color === "blue"
      ? "2px solid var(--color-blue-strong);"
      : "2px solid var(--color-white-text);"};
  color: ${(props) =>
    props.color === "blue"
      ? "var(--color-white-text);"
      : "var(--color-blue-strong);"};
  border-radius: 17px;

  @media (max-width: 463px) {
    display: block;
    text-align: center;
  }

  &:hover{
    background-color: ${(props) =>
    props.color === "blue"
      ? "var(--color-white-text);"
      : "var(--color-blue-strong);"};
    color: ${(props) =>
      props.color === "blue"
      ? "var(--color-blue-strong);"
      : "var(--color-white-text);"};
  }
`;
