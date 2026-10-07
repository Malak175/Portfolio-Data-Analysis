import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";
import { ButtonLink } from "./ui";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-lg" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#home" className="font-mono text-sm font-semibold">
          <span className="text-primary">~/</span>malak<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href={profile.cv} external className="hidden px-4 py-2 sm:inline-flex">
            <FileText className="h-4 w-4" /> View CV
          </ButtonLink>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 md:hidden animate-in fade-in slide-in-from-top-2">
          <ul className="flex flex-col py-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href={profile.cv} external className="w-full">
            <FileText className="h-4 w-4" /> View CV
          </ButtonLink>
        </div>
      )}
    </header>
  );
}
