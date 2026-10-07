import { useEffect, useState } from "react";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import { projects, type Project } from "@/data/profile";
import { Badge, ButtonLink, Reveal, Section } from "./ui";

function ProjectCard({ p, onOpen }: { p: Project; onOpen: () => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary">
      <button onClick={onOpen} className="relative aspect-[16/10] overflow-hidden" aria-label={`Enlarge screenshot of ${p.name}`}>
        <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" width={1280} height={800} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute inset-0 grid place-items-center bg-overlay opacity-0 transition-opacity group-hover:opacity-100">
          <Maximize2 className="h-6 w-6 text-primary" />
        </span>
      </button>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.github && <ButtonLink href={p.github} external variant="outline" className="px-4 py-2"><Github className="h-4 w-4" /> GitHub</ButtonLink>}
          {p.live && <ButtonLink href={p.live} external className="px-4 py-2"><ExternalLink className="h-4 w-4" /> {p.liveLabel ?? "Live Demo"}</ButtonLink>}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  useEffect(() => {
    if (!active) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [active]);

  return (
    <Section id="projects" index="03" title="Featured projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Reveal key={p.name}><ProjectCard p={p} onOpen={() => setActive(p)} /></Reveal>
        ))}
      </div>
      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.name} onClick={() => setActive(null)} className="fixed inset-0 z-50 grid place-items-center bg-overlay p-4 backdrop-blur-sm animate-in fade-in">
          <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-card text-foreground" aria-label="Close" onClick={() => setActive(null)}>
            <X className="h-5 w-5" />
          </button>
          <img src={active.image} alt={active.name} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full rounded-lg shadow-2xl animate-in zoom-in-95" />
        </div>
      )}
    </Section>
  );
}
