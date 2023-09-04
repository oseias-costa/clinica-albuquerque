import { ButtonContainer } from "./button.styles";
import { ButtonProps } from "./button.types";

export default function Button({ color, size, children }: ButtonProps) {
  return (
    <ButtonContainer
      target="_blank"
      href="#"
      color={color}
      size={size}
    >
      {children}
    </ButtonContainer>
  );
}
