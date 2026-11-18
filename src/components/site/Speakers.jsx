import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { SPEAKERS } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");

export default function Speakers() {
  const [active, setActive] = useState(null);

  return (
    <section id="palestrantes" className="border-t border-ink/10 bg-concrete/45">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Palestrantes confirmados"
          title="Quem sobe ao palco do CivilTec."
          description="Nomes da academia, do setor público e da indústria que estão resolvendo problemas reais de projeto, obra e gestão."
          action={
            <Link
              to="/"
              hash="programacao"
              className="label-mono inline-flex items-center gap-2 self-start border-b border-ink/30 pb-1 text-ink transition hover:border-signal hover:text-ink/70 md:self-end"
            >
              Programação completa
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {SPEAKERS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(s)}
              aria-label={`Ver perfil de ${s.name}`}
              className="group relative flex flex-col border border-ink/15 bg-card text-left transition duration-300 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_0_rgba(23,23,21,1)]"
            >
              <span className="relative block aspect-[4/5] overflow-hidden bg-concrete">
                <span
                  className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(23,23,21,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,21,0.07)_1px,transparent_1px)] [background-size:22px_22px]"
                  aria-hidden="true"
                />
                <span className="absolute left-3 top-3 font-mono text-[10px] tracking-[0.2em] text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute inset-0 grid place-items-center font-heading text-[clamp(2rem,4vw,2.8rem)] font-extrabold tracking-tight text-ink/30 transition group-hover:text-ink/60">
                  {initials(s.name)}
                </span>
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-signal p-3 transition-transform duration-300 group-hover:translate-y-0">
                  <span className="block font-heading text-[12px] font-bold leading-snug text-ink line-clamp-2">
                    {s.talk}
                  </span>
                </span>
              </span>
              <span className="flex flex-1 flex-col border-t border-ink/10 p-4">
                <span className="font-heading text-[15px] font-bold leading-tight text-ink">
                  {s.name}
                </span>
                <span className="mt-1 text-[12.5px] leading-snug text-ink/55">{s.org}</span>
                <span className="mt-3 inline-block self-start border border-ink/20 px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-ink/60">
                  {s.area}
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
          + 15 nomes na programação · 24 palestras · 16 minicursos
        </p>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        {active && (
          <DialogContent className="max-w-2xl gap-0 border border-ink/20 bg-card p-0 sm:rounded-none">
            <div className="border-b border-ink/10 bg-concrete px-6 py-6">
              <p className="label-mono text-ink/45">Perfil do palestrante</p>
              <DialogTitle className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-ink">
                {active.name}
              </DialogTitle>
              <DialogDescription className="mt-1 text-[14px] text-ink/60">
                {active.org}
              </DialogDescription>
            </div>
            <div className="px-6 py-6">
              <p className="label-mono text-ink/40">Palestra</p>
              <p className="mt-2 border-l-2 border-signal pl-3 font-heading text-lg font-bold leading-snug text-ink">
                {active.talk}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-ink/70">{active.abstract}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4">
                <span className="border border-ink/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/60">
                  {active.area}
                </span>
                <a
                  href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(active.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-heading text-[12px] font-bold uppercase tracking-[0.1em] text-ink transition hover:text-ink/60"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  Buscar no LinkedIn
                </a>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}