import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}

export function Section({ id, index, title, children }: { id: string; index: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="font-mono text-sm text-primary">{index} /</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground">
      {children}
    </span>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "outline" | "ghost"; external?: boolean; className?: string };
export function ButtonLink({ href, children, variant = "primary", external, className }: BtnProps) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:-translate-y-0.5 glow",
    outline: "border border-border bg-card text-foreground hover:border-primary hover:text-primary",
    ghost: "text-muted-foreground hover:text-primary",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}
