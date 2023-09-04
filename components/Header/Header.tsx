import Image from "next/image";
import { HeaderContainer } from "./header.styles";
import Logo from "../../public/logo-oral-brasil-header.svg";
import Menu from "./Menu";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={Logo} alt="Logo Clínica Albuquerque" />
      <Menu />
    </HeaderContainer>
  );
}
