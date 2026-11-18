import { Bell } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

export default function Tickets() {
  return (
    <section id="ingressos" className="border-t border-ink/10 bg-background">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="06"
          eyebrow="Inscrições"
          title="Participe do CivilTec."
          description="As informações de inscrição serão publicadas em breve."
        />
        <div className="mt-12 border border-dashed border-ink/25 bg-card px-6 py-12 text-center">
          <Bell className="mx-auto h-6 w-6 text-ink/45" aria-hidden="true" />
          <h3 className="mt-4 font-heading text-xl font-extrabold text-ink">Inscrições em breve</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-ink/55">
            Valores, categorias, lotes e orientações de pagamento serão divulgados pelos canais oficiais.
          </p>
        </div>
      </div>
    </section>
  );
}
