import { informationData } from "./_informationData";
import * as S from "./information.styles";
import InformationItem from "./InformationItem";

export default function Information() {
  const informationList = informationData.information.map((item) => (
    <InformationItem id={item.id} key={item.id} icon={item.icon} content={item.content} />
  ));

  return (
    <S.InformationContainer id="Informacoes">
      <S.InformationTitle>{informationData.title}</S.InformationTitle>
      <S.InformationBlocks>{informationList}</S.InformationBlocks>
    </S.InformationContainer>
  );
}
