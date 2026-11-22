import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, MapPin, CalendarDays, Crosshair, BookOpen } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary, btnGhostDark } from "@/components/site/styles";
import Countdown from "@/components/site/Countdown";

function BlueprintTower() {
  return (
    <svg viewBox="0 0 620 680" role="img" aria-label="Ilustração técnica de edifício em estrutura de concreto e guindaste" className="h-full w-full overflow-visible">
      <defs>
        <linearGradient id="towerGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E9B927" stopOpacity=".22" />
          <stop offset="1" stopColor="#E9B927" stopOpacity=".02" />
        </linearGradient>
        <pattern id="windowGrid" width="42" height="48" patternUnits="userSpaceOnUse">
          <rect x="7" y="7" width="22" height="29" fill="#E9B927" fillOpacity=".04" stroke="#D8D5C8" strokeOpacity=".5" strokeWidth="1" />
        </pattern>
      </defs>
      <g fill="none" stroke="#E9B927" strokeOpacity=".13" strokeWidth="1">
        <path d="M35 130H590M35 250H590M35 370H590M35 490H590M35 610H590" strokeDasharray="3 9" />
        <path d="M100 40V650M220 40V650M340 40V650M460 40V650" strokeDasharray="3 9" />
        <circle cx="330" cy="330" r="260" strokeDasharray="5 12" />
        <circle cx="330" cy="330" r="205" strokeDasharray="2 10" />
      </g>
      <g stroke="#E9B927" strokeWidth="1.5" fill="none" opacity=".9">
        <path d="M92 72L438 262L438 614" />
        <path d="M92 72L92 95L438 286" opacity=".55" />
        <path d="M438 262L495 230L495 590" opacity=".7" />
        <path d="M438 262L495 230L549 260" />
        <path d="M438 262L438 225L495 193L495 230" />
        <path d="M495 193V70M495 70L570 112M495 70L390 12" />
        <path d="M390 12L570 112L570 127L390 27Z" fill="url(#towerGlow)" />
        <path d="M570 112V145M562 139H579" />
        <path d="M495 70L488 62M495 70L503 62" />
      </g>
      <g stroke="#E9B927" strokeWidth="1.4" fill="url(#towerGlow)">
        <path d="M170 235L330 145L490 235L330 328Z" />
        <path d="M170 235V500L330 595V328Z" fill="#191A17" fillOpacity=".8" />
        <path d="M490 235V500L330 595V328Z" fill="#20211E" fillOpacity=".75" />
        <path d="M170 300L330 394L490 300M170 366L330 460L490 366M170 433L330 527L490 433" fill="none" opacity=".8" />
        <path d="M330 328V595" fill="none" opacity=".65" />
      </g>
      <path d="M170 235V500L330 595V328Z" fill="url(#windowGrid)" opacity=".95" />
      <path d="M490 235V500L330 595V328Z" fill="url(#windowGrid)" opacity=".8" />
      <g fill="#E9B927" opacity=".78">
        <path d="M210 334L230 346V370L210 358Z" />
        <path d="M260 363L280 375V399L260 387Z" />
        <path d="M380 363L400 351V375L380 387Z" />
        <path d="M430 334L450 322V346L430 358Z" />
        <path d="M210 445L230 457V481L210 469Z" />
        <path d="M380 474L400 462V486L380 498Z" />
        <path d="M330 410L350 398V422L330 434Z" />
      </g>
      <g stroke="#E9B927" strokeWidth="1" fill="none" opacity=".55">
        <path d="M130 210L330 95L530 210" strokeDasharray="4 8" />
        <path d="M130 520L330 640L530 520" strokeDasharray="4 8" />
        <path d="M150 235L150 520M510 235V520" />
        <path d="M135 235H165M495 235H525M135 520H165M495 520H525" />
      </g>
      <g fill="#E9B927" fontFamily="monospace" fontSize="10" letterSpacing="3">
        <text x="390" y="175">[ PROJETO ]</text>
        <text x="52" y="570">CIVILTEC / 2027</text>
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-[#171815] text-[#F7F6F0] lg:min-h-[calc(100svh-0px)]">
      <div className="blueprint-grid-dark absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30" aria-hidden="true" style={{ backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(233,185,39,.10), transparent 48%), linear-gradient(115deg, transparent 0 48%, rgba(255,255,255,.025) 48.1%, transparent 48.3%)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171815] via-[#171815]/95 to-[#171815]/55" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[760px] w-full max-w-[1240px] items-center gap-8 px-5 pb-12 pt-28 sm:px-8 md:pt-32 lg:min-h-[calc(100svh-0px)] lg:grid-cols-12 lg:gap-5 lg:pb-10">
        <div className="relative z-10 lg:col-span-7">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="label-mono bg-[#E9B927] px-2 py-1 text-[#171815]">[ 01 ]</span>
            <span className="label-mono text-white/55">{EVENT.name}</span>
            <span className="label-mono text-white/30">/</span>
            <span className="label-mono text-white/55">{EVENT.editionLabel}</span>
          </div>

          <h1 className="mt-7 max-w-[780px] font-heading text-[clamp(2.8rem,6.1vw,5.35rem)] font-extrabold uppercase leading-[0.91] tracking-[-0.055em]">
            O futuro da construção <span className="text-[#E9B927]">se projeta aqui</span>
          </h1>

          <p className="mt-6 max-w-[540px] text-[15px] leading-relaxed text-white/70 sm:text-base">
            Quatro dias de palestras, encontros e troca de conhecimento para quem está reinventando a engenharia civil no Brasil.
          </p>

          <div className="mt-8 grid max-w-[650px] gap-3 sm:grid-cols-[1fr_1.18fr]">
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/90 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-[#E9B927]">
                <CalendarDays className="h-3.5 w-3.5" />
                <span className="label-mono text-[9px]">Quando</span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-heading text-4xl font-extrabold leading-none sm:text-5xl">3–6</span>
                <span className="pb-1 font-mono text-[10px] uppercase tracking-[.2em] text-white/55">maio de 2027</span>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-1.5">
                {[
                  ["SEG", "03"], ["TER", "04"], ["QUA", "05"], ["QUI", "06"],
                ].map(([day, date], i) => (
                  <div key={date} className={`border p-2 ${i === 3 ? "border-[#E9B927] bg-[#E9B927] text-[#171815]" : "border-white/15 bg-black/20 text-white"}`}>
                    <span className="block font-mono text-[8px] tracking-widest opacity-60">{day}</span>
                    <span className="block font-heading text-xl font-bold leading-tight">{date}</span>
                  </div>
                ))}
              </div>
              <p className="label-mono mt-3 text-[8px] text-white/35">4 dias · seg a qui</p>
            </div>

            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/90 p-4 sm:p-5">
              <div className="flex items-center gap-2 text-[#E9B927]">
                <MapPin className="h-3.5 w-3.5" />
                <span className="label-mono text-[9px]">Onde</span>
              </div>
              <p className="mt-3 font-heading text-xl font-bold leading-tight sm:text-2xl">Campus VIII</p>
              <p className="mt-1 text-xs text-[#E9B927]">Prof.ª Maria da Penha</p>
              <p className="mt-1 text-[10px] text-white/55">CCTS / UEPB</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
                <div>
                  <p className="label-mono text-[8px] text-white/40">Araruna · Paraíba</p>
                  <p className="mt-1 font-mono text-[9px] text-white/60">6.5352° S · 35.7325° W</p>
                </div>
                <Crosshair className="h-8 w-8 text-[#E9B927]" strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="mt-4 max-w-[650px]">
            <Countdown />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/inscricao" className={btnPrimary}>
              Garantir minha vaga <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#programacao" className={btnGhostDark}>
              Ver programação <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative hidden h-[610px] items-center lg:col-span-5 lg:flex">
          <div className="absolute inset-0 opacity-90"><BlueprintTower /></div>
          <div className="relative z-10 ml-auto mt-36 flex w-[178px] flex-col gap-3">
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-3 shadow-xl backdrop-blur">
              <p className="label-mono text-[8px] text-white/45">Realização</p>
              <img src="/brand/civiltec-logo.svg" alt="CivilTec" className="mt-2 h-8 max-w-full object-contain object-left" />
              <p className="mt-2 border-t border-white/10 pt-2 font-heading text-[11px] font-bold text-[#E9B927]">UEPB · CCTS</p>
            </div>
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-3 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="label-mono text-[8px] text-white/45">Coordenadas</p>
                <Crosshair className="h-4 w-4 text-[#E9B927]" />
              </div>
              <p className="mt-2 font-heading text-base font-bold">6.5352° <span className="text-[10px] text-[#E9B927]">S</span></p>
              <p className="font-heading text-base font-bold">35.7325° <span className="text-[10px] text-[#E9B927]">W</span></p>
              <p className="label-mono mt-2 text-[7px] text-white/35">Araruna · PB · Brasil</p>
            </div>
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-3 shadow-xl backdrop-blur">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#E9B927]" />
                <p className="label-mono text-[8px] text-white/45">Anais</p>
              </div>
              <p className="mt-2 font-mono text-sm font-bold">ISSN {EVENT.issn}</p>
              <p className="label-mono mt-1 text-[7px] text-white/35">Publicação científica</p>
            </div>
            <div className="ml-1 grid h-[76px] w-[76px] place-items-center rounded-full border border-[#E9B927]/60 p-1">
              <div className="grid h-full w-full place-items-center rounded-full border border-dashed border-[#E9B927]/50">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#E9B927] text-[#171815]">
                  <span className="font-heading text-xl font-black">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" aria-hidden="true" />
    </section>
  );
}
