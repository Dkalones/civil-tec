import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, MapPin, CalendarDays, Crosshair, BookOpen, Check } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary, btnGhostDark } from "@/components/site/styles";
import Countdown from "@/components/site/Countdown";

function ConstructionVisual() {
  return (
    <svg viewBox="0 0 620 720" role="img" aria-label="Edifício em construção com guindaste" className="h-full w-full overflow-visible">
      <defs>
        <pattern id="towerGrid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path d="M0 0H42V42" fill="none" stroke="#E9B927" strokeOpacity=".16" strokeWidth="1" />
        </pattern>
      </defs>
      <g fill="none" stroke="#F2C400" strokeWidth="2">
        <path d="M55 220 290 85 525 220 290 355Z" fill="#171815" />
        <path d="M55 220V555L290 690V355Z" fill="#242520" />
        <path d="M525 220V555L290 690V355Z" fill="#20211D" />
        <path d="M55 287 290 422 525 287M55 354 290 489 525 354M55 421 290 556 525 421M55 488 290 623 525 488" />
        <path d="M290 355V690" />
        <path d="M55 220 290 85 525 220" strokeWidth="4" />
        <path d="M55 220 290 355 525 220" strokeWidth="3" />
        <path d="M290 85 290 32 560 188 560 210 290 54Z" />
        <path d="M290 32 570 194M290 32 145 -52M560 188V590M548 590H572" />
        <path d="M290 32V85M570 194V235" />
        <path d="M145 -52 570 194" strokeWidth="3" />
      </g>
      <path d="M55 220 290 355 525 220V555L290 690 55 555Z" fill="url(#towerGrid)" />
      <g fill="#33342E" stroke="#A9A79B" strokeWidth="1.2">
        {Array.from({length:5},(_,i)=>Array.from({length:4},(_,j)=><path key={`l-${i}-${j}`} d={`M${83+j*45} ${274+i*62} l25 14 v31 l-25 -14z`} />))}
        {Array.from({length:5},(_,i)=>Array.from({length:4},(_,j)=><path key={`r-${i}-${j}`} d={`M${330+j*43} ${290+i*62-j*23} l25 -14 v31 l-25 14z`} />))}
      </g>
      <g fill="#F2C400" stroke="#F2C400">
        <path d="M95 475 118 488V516L95 503Z"/><path d="M164 515 187 528V556L164 543Z"/>
        <path d="M232 555 255 568V596L232 583Z"/><path d="M355 590 378 577V605L355 618Z"/>
        <path d="M424 550 447 537V565L424 578Z"/><path d="M475 510 498 497V525L475 538Z"/>
      </g>
      <g fill="none" stroke="#F2C400" strokeOpacity=".35" strokeDasharray="3 10">
        <circle cx="290" cy="365" r="285"/><circle cx="290" cy="365" r="235"/>
        <path d="M0 180H620M0 360H620M0 540H620M80 0V720M300 0V720M520 0V720"/>
      </g>
    </svg>
  );
}

