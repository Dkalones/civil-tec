import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary } from "@/components/site/styles";

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
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-black/95 shadow-lg shadow-black/30 backdrop-blur-xl" : "bg-black/75 backdrop-blur-md"}`}>
      <div className="mx-auto flex h-[60px] w-full max-w-[1000px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-0">
        <Link to="/" className="flex shrink-0 items-center" aria-label="CivilTec — página inicial">
          <img src="/brand/civiltec-logo.svg" alt="CivilTec" className="h-[48px] w-auto max-w-[74px] object-contain" />
        </Link>

        <nav className="hidden items-center gap-6 px-2 py-2 lg:flex">
          {LINKS.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} className="font-mono text-[8px] font-semibold uppercase tracking-[.18em] text-white/85 transition hover:text-[#F2C400]">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/inscricao" className={`${btnPrimary} hidden !border-[#F2C400] !bg-[#F2C400] !min-h-[44px] !px-5 !py-2 !font-bold !text-black sm:inline-flex`}>Inscreva-se</Link>
          <button type="button" onClick={() => setOpen(v => !v)} className="grid h-11 w-11 place-items-center text-white lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col">
            {LINKS.map(l => <Link key={l.hash} to="/" hash={l.hash} onClick={() => setOpen(false)} className="border-b border-white/10 py-4 font-heading text-lg font-semibold uppercase text-white">{l.label}</Link>)}
          </nav>
          <Link to="/inscricao" onClick={() => setOpen(false)} className={`${btnPrimary} mt-6 w-full !bg-[#F2C400] !text-black`}>Inscreva-se</Link>
          <p className="mt-6 font-mono text-[9px] uppercase tracking-widest text-white/45">{EVENT.dateShort} · {EVENT.city}</p>
        </div>
      )}
    </header>
  );
}
