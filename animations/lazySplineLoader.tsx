'use client';

import { useEffect, useRef, useState } from "react";

interface LazySplineLoaderProps {
  src?: string | null;
  title?: string;
  className?: string;
}

export function LazySplineLoader({
  src,
  title = "3D scene",
  className,
}: LazySplineLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const hasSrc = typeof src === "string" && src.trim().length > 0;

  return (
    <div ref={containerRef} className={className}>
      {isVisible && hasSrc ? (
        <iframe
          src={src!}
          title={title}
          className="w-full h-full rounded-2xl border border-white/10"
          loading="lazy"
          allow="autoplay; fullscreen"
        />
      ) : (
        <div className="w-full h-full rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center text-xs text-gray-400">
          Loading 3D scene...
        </div>
      )}
    </div>
  );
}
