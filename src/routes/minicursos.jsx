import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SectionHeading from "@/components/site/SectionHeading";
import { EVENT } from "@/lib/event-data";
import { ArrowUpRight, BookOpen, HardHat, Wrench } from "lucide-react";

const MINICOURSES = [
  {
    number: "01",
    title: "Minicurso 01",
    description: "Informações sobre conteúdo, instrutor e inscrições serão divulgadas em breve.",
    detail: "Aprendizado aplicado",
    icon: HardHat,
  },
  {
    number: "02",
    title: "Minicurso 02",
    description: "Em breve, detalhes sobre mais uma atividade prática da programação.",
    detail: "Conhecimento técnico",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Minicurso 03",
    description: "Novas experiências e oportunidades de aprendizado durante o congresso.",
    detail: "Formação complementar",
    icon: BookOpen,
  },
];

export default function Minicursos() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <section className="relative isolate overflow-hidden border-b border-ink/10 bg-concrete/35">
          <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-40" />
          <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
            <SectionHeading
              index="01"
              eyebrow="Formação prática · CivilTec"
              title="Conhecimento que se transforma em prática."
              description="Explore os minicursos do congresso: atividades voltadas à troca de experiências, ao desenvolvimento técnico e à aproximação entre teoria e prática."
            />

            <div className="mt-16 md:mt-20">
              <div className="mb-8 flex flex-col gap-4 border-b border-ink/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="label-mono text-ink/45">Programação formativa · {EVENT.year || "2027"}</p>
                  <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Minicursos
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-ink/55 sm:text-right">
                  Conteúdos, instrutores e orientações de inscrição serão apresentados em breve.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                {MINICOURSES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.number}
                      className="group relative flex min-h-[300px] flex-col overflow-hidden border border-[#343633] bg-[#202220] p-6 text-white shadow-[0_12px_30px_rgba(23,23,21,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#d9aa20] hover:shadow-[0_18px_38px_rgba(23,23,21,0.14)] md:p-7"
                    >
                      <div className="absolute right-0 top-0 h-20 w-20 border-b border-l border-white/10 bg-white/[0.025]" />
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-xs tracking-[.2em] text-white/40">{item.number} / 03</span>
                        <span className="grid h-12 w-12 place-items-center border border-[#e9b927]/35 bg-[#e9b927]/10 text-[#efbd20] transition group-hover:bg-[#e9b927] group-hover:text-[#171715]">
                          <Icon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                        </span>
                      </div>

                      <div className="mt-10">
                        <p className="label-mono text-[#efbd20]">{item.detail}</p>
                        <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-tight text-white">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between border-t border-white/15 pt-5">
                        <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[.18em] text-[#efbd20]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#efbd20]" />
                          Em breve
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#efbd20]" aria-hidden="true" />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 border border-ink/10 bg-white/55 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center bg-ink text-signal">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">A programação dos minicursos será divulgada em breve.</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/55">
                    Acompanhe os canais oficiais do CivilTec para conferir os temas, instrutores e período de inscrição.
                  </p>
                </div>
              </div>
              <span className="label-mono whitespace-nowrap text-ink/40">CivilTec · {EVENT.year || "2027"}</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
