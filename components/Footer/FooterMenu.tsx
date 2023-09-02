import { FooterMenuContainer, FooterLink } from "./footer.styles";

export default function FooterMenu() {
  return (
    <FooterMenuContainer>
      <FooterLink href="#">Início</FooterLink>
      <FooterLink href="#Servicos">Serviços</FooterLink>
      <FooterLink href="#Informacoes">Informações</FooterLink>
    </FooterMenuContainer>
  );
}
