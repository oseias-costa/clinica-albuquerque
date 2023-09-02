import Button from "../Button/Button";
import { LinkMenu, MenuContainer } from "./header.styles";

export default function Menu() {
  return (
    <MenuContainer>
      <LinkMenu href="#Servicos">Serviços</LinkMenu>
      <LinkMenu href="#Informacoes">Informações</LinkMenu>
      <LinkMenu href="#ComoChegar">Como chegar</LinkMenu>
      <Button size="medium" color="blue" id="contactButton">
        Contato
      </Button>
    </MenuContainer>
  );
}
