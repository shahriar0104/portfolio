'use client';

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { staggerReveal } from "../animations/staggerReveal";
import { gsap } from "../animations/gsapConfig";
import { Code2, Database, Cloud, Layers, Terminal } from "lucide-react";
import { getTechIcon } from "../lib/techIcons";

const skills = [
  { name: "Next.js", group: "Frontend" },
  { name: "React", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Tailwind CSS", group: "Frontend" },
  { name: "Angular", group: "Frontend" },
  { name: "Express.js", group: "Backend" },
  { name: "NestJS", group: "Backend" },
  { name: "Node.js", group: "Backend" },
  { name: "Spring Boot", group: "Backend" },
  { name: "Spring MVC", group: "Backend" },
  { name: "PostgreSQL", group: "Data" },
  { name: "Oracle", group: "Data" },
  { name: "SQL Server", group: "Data" },
  { name: "MySQL", group: "Data" },
  { name: "MongoDB", group: "Data" },
  { name: "Supabase", group: "Data" },
  { name: "Docker", group: "Infra" },
  { name: "Kubernetes", group: "Infra" },
  { name: "AWS", group: "Infra" },
  { name: "Vercel", group: "Infra" },
  { name: "Git", group: "Infra" },
  { name: "Linux / Debian", group: "Infra" },
  { name: "Wasabi", group: "Infra" },
  { name: "Render", group: "Infra" },
];

const groupIcon = (group: string) => {
  switch (group) {
    case "Frontend":
      return <Code2 className="w-5 h-5" />;
    case "Backend":
      return <Layers className="w-5 h-5" />;
    case "Data":
      return <Database className="w-5 h-5" />;
    case "Infra":
      return <Cloud className="w-5 h-5" />;
    default:
      return <Terminal className="w-5 h-5" />;
  }
};

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      staggerReveal(".skill-tile", { delay: 0.1, y: 30, stagger: 0.06 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 md:py-28 bg-black text-neutral-100"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="mb-8 md:mb-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-3">
            MY SKILLS
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold">
            Building production systems that solve real problems.
          </h2>
        </div>

        <div className="rounded-[2rem] border border-neutral-800 bg-neutral-900/80 px-4 py-4 md:px-8 md:py-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-px md:gap-px bg-neutral-800/60 rounded-[1.6rem] overflow-hidden">
            {skills.map((skill) => {
              const icon = getTechIcon(skill.name) ?? groupIcon(skill.group);
              return (
                <div
                  key={skill.name}
                  className="skill-tile flex flex-col items-center justify-center gap-2 bg-black/90 px-2 py-6 md:py-7 border border-neutral-800/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-neutral-900 text-white">
                    {icon}
                  </div>
                  <p className="text-[0.65rem] md:text-xs text-neutral-400 uppercase tracking-[0.18em]">
                    {skill.group}
                  </p>
                  <p className="text-xs md:text-sm text-neutral-100 font-medium">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center text-xs md:text-sm text-neutral-400">
            <span>Don&apos;t see your stack? </span>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('contact');
                const lenis = (window as any).__lenis;
                if (el && lenis) {
                  lenis.scrollTo(el);
                } else if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="underline underline-offset-4 decoration-neutral-500 hover:text-white hover:decoration-neutral-300"
            >
              Let&apos;s talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
