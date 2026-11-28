import { useEffect, useState } from "react";
import { ArrowUpRight, CalendarClock } from "lucide-react";

const START = new Date("2026-12-01T08:00:00-03:00").getTime();
const END = new Date("2027-01-30T23:59:00-03:00").getTime();
const SYMPLA_URL = "https://www.sympla.com.br/evento/congresso-regional-de-engenharia-civil-tecnologia-inovacao-e-solucoes-para-o-amanha/3659414?_gl=1*w5b3g4*_gcl_au*MTA2NzIyNzYxMS4xNzk1ODI4MjI2*_ga*MjAyMzU1NTQ4MS4xNzk1ODI4MjI2*_ga_KXH10SQTZF*czE3OTU4MjgyMjYkbzEkZzEkdDE3OTU4MzA1NjIkajMwJGwwJGgxNjg2MjU1MDc.";

function getTimeLeft(now) {
  const target = now < START ? START : END;
  const distance = Math.max(0, target - now);
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000) / 60000),
    seconds: Math.floor((distance % 60000) / 1000),
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
  const time = getTimeLeft(now);

  return (
    <div className={`mx-auto w-full ${compact ? "max-w-3xl" : "max-w-[760px]"} border border-ink/15 bg-card p-6 sm:p-8`}>
      <div className="flex items-center justify-center gap-2 text-ink/55">
        <CalendarClock className="h-5 w-5" aria-hidden="true" />
        <span className="label-mono text-xs uppercase tracking-[0.14em]">
          {isBefore ? "Abertura das inscrições" : isOpen ? "Prazo para inscrição" : "Período encerrado"}
        </span>
      </div>
      <h2 className="mt-3 text-center font-heading text-xl font-extrabold text-ink sm:text-2xl">
        {isBefore ? "As inscrições começam em breve" : isOpen ? "Garanta sua vaga no CivilTec" : "Inscrições encerradas"}
      </h2>
      <p className="mt-2 text-center text-sm text-ink/60">
        {isBefore
          ? "Abertura em 1º de dezembro de 2026, às 08h."
          : isOpen
            ? "Inscreva-se até 30 de janeiro de 2027, às 23h59."
            : "O período de inscrições foi finalizado."}
      </p>

      {!isClosed && (
        <div className="mt-7 grid grid-cols-4 gap-2 sm:gap-4" aria-live="off">
          {[
            ["Dias", time.days],
            ["Horas", time.hours],
            ["Minutos", time.minutes],
            ["Segundos", time.seconds],
          ].map(([label, value]) => (
            <div key={label} className="border border-ink/10 bg-background px-2 py-4 text-center">
              <span className="block font-heading text-2xl font-extrabold tabular-nums text-ink sm:text-4xl">
                {pad(value)}
              </span>
              <span className="mt-1 block label-mono text-[9px] uppercase tracking-[0.12em] text-ink/45 sm:text-[10px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-7 flex justify-center">
        <a
          href={SYMPLA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-ink px-7 py-4 font-heading text-xs font-bold uppercase tracking-[0.13em] text-ink-foreground transition hover:bg-ink/85"
        >
          {isClosed ? "Acessar página do evento" : "Inscreva-se"}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
