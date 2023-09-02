import { FooterContainer, LogoFooter } from './footer.styles';
import FooterMenu from './FooterMenu'
import Logo from "../../public/logo-footer.png";
import FooterMidias from './FooterMidias';

export default function Footer() {
  return (
    <FooterContainer>
      <LogoFooter
        src={Logo}
        alt="Logo Clínica Odontológica Albuquerque de Osasco SP"
      />
      <FooterMenu />
      <FooterMidias />
    </FooterContainer>
  );
}
