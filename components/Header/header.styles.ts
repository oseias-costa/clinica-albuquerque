import styled from "styled-components";

export const HeaderContainer = styled.section`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
`;

export const MenuContainer = styled.nav`
  diplay: flex;

  #comoChegar {
    padding-right: 25px;
  }

  @media (max-width: 820px) {
    display: none;
  }
`;

export const LinkMenu = styled.a`
  padding-left: 10px;
  padding-right: 10px;
  color: var(--color-gray-text);
  font-size: 16px;
  transition: 0.2s linear;
  text-decoration: none;

  &:hover {
    color: var(--color-blue-ligth);
  }
`;
