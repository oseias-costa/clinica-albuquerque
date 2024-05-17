import Image from "next/image";
import styled from "styled-components";

export const HeadlineContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 45px;

  @media (max-width: 830px) {
    flex-wrap: wrap-reverse;
  }
`;

export const HeadlineDescription = styled.div`
  max-width: 443px;
  padding-top: 50px;
  padding-bottom: 45px;

  @media (max-width: 785px) {
    padding-top: 38px;
  }

  @media (max-width: 463px) {
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;

export const HeadlineSubtitle = styled.h3`
  color: var(--color-blue-ligth);
  font-weight: 200;
`;
export const HeadlineTitle = styled.h1`
  font-weight: 200;
  color: var(--color-blue-strong);
  font-size: 36px;
`;
export const HeadlineContent = styled.p`
  padding-bottom: 32px;
  padding-top: 36px;
  max-width: 410px;
  color: var(--color-gray-text);
  font-size: 200;
`;
export const HeadlineImage = styled(Image)`
  max-width: 500px;
  height: auto;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 1000px){
    max-width: 400px;
  }

  @media (max-width: 443px){
    width: calc(100% - 40px);
  }
`;
