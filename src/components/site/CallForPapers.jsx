import { FileText, Download } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const DOCUMENTS = [
  {
    label: "Edital de submissão",
    href: "https://drive.google.com/uc?export=download&id=193n0MW7MdMBUXt36kcd6hUjtxXx97b2n",
  },
  {
    label: "Template do artigo (Word)",
    href: "https://docs.google.com/document/d/1QiM-_cVkVkILxkjQYHAhrWliWD8rW6zO/export?format=docx",
  },
  {
    label: "Orientações de formatação (Word)",
    href: "https://docs.google.com/document/d/1CW7Mw2fYklmPf66ZcvoJIaykv5DFyXDd/export?format=docx",
  },
];

export default function CallForPapers() {
  return (
    <section id="submissao" className="relative overflow-hidden border-t border-ink bg-ink">
      <div className="blueprint-grid-dark absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="05"
          eyebrow="Artigos e trabalhos"
          tone="dark"
          title="Compartilhe sua pesquisa."
          description="Consulte o edital e acesse os documentos necessários para preparar sua submissão."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {DOCUMENTS.map((document) => (
            <a
              key={document.label}
              href={document.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[150px] flex-col justify-between border border-ink-foreground/20 bg-ink-foreground/[0.04] p-5 transition hover:border-signal hover:bg-ink-foreground/[0.08]"
            >
              <div className="flex items-start justify-between gap-3">
                <FileText className="h-5 w-5 text-signal" aria-hidden="true" />
                <Download className="h-4 w-4 text-ink-foreground/50 transition group-hover:text-signal" aria-hidden="true" />
              </div>
              <span className="mt-6 font-heading text-sm font-bold text-ink-foreground">{document.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
