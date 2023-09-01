import Image, { StaticImageData } from "next/image";
import { IconService, ServiceCardContainer, ServiceContent, ServiceH4 } from "./services.styles";

interface ServiceCardProps {
  id: string;
  icon: StaticImageData;
  title: string;
  content: string;
}


export default function ServiceCard({id, icon, title, content}: ServiceCardProps) {
  return (
    <ServiceCardContainer>
      <IconService src={icon} alt={id} />
      <ServiceH4>{title}</ServiceH4>
      <ServiceContent>{content}</ServiceContent> 
  </ServiceCardContainer>
    )
}
