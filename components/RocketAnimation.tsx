'use client';

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import { gsap } from "../animations/gsapConfig";

export function RocketAnimation() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rocket-svg",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );

      gsap.to(".rocket-flame-main", {
        scaleY: 1.2,
        opacity: 1,
        duration: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".rocket-flame-flicker", {
        scaleY: 1.1,
        opacity: 0.9,
        duration: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.1,
      });

      const particles = gsap.utils.toArray<HTMLDivElement>(".rocket-particle");
      particles.forEach((particle, index) => {
        gsap.fromTo(
          particle,
          { y: 0, opacity: 1, scale: 1 },
          {
            y: 100,
            opacity: 0,
            scale: 0.5,
            duration: 0.8,
            repeat: -1,
            ease: "power1.out",
            delay: index * 0.1,
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative w-full h-[600px] flex items-center justify-center">
      {/* Rocket SVG */}
      <svg
        className="rocket-svg relative z-10"
        width="200"
        height="400"
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rocket Body */}
        <path
          d="M100 20 L130 100 L130 280 L100 300 L70 280 L70 100 Z"
          fill="url(#rocketGradient)"
          stroke="#00d9ff"
          strokeWidth="2"
        />

        {/* Rocket Nose Cone */}
        <path
          d="M100 20 L130 100 L100 80 L70 100 Z"
          fill="#00d9ff"
          opacity="0.8"
        />

        {/* Window */}
        <circle cx="100" cy="150" r="20" fill="#0a0e27" stroke="#00d9ff" strokeWidth="2" />
        <circle cx="100" cy="150" r="15" fill="url(#windowGlow)" />

        {/* Left Fin */}
        <path
          d="M70 250 L40 320 L70 280 Z"
          fill="url(#finGradient)"
          stroke="#a855f7"
          strokeWidth="1.5"
        />

        {/* Right Fin */}
        <path
          d="M130 250 L160 320 L130 280 Z"
          fill="url(#finGradient)"
          stroke="#a855f7"
          strokeWidth="1.5"
        />

        {/* Details */}
        <line x1="70" y1="200" x2="130" y2="200" stroke="#00d9ff" strokeWidth="1" opacity="0.5" />
        <line x1="70" y1="220" x2="130" y2="220" stroke="#00d9ff" strokeWidth="1" opacity="0.5" />

        {/* Gradients */}
        <defs>
          <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2a2f4a" />
            <stop offset="100%" stopColor="#1a1f3a" />
          </linearGradient>
          <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.3" />
          </linearGradient>
          <radialGradient id="windowGlow">
            <stop offset="0%" stopColor="#00d9ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00d9ff" stopOpacity="0.2" />
          </radialGradient>
        </defs>
      </svg>

      {/* Animated Flames */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
        {/* Main flame */}
        <div className="rocket-flame-main relative">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
            {/* Outer flame (orange) */}
            <path
              d="M60 0 Q40 40 45 80 Q50 120 60 180 Q70 120 75 80 Q80 40 60 0 Z"
              fill="url(#flameOuter)"
            />
            {/* Middle flame (yellow) */}
            <path
              d="M60 20 Q50 50 53 85 Q56 115 60 160 Q64 115 67 85 Q70 50 60 20 Z"
              fill="url(#flameMiddle)"
            />
            {/* Inner flame (white) */}
            <path
              d="M60 40 Q56 60 58 90 Q59 110 60 140 Q61 110 62 90 Q64 60 60 40 Z"
              fill="url(#flameInner)"
            />

            <defs>
              <linearGradient id="flameOuter" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ff0000" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="flameMiddle" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffff00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ff6b00" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="flameInner" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ffff00" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Secondary flame flicker */}
        <div className="rocket-flame-flicker absolute inset-0">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none">
            <path
              d="M60 10 Q45 45 48 85 Q52 125 60 170 Q68 125 72 85 Q75 45 60 10 Z"
              fill="url(#flameFlicker)"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="flameFlicker" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ff9500" />
                <stop offset="100%" stopColor="#ff0000" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Glow effect behind rocket */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/20 via-accent-cyan/10 to-transparent blur-3xl -z-10" />

      {/* Particle effects */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rocket-particle absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              left: `${(i - 3) * 15}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
