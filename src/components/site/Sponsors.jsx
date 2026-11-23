import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

export default function Sponsors() {
  return (
    <section id="patrocinio" className="border-t border-ink/10 bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="08"
          eyebrow="Patrocinadores e apoiadores"
          title="Quem constrói junto com o congresso."
          description="Empresas, instituições e organizações que apoiam e tornam o CivilTec possível."
          action={
            EVENT.email ? (
              <a
                href={`mailto:${EVENT.email}?subject=Patroc%C3%ADnio%20CivilTec`}
                className="label-mono inline-flex items-center gap-2 self-start border-b border-ink/30 pb-1 text-ink transition hover:border-signal hover:text-ink/70 md:self-end"
              >
                Quero patrocinar
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <span className="label-mono text-ink/45">Patrocínio em breve</span>
            )
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex min-h-[112px] items-center justify-center border border-dashed border-ink/25 bg-concrete/40 px-4 py-6 text-center"
            >
              <span className="font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.14em] text-ink/40">
                Sua marca
                <br />
                aqui
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-ink/15 bg-concrete/50 p-6 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-[17px] font-bold text-ink">
              Sua empresa ao lado da inovação na construção.
            </p>
            <p className="mt-1 text-[14px] text-ink/60">
              Entre em contato com a comissão organizadora para conhecer as possibilidades de parceria e apoio ao congresso.
            </p>
          </div>
          <a
            href={EVENT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[48px] shrink-0 items-center gap-2 border border-ink bg-ink px-6 font-heading text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-foreground transition hover:bg-ink/85"
          >
            Falar com a organização
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}