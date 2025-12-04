'use client';

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { fadeInUp } from "../../animations/fadeInUp";
import { staggerReveal } from "../../animations/staggerReveal";
import { parallaxScroll } from "../../animations/parallaxScroll";
import { LazySplineLoader } from "../../animations/lazySplineLoader";
import { useMagneticHover } from "../../hooks/useMagneticHover";
import { gsap } from "../../animations/gsapConfig";

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const primaryCta = useMagneticHover(0.15);
  const secondaryCta = useMagneticHover(0.1);

  useIsomorphicLayoutEffect(() => {
    if (!heroRef.current) return;
    const context = gsap.context(() => {
      fadeInUp(".hero-name", { delay: 0.1 });
      fadeInUp(".hero-role", { delay: 0.25, y: 30 });
      fadeInUp(".hero-tagline", { delay: 0.35, y: 30 });
      staggerReveal(".hero-cta", { delay: 0.45, y: 24, stagger: 0.12 });
      parallaxScroll(".hero-content", { y: [0, -10] });
      parallaxScroll(".hero-background", { y: [0, -5] });
    }, heroRef);

    return () => {
      context.revert();
    };
  }, []);

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
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      <div className="hero-background absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="hero-content container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <span className="text-accent-cyan">Shadman Shahriar</span>
            </div>

            <div className="space-y-4">
              <h1 className="hero-name text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
                Software Engineer
              </h1>
              <p className="hero-role text-lg md:text-xl text-gray-300 max-w-xl">
                I build intuitive interfaces, AI-driven systems, and scalable products.
              </p>
              <p className="hero-tagline text-sm md:text-base text-gray-400 max-w-xl">
                From national-scale government platforms to AI-powered assistants, I design and ship systems that stay reliable under real-world load.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                ref={primaryCta.ref as React.RefObject<HTMLButtonElement>}
                onMouseMove={primaryCta.onMouseMove}
                onMouseLeave={primaryCta.onMouseLeave}
                onClick={() => scrollToSection("projects")}
                className="hero-cta relative px-8 py-3 bg-accent-cyan text-space-dark font-semibold rounded-full overflow-hidden transition-transform">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-100" />
              </button>

              <button
                ref={secondaryCta.ref as React.RefObject<HTMLButtonElement>}
                onMouseMove={secondaryCta.onMouseMove}
                onMouseLeave={secondaryCta.onMouseLeave}
                onClick={() => scrollToSection("contact")}
                className="hero-cta px-8 py-3 border border-accent-cyan/60 text-accent-cyan font-semibold rounded-full bg-transparent hover:bg-accent-cyan/10 transition-transform"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] floating">
              <LazySplineLoader src="" title="Hero 3D" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
