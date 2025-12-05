"use client";

import Image from "next/image";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { gsap, registerGsap } from "../animations/gsapConfig";
import { fadeInUp } from "../animations/fadeInUp";
import { getTechIcon } from "../lib/techIcons";

const caseStudies = [
  {
    id: "board-smith",
    title: "Board Smith",
    role: "Full-stack architect & lead developer",
    timeframe: "6+ months",
    problem:
      "Board meetings involve scattered documents, manual preparation, and fragmented decision history.",
    solution:
      "Full board-meeting platform with AI-assisted content, collaborative editor, and a robust Express + Prisma backend.",
    impact:
      "Cleaner preparation flows, better traceability of decisions, and a backend ready for future automation.",
    stack: ["Next.js", "TypeScript", "Express.js", "Prisma", "PostgreSQL", "Supabase"],
    images: [
      "/case-studies/board-smith-1.png",
      "/case-studies/board-smith-2.png",
      "/case-studies/board-smith-3.png",
    ],
  },
  {
    id: "ieims",
    title: "IEIMS – National Education Platform",
    role: "Frontend lead & module developer",
    timeframe: "Multi-year",
    problem:
      "Education boards need consistent, reliable exam and curriculum data across the whole country.",
    solution:
      "Monorepo-based frontend with custom component library, serving multiple high-stakes modules.",
    impact:
      "Supports millions of students with reliable reporting and operational tooling for exam sessions.",
    stack: ["Spring Boot", "Next.js", "SQL Server", "Monorepo", "Custom UI Library", "Kubernetes",],
    images: [
      "/case-studies/ieims-1.png",
      "/case-studies/ieims-2.png",
      "/case-studies/ieims-3.png",
    ],
  },
  {
    id: "rjsc",
    title: "RJSC – Register of Joint Stock Companies & Firms",
    role: "Core feature developer",
    timeframe: "Multi-year rollout",
    problem:
      "Company registration and lifecycle changes involve complex rules, manual verification, and multiple government systems.",
    solution:
      "End-to-end registration and compliance system covering name clearance, company registration, back-office validation, annual filing, and lifecycle changes with deep API integrations.",
    impact:
      "Handles all major company types (private, public, one-person, partnership, foreign) plus business name clearance, annual filings, share changes, address updates and more in a single reliable workflow.",
    stack: ["Spring MVC", "Thymeleaf", "Oracle", "Docker", "3rd Prty APIs"],
    images: [
      "/case-studies/rjsc-1.png",
      "/case-studies/rjsc-2.png",
      "/case-studies/rjsc-3.png",
    ],
  },
  {
    id: "crvs",
    title: "CRVS – Civil Registration and Vital Statistics",
    role: "Performance engineer & bug-fix specialist",
    timeframe: "Multi-year rollout",
    problem:
      "Existing CRVS deployment suffered from fragile integrations, incorrect business logic and slow responses on critical flows.",
    solution:
      "Debugged and fixed NID/BRN integrations, corrected key business rules and profiled/refactored bottlenecks to improve overall system performance.",
    impact:
      "Delivers more reliable student registration and identification, birth certificate verification, school enrollment tracking and migration records.",
    stack: ["Laravel", "Oracle", "NID Integration", "BRN Integration"],
    images: [],
  },
  {
    id: "ai-assistant",
    title: "AI Assistant – Chat Widget",
    role: "Full-stack engineer",
    timeframe: "Ongoing",
    problem:
      "Teams needed an AI assistant that could be embedded into any frontend stack while handling diverse documents and scripts.",
    solution:
      "Built a FRAMEWORK AGNOSTIC, plug-and-play chat widget with an optimized RAG pipeline and robust document extraction for images, PDFs, Bengali text and non-Unicode fonts like SutonnyMJ.",
    impact:
      "Enables fast integration of AI assistants into React, Vue, Angular and vanilla apps while delivering more accurate, context-aware responses.",
    stack: ["React", "Fast API", "Docker", "RAG Pipeline", "LLMs"],
    images: [],
  },
];

function IeimsFlowVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[min(360px,100%)] aspect-square">
        <div className="absolute inset-[-15%] rounded-full bg-[radial-gradient(circle_at_center,rgba(45,212,191,0.22),transparent_65%)]" />
        <div className="absolute inset-[18%] rounded-full border border-cyan-500/25" />

        {/* CDR - Straight line upward - from center to CDR module */}
        <div className="ieims-link ieims-link-cdr absolute left-1/2 top-[3%] -translate-x-1/2 h-[47%] w-[2px] bg-gradient-to-b from-cyan-400/90 via-cyan-400/50 to-transparent" />

        {/* REG - Straight line to the right - only to the left edge of REG pill */}
        <div className="ieims-link ieims-link-reg absolute left-1/2 top-1/2 -translate-y-1/2 h-[2px] w-[46%] bg-gradient-to-r from-transparent via-emerald-400/50 to-emerald-400/90" />

        {/* EAP - Straight line to the left - only to the right edge of EAP pill */}
        <div className="ieims-link ieims-link-eap absolute right-1/2 top-1/2 -translate-y-1/2 h-[2px] w-[46%] bg-gradient-to-l from-transparent via-emerald-400/50 to-emerald-400/90" />

        {/* FFU - Curved SVG path to bottom-right */}
        <svg className="ieims-link ieims-link-ffu absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="ffu-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(56, 189, 248)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(56, 189, 248)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(56, 189, 248)" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            id="ffu-path"
            d="M 50 50 Q 70 65, 82 90"
            stroke="url(#ffu-gradient)"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* PMC - Curved SVG path to bottom-left */}
        <svg className="ieims-link ieims-link-pmc absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="pmc-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(129, 140, 248)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(129, 140, 248)" stopOpacity="0.7" />
              <stop offset="100%" stopColor="rgb(129, 140, 248)" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path
            id="pmc-path"
            d="M 50 50 Q 30 65, 18 90"
            stroke="url(#pmc-gradient)"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="ieims-node ieims-node-master absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl px-4 py-3 bg-black/80 border border-emerald-400/50 shadow-[0_0_0_1px_rgba(16,185,129,0.4)] flex flex-col items-center gap-1 text-xs">
          <span className="text-[0.6rem] uppercase tracking-[0.28em] text-emerald-300/80">
            Core
          </span>
          <span className="text-sm font-semibold text-emerald-100">Masterdata</span>
        </div>

        <div className="ieims-node ieims-node-cdr absolute left-1/2 top-[3%] -translate-x-1/2 rounded-2xl px-3 py-1.5 bg-black/80 border border-cyan-500/60 text-[0.7rem] font-medium text-cyan-100 shadow-[0_0_0_1px_rgba(59,130,246,0.45)]">
          CDR
        </div>
        <div className="ieims-node ieims-node-reg absolute right-[4%] top-1/2 -translate-y-1/2 rounded-2xl px-3 py-1.5 bg-black/80 border border-emerald-500/60 text-[0.7rem] font-medium text-emerald-100 shadow-[0_0_0_1px_rgba(16,185,129,0.45)]">
          REG
        </div>
        <div className="ieims-node ieims-node-ffu absolute right-[10%] bottom-[6%] rounded-2xl px-3 py-1.5 bg-black/80 border border-sky-500/60 text-[0.7rem] font-medium text-sky-100 shadow-[0_0_0_1px_rgba(56,189,248,0.45)]">
          FFU
        </div>
        <div className="ieims-node ieims-node-pmc absolute left-[10%] bottom-[6%] rounded-2xl px-3 py-1.5 bg-black/80 border border-violet-500/60 text-[0.7rem] font-medium text-violet-100 shadow-[0_0_0_1px_rgba(129,140,248,0.5)]">
          PMC
        </div>
        <div className="ieims-node ieims-node-eap absolute left-[4%] top-1/2 -translate-y-1/2 rounded-2xl px-3 py-1.5 bg-black/80 border border-emerald-500/60 text-[0.7rem] font-medium text-emerald-100 shadow-[0_0_0_1px_rgba(16,185,129,0.45)]">
          EAP
        </div>

        <div className="ieims-spark ieims-spark-cdr absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
        <div className="ieims-spark ieims-spark-reg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.9)]" />
        <div className="ieims-spark ieims-spark-ffu absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
        <div className="ieims-spark ieims-spark-pmc absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(129,140,248,0.9)]" />
        <div className="ieims-spark ieims-spark-eap absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.9)]" />
      </div>
    </div>
  );
}

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      registerGsap();

      fadeInUp(".case-heading", { y: 40 });
      fadeInUp(".case-main", { delay: 0.2, y: 40 });

      const cases = gsap.utils.toArray<HTMLElement>(".case-main");
      cases.forEach((caseEl) => {
        const visual = caseEl.querySelector<HTMLElement>(".case-visual");
        if (!visual) return;

        const caseId = caseEl.dataset.caseId;

        if (caseId === "ieims") {
          const nodes = visual.querySelectorAll<HTMLElement>(".ieims-node");
          const links = visual.querySelectorAll<HTMLElement>(".ieims-link");

          const sparksConfig: Record<
            "cdr" | "reg" | "ffu" | "pmc" | "eap",
            { x: number; y: number }
          > = {
            cdr: { x: 0, y: -80 },
            reg: { x: 80, y: 0 },
            ffu: { x: 60, y: 70 },
            pmc: { x: -60, y: 70 },
            eap: { x: -80, y: 0 },
          };

          gsap.set(nodes, { opacity: 0.35, scale: 0.92 });
          gsap.set(links, { opacity: 0.12 });
          gsap.set(visual.querySelectorAll<HTMLElement>(".ieims-spark"), {
            opacity: 0,
            x: 0,
            y: 0,
          });

          const modules = ["cdr", "reg", "ffu", "pmc", "eap"] as const;
          const steps = 1 + modules.length;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: caseEl,
              start: "center center",
              end: "+=" + steps * 90 + "%",
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });

          const master = visual.querySelector<HTMLElement>(".ieims-node-master");
          if (master) {
            tl.to(master, {
              opacity: 1,
              scale: 1,
              boxShadow: "0 0 32px rgba(16,185,129,0.7)",
              duration: 1,
              ease: "none",
            });
          }

          modules.forEach((key) => {
            const node = visual.querySelector<HTMLElement>(`.ieims-node-${key}`);
            const link = visual.querySelector<HTMLElement>(`.ieims-link-${key}`);
            const spark = visual.querySelector<HTMLElement>(`.ieims-spark-${key}`);
            const path = visual.querySelector<SVGPathElement>(`#${key}-path`);
            const sparkDelta = sparksConfig[key];

            if (!node || !link || !spark) return;

            // Use MotionPath for FFU and PMC (SVG paths), x/y for others (div lines)
            if (path && (key === 'ffu' || key === 'pmc')) {
              tl.to(spark, {
                opacity: 1,
                motionPath: {
                  path: path,
                  align: path,
                  alignOrigin: [0.5, 0.5],
                },
                duration: 0.8,
                ease: "power2.out",
              })
                .to(
                  link,
                  {
                    opacity: 0.9,
                    duration: 0.8,
                    ease: "power1.out",
                  },
                  "<"
                )
                .to(
                  node,
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power1.out",
                  },
                  "<"
                )
                .to(spark, {
                  opacity: 0,
                  duration: 0.4,
                  ease: "power1.out",
                });
            } else {
              // For CDR, REG, EAP - use simple x/y translation
              tl.to(spark, {
                opacity: 1,
                x: sparkDelta.x,
                y: sparkDelta.y,
                duration: 0.8,
                ease: "power2.out",
              })
                .to(
                  link,
                  {
                    opacity: 0.9,
                    duration: 0.8,
                    ease: "power1.out",
                  },
                  "<"
                )
                .to(
                  node,
                  {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power1.out",
                  },
                  "<"
                )
                .to(spark, {
                  opacity: 0,
                  duration: 0.4,
                  ease: "power1.out",
                });
            }
          });

          return;
        }

        const slides = visual.querySelectorAll<HTMLElement>(".case-visual-slide");
        if (!slides.length || slides.length === 1) return;

        // Start with the first slide in view, others positioned to the right.
        gsap.set(slides, { xPercent: 100 });
        gsap.set(slides[0], { xPercent: 0 });

        if (slides.length === 3) {
          const steps = 4;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: caseEl,
              start: "center center",
              end: "+=" + steps * 100 + "%",
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });

          // Step 1: 2nd image moves halfway in while 1st image starts sliding out.
          tl.to(slides[1], {
            xPercent: 50,
            duration: 1,
            ease: "none",
          }).to(
            slides[0],
            {
              xPercent: -50,
              duration: 1,
              ease: "none",
            },
            "<"
          );

          // Step 2: 2nd image goes fully center while 1st image completes exiting.
          tl.to(slides[1], {
            xPercent: 0,
            duration: 1,
            ease: "none",
          }).to(
            slides[0],
            {
              xPercent: -100,
              duration: 1,
              ease: "none",
            },
            "<"
          );

          // Step 3: 3rd image moves halfway in while 2nd image starts sliding out.
          tl.to(slides[2], {
            xPercent: 50,
            duration: 1,
            ease: "none",
          }).to(
            slides[1],
            {
              xPercent: -50,
              duration: 1,
              ease: "none",
            },
            "<"
          );

          // Step 4: 3rd image goes fully center while 2nd image completes exiting.
          tl.to(slides[2], {
            xPercent: 0,
            duration: 1,
            ease: "none",
          }).to(
            slides[1],
            {
              xPercent: -100,
              duration: 1,
              ease: "none",
            },
            "<"
          );
        } else {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: caseEl,
              start: "center center",
              end: "+=" + slides.length * 150 + "%",
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });

          slides.forEach((slide, index) => {
            if (index === 0) return;
            const prev = slides[index - 1];

            tl.to(prev, {
              xPercent: -100,
              duration: 0.6,
              ease: "power2.inOut",
            }).fromTo(
              slide,
              { xPercent: 100 },
              {
                xPercent: 0,
                duration: 0.6,
                ease: "power2.inOut",
              },
              "<"
            );
          });
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="case-studies"
      ref={sectionRef}
      className="relative py-28 bg-black text-neutral-100"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="case-heading mb-10 md:mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-3">
            CASE STUDIES
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold">
            Curated work from complex environments.
          </h2>
        </div>

        {caseStudies.map((study) => (
          <div
            key={study.id}
            data-case-id={study.id}
            className="case-main mb-16 last:mb-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] gap-8 items-start"
          >
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 overflow-hidden aspect-[16/9]">
              <div className="case-visual relative w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
                {study.id === "ieims" ? (
                  <IeimsFlowVisual />
                ) : study.images && study.images.length > 0 ? (
                  study.images.map((src, index) => (
                    <div
                      key={src}
                      className="case-visual-slide absolute inset-0 flex items-center justify-center"
                    >
                      <Image
                        src={src}
                        alt={`${study.title} screen ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                    <div className="inline-flex items-center justify-center rounded-full border border-neutral-700/80 bg-black/60 px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-neutral-400">
                      Case Study
                    </div>
                    <p className="text-base md:text-lg font-semibold text-neutral-50">
                      {study.title}
                    </p>
                    <p className="text-[0.7rem] md:text-xs text-neutral-400 max-w-md">
                      {study.impact}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/90 px-6 py-6 md:px-7 md:py-7 flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {study.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-3">
                  {study.role} • {study.timeframe}
                </p>

                <div className="space-y-3 text-sm text-neutral-300">
                  <div>
                    <p className="font-semibold text-neutral-200">Problem</p>
                    <p className="text-neutral-400">{study.problem}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-200">Solution</p>
                    <p className="text-neutral-400">{study.solution}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-200">Impact</p>
                    <p className="text-neutral-400">{study.impact}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {study.stack.map((tech) => {
                  const icon = getTechIcon(tech);
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700/80 text-xs text-neutral-200"
                    >
                      <span className="flex h-4 w-4 items-center justify-center text-neutral-100">
                        {icon ?? <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                      </span>
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
