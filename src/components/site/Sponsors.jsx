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
            {Array.from({ length: 7 }).map((_, i) => (
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
                  href={`${EVENT.whatsappUrl}?text=Ol%C3%A1!%20Tenho%20interesse%20em%20ser%20apoiador%20do%20CivilTec.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <div className="flex min-h-[132px] items-center justify-center border border-ink-foreground/15 bg-white px-5 py-7">
              <img
                src="data:image/webp;base64,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"
                alt="CREA-JR-PB — Um novo olhar para o futuro"
                className="h-auto max-h-[90px] w-full max-w-[260px] object-contain"
                loading="lazy"
              />
              </div>
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