import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SectionHeading from "@/components/site/SectionHeading";
import { EVENT } from "@/lib/event-data";
import { ArrowUpRight, Award, BookOpen, GraduationCap } from "lucide-react";

const CERTIFICATE_TYPES = [
  {
    number: "01",
    title: "Minicursos",
    description: "Certificados de participação nas atividades práticas e formativas.",
    detail: "Formação prática",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Palestras",
    description: "Certificados referentes às palestras e demais atividades do evento.",
    detail: "Programação técnica",
    icon: Award,
  },
  {
    number: "03",
    title: "Artigos",
    description: "Certificados de apresentação e participação na produção científica.",
    detail: "Produção científica",
    icon: BookOpen,
  },
];

export default function Certificados() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <section className="relative isolate overflow-hidden border-b border-ink/10 bg-concrete/35">
          <div className="pointer-events-none absolute inset-0 -z-10 blueprint-grid opacity-40" />
          <div className="mx-auto w-full max-w-[1240px] px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
            <SectionHeading
              index="01"
              eyebrow="Certificação · CivilTec"
              title="Conhecimento que merece ser reconhecido."
              description="Reúna aqui os certificados das atividades e da produção científica do congresso. A área será liberada em breve."
            />

            <div className="mt-16 md:mt-20">
              <div className="mb-8 flex flex-col gap-4 border-b border-ink/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="label-mono text-ink/45">Central do participante · {EVENT.year || "2027"}</p>
                  <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
                    Área de certificados
                  </h2>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-ink/55 sm:text-right">
                  Selecione a categoria correspondente à sua participação.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                {CERTIFICATE_TYPES.map((item) => {
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
                  <Award className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Os certificados ainda não estão disponíveis.</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/55">
                    A liberação e as orientações de acesso serão divulgadas pelos canais oficiais do CivilTec.
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
