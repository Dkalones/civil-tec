import { Image } from "@/components/ui/image";
import { EVENT, STATS, PILLARS } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

export default function About() {
  return (
    <section id="sobre" className="bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Sobre o congresso"
          title="Engenharia que se discute na prática."
          description="O CivilTec reúne estudantes, professores e o setor produtivo da Paraíba para discutir o que já muda a forma de projetar, construir e manter edificações."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <div className="space-y-5 text-[16.5px] leading-relaxed text-ink/75">
              <p>
                O congresso é organizado pelo CiviTec, no Campus VIII da UEPB — Centro de Ciências,
                Tecnologia e Saúde (CCTS), em Araruna. A proposta é tirar o debate técnico do
                abstrato: cada tema chega com aplicação real, dados de obra e espaço para
                perguntas.
              </p>
              <p>
                A programação combina palestras de 50 minutos, minicursos de quatro horas,
                visitas a empreendimentos da região, competições estudantis e noites de
                integração — do concreto protendido ao aerolevantamento com drones.
              </p>
            </div>

            <ul className="mt-8 grid gap-3 border-t border-ink/10 pt-8 sm:grid-cols-2">
              {PILLARS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[15px] text-ink/80">
                  <span className="mt-[7px] h-2 w-2 shrink-0 bg-signal" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <figure className="lg:col-span-6">
            <div className="relative border border-ink/15">
              <Image
                src="/brand/civiltec-logo.svg"
                alt="Logomarca oficial do evento CivilTec"
                className="aspect-[4/3] w-full object-cover"
                fittingType="fill"
              />
              <span className="label-mono absolute left-3 top-3 bg-ink/85 px-2 py-1 text-ink-foreground/80">
                Fig. 01 · Identidade visual do CivilTec
              </span>
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">
              Logomarca oficial do CivilTec — Congresso de Tecnologia em Construções.
            </figcaption>
          </figure>
        </div>

        {STATS.length > 0 && (
        <dl className="mt-16 grid grid-cols-2 border-t border-ink/15 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`border-b border-ink/15 px-1 py-7 md:border-b-0 ${
                i > 0 ? "md:border-l md:border-ink/15 md:pl-7" : ""
              } ${i % 2 === 1 ? "border-l border-ink/15 pl-5 md:pl-7" : ""}`}
            >
              <dt className="font-heading text-[clamp(2rem,3.4vw,2.9rem)] font-extrabold leading-none text-ink">
                {s.value}
              </dt>
              <dd className="label-mono mt-3 text-ink/50">{s.label}</dd>
            </div>
          ))}
        </dl>
        )}
      </div>
    </section>
  );
}