import { ButtonContainer } from "./button.styles";
import { ButtonProps } from "./button.types";

export default function Button({ color, size, children }: ButtonProps) {
  return (
    <ButtonContainer
      target="_blank"
      href="https://api.whatsapp.com/send?phone=551158451351&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!"
      color={color}
      size={size}
    >
      {children}
    </ButtonContainer>
  );
}
