'use client';

import { gsap, ScrollTrigger, registerGsap } from "./gsapConfig";

interface ParallaxScrollOptions {
  trigger?: Element | string | null;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  y?: [number, number]; // [from, to] in percent
}

export function parallaxScroll(
  target: string | Element,
  options: ParallaxScrollOptions = {}
) {
  const {
    trigger,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
    y = [0, -20],
  } = options;

  registerGsap();

  return gsap.fromTo(
    target,
    { yPercent: y[0] },
    {
      yPercent: y[1],
      ease: "none",
      scrollTrigger: {
        trigger: (trigger as ScrollTrigger.Vars["trigger"]) ?? (target as ScrollTrigger.Vars["trigger"]),
        start,
        end,
        scrub,
      },
    }
  );
}
