import * as S from "./headline.styles";
import { headlineData } from "./_headlineData";
import Button from "../Button/Button";

export default function Headline() {
  return (
    <S.HeadlineContainer>
      <S.HeadlineDescription>
        <S.HeadlineSubtitle>{headlineData.subtitle}</S.HeadlineSubtitle>
        <S.HeadlineTitle>{headlineData.title}</S.HeadlineTitle>
        <S.HeadlineContent>{headlineData.description}</S.HeadlineContent>
        <Button size="big" color="blue">
          {headlineData.button}
        </Button>
      </S.HeadlineDescription>
      <S.HeadlineImage
        src={headlineData.image}
        alt="Clínica Albuquerque - Osasco/SP"
      />
    </S.HeadlineContainer>
  );
}
