'use client';

import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { fadeInUp } from "../../animations/fadeInUp";
import { staggerReveal } from "../../animations/staggerReveal";
import { parallaxScroll } from "../../animations/parallaxScroll";
import { gsap } from "../../animations/gsapConfig";
import { RocketAnimation } from "../RocketAnimation";
import { useContactDialog } from "../ContactDialogProvider";
import { Copy, ArrowRight } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const availabilityRef = useRef<HTMLParagraphElement | null>(null);
  const [copied, setCopied] = useState(false);
  const { open } = useContactDialog();

  useIsomorphicLayoutEffect(() => {
    if (!heroRef.current) return;
    const context = gsap.context(() => {
      fadeInUp(".hero-name", { delay: 0.1 });
      fadeInUp(".hero-role", { delay: 0.25, y: 30 });
      fadeInUp(".hero-tagline", { delay: 0.35, y: 30 });
      staggerReveal(".hero-cta", { delay: 0.45, y: 24, stagger: 0.12 });
      parallaxScroll(".hero-content", { y: [0, -10] });
      parallaxScroll(".hero-background", { y: [0, -5] });

      if (availabilityRef.current) {
        gsap.to(availabilityRef.current, {
          y: 8,
          color: "#fb923c", // warm orange
          textShadow: "0 0 18px rgba(248,113,113,0.85)",
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => {
      context.revert();
    };
  }, []);

  const handleCopyEmail = () => {
    const email = "info@shadman.tech";

    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(email).then(
        () => setCopied(true),
        () => setCopied(true)
      );
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } finally {
        document.body.removeChild(textarea);
      }
    }

    window.setTimeout(() => setCopied(false), 1500);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    const lenis = (window as any).__lenis;

    if (lenis) {
      lenis.scrollTo(element);
    } else {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24 md:pt-28 lg:pt-32"
    >
      <div className="hero-background absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="hero-content container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="relative flex flex-col gap-10">
          {/* Central big tagline over rocket animation background */}
          <div className="relative flex items-center justify-center py-8">
            <div className="absolute inset-x-0 -top-24 bottom-0 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-[580px] opacity-80">
                <RocketAnimation />
              </div>
            </div>
            <h1 className="hero-name relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[4.8rem] xl:text-[5.4rem] font-bold tracking-[0.12em] text-white/80 text-center leading-[0.9] uppercase [font-family:var(--font-orbitron)]">
              E2E COMPLEXITY
              <br className="hidden sm:block" />
              SIMPLIFIER
            </h1>
          </div>

          {/* CTA + email on left, short description on right */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="space-y-4">
              <button
                onClick={() => open()}
                className="hero-cta group inline-flex items-center gap-3 rounded-full border border-neutral-700/80 bg-neutral-100/5 px-6 py-2.5 text-xs md:text-sm font-semibold text-neutral-50 backdrop-blur-sm"
              >
                <span>Let&apos;s connect</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <div className="hero-cta flex items-center gap-3 text-xs md:text-sm text-neutral-400">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700/80 bg-neutral-900/80 text-[0.7rem] hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                  aria-label={copied ? "Email copied" : "Copy email"}
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono select-all">info@shadman.tech</span>
                {copied && (
                  <span className="text-[0.65rem] text-emerald-400">Copied</span>
                )}
              </div>
            </div>

            <p className="hero-role max-w-md text-sm md:text-base text-gray-300 md:text-right [font-family:var(--font-space)]">
              Shipping reliable, production-ready systems end-to-end.
            </p>
          </div>

          {/* Availability line with heat shimmer effect under rocket */}
          <p
            ref={availabilityRef}
            className="hero-tagline mt-2 text-[0.7rem] md:text-xs text-neutral-500 text-center"
          >
            Available now · Dhaka, Bangladesh · Remote projects welcome
          </p>
        </div>
      </div>
    </section>
  );
}
