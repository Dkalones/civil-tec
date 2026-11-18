import { ArrowUpRight } from "lucide-react";
import { EVENT, SPONSOR_TIERS } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

export default function Sponsors() {
  return (
    <section id="patrocinio" className="border-t border-ink/10 bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="08"
          eyebrow="Patrocinadores e apoiadores"
          title="Quem constrói junto com o congresso."
          description="As cotas de patrocínio estão abertas para empresas de materiais, construtoras, escritórios e entidades do setor."
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
              <span className="label-mono text-ink/45">Contato oficial em definição</span>
            )
          }
        />

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/15">
          {SPONSOR_TIERS.map((tier) => (
            <div
              key={tier.tier}
              className="grid gap-4 py-6 md:grid-cols-[210px_1fr] md:items-center md:gap-8"
            >
              <div>
                <p className="font-heading text-[17px] font-extrabold uppercase tracking-tight text-ink">
                  {tier.tier}
                </p>
                <p className="label-mono mt-1 text-ink/40">{tier.note}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: tier.slots }).map((_, i) => (
                  <div
                    key={`${tier.tier}-${i}`}
                    className="flex h-[86px] items-center justify-center border border-dashed border-ink/25 bg-concrete/40 px-3 text-center"
                  >
                    <span className="font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.14em] text-ink/40">
                      Sua marca
                      <br />
                      aqui
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border border-ink/15 bg-concrete/50 p-6 md:flex-row md:items-center">
          <div>
            <p className="font-heading text-[17px] font-bold text-ink">
              Cota máster, atividade ou apoio institucional?
            </p>
            <p className="mt-1 text-[14px] text-ink/60">
              {EVENT.email
                ? "Envie um e-mail para a comissão e receba o mídia kit com números e contrapartidas."
                : "O canal de contato para solicitar o mídia kit será divulgado em breve."}
            </p>
          </div>
          {EVENT.email ? (
            <a
              href={`mailto:${EVENT.email}?subject=M%C3%ADdia%20kit%20CivilTec`}
              className="inline-flex min-h-[48px] items-center gap-2 border border-ink bg-ink px-6 font-heading text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink-foreground transition hover:bg-ink/85"
            >
              Receber mídia kit
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : (
            <span className="label-mono text-ink/45">Contato oficial em definição</span>
          )}
        </div>
      </div>
    </section>
  );
}