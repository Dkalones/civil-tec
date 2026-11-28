import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import SectionHeading from "@/components/site/SectionHeading";
import { EVENT } from "@/lib/event-data";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="pt-[60px]">
        <section className="border-b border-ink/10 bg-concrete/45">
          <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
            <SectionHeading
              index="01"
              eyebrow="Formação prática"
              title="Minicursos do CivilTec."
              description="Os minicursos, temas e informações de participação serão divulgados em breve."
            />

            <div className="mt-12">
              <div className="mb-7 text-center">
                <p className="label-mono text-ink/45">CivilTec · {EVENT.year || "2027"}</p>
                <h2 className="mt-3 font-heading text-xl font-extrabold text-ink">
                  Minicursos em breve
                </h2>
                <p className="mt-2 text-sm text-ink/55">
                  Em breve, novidades sobre as atividades e experiências práticas do evento.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
                {[1, 2, 3].map((item) => (
                  <article
                    key={item}
                    className="flex min-h-[180px] flex-col items-center justify-center border border-white/15 bg-[#171715]/85 p-5 text-center backdrop-blur-sm"
                  >
                    <p className="label-mono text-ink/45">
                      Minicurso {String(item).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-heading text-lg font-bold text-ink/80">
                      Em breve
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
