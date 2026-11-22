import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowDown, CalendarDays, MapPin, Crosshair } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary, btnGhostDark } from "@/components/site/styles";
import Countdown from "@/components/site/Countdown";

function InfoCard({ label, icon: Icon, children, className = "" }) {
  return (
    <div className={`civiltec-info-card relative min-w-0 border border-white/10 bg-[#171815]/90 p-3 ${className}`}>
      <div className="mb-2 flex items-center gap-2 text-white/55">
        <Icon className="h-3 w-3 text-[#efbd20]" aria-hidden="true" />
        <span className="font-mono text-[8px] uppercase tracking-[.2em]">{label}</span>
      </div>
      {children}
      <span className="civiltec-card-notch" aria-hidden="true" />
    </div>
  );
}

function ConstructionArtwork() {
  return (
    <svg className="civiltec-construction-art" viewBox="0 0 520 650" fill="none" role="img" aria-label="Ilustração técnica de edifício em construção com guindaste">
      <g stroke="#e9b927" strokeWidth="1.5" opacity=".95">
        <path d="M55 183 194 103 333 183 194 263 55 183Z" />
        <path d="M55 183v257l139 82V263M333 183v257l-139 82" />
        <path d="M55 247 194 328 333 247M55 311 194 392 333 311M55 376 194 457 333 376" />
        <path d="m125 143 0 258m139-258v258M55 183l139 80 139-80M55 440l139-80 139 80" opacity=".65"/>
        <path d="M194 263v259" opacity=".75"/>
        <path d="M55 440 194 522 333 440" opacity=".6"/>
        <path d="M55 183 194 263 333 183" opacity=".5"/>
      </g>
      <g stroke="#aeb0aa" strokeWidth="1" opacity=".55">
        {Array.from({length:4},(_,i)=><path key={i} d={`M70 ${459+i*17}l22 13v-25l-22-13v25Zm45 26 22 13v-25l-22-13v25Zm45 26 22 13v-25l-22-13v25Zm45 26 22 13v-25l-22-13v25Zm45-26 22-13v-25l-22 13v25Zm45-26 22-13v-25l-22 13v25Zm-180-25 22 13v-25l-22-13v25Z"}/>)}
      </g>
      <g fill="#e9b927" opacity=".9">
        <path d="m87 473 13 8v-15l-13-8v15Zm45 26 13 8v-15l-13-8v15Zm135-1 13-8v-15l-13 8v15Zm-90 52 13 8v-15l-13-8v15Z"/>
      </g>
      <g stroke="#e9b927" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M318 24 510 139 500 147 310 34Z"/>
        <path d="m318 24 0 10 182 109M500 147v18l-10-6v-12M310 34l-8 9 190 115" opacity=".6"/>
        <path d="M493 144v380l-12 7V137" />
        <path d="m481 137 12 7M481 524l12-7M481 153l12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8m-12 8 12 8" opacity=".65"/>
        <path d="M342 39v40m0 0-7 0m7 0 7 0m-7 0v17m0 0-6 9m6-9 6 9" opacity=".75"/>
      </g>
      <g stroke="#e9b927" strokeWidth="1" opacity=".35">
        <path d="M20 580h470M25 590h120m245 0h95M30 110h30m390 0h50"/>
        <circle cx="194" cy="183" r="116" strokeDasharray="2 8"/>
        <path d="M194 48v32m0 206v32M42 183h32m240 0h32"/>
      </g>
      <g stroke="#b9b9ae" strokeWidth="1" opacity=".4">
        <path d="M350 230h32m-16-16v32M27 360h26m-13-13v26M385 555h35"/>
      </g>
    </svg>
  );
}

function TechnicalSeal() {
  return (
    <div className="civiltec-seal" aria-label="Certificado de participação 2027">
      <div className="civiltec-seal-inner">
        <span className="font-mono text-[7px] tracking-[.18em]">CERTIFICADO</span>
        <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-[#171815] bg-[#efbd20] text-[#171815]"><span className="text-2xl">✓</span></span>
        <span className="font-mono text-[8px] tracking-[.2em]">2027</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="civiltec-hero relative isolate min-h-[800px] overflow-hidden text-[#f4f3ef]">
      <div className="civiltec-blueprint absolute inset-0" aria-hidden="true" />
      <div className="civiltec-atmosphere absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto min-h-[800px] w-full max-w-[1000px] px-5 pb-8 pt-[116px] sm:px-8 lg:px-0">
        <div className="relative z-10 w-full max-w-[490px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#efbd20] px-2 py-1 font-mono text-[8px] tracking-[.2em] text-[#171815]">[ 01 ]</span>
            <span className="font-mono text-[8px] uppercase tracking-[.23em] text-white/55">Congresso de tecnologia em construções</span>
            <span className="font-mono text-[8px] text-white/35">/</span>
            <span className="font-mono text-[8px] uppercase tracking-[.2em] text-white/55">Edição 2027</span>
          </div>
          <h1 className="mt-6 font-heading text-[clamp(3.1rem,5vw,4.35rem)] font-extrabold uppercase leading-[.91] tracking-[-.055em]">
            O futuro da<br/>construção <span className="text-[#efbd20]">se</span><br/><span className="text-[#efbd20]">projeta aqui</span>
          </h1>
          <p className="mt-5 max-w-[475px] text-[14px] leading-[1.65] text-white/75">
            Quatro dias de palestras, encontros e troca de conhecimento para quem está reinventando a engenharia civil no Brasil.
          </p>

          <div className="mt-7 grid grid-cols-[.82fr_.70fr_1.58fr] gap-2">
            <InfoCard icon={CalendarDays} label="Quando" className="min-h-[106px] !p-3">
              <strong className="block font-heading text-[38px] font-black leading-none text-[#efbd20]">3–6</strong>
              <span className="mt-1 block text-[10px] font-semibold leading-tight">de maio de 2027</span>
              <span className="mt-3 block border-t border-white/10 pt-2 font-mono text-[7px] uppercase tracking-[.12em] text-white/45">4 dias · edição 2027</span>
            </InfoCard>
            <InfoCard icon={CalendarDays} label="Calendário" className="min-h-[106px] !p-2">
              <div className="grid grid-cols-2 gap-1">
                {[
                  { day: "SEG", date: "03" },
                  { day: "TER", date: "04" },
                  { day: "QUA", date: "05" },
                  { day: "QUI", date: "06" },
                ].map(({ day, date }, i) => (
                  <div
                    key={day}
                    className={i === 3
                      ? "border border-[#efbd20] bg-[#efbd20] px-1 py-1 text-[#171815]"
                      : "border border-white/15 bg-black/35 px-1 py-1"}
                  >
                    <span className="block font-mono text-[7px] leading-none">{day}</span>
                    <b className="font-heading text-[17px] leading-none">{date}</b>
                  </div>
                ))}
              </div>
            </InfoCard>
            <InfoCard icon={MapPin} label="Onde" className="min-h-[106px] !p-3">
              <p className="font-heading text-[17px] font-bold leading-tight">Campus VIII</p>
              <p className="mt-1 text-[9px] leading-tight text-[#efbd20]">Prof.ª Maria da Penha</p>
              <p className="text-[9px] text-white/65">CCTS / UEPB</p>
              <p className="mt-2 border-t border-white/10 pt-1.5 font-mono text-[7px] uppercase tracking-[.15em] text-white/50">Araruna · Paraíba</p>
            </InfoCard>
          </div>

          <Countdown />

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:items-center">
            <Link to="/inscricao" className={`${btnPrimary} !px-5 !py-3 text-[11px]`}>
              Garantir minha vaga <ArrowUpRight className="h-4 w-4" aria-hidden="true"/>
            </Link>
            <a href="#programacao" className={`${btnGhostDark} !px-5 !py-3 text-[11px]`}>
              Ver programação <ArrowDown className="h-4 w-4" aria-hidden="true"/>
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[-110px] top-[72px] hidden h-[650px] w-[520px] lg:block">
          <ConstructionArtwork/>
        </div>

        <aside className="pointer-events-none absolute left-[708px] top-[385px] hidden w-[140px] flex-col gap-3 lg:flex">
          <InfoCard icon={Crosshair} label="Realização" className="min-h-[88px] !p-2.5">
            <div className="flex items-center justify-between">
              <span className="font-heading text-[17px] font-black leading-none">CIVIL<span className="text-[#efbd20]">TEC</span></span>
              <span className="font-mono text-[8px] text-white/50">EDIÇÃO<br/><b className="text-[17px] text-[#efbd20]">2027</b></span>
            </div>
            <p className="mt-2 border-t border-white/10 pt-1.5 font-mono text-[8px]">UEPB · CCTS</p>
          </InfoCard>
          <InfoCard icon={MapPin} label="Coordenadas" className="min-h-[88px] !p-2.5">
            <p className="font-heading text-[18px] font-bold leading-tight">6.5352° <small className="text-[9px] text-[#efbd20]">S</small></p>
            <p className="font-heading text-[18px] font-bold leading-tight">35.7325° <small className="text-[9px] text-[#efbd20]">W</small></p>
            <p className="mt-1 font-mono text-[7px] tracking-[.1em] text-white/45">ARARUNA · PB · BRASIL</p>
          </InfoCard>
          <InfoCard icon={CalendarDays} label="Anais" className="min-h-[66px] !p-2.5">
            <p className="font-mono text-[13px] font-bold"> <span className="bg-[#efbd20] px-1 text-[#171815]">ISSN</span> {EVENT.issn}</p>
            <p className="mt-1 font-mono text-[7px] tracking-[.1em] text-white/45">PUBLICAÇÃO CIENTÍFICA</p>
          </InfoCard>
          <TechnicalSeal/>
        </aside>

        <div className="pointer-events-none absolute bottom-[25px] right-[-90px] hidden w-[390px] lg:block" aria-hidden="true">
          <svg viewBox="0 0 390 90" fill="none" className="w-full text-[#efbd20]">
            <path d="M0 40h105l24-18h140l22 18h99M15 70h80l28-20h160l24 20h65" stroke="currentColor" strokeWidth="1.5" opacity=".7"/>
            <path d="M8 78h90l18-14h150l16 14h90" stroke="currentColor" strokeWidth="4" strokeDasharray="12 5" opacity=".65"/>
            <path d="M365 31l10 9-10 9-10-9 10-9Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    </section>
  );
}