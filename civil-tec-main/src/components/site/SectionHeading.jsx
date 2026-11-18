import { cn } from "@/lib/utils";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  action = null,
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-t pt-7 md:flex-row md:items-end md:justify-between",
        dark ? "border-ink-foreground/15" : "border-ink/15",
      )}
    >
      <div className="max-w-2xl">
        <p
          className={cn(
            "label-mono flex items-center gap-3",
            dark ? "text-ink-foreground/50" : "text-ink/45",
          )}
        >
          <span className="text-signal">[ {index} ]</span>
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-4 font-heading text-[clamp(1.85rem,3.6vw,2.9rem)] font-extrabold leading-[1.04] tracking-[-0.02em]",
            dark ? "text-ink-foreground" : "text-ink",
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-4 text-[16px] leading-relaxed",
              dark ? "text-ink-foreground/65" : "text-ink/65",
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}