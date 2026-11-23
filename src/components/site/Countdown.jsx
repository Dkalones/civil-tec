import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event-data";

const TARGET = new Date(EVENT.startISO).getTime();
const END = new Date(EVENT.endISO).getTime();
const TIMELINE_START = new Date("2026-05-03T00:00:00-03:00").getTime();
const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const status = now < TARGET ? "upcoming" : now < END ? "live" : "ended";
  const reference = status === "live" ? END : TARGET;
  const left = Math.max(0, reference - now);
  const days = Math.floor(left / 86400000);
  const hours = Math.floor((left % 86400000) / 3600000);
  const minutes = Math.floor((left % 3600000) / 60000);
  const seconds = Math.floor((left % 60000) / 1000);

  const progress =
    status === "upcoming"
      ? Math.min(100, Math.max(0, (1 - (TARGET - now) / (TARGET - TIMELINE_START)) * 100))
      : status === "live"
        ? Math.min(100, Math.max(0, ((now - TARGET) / (END - TARGET)) * 100))
        : 100;

  const progressWidth = progress + "%";
  const heading =
    status === "upcoming"
      ? "CONTAGEM PARA ABERTURA"
      : status === "live"
        ? "CONGRESSO EM ANDAMENTO"
        : "CONGRESSO ENCERRADO";

  return (
    <div className="ct-countdown" aria-live="off">
      <div className="ct-countdown-heading">
        <span>{heading}</span>
        <strong>{status === "upcoming" ? "LINHA DO TEMPO" : status === "live" ? "ENCERRAMENTO" : "ATÉ A PRÓXIMA EDIÇÃO"}</strong>
      </div>

      {status === "ended" ? (
        <div className="ct-countdown-values">
          <div style={{ gridColumn: "1 / -1" }}>
            <b style={{ fontSize: "clamp(20px, 4vw, 28px)", color: "#F5BE1F" }}>Obrigado por participar!</b>
            <span>O CIVILTEC 2027 FOI CONCLUÍDO · ATÉ A PRÓXIMA EDIÇÃO</span>
          </div>
        </div>
      ) : (
        <>
          <div className="ct-countdown-values">
            {[
              { value: String(days), label: "DIAS" },
              { value: pad(hours), label: "HORAS" },
              { value: pad(minutes), label: "MIN" },
              { value: pad(seconds), label: "SEG" },
            ].map((item) => (
              <div key={item.label}>
                <b>{item.value}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div
            className="ct-progress"
            role="progressbar"
            aria-label={status === "upcoming" ? "Progresso até a abertura" : "Progresso do congresso"}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={Math.round(progress)}
          >
            <span className="ct-progress-percent" style={{ left: Math.min(94, Math.max(6, progress)) + "%" }}>
              {Math.round(progress)}%
            </span>
            <div className="ct-progress-ticks" />
            <div className="ct-progress-fill" style={{ width: progressWidth }} />
            <div className="ct-progress-marker" style={{ left: progressWidth }}><i /><b /></div>
            <span className="ct-progress-start">{status === "upcoming" ? "03.05.26" : "03.05.27"}</span>
            <span className="ct-progress-end">{status === "upcoming" ? "03.05.27 · ABERTURA" : "06.05.27 · ENCERRAMENTO"}</span>
          </div>
        </>
      )}
      <span className="ct-corner" aria-hidden="true" />
    </div>
  );
}