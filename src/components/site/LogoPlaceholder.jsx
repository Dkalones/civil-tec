export default function LogoPlaceholder({ variant = "header" }) {
  const isFooter = variant === "footer";

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden bg-white ${isFooter ? "h-[76px] w-[250px] p-1.5" : "h-[52px] w-[172px] p-1"}`}
    >
      <img
        src="/civitec-logo.svg"
        alt="CiviTec — UEPB"
        className="h-full w-full object-contain"
      />
    </span>
  );
}
