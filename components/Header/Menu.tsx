import Button from "../Button/Button";
import { LinkMenu, MenuContainer } from "./header.styles";

export default function Menu() {
  return (
    <MenuContainer>
      <LinkMenu href="#">Serviços</LinkMenu>
      <LinkMenu href="#">Informações</LinkMenu>
      <LinkMenu href="#">Como chegar</LinkMenu>
      <Button size="medium" color="blue">
        Contato
      </Button>
    </MenuContainer>
  );
}
