'use client';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

let isRegistered = false;

export function registerGsap() {
  if (isRegistered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
  isRegistered = true;
}

export { gsap, ScrollTrigger, MotionPathPlugin };
export type TweenTarget = gsap.TweenTarget;
