import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event-data";

const TARGET = new Date(EVENT.startISO).getTime();
const START = new Date("2026-05-03T00:00:00-03:00").getTime();
const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const left = Math.max(0, TARGET - now);
  const days = Math.floor(left / 86400000);
  const hours = Math.floor((left % 86400000) / 3600000);
  const minutes = Math.floor((left % 3600000) / 60000);
  const seconds = Math.floor((left % 60000) / 1000);
  const progress = Math.min(100, Math.max(0, (1 - left / (TARGET - START)) * 100));
  const progressWidth = progress + "%";

  return (
    <div className="ct-countdown">
      <div className="ct-countdown-heading"><span>CONTAGEM PARA ABERTURA</span><strong>LINHA DO TEMPO</strong></div>
      <div className="ct-countdown-values">
        {[{ value: String(days), label: "DIAS" }, { value: pad(hours), label: "HORAS" }, { value: pad(minutes), label: "MIN" }, { value: pad(seconds), label: "SEG" }].map((item) => (
          <div key={item.label}><b>{item.value}</b><span>{item.label}</span></div>
        ))}
      </div>
      <div className="ct-progress" role="progressbar" aria-label="Progresso até a abertura" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(progress)}>
        <span className="ct-progress-percent" style={{ left: Math.min(94, Math.max(6, progress)) + "%" }}>{Math.round(progress)}%</span>
        <div className="ct-progress-ticks" />
        <div className="ct-progress-fill" style={{ width: progressWidth }} />
        <div className="ct-progress-marker" style={{ left: progressWidth }}><i /><b /></div>
        <span className="ct-progress-start">03.05.26</span>
        <span className="ct-progress-end">03.05.27 · ABERTURA</span>
      </div>
      <span className="ct-corner" aria-hidden="true" />
    </div>
  );
}