import { Link } from "@tanstack/react-router";
import { FileText, Download } from "lucide-react";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import { EVENT } from "@/lib/event-data";

const DOWNLOADS = [
  {
    title: "Edital de submissão de artigos",
    description: "Consulte as regras, os prazos e as condições para participar.",
    href: "https://drive.google.com/uc?export=download&id=193n0MW7MdMBUXt36kcd6hUjtxXx97b2n",
    format: "PDF",
  },
  {
    title: "Template oficial do artigo",
    description: "Baixe o modelo editável para preparar seu trabalho.",
    href: "https://docs.google.com/document/d/1QiM-_cVkVkILxkjQYHAhrWliWD8rW6zO/export?format=docx",
    format: "DOCX",
  },
  {
    title: "Orientações para formatação",
    description: "Confira as instruções para preencher e formatar o documento.",
    href: "https://docs.google.com/document/d/1CW7Mw2fYklmPf66ZcvoJIaykv5DFyXDd/export?format=docx",
    format: "DOCX",
  },
];

function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <section className="relative overflow-hidden bg-ink pt-[72px] text-ink-foreground">
        <div className="blueprint-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8 md:py-20">
          <p className="label-mono text-ink-foreground/50">[ Artigos e trabalhos ] · {EVENT.dateShort}</p>
          <h1 className="mt-4 max-w-2xl font-heading text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
            Submissão de trabalhos
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-foreground/70">
            Acesse o edital, baixe o modelo oficial e confira as orientações para preparar seu trabalho para o CivilTec.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-[1000px] px-5 py-16 sm:px-8 md:py-24">
        <div className="mb-10">
          <p className="label-mono text-ink/50">[ Documentos oficiais ]</p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold text-ink sm:text-3xl">Materiais para submissão</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink/60">
            Os arquivos estão disponíveis para consulta e download. O modelo do artigo e as orientações podem ser baixados em formato Word.
          </p>
        </div>
        <div className="grid gap-4">
          {DOWNLOADS.map((item, index) => (
            <article key={item.title} className="flex flex-col gap-5 border border-ink/15 bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-ink-foreground">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="label-mono text-ink/45">0{index + 1} · {item.format}</p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/60">{item.description}</p>
                </div>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 border border-ink px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-ink-foreground"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Baixar arquivo
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/" className="inline-flex border border-ink/30 px-5 py-3 font-heading text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-ink-foreground">
            Voltar ao site
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Page;
