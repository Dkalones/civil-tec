import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { EVENT } from "@/lib/event-data";
import { btnPrimary } from "@/components/site/styles";
import LogoPlaceholder from "@/components/site/LogoPlaceholder";

const FOOTER_GROUPS = [
  {
    title: "O evento",
    links: [
      { label: "Sobre", to: "/sobre" },
      { label: "Palestrantes", to: "/palestrantes" },
      { label: "Programação", to: "/programacao" },
      { label: "Local", to: "/local" },
      { label: "Patrocínio", to: "/patrocinio" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  {
    title: "Participe",
    links: [
      { label: "Minicursos", to: "/minicursos" },
      { label: "Inscrições", to: "/inscricao" },
    ],
  },
  {
    title: "Área acadêmica",
    links: [
      { label: "Submissão de trabalhos", to: "/submissao" },
      { label: "Certificados", to: "/certificados" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="blueprint-grid-dark absolute inset-0 opacity-30" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <LogoPlaceholder variant="footer" />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink-foreground/65">
              {EVENT.name}. Realização CivilTec · UEPB, com apoio da comunidade de engenharia civil da Paraíba.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ink-foreground/45">
              {EVENT.dateLabel}
              <br />
              {EVENT.venue} · {EVENT.city}
            </p>
            <Link to="/inscricao" className={`${btnPrimary} mt-7`}>
              Inscreva-se agora
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="label-mono text-ink-foreground/40">{group.title}</p>
                <ul className="mt-4 space-y-3">
                  {group.links.map((item) => (
                    <li key={item.to}>
                      <Link to={item.to} className="text-[13px] leading-relaxed text-ink-foreground/70 transition hover:text-signal">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="label-mono text-ink-foreground/40">Contato</p>
            <ul className="mt-4 space-y-3 text-[14px]">
              {EVENT.email && (
                <li>
                  <a href={`mailto:${EVENT.email}`} className="inline-flex items-center gap-2.5 text-ink-foreground/70 transition hover:text-signal">
                    <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {EVENT.email}
                  </a>
                </li>
              )}
              {EVENT.whatsappUrl && EVENT.whatsapp && (
                <li>
                  <a href={EVENT.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-ink-foreground/70 transition hover:text-signal">
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {EVENT.whatsapp}
                  </a>
                </li>
              )}
              <li>
                <a href={EVENT.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 text-ink-foreground/70 transition hover:text-signal">
                  <Instagram className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {EVENT.instagram}
                </a>
              </li>
            </ul>
            <p className="mt-6 border-t border-ink-foreground/12 pt-5 text-[13px] leading-relaxed text-ink-foreground/50">
              {EVENT.address}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-foreground/12 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/40">
            © {new Date().getFullYear()} CivilTec · UEPB — Anais ISSN {EVENT.issn}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacidade" className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/50 transition hover:text-signal">
              Política de privacidade
            </Link>
            <Link to="/submissao" className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/50 transition hover:text-signal">
              Submissão de trabalhos
            </Link>
            <a href="https://www.instagram.com/j0aodieg0/" target="_blank" rel="noreferrer" aria-label="Instagram de João D" className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-foreground/50 transition hover:text-signal">
              Made by <span className="text-signal">João D</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
