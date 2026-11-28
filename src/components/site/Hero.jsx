import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import Countdown from "@/components/site/Countdown";

function Corner() {
  return <span className="ct-corner" aria-hidden="true" />;
}

function InfoCard({ children, className = "" }) {
  return <div className={"ct-info-card " + className}>{children}<Corner /></div>;
}

function LocationRadar() {
  return (
    <svg width="84" height="66" viewBox="0 0 92 72" fill="none" aria-hidden="true">
      <rect x=".5" y=".5" width="91" height="71" fill="#151515" stroke="#2c2c2c" />
      <circle cx="46" cy="36" r="30" stroke="#3a3a3a" />
      <circle cx="46" cy="36" r="20" stroke="#3a3a3a" />
      <circle cx="46" cy="36" r="10" stroke="#3a3a3a" />
      <path d="M46 2v68M8 36h76M20 10l52 52M72 10 20 62" stroke="#2f2f2f" />
      <path d="M46 52s9-8 9-15a9 9 0 0 0-18 0c0 7 9 15 9 15Z" fill="#151515" stroke="#F5BE1F" strokeWidth="2" />
      <circle cx="46" cy="37" r="3" fill="#F5BE1F" />
    </svg>
  );
}

function SideDetails() {
  return (
    <aside className="ct-side-details">
      <InfoCard className="ct-side-card ct-realization">
        <div className="ct-card-label">REALIZAÇÃO</div>
        <div className="flex items-center justify-between gap-2">
          <div className="ct-mini-logo"><b>C<span>I</span>VIL</b><strong>TEC</strong></div>
          <div className="text-right leading-tight"><div className="ct-micro-label">EDIÇÃO</div><b className="text-[16px] text-[#F5BE1F]">2027</b></div>
        </div>
        <div className="ct-side-footer">UEPB <span>· CCTS</span></div>
      </InfoCard>
      <InfoCard className="ct-side-card">
        <div className="flex items-center justify-between ct-card-label">COORDENADAS <MapPin size={16} /></div>
        <div className="mt-1 text-[18px] font-bold leading-tight">6.5352° <small>S</small></div>
        <div className="text-[18px] font-bold leading-tight">35.7325° <small>W</small></div>
        <div className="ct-micro-label mt-1">ARARUNA · PB · BRASIL</div>
      </InfoCard>
      <InfoCard className="ct-side-card">
        <div className="flex items-center justify-between ct-card-label">ANAIS <CalendarDays size={16} /></div>
        <div className="mt-1 flex items-center gap-1.5 text-[13px] font-bold"><b className="bg-[#F5BE1F] px-1 text-[#141414] text-[9px]">ISSN</b>{EVENT.issn}</div>
        <div className="ct-micro-label mt-1">PUBLICAÇÃO CIENTÍFICA</div>
      </InfoCard>
      <img
        className="ct-seal"
        src="/assets/civiltec/04-selo-certificado/selo-certificado.svg"
        alt="Selo de certificação CivilTec 2027"
        width="100"
        height="100"
        loading="lazy"
        decoding="async"
      />
    </aside>
  );
}

export default function Hero() {
  const days = [
    ["SEG", "03", "ABERTURA"],
    ["TER", "04", ""],
    ["QUA", "05", ""],
    ["QUI", "06", "ENCERRAM."],
  ];
  return (
    <section className="ct-hero">
      <div className="ct-hero-inner">
        <div className="ct-hero-copy">
          <div className="ct-eyebrow"><span>[ 01 ]</span><p>CONGRESSO DE TECNOLOGIA EM CONSTRUÇÕES <i>/</i> EDIÇÃO 2027</p></div>
          <h1>O FUTURO DA<br />CONSTRUÇÃO <em>SE</em><br /><strong>PROJETA AQUI</strong></h1>
          <p className="ct-intro">Quatro dias de palestras, encontros e troca de conhecimento para quem está reinventando a engenharia civil no Brasil.</p>
          <div className="ct-primary-cards">
            <InfoCard className="ct-date-card">
              <div className="ct-card-label"><CalendarDays size={11} /> QUANDO</div>
              <div className="ct-date-layout">
                <div><b className="ct-date-range">3–6</b><strong>de maio de 2027</strong><small>4 DIAS · SEG A QUI</small></div>
                <div className="ct-calendar">{days.map(([day, date, note]) => <div key={day}><span>{day}</span><b>{date}</b><small>{note || "\u00a0"}</small></div>)}</div>
              </div>
            </InfoCard>
            <InfoCard className="ct-place-card">
              <div className="ct-card-label"><MapPin size={11} /> ONDE</div>
              <div className="ct-place-layout">
                <div><b>Campus VIII</b><strong>Prof.ª Maria da Penha</strong><span>CCTS / UEPB</span><small>ARARUNA · PARAÍBA</small></div>
                <div className="ct-radar"><LocationRadar /><small>6.5352°S · 35.7325°W</small></div>
              </div>
            </InfoCard>
          </div>
          <Countdown />
          <div className="ct-hero-actions">
            <Link to="/inscricao" className="ct-cta-primary">GARANTIR MINHA VAGA <ArrowUpRight size={14} /></Link>
            <a href="#programacao" className="ct-cta-secondary">VER PROGRAMAÇÃO <ArrowDown size={14} /></a>
          </div>
        </div>
        <div className="ct-hero-art">
          <picture className="ct-hero-artwork">
            <source
              media="(max-width: 700px)"
              srcSet="/assets/civiltec/01-arte-principal/arte-principal-mobile.svg"
            />
            <img
              src="/assets/civiltec/01-arte-principal/arte-principal-pc.svg"
              alt="Ilustração técnica de edifício em construção com guindaste"
              width="1400"
              height="1000"
              fetchPriority="high"
            />
          </picture>
          <SideDetails />
        </div>
      </div>
    </section>
  );
}