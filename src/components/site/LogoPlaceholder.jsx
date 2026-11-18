export default function LogoPlaceholder({ variant = "header" }) {
  const isFooter = variant === "footer";

  return (
    <div
      aria-label="Espaço reservado para a logo oficial do CivilTec"
      title="Logo oficial será inserida quando enviada pela organização"
      className={`inline-flex shrink-0 items-center justify-center gap-2 border border-dashed ${isFooter ? "border-ink-foreground/35 px-3 py-2" : "border-ink-foreground/45 px-2.5 py-1.5"}`}
    >
      <span className={`grid place-items-center bg-signal font-heading font-black text-ink ${isFooter ? "h-8 w-8 text-sm" : "h-7 w-7 text-xs"}`}>
        CT
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading font-extrabold uppercase tracking-tight text-ink-foreground ${isFooter ? "text-sm" : "text-[13px]"}`}>
          CiviTec
        </span>
        <span className={`mt-1 font-mono uppercase tracking-[0.12em] text-ink-foreground/45 ${isFooter ? "text-[8px]" : "text-[7px]"}`}>
          Logo oficial em breve
        </span>
      </span>
    </div>
  );
}
