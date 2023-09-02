import { servicesData } from "./_servicesData";
import Button from "../Button/Button";
import * as S from "./services.styles";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const serviceList = servicesData.services.map((item) => 
        <ServiceCard 
          id={item.id} 
          icon={item.icon} 
          title={item.title} 
          content={item.content} 
          key={item.id} 
        />
  );

  return (
    <S.ServicesContainer id='Servicos'>
      <h2>{servicesData.subtitle}</h2>
      <S.ServicesCards>{serviceList}</S.ServicesCards>
      <Button size="big" color="blue">
        {servicesData.button}
      </Button>
    </S.ServicesContainer>
  );
}
