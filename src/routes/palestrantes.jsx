import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Speakers from "@/components/site/Speakers";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <Speakers />
      </main>
      <Footer />
    </div>
  );
}
