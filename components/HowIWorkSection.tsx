'use client';

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { fadeInUp } from "../animations/fadeInUp";
import { staggerReveal } from "../animations/staggerReveal";
import { gsap } from "../animations/gsapConfig";
import { getTechIcon } from "../lib/techIcons";

const workCards = [
  {
    title: "Methodology",
    description:
      "Lightweight Agile delivery tuned for complex systems, with tight feedback loops and clear ownership.",
    points: [
      "Collaborative discovery and scoping",
      "Short delivery cycles with visible progress",
      "Clear docs, logs and handover",
    ],
  },
  {
    title: "Results",
    description:
      "Enterprise-grade outcomes for organisations that need reliability, observability and scale.",
    points: [
      "Government and national-scale platforms",
      "Performance and latency improvements",
      "Production-ready monitoring and tooling",
    ],
  },
  {
    title: "Capabilities",
    description:
      "From data-heavy backends to modern UIs, with AI where it creates real leverage.",
    points: [
      "AI-assisted workflows and assistants",
      "Operational dashboards and reporting",
      "End-to-end system design",
    ],
  },
];

const capabilityStacks = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Spring Boot",
  "Express.js",
  "Node.js",
  "Angular",
  "PostgreSQL",
  "Oracle",
  "MongoDB",
  "SQL Server",
  "Docker",
  "Kubernetes",
  "AWS",
  "Vercel",
  "Supabase",
];

export function HowIWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      fadeInUp(".how-title", { y: 40 });
      staggerReveal(".how-card", { delay: 0.2, y: 30 });

      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 30,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stacksLoop = [...capabilityStacks, ...capabilityStacks];

  return (
    <section
      id="how-i-work"
      ref={sectionRef}
      className="py-24 md:py-28 bg-black text-neutral-100"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="mb-12 md:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-3 how-title">
            HOW I WORK
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold">
            Simple process. Enterprise-level outcomes.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {workCards.map((card) => (
            <div
              key={card.title}
              className="how-card rounded-3xl border border-neutral-800 bg-neutral-900/80 px-6 py-6 md:px-7 md:py-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {card.description}
                </p>
              </div>
              <ul className="space-y-2 text-sm text-neutral-300">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2 items-start">
                    <span className="mt-1 h-1 w-1 rounded-full bg-neutral-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-14">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-3">
            CAPABILITIES
          </p>
          <div className="overflow-hidden rounded-full border border-neutral-800 bg-neutral-900/80">
            <div
              ref={marqueeRef}
              className="flex gap-6 px-8 py-3 whitespace-nowrap capabilities-track"
            >
              {stacksLoop.map((stack, index) => {
                const icon = getTechIcon(stack);
                return (
                  <span
                    key={`${stack}-${index}`}
                    className="capability-pill inline-flex items-center gap-2 text-xs md:text-sm text-neutral-200 px-4 py-2 rounded-full bg-neutral-800/80 border border-neutral-700/80"
                  >
                    <span className="flex h-4 w-4 items-center justify-center text-neutral-100">
                      {icon ?? <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                    </span>
                    {stack}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
