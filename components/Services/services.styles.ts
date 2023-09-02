import Image from "next/image";
import styled from "styled-components";

export const ServicesContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;

`;

export const ServicesCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  margin-bottom: 20px;

  @media(max-width: 1136px){
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ServiceCard = styled.div`
  width: 300px;
`;

export const ServiceCardContainer = styled.div`
  box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 32px;
  margin: 20px;    

  @media(max-width: 465px){
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 0px;
    margin-left: 0px;
  }
`
export const ServiceContent = styled.p`
    color: var(--color-gray-text);
    font-size: 14px;
    width: 270px;

    @media(max-width: 465px){
      width: 100%;
  }
`

export const ServiceH4 = styled.h4`
  color: var(--color-blue-strong);
  padding-bottom: 10px;
  padding-top: 20px;
`

export const IconService = styled(Image)`
  width: 40px;
  height: 40px;
`