import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SectionHeading from "@/components/site/SectionHeading";
import { EVENT } from "@/lib/event-data";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const CERTIFICATE_TYPES = [
  {
    number: "01",
    title: "Minicursos",
    description: "Certificados de participação nas atividades práticas e formativas.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Palestras",
    description: "Certificados referentes às palestras e demais atividades do evento.",
    icon: Award,
  },
  {
    number: "03",
    title: "Artigos",
    description: "Certificados de apresentação e participação na produção científica.",
    icon: BookOpen,
  },
];

export default function Certificados() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <section className="border-b border-ink/10 bg-concrete/45">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
            <SectionHeading
              index="01"
              eyebrow="Certificação"
              title="Certificados do CivilTec."
              description="Acesse, em breve, os certificados relacionados às atividades e à produção científica do evento."
            />

            <div className="mt-12">
              <div className="mb-7 text-center">
                <p className="label-mono text-ink/45">CivilTec · {EVENT.year || "2027"}</p>
                <h2 className="mt-3 font-heading text-xl font-extrabold text-ink">
                  Área de certificados
                </h2>
                <p className="mt-2 text-sm text-ink/55">
                  A disponibilização dos certificados será anunciada pelos canais oficiais.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
                {CERTIFICATE_TYPES.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.number}
                      className="flex min-h-[220px] flex-col items-center justify-center border border-white/15 bg-[#171715]/85 p-6 text-center backdrop-blur-sm"
                    >
                      <Icon className="h-7 w-7 text-signal" aria-hidden="true" />
                      <p className="label-mono mt-5 text-ink/45">Categoria {item.number}</p>
                      <h3 className="mt-2 font-heading text-xl font-bold text-ink/90">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/55">
                        {item.description}
                      </p>
                      <p className="mt-5 border-t border-white/10 pt-3 font-mono text-[10px] font-semibold uppercase tracking-[.16em] text-signal">
                        Em breve
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
