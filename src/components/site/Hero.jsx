import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, MapPin, CalendarDays, Crosshair, BookOpen } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary, btnGhostDark } from "@/components/site/styles";
import Countdown from "@/components/site/Countdown";

function BlueprintTower() {
  const windows = [];
  for (let floor = 0; floor < 5; floor++) {
    for (let col = 0; col < 4; col++) {
      const y = 280 + floor * 64;
      const x = 95 + col * 43 + floor * 0;
      windows.push(<path key={`left-${floor}-${col}`} d={`M${x} ${y} l20 12 v25 l-20 -12z`} />);
      const rx = 325 + col * 43;
      windows.push(<path key={`right-${floor}-${col}`} d={`M${rx} ${y + 12 - col * 24} l20 -12 v25 l-20 12z`} />);
    }
  }
  return (
    <svg viewBox="0 0 620 720" role="img" aria-label="Ilustração técnica de edifício alto e guindaste" className="h-full w-full overflow-visible">
      <defs>
        <pattern id="towerDots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r=".7" fill="#E9B927" opacity=".35" />
        </pattern>
      </defs>
      <g fill="none" stroke="#E9B927" strokeWidth="1.2">
        <path d="M70 225 300 92 530 225 300 360Z" />
        <path d="M70 225V560L300 695V360Z" />
        <path d="M530 225V560L300 695V360Z" />
        <path d="M70 292 300 427 530 292M70 359 300 494 530 359M70 426 300 561 530 426M70 493 300 628 530 493" />
        <path d="M300 360V695" opacity=".7" />
        <path d="M70 225 300 92 530 225" strokeWidth="1.8" />
        <path d="M300 92 300 38 520 165" opacity=".75" />
        <path d="M520 165V620M512 620H528" />
        <path d="M300 38V0M300 0 555 148 555 166 300 18Z" />
        <path d="M300 0 555 148M300 0 180 -68" />
        <path d="M300 0V38M555 148V190" />
        <path d="M180 -68 555 148" />
        <path d="M40 210 300 58 560 210M40 575 300 728 560 575" strokeDasharray="3 9" opacity=".35" />
        <path d="M20 225V560M580 225V560" opacity=".35" />
      </g>
      <g fill="#20211E" stroke="#A8A69C" strokeWidth=".9">{windows}</g>
      <g fill="#E9B927" stroke="#E9B927" strokeWidth=".8">
        <path d="M95 475 115 487V512L95 500Z" />
        <path d="M160 513 180 525V550L160 538Z" />
        <path d="M225 551 245 563V588L225 576Z" />
        <path d="M350 587 370 575V600L350 612Z" />
        <path d="M415 549 435 537V562L415 574Z" />
        <path d="M480 511 500 499V524L480 536Z" />
        <path d="M290 380 310 392V417L290 405Z" />
        <path d="M300 290 320 302V327L300 315Z" />
      </g>
      <g fill="#E9B927" fontFamily="monospace" fontSize="10" letterSpacing="3">
        <text x="292" y="78">[ PROJETO ]</text>
        <text x="10" y="650">ESTRUTURA / 2027</text>
      </g>
      <g fill="none" stroke="#E9B927" opacity=".2">
        <circle cx="300" cy="365" r="275" strokeDasharray="3 10" />
        <circle cx="300" cy="365" r="230" strokeDasharray="2 12" />
        <path d="M0 180H620M0 360H620M0 540H620M80 0V720M300 0V720M520 0V720" strokeDasharray="2 10" />
      </g>
    </svg>
  );
}

