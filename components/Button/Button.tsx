import { ButtonContainer } from "./button.styles";
import { ButtonProps } from "./button.types";

export default function Button({ color, size, children }: ButtonProps) {
  return (
    <ButtonContainer color={color} size={size}>
      {children}
    </ButtonContainer>
  );
}
