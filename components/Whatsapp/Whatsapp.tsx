"use client";
import React from "react";
import WhatsSVG from "@/public/whatsapp.svg";
import { Whats, WhatsIcon } from "./whatsapp.styles";

export default function Whatsapp() {
  return (
    <Whats>
      <a href='https://api.whatsapp.com/send?phone=5511970784072&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.' target="_blank">
        <WhatsIcon
          src={WhatsSVG}
          alt="Link para o WhatsApp Oral Brasil Xanxerê"
        />
      </a>
    </Whats>
  );
}

