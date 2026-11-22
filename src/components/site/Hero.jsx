import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { EVENT } from "@/lib/event-data";
import { btnPrimary, btnGhostDark } from "@/components/site/styles";
import Countdown from "@/components/site/Countdown";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <Image
        src={EVENT.images.hero}
        alt="Estrutura de concreto vista em ângulo baixo, com luz dourada no fim do dia"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        fittingType="fill"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink via-ink/92 to-ink/35"
        aria-hidden="true"
      />
      <div className="blueprint-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-5 pb-14 pt-28 sm:px-8 md:pb-20 md:pt-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="label-mono bg-signal px-2 py-1 text-ink">[ 01 ]</span>
            <span className="label-mono text-ink-foreground/60">{EVENT.name}</span>
            <span className="label-mono text-ink-foreground/30">/</span>
            <span className="label-mono text-ink-foreground/60">{EVENT.editionLabel}</span>
          </div>

          <h1 className="mt-6 max-w-[18ch] font-heading text-[clamp(2.5rem,6vw,4.9rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.025em]">
            O futuro da construção <span className="text-signal">se projeta aqui</span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-foreground/75">
            Quatro dias de palestras, encontros e troca de conhecimento para quem
            está reinventando a engenharia civil no Brasil.
          </p>

          <dl className="mt-8 grid max-w-xl gap-5 border-y border-ink-foreground/15 py-5 sm:grid-cols-2">
            <div>
              <dt className="label-mono text-ink-foreground/45">Quando</dt>
              <dd className="mt-1 font-heading text-lg font-bold">{EVENT.dateLabel}</dd>
            </div>
            <div>
              <dt className="label-mono text-ink-foreground/45">Onde</dt>
              <dd className="mt-1 font-heading text-lg font-bold">{EVENT.venue}</dd>
              <dd className="text-sm text-ink-foreground/60">{EVENT.city}</dd>
            </div>
          </dl>

          <Countdown />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/inscricao" className={btnPrimary}>
              Garantir minha vaga
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#programacao" className={btnGhostDark}>
              Ver programação
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hidden flex-col justify-end gap-6 border-l border-ink-foreground/10 pl-6 lg:flex">
          <div>
            <p className="label-mono text-ink-foreground/40">Realização</p>
            <p className="mt-1 text-sm text-ink-foreground/80">CiviTec · UEPB (CCTS)</p>
          </div>
          <div>
            <p className="label-mono text-ink-foreground/40">Coordenadas</p>
            <p className="mt-1 font-mono text-sm text-ink-foreground/80">
              6.5352 S · 35.7325 W
            </p>
          </div>
          <div>
            <p className="label-mono text-ink-foreground/40">Anais</p>
            <p className="mt-1 font-mono text-sm text-ink-foreground/80">ISSN {EVENT.issn}</p>
          </div>
          <p className="label-mono leading-relaxed text-ink-foreground/35">
            Certificação emitida
            <br />
            para todas as atividades
          </p>
        </aside>
      </div>

      <div className="relative h-px w-full bg-ink-foreground/10" aria-hidden="true" />
    </section>
  );
}