function DateCard() {
  return (
    <div className="notch flex h-[106px] min-w-0 items-center gap-3 border-l-[3px] border-[#E9B927] bg-[#20211E]/95 px-3 py-2.5">
      <div className="min-w-[105px] flex-1">
        <div className="flex items-center gap-1.5 text-[#E9B927]">
          <CalendarDays className="h-3 w-3" />
          <span className="label-mono text-[8px]">Quando</span>
        </div>
        <div className="mt-2 flex items-end gap-2">
          <span className="font-heading text-[42px] font-extrabold leading-[.9]">3–6</span>
        </div>
        <p className="mt-1 whitespace-nowrap font-heading text-[11px] font-semibold">de maio de 2027</p>
        <p className="label-mono mt-2 text-[7px] text-white/35">4 dias · seg a qui</p>
      </div>
      <div className="grid w-[106px] shrink-0 grid-cols-2 gap-1">
        {[["SEG","03"],["TER","04"],["QUA","05"],["QUI","06"]].map(([day,date],i)=>(
          <div key={date} className={`h-[39px] border px-1.5 py-0.5 ${i===3?"border-[#E9B927] bg-[#E9B927] text-[#171815]":"border-white/20 bg-black/20 text-white"}`}>
            <span className="block font-mono text-[7px] opacity-60">{day}</span>
            <span className="block font-heading text-[17px] font-bold leading-none">{date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceCard() {
  return (
    <div className="notch flex h-[106px] min-w-0 items-center justify-between gap-2 border-l-[3px] border-[#E9B927] bg-[#20211E]/95 px-3 py-2.5">
      <div className="min-w-0">
        <div className="flex items-center gap-1.5 text-[#E9B927]">
          <MapPin className="h-3 w-3" />
          <span className="label-mono text-[8px]">Onde</span>
        </div>
        <p className="mt-3 whitespace-nowrap font-heading text-[17px] font-bold leading-tight">Campus VIII</p>
        <p className="mt-1 whitespace-nowrap text-[9px] text-[#E9B927]">Prof.ª Maria da Penha</p>
        <p className="text-[9px] text-white/55">CCTS / UEPB</p>
        <p className="label-mono mt-3 whitespace-nowrap border-t border-white/10 pt-2 text-[7px] text-white/40">Araruna · Paraíba</p>
      </div>
      <div className="grid h-[88px] w-[92px] shrink-0 place-items-center border-l border-white/10">
        <div className="relative grid h-[72px] w-[72px] place-items-center rounded-full border border-[#E9B927]/20">
          <div className="absolute h-12 w-12 rounded-full border border-[#E9B927]/25" />
          <div className="absolute h-7 w-7 rounded-full border border-[#E9B927]/35" />
          <MapPin className="relative h-6 w-6 fill-[#E9B927] text-[#E9B927]" />
          <span className="absolute bottom-1 font-mono text-[5px] text-white/45">6.5352° S</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[800px] overflow-hidden bg-[#171815] text-[#F7F6F0] lg:min-h-[100svh]">
      <div className="blueprint-grid-dark absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 opacity-25" aria-hidden="true" style={{backgroundImage:"radial-gradient(ellipse at 77% 50%, rgba(233,185,39,.08), transparent 44%), linear-gradient(115deg, transparent 0 48%, rgba(255,255,255,.025) 48.1%, transparent 48.3%)"}} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171815] via-[#171815]/95 to-[#171815]/35" aria-hidden="true" />

      <div className="relative mx-auto min-h-[800px] w-full max-w-[1280px] px-5 pb-10 pt-[122px] sm:px-8 lg:min-h-[100svh] lg:px-0">
        <div className="relative z-10 w-full max-w-[490px]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="label-mono bg-[#E9B927] px-2 py-1 text-[#171815]">[ 01 ]</span>
            <span className="label-mono text-[8px] text-white/55 sm:text-[9px]">{EVENT.name}</span>
            <span className="label-mono text-white/30">/</span>
            <span className="label-mono text-[8px] text-white/55 sm:text-[9px]">{EVENT.editionLabel}</span>
          </div>
          <h1 className="mt-6 font-heading text-[clamp(3.1rem,4.35vw,4.35rem)] font-extrabold uppercase leading-[.91] tracking-[-.06em]">
            <span className="block whitespace-nowrap">O futuro da</span>
            <span className="block whitespace-nowrap">construção <span className="text-[#E9B927]">se</span></span>
            <span className="block whitespace-nowrap text-[#E9B927]">projeta aqui</span>
          </h1>
          <p className="mt-5 max-w-[475px] text-[14px] leading-[1.6] text-white/70">
            Quatro dias de palestras, encontros e troca de conhecimento para quem está reinventando a engenharia civil no Brasil.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2.5">
            <DateCard />
            <PlaceCard />
          </div>

          <div className="mt-8">
            <Countdown />
          </div>

          <div className="mt-6 flex items-center gap-2.5">
            <Link to="/inscricao" className={`${btnPrimary} min-h-[48px] whitespace-nowrap !px-6 !py-3 text-[11px]`}>
              Garantir minha vaga <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#programacao" className={`${btnGhostDark} min-h-[48px] whitespace-nowrap !px-6 !py-3 text-[11px]`}>
              Ver programação <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute left-[900px] top-[100px] h-[650px] w-[560px]">
            <BlueprintTower />
          </div>
          <div className="absolute left-[708px] top-[345px] z-10 flex w-[140px] flex-col gap-3">
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-3 shadow-xl backdrop-blur">
              <p className="label-mono text-[7px] text-white/45">Realização</p>
              <div className="mt-1 flex items-center gap-2">
                <img src="/brand/civiltec-logo.svg" alt="CivilTec" className="h-7 w-auto max-w-[58px] object-contain" />
                <span className="font-heading text-sm font-black text-[#E9B927]">2027</span>
              </div>
              <p className="mt-1 border-t border-white/10 pt-1.5 font-heading text-[10px] font-bold">UEPB · CCTS</p>
            </div>
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-3 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="label-mono text-[7px] text-white/45">Coordenadas</p>
                <Crosshair className="h-3.5 w-3.5 text-[#E9B927]" />
              </div>
              <p className="mt-1.5 font-heading text-sm font-bold">6.5352° <span className="text-[9px] text-[#E9B927]">S</span></p>
              <p className="font-heading text-sm font-bold">35.7325° <span className="text-[9px] text-[#E9B927]">W</span></p>
              <p className="label-mono mt-1 text-[6px] text-white/35">Araruna · PB · Brasil</p>
            </div>
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-3 shadow-xl backdrop-blur">
              <div className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5 text-[#E9B927]" />
                <p className="label-mono text-[7px] text-white/45">Anais</p>
              </div>
              <p className="mt-1.5 font-mono text-[11px] font-bold"><span className="bg-[#E9B927] px-1 text-[#171815]">ISSN</span> {EVENT.issn}</p>
              <p className="label-mono mt-1 text-[6px] text-white/35">Publicação científica</p>
            </div>
            <div className="ml-1 grid h-[76px] w-[76px] place-items-center rounded-full border border-[#E9B927]/60 p-1">
              <div className="grid h-full w-full place-items-center rounded-full border border-dashed border-[#E9B927]/50">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#E9B927] text-[#171815]"><span className="font-heading text-xl font-black">✓</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" aria-hidden="true" />
    </section>
  );
}
