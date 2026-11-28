import { ArrowUpRight } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

const LogoPlaceholder = ({ label = "Sua marca" }) => (
  <div className="flex min-h-[132px] items-center justify-center border border-ink/15 bg-concrete/45 px-5 py-7 text-center transition hover:border-signal/70 hover:bg-concrete">
    <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-ink/35">
      {label}
      <br />
      aqui
    </span>
  </div>
);

export default function Sponsors() {
  return (
    <>
      <section id="patrocinio" className="border-t border-ink/10 bg-background">
        <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-24">
          <SectionHeading
            index="08"
            eyebrow="Patrocinadores"
            title="Marcas que investem em novas ideias."
            description="Empresas que contribuem para a realização do CivilTec e fortalecem a conexão entre o setor produtivo, a universidade e a engenharia."
            action={
              EVENT.email ? (
                <a
                  href={`mailto:${EVENT.email}?subject=Patroc%C3%ADnio%20CivilTec`}
                  className="label-mono inline-flex items-center gap-2 self-start border-b border-ink/30 pb-1 text-ink transition hover:border-signal hover:text-ink/65 md:self-end"
                >
                  Seja patrocinador
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null
            }
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <LogoPlaceholder key={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="apoiadores" className="relative overflow-hidden border-y border-ink/10 bg-ink text-ink-foreground">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="absolute -right-24 -top-32 h-[460px] w-[460px] rounded-full border border-ink-foreground" />
          <div className="absolute -right-10 -top-16 h-[330px] w-[330px] rounded-full border border-ink-foreground" />
          <div className="absolute bottom-0 left-0 h-1 w-full bg-signal" />
        </div>

        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
          <div className="mb-7 inline-flex items-center gap-3 border border-signal/50 bg-signal/10 px-4 py-2">
            <span className="h-2 w-2 bg-signal" />
            <p className="label-mono text-signal">Apoio institucional e colaboração</p>
          </div>

          <SectionHeading
            index="09"
            eyebrow="Apoiadores"
            title="Quem fortalece o CivilTec de outras formas."
            description="Instituições, entidades, projetos e colaboradores que contribuem com presença, conhecimento, divulgação, estrutura ou apoio institucional. Cada parceria ajuda o evento a acontecer."
            tone="dark"
            action={
              EVENT.email ? (
                <a
                  href={`mailto:${EVENT.email}?subject=Apoio%20ao%20CivilTec`}
                  className="label-mono inline-flex items-center gap-2 self-start border-b border-signal pb-1 text-ink-foreground transition hover:text-signal md:self-end"
                >
                  Seja um apoiador
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              ) : null
            }
          />

          <div className="mt-12 border border-ink-foreground/20 bg-ink-foreground/[0.045] p-5 sm:p-7">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-heading text-lg font-bold text-ink-foreground sm:text-xl">
                Nossa rede de apoiadores
              </p>
              <p className="label-mono text-ink-foreground/40">
                Parcerias que fazem a diferença
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="group flex min-h-[118px] items-center justify-center border border-ink-foreground/15 bg-ink-foreground/[0.04] px-5 py-6 text-center transition hover:border-signal/70 hover:bg-ink-foreground/[0.08]"
                >
                  <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.15em] text-ink-foreground/35 transition group-hover:text-ink-foreground/65">
                    Apoiador
                    <br />
                    aqui
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-5 border-l-4 border-signal bg-ink-foreground/[0.07] p-6 sm:p-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="font-heading text-xl font-bold text-ink-foreground sm:text-2xl">
                Apoiar também é construir conhecimento.
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-foreground/60">
                Quer contribuir com o CivilTec como instituição, entidade ou parceiro colaborador? Converse com a organização.
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
    </>
  );
}