function InfoCard({ icon: Icon, label, children, className = "" }) {
  return (
    <div className={`relative min-w-0 border border-white/10 border-l-[3px] border-l-[#F2C400] bg-[#171717]/95 p-4 shadow-lg ${className}`}>
      <div className="mb-2 flex items-center gap-2 text-[#F2C400]">
        <Icon className="h-4 w-4" />
        <span className="font-mono text-[9px] uppercase tracking-[.2em]">{label}</span>
      </div>
      {children}
      <span className="absolute bottom-0 right-0 h-0 w-0 border-b-[10px] border-l-[10px] border-b-[#F2C400] border-l-transparent" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-35" style={{backgroundImage:"linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)",backgroundSize:"42px 42px"}} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_48%,rgba(242,196,0,.10),transparent_42%)]" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 pb-8 pt-28 sm:px-8 lg:px-14 lg:pt-36">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(420px,.92fr)] lg:gap-5">
          <div className="relative z-10 max-w-[760px]">
            <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.22em] text-white/55">
              <span className="h-[2px] w-8 bg-[#F2C400]" /> {EVENT.name} <span className="text-[#F2C400]">/</span> {EVENT.editionLabel}
            </div>
            <h1 className="font-heading text-[clamp(3.2rem,6.4vw,6.6rem)] font-black uppercase leading-[.88] tracking-[-.065em]">
              <span className="block">O futuro da</span>
              <span className="block">construção <span className="text-[#F2C400]">se</span></span>
              <span className="block text-[#F2C400]">projeta aqui</span>
            </h1>
            <p className="mt-6 max-w-[620px] border border-white/10 bg-[#171717]/90 px-4 py-3 text-sm leading-relaxed text-white/80 sm:text-base">
              Quatro dias de palestras, encontros e troca de conhecimento para quem está reinventando a engenharia civil no Brasil.
            </p>

            <div className="mt-6 grid max-w-[760px] grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[.78fr_.92fr_1.35fr]">
              <InfoCard icon={CalendarDays} label="Quando" className="min-h-[132px]">
                <div className="flex h-full flex-col justify-center">
                  <strong className="font-heading text-5xl font-black leading-none text-[#F2C400]">3–6</strong>
                  <span className="mt-2 text-sm font-semibold text-white">de maio de 2027</span>
                  <span className="mt-3 border-t border-white/10 pt-2 font-mono text-[8px] uppercase tracking-[.16em] text-white/45">Quatro dias de evento</span>
                </div>
              </InfoCard>
              <InfoCard icon={CalendarDays} label="Calendário" className="min-h-[132px]">
                <div className="grid grid-cols-2 gap-1.5">
                  {["SEG|03","TER|04","QUA|05","QUI|06"].map((v,i)=><div key={v} className={`border px-2 py-1.5 ${i===3?"border-[#F2C400] bg-[#F2C400] text-black":"border-white/15 bg-black/40"}`}><span className="block font-mono text-[8px]">{v.split("|")[0]}</span><b className="font-heading text-xl leading-none">{v.split("|")[1]}</b></div>)}
                </div>
              </InfoCard>
              <InfoCard icon={MapPin} label="Onde" className="min-h-[132px]">
                <p className="font-heading text-xl font-bold">Campus VIII</p>
                <p className="mt-1 text-xs text-[#F2C400]">Prof.ª Maria da Penha</p>
                <p className="text-xs text-white/65">CCTS / UEPB</p>
                <p className="mt-3 border-t border-white/10 pt-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/50">Araruna · Paraíba</p>
              </InfoCard>
            </div>

            <div className="mt-4 max-w-[760px]">
              <Countdown />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/inscricao" className={`${btnPrimary} min-h-[54px] !border-[#F2C400] !bg-[#F2C400] !px-7 !text-black hover:!bg-[#ffda26]`}>
                Garantir minha vaga <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#programacao" className={`${btnGhostDark} min-h-[54px] !border-white/15 !bg-[#171717] !px-7 !text-white`}>
                Ver programação <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[650px] items-center justify-center lg:h-[700px] lg:max-w-none">
            <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
              <div className="h-[520px] w-[520px] rounded-full border border-dashed border-[#F2C400]/20" />
            </div>
            <div className="relative h-[440px] w-full max-w-[510px] sm:h-[560px] lg:h-[680px]">
              <ConstructionVisual />
            </div>
            <div className="absolute bottom-4 left-0 z-10 hidden w-[175px] flex-col gap-3 sm:flex lg:bottom-10 lg:left-[-22px]">
              <InfoCard icon={Crosshair} label="Coordenadas" className="p-3">
                <p className="font-heading text-lg font-bold">6.5352° S</p><p className="font-heading text-lg font-bold">35.7325° W</p>
                <p className="mt-1 font-mono text-[8px] uppercase text-white/50">Araruna · PB · Brasil</p>
              </InfoCard>
              <InfoCard icon={BookOpen} label="Anais" className="p-3">
                <p className="font-mono text-sm font-bold"><span className="bg-[#F2C400] px-1 text-black">ISSN</span> {EVENT.issn}</p>
                <p className="mt-1 font-mono text-[8px] uppercase text-white/50">Publicação científica</p>
              </InfoCard>
            </div>
            <div className="absolute right-0 top-5 z-10 hidden w-[175px] flex-col gap-3 sm:flex lg:right-[-5px] lg:top-16">
              <InfoCard icon={Check} label="Realização" className="p-3">
                <div className="flex items-center gap-2"><img src="/brand/civiltec-logo.svg" alt="CivilTec" className="h-8 w-auto max-w-[88px] object-contain" /><b className="font-heading text-xl text-[#F2C400]">2027</b></div>
                <p className="mt-2 border-t border-white/10 pt-2 font-mono text-[9px] uppercase">UEPB · CCTS</p>
              </InfoCard>
            </div>
            <div className="absolute bottom-0 right-4 z-10 hidden h-24 w-24 items-center justify-center rounded-full border border-[#F2C400] bg-black/90 p-2 text-center sm:flex lg:bottom-6 lg:right-2">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed border-[#F2C400]/60">
                <Check className="h-7 w-7 rounded-full bg-[#F2C400] p-1 text-black" />
                <span className="mt-1 font-mono text-[8px] uppercase tracking-widest text-[#F2C400]">2027</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-3 font-mono text-[9px] uppercase tracking-[.2em] text-white/35 lg:mt-0">
          CivilTec 2027 <span className="mx-2 text-[#F2C400]">/</span> Engenharia, tecnologia e construção
        </div>
      </div>
    </section>
  );
}
