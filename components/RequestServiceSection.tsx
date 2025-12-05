'use client';

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { gsap } from "../animations/gsapConfig";
import { staggerReveal } from "../animations/staggerReveal";

const services = [
  {
    title: "Enterprise Platforms",
    subtitle: "Long-lived systems",
    description:
      "Scalable, maintainable platforms for government and enterprise environments with many stakeholders.",
  },
  {
    title: "Multi-tenant SaaS build",
    subtitle: "One codebase, many customers",
    description:
      "Design and implement SaaS products with tenant isolation, billing, and admin controls baked in.",
  },
  {
    title: "Legacy Modernisation",
    subtitle: "From old stacks to new",
    description:
      "Gradual rewrites and refactors that respect existing users while moving towards a modern architecture.",
  },
  {
    title: "Intelligence Dashboards",
    subtitle: "Operational analytics",
    description:
      "Transform scattered data into clear, decision-ready dashboards for teams and leadership.",
  },
  {
    title: "AI Systems",
    subtitle: "Assistants & automation",
    description:
      "Design and integrate AI workflows that actually tie into your product and data, not just a chat box.",
  },
  {
    title: "System Audits & Performance",
    subtitle: "Stability & speed",
    description:
      "Deep dive into slow or fragile systems, with concrete recommendations and hands-on fixes.",
  },
  {
    title: "Architecture Consulting",
    subtitle: "Second set of eyes",
    description:
      "Reviews, diagrams and guidance for teams planning a new platform, migration or AI integration.",
  },
];

export function RequestServiceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const outerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current || !trackRef.current || !outerRef.current || !pinnedRef.current)
      return;

    const ctx = gsap.context(() => {
      const container = pinnedRef.current!;
      const outer = outerRef.current!;
      const track = trackRef.current!;

      // Entrance for cards
      staggerReveal(".service-card", { delay: 0.1, y: 40 });

      const getDistance = () => {
        const totalWidth = track.scrollWidth;
        const visibleWidth = outer.offsetWidth;
        return Math.max(0, totalWidth - visibleWidth);
      };

      gsap.to(track, {
        x: () => -getDistance(),
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="request-service"
      ref={sectionRef}
      className="relative py-28 bg-black text-neutral-100"
    >
      <div
        ref={pinnedRef}
        className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10"
      >
        <div className="mb-10 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-neutral-400 mb-3">
              REQUEST SERVICE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold">
              Engagements that ship real outcomes.
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-400 max-w-md">
            Ideal for data-heavy products, AI integrations, or platforms where failure is not an option.
          </p>
        </div>

        <div className="mt-6 md:mt-8">
          <div ref={outerRef} className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 md:gap-8 px-6 md:px-8 lg:px-10"
            >
              {services.map((service) => (
                <div
                  key={service.title}
                  className="service-card min-w-[260px] md:min-w-[320px] rounded-3xl border border-neutral-800 bg-neutral-900/90 px-6 py-6 md:px-7 md:py-7 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-2">
                      {service.subtitle}
                    </p>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {service.description}
                    </p>
                  </div>
                  {/* <div className="mt-6 text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700/80 bg-neutral-900/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Typical duration: 4–12 weeks
                    </span>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
