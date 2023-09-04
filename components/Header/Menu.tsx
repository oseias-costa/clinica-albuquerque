import Button from "../Button/Button";
import { LinkMenu, MenuContainer } from "./header.styles";

export default function Menu() {
  return (
    <MenuContainer>
      <LinkMenu href="#Servicos">Serviços</LinkMenu>
      <LinkMenu href="#Informacoes">Informações</LinkMenu>
      <LinkMenu href="#ComoChegar" id='comoChegar'>Como chegar</LinkMenu>
      <Button size="medium" color="blue">
        Contato
      </Button>
    </MenuContainer>
  );
}
