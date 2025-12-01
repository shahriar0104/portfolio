import { useRef, useState, type CSSProperties, type MouseEvent as ReactMouseEvent } from "react";

export type TiltOptions = {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
};

export type TiltResult = {
  ref: React.RefObject<HTMLDivElement | null>;
  style: CSSProperties;
  onMouseMove: (e: ReactMouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
};

export const use3DTilt = (options: TiltOptions = {}): TiltResult => {
  const { max = 15, perspective = 1000, scale = 1.05, speed = 400 } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState<CSSProperties>({});

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * max;
    const rotateY = ((centerX - x) / centerX) * max;

    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform:
        "perspective(" +
        perspective +
        "px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    });
  };

  return {
    ref,
    style: tiltStyle,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};
