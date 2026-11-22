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
    <section className="civiltec-hero relative isolate min-h-[800px] overflow-hidden bg-[#191A17] text-white">
      <div className="civiltec-blueprint pointer-events-none absolute inset-0" />
      <div className="civiltec-atmosphere pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-[12%] top-[12%] h-[760px] w-[760px] rounded-full border border-white/[0.035]" />
      <div className="pointer-events-none absolute -left-[8%] top-[17%] h-[650px] w-[650px] rounded-full border border-dashed border-white/[0.035]" />
      <div className="relative mx-auto flex min-h-[800px] w-full max-w-[1000px] flex-col px-5 pb-5 pt-24 sm:px-8 lg:px-0 lg:pt-[112px]">
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-[490px_620px] lg:gap-0">
          <div className="relative z-10 w-full max-w-[490px]">
            <div className="mb-6 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[.22em] text-white/55">
              <span className="bg-[#E9B927] px-2 py-1 font-bold text-[#171815]">[ 01 ]</span>
              <span>{EVENT.name}</span><span className="text-white/25">/</span><span>{EVENT.editionLabel}</span>
            </div>
            <h1 className="font-heading text-[clamp(3rem,4.35vw,4.55rem)] font-black uppercase leading-[.88] tracking-[-.065em]">
              <span className="block">O futuro da</span>
              <span className="block">construção <span className="text-[#F2C400]">se</span></span>
              <span className="block text-[#F2C400]">projeta aqui</span>
            </h1>
            <p className="mt-5 max-w-[490px] text-[14px] leading-[1.55] text-white/75 sm:text-[15px]">
              Quatro dias de palestras, encontros e troca de conhecimento para quem está reinventando a engenharia civil no Brasil.
            </p>

            <div className="mt-6 grid max-w-[490px] grid-cols-[.82fr_.70fr_1.58fr] gap-2">
              <InfoCard icon={CalendarDays} label="Quando" className="min-h-[106px] !p-3">
                <strong className="block font-heading text-[38px] font-black leading-none text-[#F2C400]">3–6</strong>
                <span className="mt-1 block text-[10px] font-semibold leading-tight text-white">de maio de 2027</span>
                <span className="mt-3 block border-t border-white/10 pt-2 font-mono text-[7px] uppercase tracking-[.12em] text-white/45">4 dias · edição 2027</span>
              </InfoCard>
              <InfoCard icon={CalendarDays} label="Calendário" className="min-h-[106px] !p-2">
                <div className="grid grid-cols-2 gap-1">
                  {["SEG|03","TER|04","QUA|05","QUI|06"].map((v,i)=><div key={v} className={`border px-1 py-1 ${i===3?"border-[#F2C400] bg-[#F2C400] text-black":"border-white/15 bg-black/40"}`}><span className="block font-mono text-[7px] leading-none">{v.split("|")[0]}</span><b className="font-heading text-[17px] leading-none">{v.split("|")[1]}</b></div>)}
                </div>
              </InfoCard>
              <InfoCard icon={MapPin} label="Onde" className="min-h-[106px] !p-3">
                <p className="font-heading text-[17px] font-bold leading-tight">Campus VIII</p>
                <p className="mt-1 text-[10px] leading-tight text-[#F2C400]">Prof.ª Maria da Penha</p>
                <p className="text-[10px] text-white/65">CCTS / UEPB</p>
                <p className="mt-2 border-t border-white/10 pt-2 font-mono text-[7px] uppercase tracking-[.13em] text-white/50">Araruna · Paraíba</p>
              </InfoCard>
              <InfoCard icon={MapPin} label="Onde" className="min-h-[106px] !p-3">
                <p className="font-heading text-xl font-bold">Campus VIII</p>
                <p className="mt-1 text-xs text-[#F2C400]">Prof.ª Maria da Penha</p>
                <p className="text-xs text-white/65">CCTS / UEPB</p>
                <p className="mt-3 border-t border-white/10 pt-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/50">Araruna · Paraíba</p>
              </InfoCard>
            </div>

            <div className="mt-3 max-w-[490px]">
              <Countdown />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <Link to="/inscricao" className={`${btnPrimary} min-h-[48px] !border-[#F2C400] !bg-[#F2C400] !px-6 !text-black hover:!bg-[#ffda26]`}>
                Garantir minha vaga <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href="#programacao" className={`${btnGhostDark} min-h-[48px] !border-white/15 !bg-[#20211E] !px-6 !text-white`}>
                Ver programação <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[620px] items-center justify-center lg:h-[700px] lg:max-w-none lg:translate-x-[150px]">
            <div className="pointer-events-none absolute inset-0 hidden items-center justify-center lg:flex">
              <div className="h-[520px] w-[520px] rounded-full border border-dashed border-[#F2C400]/20" />
            </div>
            <div className="relative h-[440px] w-full max-w-[510px] sm:h-[560px] lg:h-[680px]">
              <ConstructionVisual />
            </div>
            <div className="absolute bottom-4 left-0 z-10 hidden w-[140px] flex-col gap-3 sm:flex lg:left-[218px] lg:top-[385px] lg:bottom-auto">
              <InfoCard icon={Crosshair} label="Coordenadas" className="p-3">
                <p className="font-heading text-lg font-bold">6.5352° S</p><p className="font-heading text-lg font-bold">35.7325° W</p>
                <p className="mt-1 font-mono text-[8px] uppercase text-white/50">Araruna · PB · Brasil</p>
              </InfoCard>
              <InfoCard icon={BookOpen} label="Anais" className="p-3">
                <p className="font-mono text-sm font-bold"><span className="bg-[#F2C400] px-1 text-black">ISSN</span> {EVENT.issn}</p>
                <p className="mt-1 font-mono text-[8px] uppercase text-white/50">Publicação científica</p>
              </InfoCard>
            </div>
            <div className="absolute right-0 top-5 z-10 hidden w-[140px] flex-col gap-3 sm:flex lg:left-[218px] lg:right-auto lg:top-[285px]">
              <InfoCard icon={Check} label="Realização" className="p-3">
                <div className="flex items-center gap-2"><img src="/brand/civiltec-logo.svg" alt="CivilTec" className="h-8 w-auto max-w-[88px] object-contain" /><b className="font-heading text-xl text-[#F2C400]">2027</b></div>
                <p className="mt-2 border-t border-white/10 pt-2 font-mono text-[9px] uppercase">UEPB · CCTS</p>
              </InfoCard>
            </div>
            <div className="absolute bottom-0 right-4 z-10 hidden h-24 w-24 items-center justify-center rounded-full border border-[#F2C400] bg-black/90 p-2 text-center sm:flex lg:bottom-[-5px] lg:left-[238px] lg:right-auto">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-dashed border-[#F2C400]/60">
                <Check className="h-7 w-7 rounded-full bg-[#F2C400] p-1 text-black" />
                <span className="mt-1 font-mono text-[8px] uppercase tracking-widest text-[#F2C400]">2027</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 hidden border-t border-white/10 pt-3 font-mono text-[9px] uppercase tracking-[.2em] text-white/35 lg:mt-0">
          CivilTec 2027 <span className="mx-2 text-[#F2C400]">/</span> Engenharia, tecnologia e construção
        </div>
      </div>
    </section>
  );
}
