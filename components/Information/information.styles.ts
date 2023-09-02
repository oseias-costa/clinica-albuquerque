import Image from "next/image";
import styled from "styled-components";

export const InformationContainer = styled.section`
  padding-top: 55px;
  padding-bottom: 55px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`;

export const InformationBlocks = styled.div`
  box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  div:last-child{
    p {
      font-size: 22px;
      padding-right: 40px;
      @media(max-width: 800px){
        padding-right: 0px;
        width: 100%;
      }
    }
  
    @media(max-width: 490px){
        width: 100%;
  }
  }

  div:nth-child(2){
    p {
      max-width: 300px;
      width: 300px;
      @media(max-width: 490px){
        width: 100%;
  }
    }
  }

 
`;

export const InformationTitle = styled.h2`
  padding-top: 45px;
  padding-bottom: 25px;
`;

export const InformationItemContainter = styled.div`
  display: flex;
  align-items: center;
  padding: 42px;
`;

export const IconInformation = styled(Image)`
   width: 36px;
  height: 36px;
`;

export const InformationContent = styled.p`
  color: var(--color-gray-text);
  max-width: 253px;
  padding-left: 20px;

  @media(max-width: 800px){
    max-width: 300px;
    width: 300px;
  }
  
  @media(max-width: 490px){
     width: 100%;
  }
`;
