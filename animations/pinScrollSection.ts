'use client';

import { ScrollTrigger, registerGsap } from "./gsapConfig";

interface PinScrollOptions {
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export function pinScrollSection(
  section: HTMLElement | null,
  options: PinScrollOptions = {}
) {
  if (!section) return;

  const { start = "top top", end = "+=100%", scrub = true } = options;

  registerGsap();

  return ScrollTrigger.create({
    trigger: section,
    start,
    end,
    scrub,
    pin: true,
    anticipatePin: 1,
  });
}
