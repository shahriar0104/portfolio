import { useRef } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { gsap, registerGsap } from "../animations/gsapConfig";

interface MagneticHoverResult {
  ref: React.RefObject<HTMLButtonElement | HTMLDivElement | null>;
  onMouseMove: (event: ReactMouseEvent<HTMLButtonElement | HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

export function useMagneticHover(strength = 0.2): MagneticHoverResult {
  const ref = useRef<HTMLButtonElement | HTMLDivElement | null>(null);

  registerGsap();

  const onMouseMove = (event: ReactMouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const onMouseLeave = () => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return { ref, onMouseMove, onMouseLeave };
}
