export const { ServiceCardContainer } from './services.styles'

export default function ServiceCard({id, icon, content}) {
  return 
  (<ServiceCardContainer>
    <Image src={icon} alt={id} />
    <ServiceContent>{content}</ServiceContent>
  </ServiceCardContainer>);
}
