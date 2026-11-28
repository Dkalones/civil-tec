import { BookOpen, Clock3, MapPin, Users } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { EVENT, MINICOURSES } from "@/lib/event-data";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <section className="relative overflow-hidden bg-ink text-ink-foreground">
          <div className="blueprint-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 md:py-24">
            <p className="label-mono text-ink-foreground/50">[ Formação prática ] · {EVENT.dateShort}</p>
            <h1 className="mt-5 max-w-3xl font-heading text-[clamp(2.3rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.035em]">
              Minicursos
              <span className="text-signal">.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-foreground/65 sm:text-lg">
              Aprendizado aplicado, contato com novas ferramentas e experiências práticas para ampliar sua formação em engenharia e construção.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/55">
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-signal" /> 3 a 6 de maio de 2027</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-signal" /> Campus VIII · UEPB</span>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 md:py-24">
          <div className="flex flex-col gap-4 border-t border-ink/15 pt-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="label-mono text-ink/45"><span className="text-signal">[ 01 ]</span> Programação formativa</p>
              <h2 className="mt-4 font-heading text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.04] tracking-[-0.02em] text-ink">
                Conhecimento que vira prática.
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink/65">
                Confira os minicursos disponíveis, suas ementas, horários, carga horária e orientações de participação.
              </p>
            </div>
            <span className="label-mono text-ink/40">{MINICOURSES.length} minicursos cadastrados</span>
          </div>

          {MINICOURSES.length === 0 ? (
            <div className="mt-10 border border-dashed border-ink/20 bg-card px-6 py-16 text-center sm:px-10">
              <div className="mx-auto grid h-14 w-14 place-items-center border border-ink/15 bg-concrete/50">
                <BookOpen className="h-6 w-6 text-ink/55" aria-hidden="true" />
              </div>
              <p className="label-mono mt-6 text-signal">Em preparação</p>
              <h3 className="mt-3 font-heading text-2xl font-extrabold text-ink">Os minicursos serão divulgados em breve.</h3>
              <p className="mx-auto mt-3 max-w-xl text-[14px] leading-relaxed text-ink/55">
                A organização está preparando as atividades. Assim que os detalhes forem confirmados, você encontrará aqui temas, ministrantes, vagas, horários e instruções para inscrição.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {MINICOURSES.map((course) => (
                <article key={course.id} className="border border-ink/15 bg-card p-6 transition hover:border-signal/70 sm:p-8">
                  <p className="label-mono text-signal">{course.area || "Minicurso"}</p>
                  <h3 className="mt-3 font-heading text-xl font-extrabold text-ink">{course.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">{course.description}</p>
                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/45">
                    {course.duration && <span>{course.duration}</span>}
                    {course.instructor && <span>{course.instructor}</span>}
                    {course.location && <span>{course.location}</span>}
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-col gap-3 border-l-4 border-signal bg-concrete/45 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="font-heading text-lg font-bold text-ink">Fique atento às atualizações.</p>
              <p className="mt-1 text-sm text-ink/55">As informações oficiais serão publicadas nos canais do CivilTec.</p>
            </div>
            <a href={EVENT.instagramUrl} target="_blank" rel="noreferrer" className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ink underline decoration-signal decoration-2 underline-offset-4 hover:text-ink/60">
              Acompanhar o Instagram
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
