import Image from "next/image";
import { styled } from "styled-components";

export const Whats = styled.div`
  position: fixed;
  bottom: 2em;
  right: 2em;
  border-radius: 5em;
  padding: 0.3em;
  box-shadow: var(--shadow);
  background-color: #34af23;
  transition: 0.4s;
  z-index: 100;

  &:hover {
    background-color: #2c901f;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const WhatsIcon = styled(Image)`
  fill: #fff;
  position: relative;
  right: -0.08em;
  top: 0.15em;
`;