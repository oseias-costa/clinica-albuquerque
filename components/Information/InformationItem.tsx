import { InformationItemContainter } from "./";
import Image, { StaticImageData } from "next/image";

interface InformationIconProps {
  icon: StaticImageData;
  content: string;
}

export default function InformationItem({
  icon,
  content,
}: InformationIconProps) {
  return (
    <InformationItemContainter>
      <IconInformation src={icon} alt={content} />
      <InformationContent>{content}</InformationContent>
    </InformationItemContainter>
  );
}
