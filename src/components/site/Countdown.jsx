import { useEffect, useState } from "react";
import { EVENT } from "@/lib/event-data";

const TARGET = new Date(EVENT.startISO).getTime();
const LAUNCH = TARGET - 1000 * 60 * 60 * 24 * 400;

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const [left, setLeft] = useState(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, TARGET - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const parts = left === null
    ? null
    : {
        d: Math.floor(left / 86400000),
        h: Math.floor((left % 86400000) / 3600000),
        m: Math.floor((left % 3600000) / 60000),
        s: Math.floor((left % 60000) / 1000),
      };

  const progress = left === null
    ? 0
    : Math.min(100, Math.max(0, ((Date.now() - LAUNCH) / (TARGET - LAUNCH)) * 100));

  const cells = [
    { key: "dias", value: parts ? String(parts.d) : "--" },
    { key: "horas", value: parts ? pad(parts.h) : "--" },
    { key: "min", value: parts ? pad(parts.m) : "--" },
    { key: "seg", value: parts ? pad(parts.s) : "--" },
  ];

  return (
    <div className="mt-8 max-w-xl border border-ink-foreground/15 bg-ink/50 p-4 backdrop-blur-sm sm:p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="label-mono text-ink-foreground/55">Contagem para a abertura</p>
        <p className="label-mono text-signal">Linha do tempo</p>
      </div>

      <div className="mt-4 grid grid-cols-4 divide-x divide-ink-foreground/12">
        {cells.map((c) => (
          <div key={c.key} className="px-2 first:pl-0 last:pr-0">
            <p className="font-mono text-2xl font-medium tabular-nums text-ink-foreground sm:text-3xl">
              {c.value}
            </p>
            <p className="label-mono mt-1 text-ink-foreground/40">{c.key}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 h-[3px] w-full bg-ink-foreground/15">
        <div
          className="h-full bg-signal transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="sr-only">Abertura em {EVENT.dateLabel}</p>
    </div>
  );
}