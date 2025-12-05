'use client';

import { useRef } from "react";
import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { staggerReveal } from "../animations/staggerReveal";
import { gsap, ScrollTrigger, registerGsap } from "../animations/gsapConfig";
import { BriefcaseBusiness, Cpu, Globe2, Rocket, Database, Network, Sparkles } from "lucide-react";

const bioLines = [
  "I'm Shadman Shahriar, a software engineer focused on building reliable, production-grade systems.",
  "I have worked across government platforms, education systems and AI-assisted products, always aiming for clear impact.",
  "I like owning problems end to end – understanding constraints, designing the architecture and polishing the final interface.",
];

type ExperienceItem = {
  label: string;
  detail: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const experiences: ExperienceItem[] = [
  {
    label: "Full-Stack Engineer",
    detail: "Dynamic Solution Innovators • 2021–Present",
    icon: BriefcaseBusiness,
  },
  {
    label: "AI Training & Frontend",
    detail: "Outlier AI • 2025–Present",
    icon: Cpu,
  },
  {
    label: "Junior Software Engineer",
    detail: "Frenclub Mobile • 2019–2021",
    icon: BriefcaseBusiness,
  },
  {
    label: "National Education Platforms",
    detail: "IEIMS and exam tooling for all education boards",
    icon: Globe2,
  },
  {
    label: "Government Systems",
    detail: "RJSC, CRVS and registration platforms at scale",
    icon: Database,
  },
  {
    label: "AI Assistant Products",
    detail: "Universal chat widgets and document pipelines",
    icon: Sparkles,
  },
  {
    label: "System Architecture",
    detail: "Monorepos, integration layers and observability",
    icon: Network,
  },
  {
    label: "Performance Work",
    detail: "Query optimisation and latency reduction for heavy systems",
    icon: Rocket,
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const experienceRailRef = useRef<HTMLDivElement | null>(null);
  const experienceRowRef = useRef<HTMLDivElement | null>(null);
  const experienceTrackRef = useRef<HTMLDivElement | null>(null);
  const experienceViewportRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current) return;

    // ensure ScrollTrigger is available
    registerGsap();

    const ctx = gsap.context(() => {
      staggerReveal(".about-card", { delay: 0.1, y: 30, stagger: 0.08 });

      const container = pinnedRef.current;
      const rail = experienceRailRef.current;
      const row = experienceRowRef.current;
      const track = experienceTrackRef.current;
      const viewport = experienceViewportRef.current;

      if (container && rail && row && track && viewport) {
        const getDistance = () => {
          const viewportHeight = viewport.offsetHeight;
          const trackHeight = track.scrollHeight;
          return Math.max(0, trackHeight - viewportHeight);
        };

        gsap.to(track, {
          y: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "center center",
            end: () => "+=" + Math.max(400, getDistance()),
            scrub: true,
            pin: container,
            anticipatePin: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-28 bg-black text-neutral-100"
    >
      <div
        ref={pinnedRef}
        className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10"
      >
        <div className="mb-10 md:mb-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-3">
            ABOUT ME
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold">
            Experience across products and platforms.
          </h2>
        </div>

        <div className="space-y-6">
          {/* First row: four equal-height cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 items-stretch">
            <div className="about-card h-full rounded-3xl border border-neutral-800 bg-neutral-900/90 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">
                EXPERIENCE
              </p>
              <p className="text-sm text-neutral-200">
                5+ years building full-stack systems for government, logistics and AI-enabled products.
              </p>
            </div>
            <div className="about-card h-full rounded-3xl border border-neutral-800 bg-neutral-900/90 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">
                SPECIALISATION
              </p>
              <p className="text-sm text-neutral-200">
                Complex data flows, performance tuning, and bridging backend constraints with clean frontend experiences.
              </p>
            </div>
            <div className="about-card h-full rounded-3xl border border-neutral-800 bg-neutral-900/90 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">
                SYSTEMS BUILT
              </p>
              <p className="text-sm text-neutral-200">
                National education platforms, registration systems, and internal tools that stay stable under heavy load.
              </p>
            </div>
            <div className="about-card h-full rounded-3xl border border-neutral-800 bg-neutral-900/90 px-5 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">
                WHAT I CARE ABOUT
              </p>
              <p className="text-sm text-neutral-200">
                Clear requirements, observability, and small details that make complex products feel simple to use.
              </p>
            </div>
          </div>

          {/* Second row: pinned experience column + about card */}
          <div
            ref={experienceRowRef}
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)] gap-6 items-stretch"
          >
            {/* Pinned vertical experience rail */}
            <div
              ref={experienceRailRef}
              className="about-card h-[440px] rounded-[2rem] border border-neutral-800 bg-neutral-900/90 px-4 py-5 flex flex-col gap-4 overflow-hidden"
            >
              <div className="flex flex-col items-start gap-2">
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  EXPERIENCE
                </span>
                <p className="text-sm text-neutral-300">
                  Roles and systems from my work so far.
                </p>
              </div>

              <div
                ref={experienceViewportRef}
                className="mt-3 flex-1 overflow-hidden"
              >
                <div
                  ref={experienceTrackRef}
                  className="space-y-4"
                >
                  {experiences.map((exp) => {
                    const Icon = exp.icon;
                    return (
                      <div
                        key={exp.label + exp.detail}
                        className="rounded-2xl border border-neutral-800/80 bg-black/80 px-4 py-4 flex flex-col items-center gap-3"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/25 via-cyan-400/15 to-purple-500/35 text-emerald-300 shadow-[0_0_0_1px_rgba(148,163,184,0.5)]">
                          <Icon className="w-8 h-8" />
                        </span>
                        <div className="text-xs text-neutral-200 space-y-0.5 text-center">
                          <p className="font-medium leading-snug">{exp.label}</p>
                          <p className="text-[0.72rem] text-neutral-400 leading-snug">{exp.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* About me card with image left and info right */}
            <div className="about-card h-[440px] rounded-[2.4rem] border border-neutral-800 bg-neutral-900/95 px-6 py-7 flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] gap-5 items-center">
                <div className="relative w-full max-w-[260px] mx-auto aspect-[3/4] rounded-[1.75rem] bg-neutral-800 overflow-hidden">
                  <Image
                    src="/profile.webp"
                    alt="Shadman Shahriar profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-50 mb-1">
                    Shadman Shahriar
                  </h3>
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-400 mb-2">
                    Software Engineer
                  </p>
                  <div className="space-y-2 text-sm text-neutral-300">
                    {bioLines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-[0.7rem] text-neutral-400">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Dhaka, Bangladesh • Remote friendly
                </span>
              </div>
            </div>
          </div>

          <div className="about-card rounded-3xl border border-neutral-800 bg-neutral-900/90 px-5 py-4 text-center text-xs md:text-sm text-neutral-300">
            Accepting a limited number of new projects each quarter.
          </div>
        </div>
      </div>
    </section>
  );
}
