export default function LogoPlaceholder({ variant = "header" }) {
  const isFooter = variant === "footer";

  return (
    <img
      src="/assets/civiltec/02-logo/logo-civil-tec-fundo-escuro.svg"
      alt="CivilTec — Congresso Regional de Engenharia Civil"
      width="851"
      height="608"
      loading="lazy"
      decoding="async"
      className={isFooter ? "h-14 w-auto max-w-[196px] object-contain object-left" : "h-11 w-auto max-w-[150px] object-contain object-left"}
    />
  );
}
