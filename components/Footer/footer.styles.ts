import Image from "next/image";
import styled from "styled-components";

export const FooterContainer = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: var(--color-blue-strong);
  padding-top: 46px;
  padding-bottom: 46px;

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const FooterMenu = styled.div``;

export const FooterLink = styled.a`
  color: #fff;
  padding-bottom: 7px;
  cursor: pointer;
  transition: 0.2s linear;
  text-decoration: none;

  &:hover {
    color: var(--color-blue-ligth);
  }
`;

export const FooterMenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 740px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const LogoFooter = styled(Image)``;

export const FooterMidiasContainer = styled.div`
  display: flex;
`;

export const IconMidia = styled(Image)`
  width: 41px;
  height: 41px;
  margin-left: 10px;
`;
