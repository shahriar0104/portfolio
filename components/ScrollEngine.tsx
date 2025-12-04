'use client';

import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger, registerGsap } from "../animations/gsapConfig";

interface ScrollEngineProps {
  children: ReactNode;
}

export function ScrollEngine({ children }: ScrollEngineProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    registerGsap();

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
    });

    (window as any).__lenis = lenis;

    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      animationFrameId = window.requestAnimationFrame(raf);
    };

    animationFrameId = window.requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return <>{children}</>;
}
