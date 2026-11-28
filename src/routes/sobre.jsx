import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import About from "@/components/site/About";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <About />
      </main>
      <Footer />
    </div>
  );
}
