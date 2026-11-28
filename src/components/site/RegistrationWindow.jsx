import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

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
    <div className={`mx-auto w-full overflow-hidden border border-ink/15 bg-card ${compact ? "max-w-3xl" : "max-w-[760px]"}`}>
      <div className="px-5 py-7 sm:px-8 sm:py-8">
        <div className="flex items-center justify-center gap-2">
          <span className={`h-2 w-2 rounded-full ${isOpen ? "animate-pulse bg-emerald-500" : isClosed ? "bg-ink/30" : "bg-amber-500"}`} />
          <span className="label-mono text-[10px] font-bold tracking-[0.18em] text-ink/55 sm:text-xs">
            {status}
          </span>
        </div>

        <h2 className="mx-auto mt-4 max-w-xl text-center font-heading text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
          {headline}
        </h2>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink/55 sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4" aria-hidden="true" />
            01 dez 2026 — 30 jan 2027
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock3 className="h-4 w-4" aria-hidden="true" />
            08h às 23h59
          </span>
        </div>
      </div>

      {!isClosed ? (
        <div className="border-y border-ink/10 bg-ink px-4 py-7 text-ink-foreground sm:px-8 sm:py-9">
          <p className="mb-5 text-center label-mono text-[9px] uppercase tracking-[0.2em] text-ink-foreground/55 sm:text-[10px]">
            {isBefore ? "Contagem regressiva para abertura" : "Tempo restante para se inscrever"}
          </p>
          <div className="grid grid-cols-4 divide-x divide-ink-foreground/15" role="timer" aria-label={`${time.days} dias, ${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos`}>
            {[
              ["DIAS", time.days],
              ["HORAS", time.hours],
              ["MIN", time.minutes],
              ["SEG", time.seconds],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0 px-1 text-center sm:px-3">
                <span className="block font-heading text-3xl font-extrabold tabular-nums tracking-tight sm:text-5xl">
                  {pad(value)}
                </span>
                <span className="mt-2 block label-mono text-[8px] tracking-[0.16em] text-ink-foreground/50 sm:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
          {isOpen && (
            <div className="mt-7">
              <div className="mb-2 flex justify-between text-[9px] label-mono tracking-[0.12em] text-ink-foreground/50">
                <span>PERÍODO DE INSCRIÇÃO</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-ink-foreground/15">
                <div className="h-full rounded-full bg-ink-foreground transition-[width] duration-1000" style={{ width: `${progress}%` }} />
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
          className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.15em] text-ink-foreground transition hover:bg-ink/85 sm:w-auto sm:min-w-[260px]"
        >
          {isClosed ? "Acessar página do evento" : "Inscreva-se pelo Sympla"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </a>
        <p className="mt-3 text-[10px] text-ink/40">Inscrição realizada na plataforma oficial Sympla.</p>
      </div>
    </div>
  );
}
