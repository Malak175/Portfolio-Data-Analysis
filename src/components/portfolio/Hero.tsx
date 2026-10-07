import { ArrowRight, FileText, Github, Linkedin, MapPin } from "lucide-react";
import profilePhoto from "@/assets/malak.jpeg";
import { profile } from "@/data/profile";
import { ButtonLink, Reveal } from "./ui";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-24 pt-16 md:grid-cols-[1.3fr_1fr] md:pt-24">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />{" "}
            Open to internships & training
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 font-mono text-base text-primary md:text-lg">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#projects">
              View My Projects <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href={profile.cv} external variant="outline">
              <FileText className="h-4 w-4" /> View CV
            </ButtonLink>
          </div>
          <div className="mt-8 flex items-center gap-5 text-muted-foreground">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 glow">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-secondary/40">
              <img
                src={profilePhoto}
                alt="Malak Mahmoud in her graduation attire"
                className="h-full w-full object-contain object-bottom"
                width={433}
                height={577}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
