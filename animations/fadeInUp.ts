'use client';

import { gsap, type TweenTarget, registerGsap } from "./gsapConfig";

interface FadeInUpOptions {
  delay?: number;
  duration?: number;
  y?: number;
}

export function fadeInUp(target: TweenTarget, options: FadeInUpOptions = {}) {
  const { delay = 0, duration = 0.8, y = 40 } = options;

  registerGsap();

  return gsap.fromTo(
    target,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
    }
  );
}
