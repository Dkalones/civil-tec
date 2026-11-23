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

function BuildingBlueprint() {
  return (
    <svg className="ct-building-svg" viewBox="0 0 397 563" fill="none" role="img" aria-label="Projeto técnico de edifício em construção com guindaste">
      <defs>
        <pattern id="ct-win-left" patternUnits="userSpaceOnUse" width="21.8" height="24.5">
          <rect x="3.8" y="6.2" width="14.4" height="12.4" fill="#2a2a2a" stroke="#474747" strokeWidth=".7" />
        </pattern>
        <pattern id="ct-win-right" patternUnits="userSpaceOnUse" width="21.25" height="24.5">
          <rect x="3" y="6.2" width="14.4" height="12.4" fill="#2a2a2a" stroke="#474747" strokeWidth=".7" />
        </pattern>
        <pattern id="ct-lattice" patternUnits="userSpaceOnUse" width="11" height="11">
          <path d="M0 11 11 0M0 0l11 11" stroke="#F5BE1F" strokeWidth=".6" strokeOpacity=".5" />
        </pattern>
        <linearGradient id="ct-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset=".6" stopColor="#141414" stopOpacity="0" />
          <stop offset="1" stopColor="#141414" stopOpacity=".7" />
        </linearGradient>
      </defs>
      <text x="141" y="97" fontFamily="JetBrains Mono, monospace" fontSize="8.8" letterSpacing="2" fill="#F5BE1F" fillOpacity=".65">[ PROJETO ]</text>
      <g stroke="#F5BE1F" strokeWidth="1">
        <path d="M147 39.3 378 172M147 46l231 133" strokeOpacity=".65" />
        <path d="M324 113v29M190 63v48" strokeDasharray="3 3" strokeOpacity=".7" />
        <path d="M183 113h14m-7 0v13" />
      </g>
      <rect x="318" y="140" width="11" height="352" fill="url(#ct-lattice)" />
      <path d="M318 138v350m11-344v350" stroke="#F5BE1F" />
      <polygon points="356,156 377,168 377,188 356,176" fill="#F5BE1F" fillOpacity=".85" />
      <g stroke="#6f6f6f" strokeWidth=".8">
        <path d="M52 178v271M44 173.4l16 9.3M44 444.4l16 9.3" />
      </g>
      <text x="2" y="313" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#6a6a6a">1.00 m</text>
      <circle cx="31" cy="491" r="6" stroke="#555" strokeWidth=".8" />
      <text x="31" y="493.5" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="6.5" fill="#6a6a6a">A</text>
      <polygon points="52,471 187,549 294,488 159,410" stroke="#8a8a8a" strokeWidth=".7" strokeOpacity=".5" />
      <g stroke="#F5BE1F" strokeWidth="1" strokeLinejoin="round">
        <polygon points="78,193 187,255 187,377 78,317" fill="#F5BE1F" fillOpacity=".04" />
        <polygon points="187,255 272,205 272,329 187,377" fill="#F5BE1F" fillOpacity=".04" />
        <g strokeOpacity=".55">
          <path d="M78 217.7 187 279.7M78 242.4l109 62M78 267.1l109 62M78 291.8l109 62M187 279.7l85-50M187 304.4l85-50M187 329.1l85-50M187 353.8l85-50M78 217.7l87-50M78 242.4l87-50M78 267.1l87-50M78 291.8l87-50M165 167.7l107 62M165 192.4l107 62M165 217.1l107 62M165 241.8l107 62" />
        </g>
        <polygon points="78,317 165,267 272,329 187,377" fill="#F5BE1F" fillOpacity=".03" />
        <path d="m99.75 304.5 109 60m-87.25-72.5 109 60m-87.25-72.5 109 60m-147  -8 87-50m-59.75 65 87-50m-59.75 65 87-50" strokeOpacity=".5" />
      </g>
      <polygon points="78,317 187,377 187,526 78,466" fill="#1b1b1b" stroke="#9a9a9a" strokeWidth=".9" strokeOpacity=".7" />
      <g transform="translate(78 317) skewY(28.8)">
        <rect width="109" height="149" fill="url(#ct-win-left)" />
        <rect x="47.4" y="6.2" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="3.8" y="79.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="25.6" y="79.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="3.8" y="128.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="25.6" y="128.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="91" y="104.2" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect width="109" height="149" fill="url(#ct-fade)" />
      </g>
      <polygon points="187,377 272,329 272,478 187,526" fill="#171717" stroke="#9a9a9a" strokeWidth=".9" strokeOpacity=".7" />
      <g transform="translate(187 377) skewY(-29.5)">
        <rect width="85" height="149" fill="url(#ct-win-right)" />
        <rect x="45.5" y="6.2" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="24.25" y="55.2" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="66.75" y="79.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="24.25" y="79.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="3" y="79.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="24.25" y="104.2" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect x="45.5" y="128.7" width="14.4" height="12.4" fill="#F5BE1F" fillOpacity=".5" />
        <rect width="85" height="149" fill="url(#ct-fade)" />
      </g>
      <g stroke="#F5BE1F" strokeWidth="1" strokeLinejoin="round">
        <polygon points="78,193 165,143 272,205 187,255" fill="#F5BE1F" fillOpacity=".06" />
        <polygon points="141.5,197.3 165.9,183.3 196.5,200.7 172.1,214.7" strokeOpacity=".35" />
        <path d="M141.5 182.3v15m30.6 2.4v15m24.4-29v15" strokeOpacity=".35" />
        <polygon points="141.5,182.3 165.9,168.3 196.5,185.7 172.1,199.7" strokeOpacity=".8" />
      </g>
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
      <svg className="ct-seal" viewBox="0 0 100 100" fill="none" role="img" aria-label="Certificado para todos os participantes, edição 2027">
        <defs><path id="ct-seal-path" d="M50 50m-36 0a36 36 0 1 1 72 0a36 36 0 1 1-72 0" /></defs>
        <circle cx="50" cy="50" r="48" fill="#151515" stroke="#F5BE1F" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="26" stroke="#F5BE1F" strokeWidth=".8" strokeOpacity=".6" />
        <text fontFamily="JetBrains Mono, monospace" fontSize="5.6" fill="#F5BE1F" letterSpacing="1"><textPath href="#ct-seal-path">CERTIFICADO · EMITIDO PARA TODOS OS PARTICIPANTES · EDIÇÃO 2027 ·</textPath></text>
        <circle cx="50" cy="48" r="15" fill="#1c1c1c" stroke="#F5BE1F" strokeWidth="2" />
        <path d="m43 48 5 5 9-10" stroke="#F5BE1F" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="72" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="5" fill="#F5BE1F">2027</text>
      </svg>
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
          <picture className="ct-hero-official-art">
            <source media="(max-width: 700px)" srcSet="/assets/civiltec/01-arte-principal/arte-principal-mobile.svg" />
            <img src="/assets/civiltec/01-arte-principal/arte-principal-pc.svg" alt="Ilustração técnica de edifício e guindaste do CivilTec 2027" />
          </picture>
          <SideDetails />
        </div>
      </div>
    </section>
  );
}