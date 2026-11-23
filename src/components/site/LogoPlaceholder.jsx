export default function LogoPlaceholder({ variant = "header" }) {
  const isFooter = variant === "footer";
  return (
    <img
      src="/brand/civiltec-logo.svg"
      alt="CivilTec — Congresso Regional de Engenharia Civil"
      className={isFooter ? "h-12 w-auto max-w-[220px] object-contain" : "h-10 w-auto max-w-[190px] object-contain"}
    />
  );
}
