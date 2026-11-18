const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Download, Loader2 } from "lucide-react";

import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import {
  EVENT,
  SUBMISSION_AREAS,
  SUBMISSION_DEADLINES,
  SUBMISSION_RULES,
} from "@/lib/event-data";
import { btnPrimary, btnGhostLight, fieldClass } from "@/components/site/styles";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/submissao")({
  head: () => ({
    meta: [
      { title: "Submissão de trabalhos · CivilTec" },
      {
        name: "description",
        content:
          "Envie seu resumo para os anais do CivilTec. Confira prazos, normas de formatação e eixos temáticos.",
      },
      { property: "og:title", content: "Submissão de trabalhos · CivilTec" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

function downloadRules() {
  const text = [
    "NORMAS PARA SUBMISSÃO DE TRABALHOS — CIVILTEC",
    `${EVENT.name} · CCTA/UEPB · Pombal — PB`,
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

const EMPTY = { titulo: "", autores: "", email: "", area: SUBMISSION_AREAS[0], resumo: "" };

function Page() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(null);

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.titulo.trim().length < 8) next.titulo = "Informe o título completo do trabalho.";
    if (form.autores.trim().length < 5) next.autores = "Liste os autores do trabalho.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Informe um e-mail válido.";
    if (form.resumo.trim().length < 200)
      next.resumo = "O resumo precisa ter pelo menos 200 caracteres.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const created = await db.entities.Submissao.create({
        titulo: form.titulo.trim(),
        autores: form.autores.trim(),
        email: form.email.trim().toLowerCase(),
        area: form.area,
        resumo: form.resumo.trim(),
        status: "Recebido",
      });
      setDone({ ...created, titulo: form.titulo.trim(), email: form.email.trim() });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        "Não conseguimos registrar sua submissão agora. Tente novamente em instantes.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <section className="relative overflow-hidden bg-ink pt-[72px] text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20">
          <p className="label-mono flex items-center gap-3 text-ink-foreground/50">
            <span className="text-signal">[ Submissão ]</span>
            Anais ISSN {EVENT.issn}
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
            Envie seu trabalho para os anais
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-foreground/70">
            Resumos de pesquisa, relatos de obra e estudos de caso são bem-vindos. A avaliação é
            feita por pares da comissão científica.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20">
        {done ? (
          <div className="mx-auto max-w-2xl border border-ink/15 bg-card p-7 sm:p-10">
            <span className="inline-flex items-center gap-2 bg-signal px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Trabalho recebido
            </span>
            <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-ink">
              Submissão registrada
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
              Guarde o protocolo. A comissão científica avalia os resumos e responde no e-mail
              informado até 30 de setembro.
            </p>

            <p className="mt-6 border border-ink/15 bg-concrete/50 px-4 py-3 font-mono text-lg tracking-[0.18em] text-ink">
              SUB-{String(done.id).slice(-6).toUpperCase()}
            </p>

            <dl className="mt-6 grid gap-3 border-t border-ink/10 pt-5 text-[14px] sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="label-mono text-ink/40">Título</dt>
                <dd className="mt-1 font-heading font-bold leading-snug text-ink">
                  {done.titulo}
                </dd>
              </div>
              <div>
                <dt className="label-mono text-ink/40">Eixo</dt>
                <dd className="mt-1 text-ink/75">{done.area}</dd>
              </div>
              <div>
                <dt className="label-mono text-ink/40">E-mail</dt>
                <dd className="mt-1 text-ink/75">{done.email}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/" className={btnPrimary}>
                Voltar ao site
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setDone(null);
                  setForm(EMPTY);
                }}
                className={btnGhostLight}
              >
                Enviar outro trabalho
              </button>
            </div>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <form onSubmit={onSubmit} className="lg:col-span-7" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="titulo" className="label-mono block text-ink/50">
                    Título do trabalho
                  </label>
                  <input
                    id="titulo"
                    value={form.titulo}
                    onChange={update("titulo")}
                    className={cn(fieldClass, "mt-2")}
                    placeholder="Ex.: Análise de patologias em revestimentos cerâmicos"
                  />
                  {errors.titulo && (
                    <p role="alert" className="mt-1.5 text-[12px] font-medium text-destructive">
                      {errors.titulo}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="autores" className="label-mono block text-ink/50">
                    Autores
                  </label>
                  <input
                    id="autores"
                    value={form.autores}
                    onChange={update("autores")}
                    className={cn(fieldClass, "mt-2")}
                    placeholder="Nome, instituição — separados por ponto e vírgula"
                  />
                  {errors.autores && (
                    <p role="alert" className="mt-1.5 text-[12px] font-medium text-destructive">
                      {errors.autores}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="label-mono block text-ink/50">
                    E-mail do responsável
                  </label>
                  <input
                    id="email"
                    type="email"
                    inputMode="email"
                    value={form.email}
                    onChange={update("email")}
                    className={cn(fieldClass, "mt-2")}
                    placeholder="voce@email.com"
                  />
                  {errors.email && (
                    <p role="alert" className="mt-1.5 text-[12px] font-medium text-destructive">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="area" className="label-mono block text-ink/50">
                    Eixo temático
                  </label>
                  <select
                    id="area"
                    value={form.area}
                    onChange={update("area")}
                    className={cn(fieldClass, "mt-2")}
                  >
                    {SUBMISSION_AREAS.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="resumo" className="label-mono block text-ink/50">
                    Resumo
                  </label>
                  <textarea
                    id="resumo"
                    rows={9}
                    value={form.resumo}
                    onChange={update("resumo")}
                    className={cn(fieldClass, "mt-2 resize-y leading-relaxed")}
                    placeholder="Objetivo, método, resultados e conclusão (300 a 500 palavras)."
                  />
                  <div className="mt-1.5 flex items-center justify-between gap-4">
                    {errors.resumo ? (
                      <p role="alert" className="text-[12px] font-medium text-destructive">
                        {errors.resumo}
                      </p>
                    ) : (
                      <p className="text-[12px] text-ink/40">
                        Entre 300 e 500 palavras, em português.
                      </p>
                    )}
                    <p className="font-mono text-[11px] text-ink/35">{form.resumo.length} car.</p>
                  </div>
                </div>
              </div>

              {submitError && (
                <p
                  role="alert"
                  className="mt-6 border border-destructive/30 bg-destructive/5 px-4 py-3 text-[13.5px] text-destructive"
                >
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className={cn(btnPrimary, "mt-8 disabled:opacity-70")}
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Enviando
                  </>
                ) : (
                  <>
                    Enviar submissão
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </button>
            </form>

            <aside className="lg:col-span-5">
              <div className="border border-ink/15 bg-card p-6">
                <p className="label-mono text-ink/45">Prazos</p>
                <dl className="mt-4 space-y-3">
                  {SUBMISSION_DEADLINES.map((d) => (
                    <div key={d.label} className="border-b border-ink/10 pb-3 last:border-b-0 last:pb-0">
                      <dt className="text-[13px] text-ink/55">{d.label}</dt>
                      <dd className="font-heading text-[14.5px] font-bold text-ink">{d.date}</dd>
                    </div>
                  ))}
                </dl>

                <button
                  type="button"
                  onClick={downloadRules}
                  className="mt-6 inline-flex items-center gap-2 border border-ink px-4 py-2.5 font-heading text-[11px] font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-ink-foreground"
                >
                  Baixar normas
                  <Download className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-5 border border-ink/15 bg-card p-6">
                <p className="label-mono text-ink/45">Normas de formatação</p>
                <ul className="mt-4 space-y-3">
                  {SUBMISSION_RULES.map((rule) => (
                    <li key={rule} className="flex gap-3 text-[13px] leading-relaxed text-ink/65">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}