"use client";
import Benefits from "@/components/Benefits/Benefits";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import Information from "@/components/Information/Information";
import Location from "@/components/Location/Location";
import Services from "@/components/Services/Services";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

export default function Home() {
  return (
    <main>
      <Whatsapp />
      <Header />
      <Headline />
      <Services />
      <Benefits />
      <Information />
      <Location />
      <Footer />
    </main>
  );
}
