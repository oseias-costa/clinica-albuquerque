import styled from "styled-components";

export const LocationContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 46px;
  padding-bottom: 46px;
  background: linear-gradient(180deg, rgba(13, 35, 129, 0.85) 6.64%, #0D2381 100%);
  padding-left: 20px;
  padding-right: 20px;
`;

export const Map = styled.iframe`
  box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  width: 1130px;
  height: 200px;

  @media(max-width: 1150px){
    width: 100%;
  }
`;

export const LocationTitle = styled.h2`
  padding-bottom: 37px;
  color: #fff;
`;
