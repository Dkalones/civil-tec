import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Sponsors from "@/components/site/Sponsors";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
