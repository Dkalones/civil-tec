import { createFileRoute } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Speakers from "@/components/site/Speakers";
import Agenda from "@/components/site/Agenda";
import CallForPapers from "@/components/site/CallForPapers";
import Tickets from "@/components/site/Tickets";
import Venue from "@/components/site/Venue";
import Sponsors from "@/components/site/Sponsors";
import Faq from "@/components/site/Faq";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CivilTec · Congresso de Tecnologia em Construções" },
      {
        name: "description",
        content:
          "4 a 8 de novembro, no CCTA/UEPB em Pombal — PB. Palestras, minicursos, visitas técnicas e competições para quem constrói o futuro da engenharia civil.",
      },
      { property: "og:title", content: "CivilTec · Congresso de Tecnologia em Construções" },
      {
        property: "og:description",
        content:
          "Cinco dias de conteúdo técnico, prática de campo e networking no sertão da Paraíba.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Agenda />
        <CallForPapers />
        <Tickets />
        <Venue />
        <Sponsors />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}