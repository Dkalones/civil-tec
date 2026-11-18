const db = globalThis.__B44_DB__ || {
  entities: new Proxy({}, {
    get: () => ({
      create: async () => {
        throw new Error("O serviço de inscrições ainda não está conectado.");
      },
    }),
  }),
};

import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, MessageCircle, Loader2 } from "lucide-react";

import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { TICKETS, EVENT } from "@/lib/event-data";
import { btnPrimary, btnGhostLight, fieldClass } from "@/components/site/styles";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/inscricao")({
  validateSearch: (search) => ({
    categoria: typeof search.categoria === "string" ? search.categoria : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Inscrição · CivilTec" },
      {
        name: "description",
        content:
          "Garanta sua vaga no CivilTec: escolha o plano, informe seus dados e receba as instruções de pagamento.",
      },
      { property: "og:title", content: "Inscrição · CivilTec" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Page,
});

const onlyDigits = (v) => v.replace(/\D/g, "");

const formatCpf = (value) =>
  onlyDigits(value)
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

function Field({ label, htmlFor, error, children, hint }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="label-mono block text-ink/50"
      >
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {hint && !error && <p className="mt-1.5 text-[12px] text-ink/40">{hint}</p>}
      {error && (
        <p role="alert" className="mt-1.5 text-[12px] font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function Page() {
  const { categoria } = Route.useSearch();
  const initialPlan = TICKETS.some((t) => t.id === categoria) ? categoria : TICKETS[1].id;

  const [planId, setPlanId] = useState(initialPlan);
  const [form, setForm] = useState({ nome: "", email: "", cpf: "", instituicao: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(null);

  const plan = TICKETS.find((t) => t.id === planId) ?? TICKETS[0];

  const update = (key) => (event) => {
    const value = key === "cpf" ? formatCpf(event.target.value) : event.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (form.nome.trim().length < 3) next.nome = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Informe um e-mail válido.";
    if (onlyDigits(form.cpf).length !== 11) next.cpf = "O CPF precisa ter 11 dígitos.";
    if (form.instituicao.trim().length < 2)
      next.instituicao = "Informe sua instituição ou empresa.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const created = await db.entities.Inscricao.create({
        nome: form.nome.trim(),
        email: form.email.trim().toLowerCase(),
        cpf: form.cpf,
        categoria: plan.name,
        instituicao: form.instituicao.trim(),
        lote: plan.lote,
        valor: plan.price,
        status: "Pendente",
      });
      setDone({ ...created, plano: plan.name, valor: plan.price, email: form.email.trim() });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError(
        "Não conseguimos registrar sua inscrição agora. Tente novamente mais tarde; os canais oficiais de contato serão divulgados em breve.",
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
            <span className="text-signal">[ Inscrição ]</span>
            {EVENT.dateShort}
          </p>
          <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
            Garanta sua vaga no CivilTec
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-foreground/70">
            Leva menos de um minuto. Pedimos apenas os dados essenciais para emitir seu
            certificado e reservar a vaga.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20">
        {done ? (
          <div className="mx-auto max-w-2xl border border-ink/15 bg-card p-7 sm:p-10">
            <span className="inline-flex items-center gap-2 bg-signal px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink">
              <Check className="h-3.5 w-3.5" aria-hidden="true" />
              Inscrição registrada
            </span>
            <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-ink">
              Recebemos seus dados
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/65">
              Guarde o protocolo abaixo. A inscrição fica pendente até a confirmação do pagamento;
              as instruções oficiais serão divulgadas pela organização.
            </p>

            <p className="mt-6 border border-ink/15 bg-concrete/50 px-4 py-3 font-mono text-lg tracking-[0.18em] text-ink">
              CT-{String(done.id).slice(-6).toUpperCase()}
            </p>

            <dl className="mt-6 grid gap-3 border-t border-ink/10 pt-5 text-[14px] sm:grid-cols-2">
              <div>
                <dt className="label-mono text-ink/40">Plano</dt>
                <dd className="mt-1 font-heading font-bold text-ink">{done.plano}</dd>
              </div>
              <div>
                <dt className="label-mono text-ink/40">Valor</dt>
                <dd className="mt-1 font-heading font-bold text-ink">R$ {done.valor}</dd>
              </div>
              <div>
                <dt className="label-mono text-ink/40">Nome</dt>
                <dd className="mt-1 text-ink/75">{done.nome}</dd>
              </div>
              <div>
                <dt className="label-mono text-ink/40">E-mail</dt>
                <dd className="mt-1 text-ink/75">{done.email}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {EVENT.whatsappUrl && (
                <a
                  href={EVENT.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={btnPrimary}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Confirmar pelo WhatsApp
                </a>
              )}
              <Link to="/" className={btnGhostLight}>
                Voltar ao site
              </Link>
            </div>
            <p className="mt-5 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.12em] text-ink/40">
              A vaga é confirmada após o pagamento · política de reembolso disponível no FAQ
            </p>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <form onSubmit={onSubmit} className="lg:col-span-7" noValidate>
              <fieldset>
                <legend className="label-mono text-ink/50">1 · Escolha o plano</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {TICKETS.map((t) => {
                    const active = t.id === planId;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setPlanId(t.id)}
                        aria-pressed={active}
                        className={cn(
                          "flex min-h-[92px] flex-col justify-between border p-4 text-left transition",
                          active
                            ? "border-ink bg-ink text-ink-foreground"
                            : "border-ink/20 bg-card text-ink hover:border-ink/50",
                        )}
                      >
                        <span className="font-heading text-[13.5px] font-bold leading-tight">
                          {t.name}
                        </span>
                        <span
                          className={cn(
                            "mt-2 font-mono text-[12px]",
                            active ? "text-signal" : "text-ink/50",
                          )}
                        >
                          R$ {t.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset className="mt-9">
                <legend className="label-mono text-ink/50">2 · Seus dados</legend>
                <div className="mt-3 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Field label="Nome completo" htmlFor="nome" error={errors.nome}>
                      <input
                        id="nome"
                        name="nome"
                        autoComplete="name"
                        value={form.nome}
                        onChange={update("nome")}
                        className={fieldClass}
                        placeholder="Como está no documento"
                      />
                    </Field>
                  </div>

                  <Field label="E-mail" htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={update("email")}
                      className={fieldClass}
                      placeholder="voce@email.com"
                    />
                  </Field>

                  <Field
                    label="CPF"
                    htmlFor="cpf"
                    error={errors.cpf}
                    hint="Usado apenas para o certificado"
                  >
                    <input
                      id="cpf"
                      name="cpf"
                      inputMode="numeric"
                      value={form.cpf}
                      onChange={update("cpf")}
                      className={fieldClass}
                      placeholder="000.000.000-00"
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <Field
                      label="Instituição"
                      htmlFor="instituicao"
                      error={errors.instituicao}
                    >
                      <input
                        id="instituicao"
                        name="instituicao"
                        autoComplete="organization"
                        value={form.instituicao}
                        onChange={update("instituicao")}
                        className={fieldClass}
                        placeholder="Universidade, empresa ou órgão"
                      />
                    </Field>
                  </div>
                </div>
              </fieldset>

              {submitError && (
                <p role="alert" className="mt-6 border border-destructive/30 bg-destructive/5 px-4 py-3 text-[13.5px] text-destructive">
                  {submitError}
                </p>
              )}

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button type="submit" disabled={submitting} className={cn(btnPrimary, "disabled:opacity-70")}>
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Enviando
                    </>
                  ) : (
                    <>
                      Registrar inscrição
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
                <p className="text-[12px] leading-relaxed text-ink/45">
                  Ao enviar, você concorda com a{" "}
                  <Link to="/privacidade" className="underline decoration-signal decoration-2 underline-offset-2">
                    política de privacidade
                  </Link>
                  .
                </p>
              </div>
            </form>

            <aside className="lg:col-span-5">
              <div className="sticky top-24 border border-ink/15 bg-card p-6">
                <p className="label-mono text-ink/45">Resumo</p>
                <p className="mt-3 font-heading text-lg font-extrabold text-ink">{plan.name}</p>
                <p className="text-[13px] text-ink/55">{plan.note}</p>

                <div className="mt-5 flex items-end gap-2 border-t border-ink/10 pt-5">
                  <span className="font-heading text-3xl font-extrabold text-ink">
                    R$ {plan.price}
                  </span>
                  <span className="mb-1 font-mono text-[11px] text-ink/35 line-through">
                    R$ {plan.previous}
                  </span>
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/40">
                  {plan.lote} · vagas limitadas
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-ink/10 pt-5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] leading-snug text-ink/70">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-ink/10 pt-5">
                  <p className="label-mono text-ink/40">Pagamento</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/60">
                    A inscrição é registrada agora e a vaga é confirmada após o pagamento por PIX
                    ou transferência, com instruções enviadas pela organização.
                  </p>
                  {EVENT.whatsappUrl ? (
                    <a
                      href={EVENT.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 font-heading text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink underline decoration-signal decoration-2 underline-offset-4"
                    >
                      <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                      Falar com a organização
                    </a>
                  ) : (
                    <p className="mt-4 text-[12px] text-ink/45">Canais oficiais de contato em definição.</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}