import { FileText } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

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
          description="As orientações para submissão de artigos e trabalhos acadêmicos serão divulgadas em breve."
        />
        <div className="mt-12 border border-ink-foreground/20 bg-ink-foreground/[0.04] px-6 py-12 text-center">
          <FileText className="mx-auto h-6 w-6 text-signal" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-xl font-extrabold text-ink-foreground">Submissões em breve</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink-foreground/60">
            Prazos, normas, eixos temáticos e acesso ao sistema de submissão serão informados nesta seção.
          </p>
        </div>
      </div>
    </section>
  );
}
