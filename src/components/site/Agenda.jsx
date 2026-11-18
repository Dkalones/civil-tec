import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AGENDA, AGENDA_DAYS, AGENDA_TYPES } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

const BADGE = {
  palestra: "border border-ink/25 text-ink/70",
  minicurso: "bg-ink text-ink-foreground",
  visita: "bg-signal text-ink",
  competicao: "border border-signal text-ink",
  social: "bg-concrete text-ink/70",
};

export default function Agenda() {
  const [day, setDay] = useState(AGENDA_DAYS[0].id);
  const [type, setType] = useState("todos");

  const items = AGENDA.filter(
    (item) => item.day === day && (type === "todos" || item.type === type),
  );

  return (
    <section id="programacao" className="border-t border-ink/10 bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="04"
          eyebrow="Programação"
          title="Quatro dias de encontro e conhecimento."
          description="A programação completa, com horários e atividades, será divulgada em breve."
        />

        <div
          role="tablist"
          aria-label="Dias do congresso"
          className="mt-10 grid grid-cols-4 border border-ink/15"
        >
          {AGENDA_DAYS.map((d) => {
            const active = d.id === day;
            return (
              <button
                key={d.id}
                role="tab"
                aria-selected={active}
                onClick={() => setDay(d.id)}
                className={cn(
                  "flex min-h-[64px] flex-col items-center justify-center gap-1 border-r border-ink/10 px-2 py-3 transition last:border-r-0",
                  active ? "bg-ink text-ink-foreground" : "text-ink/60 hover:bg-concrete/60",
                )}
              >
                <span className="font-heading text-[13px] font-bold uppercase tracking-[0.08em] sm:text-sm">
                  {d.label}
                </span>
                <span
                  className={cn(
                    "font-mono text-[10px] uppercase tracking-[0.14em]",
                    active ? "text-signal" : "text-ink/40",
                  )}
                >
                  {d.date}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {AGENDA_TYPES.map((t) => {
            const active = t.id === type;
            return (
              <button
                key={t.id}
                onClick={() => setType(t.id)}
                aria-pressed={active}
                className={cn(
                  "min-h-[40px] border px-4 font-mono text-[10.5px] uppercase tracking-[0.14em] transition",
                  active
                    ? "border-ink bg-signal text-ink"
                    : "border-ink/15 text-ink/55 hover:border-ink/40 hover:text-ink",
                )}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-ink/15">
          {items.length === 0 && (
            <p className="py-12 text-center text-[15px] text-ink/50">
              Programação em breve. As atividades e os horários serão publicados aqui.
            </p>
          )}

          {items.map((item, i) => (
            <article
              key={`${item.day}-${item.time}-${i}`}
              className="grid gap-2 border-b border-ink/10 py-5 transition hover:bg-concrete/40 md:grid-cols-[120px_1fr_210px] md:items-start md:gap-6 md:px-2"
            >
              <time className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-ink/45">
                {item.time}
              </time>

              <div>
                <h3 className="font-heading text-[15.5px] font-bold leading-snug text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13.5px] text-ink/55">{item.who}</p>
              </div>

              <div className="flex items-center gap-2 md:flex-col md:items-end md:gap-1">
                <span
                  className={cn(
                    "px-2 py-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em]",
                    BADGE[item.type] ?? BADGE.palestra,
                  )}
                >
                  {item.typeLabel}
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-ink/40">
                  {item.room}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="max-w-lg font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.12em] text-ink/40">
            Programação detalhada em preparação.
          </p>
          <Link
            to="/inscricao"
            className="font-heading text-[12px] font-bold uppercase tracking-[0.12em] text-ink underline decoration-signal decoration-2 underline-offset-4 transition hover:text-ink/60"
          >
            Acompanhar programação
          </Link>
        </div>
      </div>
    </section>
  );
}