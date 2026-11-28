import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Faq from "@/components/site/Faq";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
