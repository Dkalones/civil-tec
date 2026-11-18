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

export default Home;
