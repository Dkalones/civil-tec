import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import Venue from "@/components/site/Venue";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <Venue />
      </main>
      <Footer />
    </div>
  );
}
