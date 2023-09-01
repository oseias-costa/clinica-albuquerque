import Image from "next/image";
import { styled } from "styled-components";

export const BenefitsContainer = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 80px;
    background: linear-gradient(180deg, rgba(13, 35, 129, 0.85) 6.64%, #0D2381 100%);

    @media(max-width: 890px){
        flex-direction: column;
        align-items: center;
    }
`

export const BenefitsImage = styled(Image)`
    width: 463px;
    height: auto;
    padding-right: 60px;

    @media(max-width: 890px){
        padding-right: 20px;
        padding-left: 20px;
    }

    @media(max-width: 470px){
        width: 100%;
    }
`

export const BenefitItemContainer = styled.div`
    max-width: 423px;
    padding-top: 14px;
`

export const BenefitItemTitle = styled.h4`
    color: var(--color-blue-ligth);
    padding-bottom: 4px;
    font-size: 16px;
`

export const BenefitItemContent = styled.p`
    color: var(--color-white-text);
    font-size: 14px;
`

export const BenefitsDescription = styled.div`
    @media(max-width: 890px){
        padding-top: 60px;
        padding-bottom: 60px;
        padding-right: 20px;
        padding-left: 20px;
    }
`

export const BenefitsList = styled.div`
    margin-bottom: 40px;
`
export const BenefitsDescriptionTitle = styled.h2`
    max-width: 423px;
    color: #fff;
    padding-bottom: 20px;
`
