import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SPEAKERS } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

export default function Speakers() {
  return (
    <section id="palestrantes" className="border-t border-ink/10 bg-concrete/45">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Palestrantes"
          title="Quem sobe ao palco do CivilTec."
          description="Os nomes, perfis e temas das palestras serão divulgados em breve."
          action={
            <Link
              to="/"
              hash="programacao"
              className="label-mono inline-flex items-center gap-2 self-start border-b border-ink/30 pb-1 text-ink transition hover:border-signal hover:text-ink/70 md:self-end"
            >
              Programação
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          }
        />
        {SPEAKERS.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {SPEAKERS.map((speaker) => (
              <article key={speaker.id} className="border border-ink/15 bg-card p-5">
                <p className="font-heading text-lg font-bold">{speaker.name}</p>
                <p className="mt-2 text-sm text-ink/55">{speaker.org}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-dashed border-ink/25 bg-card px-6 py-12 text-center">
            <p className="label-mono text-ink/45">CivilTec · 2027</p>
            <h3 className="mt-3 font-heading text-xl font-extrabold text-ink">Palestrantes em breve</h3>
            <p className="mt-2 text-sm text-ink/55">As confirmações oficiais serão publicadas nesta seção.</p>
          </div>
        )}
      </div>
    </section>
  );
}
