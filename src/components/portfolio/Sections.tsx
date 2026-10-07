import { useState, type FormEvent } from "react";
import { Award, BarChart3, Briefcase, Code2, GraduationCap, LayoutTemplate, Mail, MapPin, Phone, Send, Users, Wrench, Github, Linkedin } from "lucide-react";
import { certifications, education, experience, profile, skillGroups } from "@/data/profile";
import { Badge, Reveal, Section } from "./ui";

export function About() {
  const cards = [
    { k: "Background", v: "Information Technology student with honors, grounded in programming, networking and data." },
    { k: "Interests", v: "Data cleaning, analysis and dashboards — plus building clean, responsive web interfaces." },
    { k: "Goal", v: "Grow into a data analyst role through internships, training and hands-on projects." },
    { k: "What I offer", v: "Analytical thinking, attention to detail and the ability to learn new tools quickly." },
  ];
  return (
    <Section id="about" index="01" title="About me">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a motivated aspiring <span className="text-foreground">Data Analyst</span> with a Bachelor's in
            Information Technology from the Egyptian E-Learning University. I work with Microsoft Excel for data cleaning,
            pivot tables and dashboards, and I'm strengthening my skills in SQL and Python.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Alongside data, I completed React frontend training with DEPI and build full-stack projects with React,
            TypeScript and Tailwind CSS. I'm eager to gain practical experience and open to internships and training
            opportunities.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((c) => (
            <Reveal key={c.k}>
              <div className="h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary">
                <p className="font-mono text-xs uppercase tracking-wider text-primary">{c.k}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

const icons = { chart: BarChart3, code: Code2, layout: LayoutTemplate, wrench: Wrench, users: Users };

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} className={i === 0 ? "lg:col-span-2" : ""}>
              <div className="h-full rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                  <h3 className="font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" index="04" title="Education & Certifications">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-primary"><GraduationCap className="h-5 w-5" /><span className="font-mono text-xs">{education.years}</span></div>
              <h3 className="mt-3 text-xl font-semibold">{education.degree}</h3>
              <p className="mt-1 text-muted-foreground">{education.university}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-3.5 w-3.5" />{education.location}</p>
              <p className="mt-4 text-sm"><span className="text-accent">Grade:</span> {education.grade}</p>
              <p className="mt-2 text-sm text-muted-foreground">{education.project}</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 text-primary"><Briefcase className="h-5 w-5" /><span className="font-mono text-xs">{experience.date}</span></div>
              <h3 className="mt-3 text-xl font-semibold">{experience.role}</h3>
              <p className="mt-1 text-muted-foreground">{experience.org}</p>
              <p className="mt-3 text-sm text-muted-foreground">{experience.detail}</p>
            </div>
          </Reveal>
        </div>
        <ol className="relative space-y-8 border-l border-border pl-8">
          {certifications.map((c) => (
            <li key={c.name}>
              <Reveal>
                <span className="absolute -left-[9px] mt-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-primary bg-background" />
                <p className="font-mono text-xs text-primary">{c.date}</p>
                <h3 className="mt-1 flex items-center gap-2 text-lg font-semibold"><Award className="h-4 w-4 text-accent" />{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.org}</p>
                {c.detail && <p className="mt-2 text-sm text-muted-foreground">{c.detail}</p>}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio contact from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const items = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "github.com/Malak175", href: profile.github },
    { icon: MapPin, label: profile.location },
  ];
  const input = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";
  return (
    <Section id="contact" index="05" title="Let's work together">
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="text-lg text-muted-foreground">I'm open to internships, training programs and entry-level roles. Feel free to reach out.</p>
          <ul className="mt-8 space-y-4">
            {items.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></span>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="break-all hover:text-primary">{label}</a>
                ) : <span>{label}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <form onSubmit={onSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
              <input id="name" name="name" required maxLength={100} className={input} />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required maxLength={255} className={input} />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <textarea id="message" name="message" required rows={5} maxLength={1000} className={input} />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              <Send className="h-4 w-4" /> Send message
            </button>
            {sent && <p className="text-center text-sm text-primary">Your email app should open with the message ready to send.</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground md:flex-row">
        <p><span className="font-semibold text-foreground">{profile.name}</span> · {profile.title}</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="h-4 w-4" /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-primary"><Mail className="h-4 w-4" /></a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
