import { Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { EVENT } from "@/lib/event-data";

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="relative overflow-hidden bg-ink pt-[72px] text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20">
          <p className="label-mono text-ink-foreground/50">[ Artigos e trabalhos ] · {EVENT.dateShort}</p>
          <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
            Submissão de trabalhos
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-foreground/70">
            Em breve serão publicadas as orientações para participação acadêmica no CivilTec.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-[900px] px-5 py-16 sm:px-8 md:py-24">
        <div className="border border-dashed border-ink/25 bg-card px-6 py-14 text-center">
          <FileText className="mx-auto h-7 w-7 text-ink/45" aria-hidden="true" />
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-ink">Informações em breve</h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink/60">
            Chamada de trabalhos, prazos, eixos temáticos, normas de formatação e sistema de submissão serão apresentados nesta página após definição pela organização.
          </p>
          <Link to="/" className="mt-7 inline-flex border border-ink px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-ink-foreground">
            Voltar ao site
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page;
