'use client';

import { gsap, type TweenTarget, registerGsap } from "./gsapConfig";

interface StaggerRevealOptions {
  delay?: number;
  duration?: number;
  stagger?: number;
  y?: number;
}

export function staggerReveal(
  targets: TweenTarget,
  options: StaggerRevealOptions = {}
) {
  const { delay = 0, duration = 0.8, stagger = 0.08, y = 20 } = options;

  registerGsap();

  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: "power3.out",
    }
  );
}
