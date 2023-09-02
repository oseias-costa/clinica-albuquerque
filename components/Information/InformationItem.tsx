import { InformationItemContainter, InformationContent, IconInformation } from "./information.styles";
import Image, { StaticImageData } from "next/image";

interface InformationIconProps {
  icon: StaticImageData;
  content: string;
  id: string
}

export default function InformationItem({
  icon,
  content,
  id
}: InformationIconProps) {
  return (
    <InformationItemContainter>
      <IconInformation src={icon} alt={content} />
      <InformationContent>{content}</InformationContent>
    </InformationItemContainter>
  );
}
