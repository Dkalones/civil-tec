import { Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { TICKETS } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

export default function Tickets() {
  return (
    <section id="ingressos" className="border-t border-ink/10 bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="06"
          eyebrow="Ingressos e lotes"
          title="Escolha como você participa."
          description="Todos os planos dão acesso às palestras e ao certificado. O lote atual é o segundo, com vagas limitadas por categoria."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TICKETS.map((t) => {
            const dark = Boolean(t.highlight);
            return (
              <div
                key={t.id}
                className={cn(
                  "relative flex flex-col border p-6 transition",
                  dark
                    ? "border-ink bg-ink text-ink-foreground md:-translate-y-2"
                    : "border-ink/20 bg-card text-ink hover:border-ink",
                )}
              >
                {dark && (
                  <span className="absolute -top-3 left-6 bg-signal px-2 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink">
                    Mais escolhido
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-extrabold leading-tight">
                      {t.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-[13px]",
                        dark ? "text-ink-foreground/60" : "text-ink/55",
                      )}
                    >
                      {t.note}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "shrink-0 border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em]",
                      dark
                        ? "border-ink-foreground/25 text-ink-foreground/70"
                        : "border-ink/20 text-ink/55",
                    )}
                  >
                    {t.lote}
                  </span>
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-heading text-[2.6rem] font-extrabold leading-none">
                    R$ {t.price}
                  </span>
                  <span
                    className={cn(
                      "mb-1 font-mono text-[11px] line-through",
                      dark ? "text-ink-foreground/40" : "text-ink/35",
                    )}
                  >
                    R$ {t.previous}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-2.5 border-t pt-5"
                  style={{ borderColor: dark ? "rgba(250,249,245,0.14)" : "rgba(23,23,21,0.12)" }}
                >
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                      <Check
                        className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", dark ? "text-signal" : "text-ink")}
                        aria-hidden="true"
                      />
                      <span className={dark ? "text-ink-foreground/75" : "text-ink/70"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/inscricao"
                  search={{ categoria: t.id }}
                  className={cn(
                    "mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 px-5 font-heading text-[12px] font-bold uppercase tracking-[0.12em] transition",
                    dark
                      ? "bg-signal text-ink hover:bg-[#f0c64a]"
                      : "border border-ink bg-transparent text-ink hover:bg-ink hover:text-ink-foreground",
                  )}
                >
                  Escolher este plano
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.12em] text-ink/45">
          Valores do 2º lote · vagas limitadas · pagamento por PIX ou transferência, com
          instruções enviadas por e-mail após a inscrição
        </p>
      </div>
    </section>
  );
}