"use client";
import Benefits from "@/components/Benefits/Benefits";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Headline />
      <Services />
      <Benefits />
    </main>
  );
}
