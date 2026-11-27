import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Agenda from "@/components/site/Agenda";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <Agenda />
      </main>
      <Footer />
    </div>
  );
}
