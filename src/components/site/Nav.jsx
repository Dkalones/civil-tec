import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary } from "@/components/site/styles";
import LogoPlaceholder from "@/components/site/LogoPlaceholder";

const LINKS = [
  { label: "Sobre", hash: "sobre" },
  { label: "Palestrantes", hash: "palestrantes" },
  { label: "Programação", hash: "programacao" },
  { label: "Submissão", hash: "submissao" },
  { label: "Ingressos", hash: "ingressos" },
  { label: "Local", hash: "local" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-ink-foreground/10 bg-ink/95 backdrop-blur"
          : "border-transparent bg-ink/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="CivilTec — página inicial">
          <img
            src="/brand/civiltec-logo.svg"
            alt="CivilTec — Congresso Regional de Engenharia Civil"
            className="h-10 w-auto max-w-[190px] object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-foreground/70 transition hover:text-signal"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/inscricao" className={`${btnPrimary} hidden sm:inline-flex`}>
            Inscreva-se
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center text-ink-foreground lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink-foreground/10 bg-ink px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="border-b border-ink-foreground/10 py-4 font-heading text-lg font-semibold text-ink-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/inscricao"
            onClick={() => setOpen(false)}
            className={`${btnPrimary} mt-6 w-full`}
          >
            Garantir minha vaga
          </Link>
          <p className="label-mono mt-6 text-ink-foreground/45">
            {EVENT.dateShort} · {EVENT.city}
          </p>
        </div>
      )}
    </header>
  );
}