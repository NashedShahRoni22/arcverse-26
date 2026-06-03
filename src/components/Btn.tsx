import Link from "next/link";
import type { ReactNode, MouseEventHandler } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "ghost" | "text";
  to?: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 disabled:opacity-50";

const variants = {
  primary:
    "h-12 overflow-hidden rounded-full bg-accent px-8 text-white hover:shadow-[0_8px_30px_-8px_rgba(108,99,255,0.6)]",
  ghost:
    "h-12 overflow-hidden rounded-full border border-text-primary px-8 text-text-primary hover:bg-text-primary hover:text-black",
  text: "py-1 text-text-primary",
};

export function Btn({
  children,
  variant = "primary",
  to,
  href,
  onClick,
  type = "button",
  className = "",
  disabled,
}: Props) {
  const inner = (
    <>
      {variant !== "text" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 origin-bottom scale-y-0 bg-accent-alt transition-transform duration-500 ease-out group-hover:scale-y-100"
          style={
            variant === "ghost" ? { background: "var(--color-text-primary)" } : undefined
          }
        />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === "text" && (
        <>
          <ArrowRight className="relative z-10 size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          <span
            aria-hidden
            className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full"
          />
        </>
      )}
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;
  const linkHref = to ?? href;

  if (linkHref) return <Link href={linkHref} className={cls}>{inner}</Link>;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}
