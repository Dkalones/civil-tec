import { lazy, Suspense } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { EVENT, VENUE_TIPS } from "@/lib/event-data";
import SectionHeading from "@/components/site/SectionHeading";

const MapPanel = lazy(() => import("@/components/site/MapPanel"));

export default function Venue() {
  return (
    <section id="local" className="border-t border-ink/10 bg-concrete/45">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="07"
          eyebrow="Local e hospedagem"
          title="No coração do sertão da Paraíba."
          description="O congresso acontece no Campus Pombal da UEPB, com auditórios, laboratórios e área de convivência no mesmo terreno."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="relative border border-ink/20 bg-concrete">
              <ClientOnly fallback={<div className="h-[360px] w-full md:h-[460px]" />}>
                <Suspense fallback={<div className="h-[360px] w-full md:h-[460px]" />}>
                  <MapPanel />
                </Suspense>
              </ClientOnly>
              <span className="label-mono pointer-events-none absolute left-3 top-3 z-[500] bg-ink px-2 py-1 text-ink-foreground/80">
                CCTA · UEPB
              </span>
            </div>

            <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <p className="flex items-start gap-2 text-[14px] text-ink/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink" aria-hidden="true" />
                {EVENT.address}
              </p>
              <a
                href={EVENT.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 font-heading text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink transition hover:text-ink/60"
              >
                Abrir no Maps
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-ink/15 bg-card">
              <Image
                src={EVENT.images.venue}
                alt="Fachada do campus universitário ao anoitecer, com as luzes internas acesas"
                className="aspect-[3/2] w-full object-cover"
                fittingType="fill"
              />
              <div className="border-t border-ink/10 p-5">
                <p className="label-mono text-ink/45">Como chegar</p>
                <ul className="mt-4 space-y-4">
                  {VENUE_TIPS.map((tip) => (
                    <li key={tip.title}>
                      <p className="font-heading text-[13.5px] font-bold text-ink">{tip.title}</p>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-ink/60">{tip.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 border border-ink/15 bg-card p-5">
              <p className="label-mono text-ink/45">Hospedagem</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/70">
                Hotéis de Pombal oferecem tarifa de congressista. A lista com contatos e valores
                é enviada por e-mail depois da inscrição confirmada.
              </p>
              <a
                href={EVENT.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 border border-ink px-4 py-2.5 font-heading text-[11.5px] font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-ink-foreground"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                Falar com a organização
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}