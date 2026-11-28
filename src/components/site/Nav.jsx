import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary } from "@/components/site/styles";

const GROUPS = [
  {
    label: "O evento",
    links: [
      { label: "Sobre o congresso", to: "/sobre" },
      { label: "Palestrantes", to: "/palestrantes" },
      { label: "Programação", to: "/programacao" },
      { label: "Local", to: "/local" },
      { label: "Patrocínio", to: "/patrocinio" },
      { label: "Dúvidas frequentes", to: "/faq" },
    ],
  },
  {
    label: "Participação",
    links: [
      { label: "Minicursos", to: "/minicursos" },
      { label: "Inscrições", to: "/inscricao" },
    ],
  },
  {
    label: "Área acadêmica",
    links: [
      { label: "Submissão de trabalhos", to: "/submissao" },
      { label: "Certificados", to: "/certificados" },
    ],
  },
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
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-colors duration-300 ${scrolled || open ? "bg-[#171815]/95 backdrop-blur-md" : "bg-[#171815]/90 backdrop-blur-md"}`}>
      <div className="mx-auto flex h-[68px] w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="CivilTec — página inicial">
          <img src="/assets/civiltec/02-logo/logo-civil-tec-fundo-escuro.svg" alt="CivilTec" className="h-[46px] w-auto max-w-[120px] object-contain" fetchPriority="high" />
        </Link>

        <nav className="hidden h-full items-center gap-2 lg:flex" aria-label="Navegação principal">
          {GROUPS.map((group) => (
            <details key={group.label} className="group relative flex h-full items-center">
              <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-3 font-mono text-[11px] font-semibold uppercase tracking-[.12em] text-white/80 transition hover:text-[#efbd20] [&::-webkit-details-marker]:hidden">
                {group.label}
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-0 top-[calc(100%-2px)] min-w-[220px] border border-white/10 bg-[#20221f] p-2 shadow-2xl">
                {group.links.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-4 py-3 text-sm text-white/75 transition hover:bg-white/5 hover:text-[#efbd20]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/inscricao" className={`${btnPrimary} notch hidden !min-h-[44px] !px-5 !py-2 !text-[10px] sm:inline-flex`}>
            Inscreva-se
          </Link>
          <button type="button" onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center text-white lg:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-white/10 bg-[#171815] px-5 pb-8 pt-5 lg:hidden">
          <nav className="mx-auto flex max-w-xl flex-col" aria-label="Navegação principal">
            {GROUPS.map((group, index) => (
              <section key={group.label} className={index ? "mt-6" : ""}>
                <p className="label-mono mb-2 text-[#efbd20]">{group.label}</p>
                <div className="grid grid-cols-2 gap-2">
                  {group.links.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className="border border-white/10 bg-white/[0.025] px-3 py-3 text-sm font-medium text-white/85 transition hover:border-[#efbd20]/50 hover:text-[#efbd20]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </nav>
          <Link to="/inscricao" onClick={() => setOpen(false)} className={`${btnPrimary} mt-7 w-full`}>
            Garantir minha vaga
          </Link>
          <p className="label-mono mt-6 text-center text-white/45">{EVENT.dateShort} · {EVENT.city}</p>
        </div>
      )}
    </header>
  );
}
