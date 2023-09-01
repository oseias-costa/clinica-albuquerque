import * as S from "./benefits.styles";

interface BenefitItem {
    title: string;
    content: string
}

export default function BenefitItem({title, content}: BenefitItem){
    return(
        <S.BenefitItemContainer>
            <S.BenefitItemTitle>{title}</S.BenefitItemTitle>
            <S.BenefitItemContent>{content}</S.BenefitItemContent>
        </S.BenefitItemContainer>
    )
}