"use client";

import Image from "next/image";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { gsap } from "../animations/gsapConfig";
import { pinScrollSection } from "../animations/pinScrollSection";
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
    stack: ["Next.js", "TypeScript", "Monorepo", "Custom UI Library"],
    images: [
      "/case-studies/ieims-1.png",
      "/case-studies/ieims-2.png",
      "/case-studies/ieims-3.png",
    ],
  },
];

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current) return;
    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      const pinEnd = "+=" + 200 * caseStudies.length + "%";

      pinScrollSection(section, { start: "top top", end: pinEnd, scrub: true });
      fadeInUp(".case-heading", { y: 40 });
      fadeInUp(".case-main", { delay: 0.2, y: 40 });

      const visuals = gsap.utils.toArray<HTMLElement>(".case-visual");
      visuals.forEach((visual) => {
        const slides = visual.querySelectorAll<HTMLElement>(".case-visual-slide");
        if (!slides.length || slides.length === 1) return;

        // Start with the first slide in view, others positioned to the right.
        gsap.set(slides, { xPercent: 100 });
        gsap.set(slides[0], { xPercent: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: visual,
            // Start transitions only after the section is pinned:
            // first when the visual's top reaches the viewport top,
            // then progress until its bottom leaves the top.
            start: "top top",
            end: "bottom top",
            scrub: true,
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
            className="case-main mb-16 last:mb-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] gap-8 items-start"
          >
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 overflow-hidden aspect-[16/9]">
              <div className="case-visual relative w-full h-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-black">
                {study.images && study.images.length > 0 ? (
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
                  <div className="w-full h-full flex items-center justify-center text-xs text-neutral-500">
                    Project visuals go here
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
