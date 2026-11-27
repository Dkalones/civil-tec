import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SPEAKERS } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

export default function Speakers() {
  return (
    <section id="palestrantes" className="relative overflow-hidden border-t border-white/10 bg-[#11110f] text-white" style={{ backgroundImage: "linear-gradient(rgba(12,12,11,.48), rgba(12,12,11,.72)), url('/brand/civiltec-speakers-bg.svg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Palestrantes"
          title="Quem sobe ao palco do CivilTec."
          description="Os nomes, perfis e temas das palestras serão divulgados em breve."
          tone="dark"
          action={
            <Link
              to="/"
              hash="programacao"
              className="label-mono inline-flex items-center gap-2 self-start border-b border-white/30 pb-1 text-white transition hover:border-signal hover:text-white/70 md:self-end"
            >
              Programação
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          }
        />
        {SPEAKERS.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {SPEAKERS.map((speaker) => (
              <article key={speaker.id} className="border border-white/15 bg-[#171715]/85 p-5 backdrop-blur-sm">
                <p className="font-heading text-lg font-bold text-white">{speaker.name}</p>
                <p className="mt-2 text-sm text-white/60">{speaker.org}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 border border-dashed border-white/25 bg-[#171715]/80 px-6 py-12 text-center backdrop-blur-sm">
            <p className="label-mono text-white/50">CivilTec · 2027</p>
            <h3 className="mt-3 font-heading text-xl font-extrabold text-white">Palestrantes em breve</h3>
            <p className="mt-2 text-sm text-white/60">As confirmações oficiais serão publicadas nesta seção.</p>
          </div>
        )}
      </div>
    </section>
  );
}
