"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-blue-strong: #2F336D;
        --color-blue-ligth: #79BDAA;
        --color-gray-text: #434240;
        --color-white-text: #fff;
    }

    * {
        border: 0;
        margin: 0;
        padding: 0; 
        scroll-behavior: smooth;
    }

    h2 {
        color: var(--color-gray-text);
        font-size: 24px;
        font-weight: 200;
    }
`;
