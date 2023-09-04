import Button from "../Button/Button";
import BenefitItem from "./BenefitItem";
import * as S from "./benefits.styles";
import { benefitsData } from "./benefitsData";


export default function Benefits(){
    const benefitsList = benefitsData.benefit.map(item => 
        <BenefitItem key={item.id} title={item.subtitle} content={item.content} />
        )

    return(
        <S.BenefitsContainer>
            <S.BenefitsImage src={benefitsData.image} alt={benefitsData.title} />
            <S.BenefitsDescription>
                <S.BenefitsDescriptionTitle>
                    {benefitsData.title}
                </S.BenefitsDescriptionTitle>
                <S.BenefitsList>
                    {benefitsList}
                </S.BenefitsList>
                <Button color="white" size="medium">{benefitsData.textButton}</Button>            
            </S.BenefitsDescription>
        </S.BenefitsContainer>
    )
}