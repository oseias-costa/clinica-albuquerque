"use client";
import React from "react";
import WhatsSVG from "@/public/whatsapp.svg";
import { Whats, WhatsIcon } from "./whatsapp.styles";

export default function Whatsapp() {
  return (
    <Whats>
      <a href='#' target="_blank">
        <WhatsIcon
          src={WhatsSVG}
          alt="Link para o WhatsApp Oral Brasil Xanxerê"
        />
      </a>
    </Whats>
  );
}

