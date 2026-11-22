import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, MapPin, CalendarDays, Crosshair, BookOpen } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary, btnGhostDark } from "@/components/site/styles";
import Countdown from "@/components/site/Countdown";

function BlueprintTower() {
  return (
    <svg viewBox="0 0 470 620" role="img" aria-label="Desenho técnico de um edifício em estrutura de concreto e guindaste" className="h-full w-full">
      <g fill="none" stroke="#E9B927" strokeWidth="1" opacity=".8">
        <path d="M90 190 240 105 390 190 240 278Z" />
        <path d="M90 190V470L240 558V278Z" strokeWidth="1.4" />
        <path d="M390 190V470L240 558V278Z" strokeWidth="1.4" />
        <path d="M90 260 240 348 390 260M90 330 240 418 390 330M90 400 240 488 390 400" />
        <path d="M240 278V558" />
        <path d="M90 190 240 105 390 190" strokeWidth="1.5" />
        <path d="M90 190 240 278 390 190" opacity=".55" />
        <path d="M240 105 240 65 410 164" opacity=".7" />
        <path d="M410 164V520M402 520H418" />
        <path d="M240 65V20M240 20 430 130 430 146 240 36Z" />
        <path d="M240 20 430 130M240 20 190 0" />
        <path d="M240 20 240 65M430 130V164" />
        <path d="M190 0 430 130" />
        <path d="M70 175 240 75 410 175" strokeDasharray="3 8" opacity=".45" />
        <path d="M70 480 240 580 410 480" strokeDasharray="3 8" opacity=".45" />
        <path d="M55 190V470M425 190V470" opacity=".35" />
      </g>
      <g fill="#242520" stroke="#A8A69C" strokeWidth=".8">
        {Array.from({ length: 4 }, (_, row) => Array.from({ length: 3 }, (_, col) => (
          <path key={`l-${row}-${col}`} d={`M${105 + col * 42 + row * 0} ${220 + row * 70 + col * 24} l19 11 v25 l-19 -11z`} />
        )))}
        {Array.from({ length: 4 }, (_, row) => Array.from({ length: 3 }, (_, col) => (
          <path key={`r-${row}-${col}`} d={`M${270 + col * 40 - row * 0} ${230 + row * 70 - col * 24} l19 -11 v25 l-19 11z`} />
        )))}
      </g>
      <g fill="#E9B927" stroke="#E9B927" strokeWidth=".7">
        <path d="M105 360 124 371V396L105 385Z" />
        <path d="M147 385 166 396V421L147 410Z" />
        <path d="M188 410 207 421V446L188 435Z" />
        <path d="M274 433 293 422V447L274 458Z" />
        <path d="M316 408 335 397V422L316 433Z" />
        <path d="M357 383 376 372V397L357 408Z" />
        <path d="M230 300 249 311V336L230 325Z" />
      </g>
      <g fill="#E9B927" fontFamily="monospace" fontSize="9" letterSpacing="2">
        <text x="230" y="90">[ PROJETO ]</text>
        <text x="10" y="535">ESTRUTURA / 2027</text>
      </g>
      <g stroke="#E9B927" strokeWidth=".7" opacity=".25" fill="none">
        <circle cx="240" cy="310" r="220" strokeDasharray="3 9" />
        <circle cx="240" cy="310" r="180" strokeDasharray="2 10" />
        <path d="M0 150H470M0 310H470M0 470H470M60 0V620M240 0V620M420 0V620" strokeDasharray="2 10" />
      </g>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-60px)] overflow-hidden bg-[#171815] text-[#F7F6F0]">
      <div className="blueprint-grid-dark absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="absolute inset-0 opacity-25" aria-hidden="true" style={{ backgroundImage: "radial-gradient(ellipse at 76% 54%, rgba(233,185,39,.09), transparent 45%), repeating-linear-gradient(0deg, transparent 0 59px, rgba(255,255,255,.045) 60px), repeating-linear-gradient(90deg, transparent 0 59px, rgba(255,255,255,.035) 60px)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171815] via-[#171815]/95 to-[#171815]/45" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[calc(100svh-60px)] w-full max-w-[1000px] items-start gap-6 px-5 pb-8 pt-[58px] sm:px-6 lg:grid-cols-12 lg:gap-0 lg:px-0">
        <div className="relative z-10 lg:col-span-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="label-mono bg-[#E9B927] px-2 py-1 text-[#171815]">[ 01 ]</span>
            <span className="label-mono text-[8px] text-white/55 sm:text-[9px]">{EVENT.name}</span>
            <span className="label-mono text-white/30">/</span>
            <span className="label-mono text-[8px] text-white/55 sm:text-[9px]">{EVENT.editionLabel}</span>
          </div>

          <h1 className="mt-6 max-w-[510px] font-heading text-[clamp(2.7rem,4.3vw,4.35rem)] font-extrabold uppercase leading-[0.91] tracking-[-0.055em]">
            <span className="block whitespace-nowrap">O futuro da</span>
            <span className="block whitespace-nowrap">construção <span className="text-[#E9B927]">se</span></span>
            <span className="block whitespace-nowrap text-[#E9B927]">projeta aqui</span>
          </h1>

          <p className="mt-5 max-w-[475px] text-[14px] leading-[1.6] text-white/70">
            Quatro dias de palestras, encontros e troca de conhecimento para quem está reinventando a engenharia civil no Brasil.
          </p>

          <div className="mt-7 grid max-w-[490px] grid-cols-[1.04fr_1fr] gap-2.5">
            <div className="notch min-h-[106px] border-l-[3px] border-[#E9B927] bg-[#20211E]/90 p-3">
              <div className="flex items-center gap-1.5 text-[#E9B927]">
                <CalendarDays className="h-3 w-3" />
                <span className="label-mono text-[8px]">Quando</span>
              </div>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-heading text-[39px] font-extrabold leading-none">3–6</span>
                <span className="pb-1 font-mono text-[9px] text-white/65">de maio de 2027</span>
              </div>
              <div className="mt-2.5 grid grid-cols-4 gap-1">
                {[
                  ["SEG", "03"], ["TER", "04"], ["QUA", "05"], ["QUI", "06"],
                ].map(([day, date], i) => (
                  <div key={date} className={`border px-1.5 py-1 ${i === 3 ? "border-[#E9B927] bg-[#E9B927] text-[#171815]" : "border-white/15 bg-black/20 text-white"}`}>
                    <span className="block font-mono text-[7px] tracking-widest opacity-60">{day}</span>
                    <span className="block font-heading text-base font-bold leading-tight">{date}</span>
                  </div>
                ))}
              </div>
              <p className="label-mono mt-2 text-[7px] text-white/35">4 dias · seg a qui</p>
            </div>

            <div className="notch min-h-[106px] border-l-[3px] border-[#E9B927] bg-[#20211E]/90 p-3">
              <div className="flex items-center gap-1.5 text-[#E9B927]">
                <MapPin className="h-3 w-3" />
                <span className="label-mono text-[8px]">Onde</span>
              </div>
              <p className="mt-3 font-heading text-[17px] font-bold leading-tight">Campus VIII</p>
              <p className="mt-1 text-[9px] text-[#E9B927]">Prof.ª Maria da Penha</p>
              <p className="text-[9px] text-white/55">CCTS / UEPB</p>
              <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2">
                <div>
                  <p className="label-mono text-[7px] text-white/40">Araruna · Paraíba</p>
                  <p className="mt-1 font-mono text-[8px] text-white/60">6.5352° S · 35.7325° W</p>
                </div>
                <Crosshair className="h-7 w-7 text-[#E9B927]" strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="mt-7 max-w-[490px]">
            <Countdown />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link to="/inscricao" className={btnPrimary}>
              Garantir minha vaga <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href="#programacao" className={btnGhostDark}>
              Ver programação <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative hidden h-[620px] lg:col-span-6 lg:block">
          <div className="absolute right-[-110px] top-[-15px] h-[590px] w-[470px]"><BlueprintTower /></div>
          <div className="absolute left-[5px] top-[280px] z-10 flex w-[140px] flex-col gap-3">
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-2.5 shadow-xl backdrop-blur">
              <p className="label-mono text-[7px] text-white/45">Realização</p>
              <div className="mt-1 flex items-center gap-2">
                <img src="/brand/civiltec-logo.svg" alt="CivilTec" className="h-7 w-auto max-w-[60px] object-contain" />
                <span className="font-heading text-sm font-black text-[#E9B927]">2027</span>
              </div>
              <p className="mt-1 border-t border-white/10 pt-1.5 font-heading text-[10px] font-bold">UEPB · CCTS</p>
            </div>
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-2.5 shadow-xl backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="label-mono text-[7px] text-white/45">Coordenadas</p>
                <Crosshair className="h-3.5 w-3.5 text-[#E9B927]" />
              </div>
              <p className="mt-1.5 font-heading text-sm font-bold">6.5352° <span className="text-[9px] text-[#E9B927]">S</span></p>
              <p className="font-heading text-sm font-bold">35.7325° <span className="text-[9px] text-[#E9B927]">W</span></p>
              <p className="label-mono mt-1 text-[6px] text-white/35">Araruna · PB · Brasil</p>
            </div>
            <div className="notch border-l-[3px] border-[#E9B927] bg-[#20211E]/95 p-2.5 shadow-xl backdrop-blur">
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
