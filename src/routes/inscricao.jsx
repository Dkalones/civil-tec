import { Link } from "@tanstack/react-router";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { EVENT } from "@/lib/event-data";
import RegistrationWindow from "@/components/site/RegistrationWindow";

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="relative overflow-hidden bg-ink pt-[72px] text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20">
          <p className="label-mono text-ink-foreground/50">[ Inscrições ] · {EVENT.dateShort}</p>
          <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
            Faça parte do CivilTec
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-foreground/70">
            Acompanhe a contagem regressiva e garanta sua participação no congresso.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-[900px] px-5 py-16 sm:px-8 md:py-24">
        <RegistrationWindow />
        <div className="mt-8 text-center">
          <Link to="/" className="inline-flex border border-ink px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-ink-foreground">
            Voltar ao site
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page;
