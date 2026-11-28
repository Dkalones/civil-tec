import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, Ticket } from "lucide-react";

const START = new Date("2026-12-01T08:00:00-03:00").getTime();
const END = new Date("2027-01-30T23:59:00-03:00").getTime();
const SYMPLA_URL = "https://www.sympla.com.br/evento/congresso-regional-de-engenharia-civil-tecnologia-inovacao-e-solucoes-para-o-amanha/3659414?share_id=copiarlink";

function getTimeLeft(distance) {
  const remaining = Math.max(0, distance);
  return {
    days: Math.floor(remaining / 86400000),
    hours: Math.floor((remaining % 86400000) / 3600000),
    minutes: Math.floor((remaining % 3600000) / 60000),
    seconds: Math.floor((remaining % 60000) / 1000),
  };
}

const pad = (value) => String(value).padStart(2, "0");

export default function RegistrationWindow({ compact = false }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const isBefore = now < START;
  const isOpen = now >= START && now <= END;
  const isClosed = now > END;
  const target = isBefore ? START : END;
  const time = getTimeLeft(target - now);
  const progress = Math.min(100, Math.max(0, ((now - START) / (END - START)) * 100));

  const status = isBefore
    ? "ABERTURA EM BREVE"
    : isOpen
      ? "INSCRIÇÕES ABERTAS"
      : "PERÍODO ENCERRADO";

  const headline = isBefore
    ? "Prepare-se para participar."
    : isOpen
      ? "Sua vaga no CivilTec começa aqui."
      : "As inscrições foram encerradas.";

  return (
    <div className={`relative mx-auto w-full overflow-hidden border border-ink/15 bg-card shadow-[0_18px_55px_rgba(0,0,0,0.08)] ${compact ? "max-w-3xl" : "max-w-[900px]"}`}>
      <div className="h-1.5 w-full bg-[#efbd25]" />
      <div className="relative px-5 py-8 sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-[0.07] blueprint-grid-dark" aria-hidden="true" />
        <div className="relative">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className={`h-2 w-2 rounded-full ${isOpen ? "animate-pulse bg-emerald-500" : isClosed ? "bg-ink/35" : "bg-[#d99f00]"}`} />
          <span className={`border px-3 py-1.5 label-mono text-[9px] font-bold tracking-[0.16em] sm:text-xs ${isOpen ? "border-emerald-600/25 bg-emerald-500/10 text-emerald-700" : isClosed ? "border-ink/15 bg-ink/5 text-ink/50" : "border-[#efbd25]/50 bg-[#efbd25]/15 text-ink"}`}>
            {status}
          </span>
          <span className="label-mono text-[9px] tracking-[0.13em] text-ink/40">CIVILTEC 2027</span>
        </div>

        <h2 className="mx-auto mt-5 max-w-2xl text-center font-heading text-2xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-4xl">
          {headline}
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-ink/55 sm:text-base">{isBefore ? "Prepare-se para dois dias de conhecimento, tecnologia e conexões para transformar a engenharia." : isOpen ? "As inscrições estão disponíveis. Escolha seu ingresso e venha construir o futuro com a gente." : "Agradecemos o interesse. Acompanhe o site para novidades e informações sobre o evento."}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-ink/65 sm:text-sm">
          <span className="inline-flex items-center gap-2 border border-ink/10 bg-background px-3 py-2">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            01 dez 2026 — 30 jan 2027
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
            08h às 23h59
          </span>
        </div>
        </div>
      </div>

      {!isClosed ? (
        <div className="relative overflow-hidden border-y border-ink/10 bg-[#171816] px-4 py-7 text-white sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] blueprint-grid-dark" aria-hidden="true" />
          <div className="relative">
          <div className="mb-6 flex items-center justify-center gap-2"><span className="h-px w-7 bg-[#efbd25]/70" /><p className="label-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65 sm:text-[10px]">
            {isBefore ? "Contagem regressiva para abertura" : "Tempo restante para se inscrever"}
          </p><span className="h-px w-7 bg-[#efbd25]/70" /></div>
          <div className="grid grid-cols-4 gap-2 sm:gap-3" role="timer" aria-label={`${time.days} dias, ${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos`}>
            {[
              ["DIAS", time.days],
              ["HORAS", time.hours],
              ["MIN", time.minutes],
              ["SEG", time.seconds],
            ].map(([label, value]) => (
              <div key={label} className="relative flex min-w-0 flex-col items-center justify-center border border-white/10 bg-white/[0.045] px-1 py-4 text-center sm:py-5">
                <span className="block font-heading text-3xl font-extrabold tabular-nums leading-none tracking-tight text-white sm:text-5xl md:text-6xl">
                  {pad(value)}
                </span>
                <span className="mt-3 block label-mono text-[7px] font-semibold tracking-[0.13em] text-white/45 sm:text-[9px] sm:tracking-[0.2em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          </div>
          {isOpen && (
            <div className="mt-7">
              <div className="mb-2 flex justify-between text-[9px] label-mono tracking-[0.12em] text-ink-foreground/50">
                <span>PERÍODO DE INSCRIÇÃO</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-ink-foreground/15">
                <div className="h-full bg-[#efbd25] transition-[width] duration-1000" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="border-y border-ink/10 bg-background px-5 py-8 text-center">
          <p className="text-sm text-ink/55">O prazo terminou em 30 de janeiro de 2027, às 23h59.</p>
        </div>
      )}

      <div className="px-5 py-7 text-center sm:px-8">
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center gap-3 bg-[#efbd25] px-7 py-4 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-[#171816] shadow-[0_5px_0_#bd9016] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f6ca3e] hover:shadow-[0_7px_0_#bd9016] active:translate-y-0.5 sm:w-auto sm:min-w-[290px]"
        >
          <Ticket className="h-4 w-4" aria-hidden="true" />
          {isClosed ? "Acessar página do evento" : "Inscreva-se pelo Sympla"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
        <p className="mt-3 text-[10px] text-ink/40">Inscrição realizada na plataforma oficial Sympla.</p>
      </div>
    </div>
  );
}
