import { informationData } from "./_informationData";
import * as S from "./benefits.styles";
import InformationItem from "./InformationItem";

export default function Information() {
  const informationList = informationData.information.map((item) => (
    <InformationItem icon={item.icon} content={item.content} />
  ));

  return (
    <S.InformationContainer>
      <S.InformationTitle>{informationData.title}</S.InformationTitle>
      <S.InformationBlocks></S.InformationBlocks>
    </S.InformationContainer>
  );
}
