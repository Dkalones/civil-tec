import { Link } from "@tanstack/react-router";
import { Download, ArrowUpRight } from "lucide-react";
import {
  EVENT,
  SUBMISSION_DEADLINES,
  SUBMISSION_RULES,
  SUBMISSION_AREAS,
} from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";
import { btnPrimary, btnGhostDark } from "@/components/site/styles";

function downloadRules() {
  const text = [
    "NORMAS PARA SUBMISSÃO DE TRABALHOS — CIVILTEC",
    "Congresso de Tecnologia em Construções · CCTA/UEPB · Pombal — PB",
    "",
    "PRAZOS",
    ...SUBMISSION_DEADLINES.map((d) => `- ${d.label}: ${d.date}`),
    "",
    "FORMATAÇÃO",
    ...SUBMISSION_RULES.map((r, i) => `${i + 1}. ${r}`),
    "",
    `EIXOS TEMÁTICOS: ${SUBMISSION_AREAS.join("; ")}.`,
    "",
    `Dúvidas: ${EVENT.email}`,
  ].join("\n");

  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "normas-submissao-civiltec.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function CallForPapers() {
  return (
    <section id="submissao" className="relative overflow-hidden border-t border-ink bg-ink">
      <div className="blueprint-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="05"
          eyebrow="Submissão de trabalhos"
          tone="dark"
          title="Seu trabalho pode entrar nos anais."
          description="Aceitamos resumos de pesquisas, relatos de obra e estudos de caso. Os aprovados são apresentados durante o congresso e publicados com ISSN."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
              {SUBMISSION_DEADLINES.map((d) => (
                <div key={d.label} className="border-t border-ink-foreground/20 pt-3">
                  <dt className="label-mono text-ink-foreground/45">{d.label}</dt>
                  <dd className="mt-2 font-heading text-[17px] font-bold text-ink-foreground">
                    {d.date}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/submissao" className={btnPrimary}>
                Submeter trabalho
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <button type="button" onClick={downloadRules} className={btnGhostDark}>
                Baixar normas
                <Download className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="label-mono text-ink-foreground/45">Normas de formatação</p>
            <ul className="mt-5 space-y-4">
              {SUBMISSION_RULES.map((rule) => (
                <li
                  key={rule}
                  className="flex gap-4 border-b border-ink-foreground/10 pb-4 text-[15px] leading-relaxed text-ink-foreground/75"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                  {rule}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {SUBMISSION_AREAS.map((area) => (
                <span
                  key={area}
                  className="border border-ink-foreground/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-foreground/60"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}