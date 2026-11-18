import { FAQ, EVENT } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <section id="faq" className="border-t border-ink/10 bg-concrete/45">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              index="09"
              eyebrow="Perguntas frequentes"
              title="Antes de se inscrever."
              description="As dúvidas que mais chegam para a comissão organizadora."
            />
            <p className="mt-8 text-[14px] leading-relaxed text-ink/60">
              Não encontrou o que procurava?{" "}
              {EVENT.email ? (
                <a
                  href={`mailto:${EVENT.email}`}
                  className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4"
                >
                  Escreva para a organização
                </a>
              ) : (
                <span>Os canais oficiais de contato serão divulgados em breve.</span>
              )}
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="border-t border-ink/15">
              {FAQ.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`item-${i}`}
                  className="border-b border-ink/15"
                >
                  <AccordionTrigger className="gap-4 py-5 text-left font-heading text-[15.5px] font-bold text-ink hover:no-underline [&>svg]:text-ink/50">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-8 text-[14.5px] leading-relaxed text-ink/65">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}