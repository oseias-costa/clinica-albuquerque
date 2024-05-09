import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyle } from "./lib/GlobalStyle";
import Google from "@/components/global/Google";
import GoogleBody from "@/components/global/GoogleBody";
import Meta from "@/components/global/Meta";

const montserrat = Montserrat({
  weight: ["300", "400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clínica SP Implantes - Tratamentos Odontológicos - Unidade Osasco/SP",
  description: "Clínica SP Implantes - Tratamentos Odontológicos - Unidade Osasco/SP - Implantes, Protese e Lentes de Contato. Clínica Oral Brasil Osasco tem o tratamento ideal para você com um time de mais de 15 anos de experiência.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="br">
      <header>
      </header>
      <body className={montserrat.className}>
        <GoogleBody />
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
