'use client';

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { fadeInUp } from "../animations/fadeInUp";
import { staggerReveal } from "../animations/staggerReveal";
import { gsap } from "../animations/gsapConfig";
import { getTechIcon } from "../lib/techIcons";
import { Mail, Video, ShieldCheck, Zap, BarChart2 } from "lucide-react";
import { SiSlack, SiAsana, SiTrello } from "react-icons/si";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";

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
        const track = marqueeRef.current;
        const container = track.parentElement;

        if (container) {
          const getDistance = () => {
            const totalWidth = track.scrollWidth;
            const visibleWidth = container.offsetWidth;
            return Math.max(0, totalWidth - visibleWidth);
          };

          gsap.fromTo(
            track,
            { x: 0 },
            {
              x: () => -getDistance(),
              repeat: -1,
              duration: 80,
              ease: "none",
            }
          );
        }
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

        {/* Row 1: Methodology + response guarantees */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] gap-6 md:gap-8 mb-8">
          {/* Methodology card */}
          <div className="how-card rounded-3xl border border-neutral-800 bg-neutral-900/80 px-6 py-6 md:px-7 md:py-7 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-2">
                METHODOLOGY
              </p>
              <p className="text-sm text-neutral-300 mb-5 max-w-md">
                I use lightweight Agile delivery designed for SMEs and product teams, and I&apos;m
                available in the channels you already use.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-5">
                {/* Email */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1B140A]">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </span>
                  <span className="text-xs font-medium">Email</span>
                </div>
                {/* Video */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#07151B]">
                    <Video className="w-5 h-5 text-sky-400" />
                  </span>
                  <span className="text-xs font-medium">Video</span>
                </div>
                {/* Teams */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#140E1F]">
                    <PiMicrosoftTeamsLogo className="w-5 h-5 text-[#5B5FC7]" />
                  </span>
                  <span className="text-xs font-medium">Teams</span>
                </div>
                {/* Slack */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#11141B]">
                    <SiSlack className="w-5 h-5 text-[#36C5F0]" />
                  </span>
                  <span className="text-xs font-medium">Slack</span>
                </div>
                {/* Asana */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1A1117]">
                    <SiAsana className="w-5 h-5 text-[#F06A6A]" />
                  </span>
                  <span className="text-xs font-medium">Asana</span>
                </div>
                {/* Trello */}
                <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#061824]">
                    <SiTrello className="w-5 h-5 text-[#0284FF]" />
                  </span>
                  <span className="text-xs font-medium">Trello</span>
                </div>
              </div>
            </div>

            <button className="mt-2 inline-flex items-center justify-center rounded-full border border-neutral-600/80 bg-neutral-950/80 px-6 py-2 text-xs md:text-sm font-semibold tracking-[0.18em] uppercase">
              Request channel
            </button>
          </div>

          {/* Response guarantee cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {[
              {
                label: "1HR",
                level: "Critical",
                color: "text-red-500",
              },
              {
                label: "4HRS",
                level: "Urgent",
                color: "text-amber-400",
              },
              {
                label: "24HRS",
                level: "Routine",
                color: "text-emerald-400",
              },
            ].map((sla) => (
              <div
                key={sla.label}
                className="how-card flex flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-950/80 px-5 py-5"
              >
                <div>
                  <p className="text-xl md:text-2xl font-semibold tracking-[0.2em] mb-2">
                    {sla.label}
                  </p>
                  <p className={`text-sm font-semibold ${sla.color}`}>{sla.level}</p>
                </div>
                <p className="mt-4 text-xs text-neutral-400">Response guarantee</p>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Results / Secure / Fast */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] gap-6 md:gap-8">
          {/* Results card */}
          <div className="how-card rounded-3xl border border-neutral-800 bg-neutral-900/80 px-6 py-6 md:px-7 md:py-7 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-b from-sky-500/80 to-sky-300/80">
              <BarChart2 className="w-7 h-7 text-black/90" />
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-400 mb-1">
                RESULTS
              </p>
              <p className="text-sm text-neutral-300 max-w-md">
                Enterprise solutions that drive measurable results across operations, reporting, and
                decision-making.
              </p>
            </div>
          </div>

          {/* Secure + Fast cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="how-card rounded-3xl border border-neutral-800 bg-neutral-900/80 px-6 py-6 flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-300 mb-1">
                  SECURE
                </p>
                <p className="text-sm text-neutral-400">
                  Enterprise-grade authentication and access control in every integration.
                </p>
              </div>
            </div>

            <div className="how-card rounded-3xl border border-neutral-800 bg-neutral-900/80 px-6 py-6 flex flex-col gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-300 mb-1">
                  FAST
                </p>
                <p className="text-sm text-neutral-400">
                  6 to 12 week turnaround that ships quality solutions, not endless prototypes.
                </p>
              </div>
            </div>
          </div>
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
