import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

export default function Sponsors() {
  return (
    <section id="patrocinio" className="relative overflow-hidden border-y border-ink/10 bg-ink text-ink-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full border border-ink-foreground" />
        <div className="absolute -right-12 -top-20 h-[320px] w-[320px] rounded-full border border-ink-foreground" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-ink-foreground/30" />
      </div>

      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 bg-signal" />
          <p className="label-mono text-ink-foreground/55">Rede de apoio · CivilTec</p>
        </div>

        <SectionHeading
          index="08"
          eyebrow="Patrocinadores e apoiadores"
          title="Quem apoia, faz acontecer."
          description="Instituições, empresas e pessoas que acreditam na engenharia, incentivam o conhecimento e ajudam a construir esta edição do CivilTec."
          tone="dark"
          action={
            EVENT.email ? (
              <a
                href={`mailto:${EVENT.email}?subject=Patroc%C3%ADnio%20CivilTec`}
                className="label-mono inline-flex items-center gap-2 self-start border-b border-signal pb-1 text-ink-foreground transition hover:text-signal md:self-end"
              >
                Seja um apoiador
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <span className="label-mono text-ink-foreground/45">Apoio em breve</span>
            )
          }
        />

        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="label-mono text-ink-foreground/45">Marcas que fazem parte</p>
            <span className="h-px flex-1 bg-ink-foreground/15" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="group flex min-h-[150px] items-center justify-center border border-ink-foreground/20 bg-ink-foreground/[0.045] px-5 py-8 text-center transition duration-300 hover:border-signal/70 hover:bg-ink-foreground/[0.08] sm:min-h-[170px]"
              >
                <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-ink-foreground/35 transition group-hover:text-ink-foreground/65">
                  Sua marca
                  <br />
                  aqui
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-ink-foreground/20 bg-ink-foreground/[0.06] p-6 sm:p-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="font-heading text-xl font-bold text-ink-foreground sm:text-2xl">
              Sua marca também pode fazer parte dessa construção.
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-foreground/60">
              Apoie o CivilTec e conecte sua instituição a um espaço de inovação, conhecimento e desenvolvimento da engenharia.
            </p>
          </div>
          <a
            href={EVENT.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[50px] shrink-0 items-center gap-2 bg-signal px-6 font-heading text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink transition hover:brightness-110"
          >
            Falar com a organização
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}