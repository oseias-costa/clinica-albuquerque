import Image from "next/image";
import { HeaderContainer } from "./header.styles";
import Logo from "../../public/img/Logo-Transparente-SP-Implantes.png"
import Menu from "./Menu";

export default function Header() {
  return (
    <HeaderContainer>
      <Image src={Logo} alt="Clínica SP Implantes" width={280} />
      <Menu />
    </HeaderContainer>
  );
}
