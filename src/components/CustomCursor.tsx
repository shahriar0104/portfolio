import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Point = {
  x: number;
  y: number;
};

type Particle = {
  id: number;
  x: number;
  y: number;
};

const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState<Point>({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover">("default");
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastMousePositionRef = useRef<Point>({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const supportsPointerFine =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (supportsPointerFine && !prefersReducedMotion) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const mouseMove = (e: MouseEvent) => {
      lastMousePositionRef.current = { x: e.clientX, y: e.clientY };

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(() => {
          setMousePosition(lastMousePositionRef.current);
          frameRef.current = null;
        });
      }

      if (Math.random() > 0.9) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
        };
        setParticles((prev) => [...prev.slice(-6), newParticle]);
      }
    };

    const handleMouseEnter = () => setCursorVariant("hover");
    const handleMouseLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);

    const interactiveElements = document.querySelectorAll<HTMLElement>(
      "a, button, .card-hover, .glass-card-hover"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 2,
      mixBlendMode: "difference" as const,
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full rounded-full border-2 border-cyan-400 bg-cyan-400/20" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-1 h-1 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 50 }}
      >
        <div className="w-full h-full rounded-full bg-cyan-400" />
      </motion.div>

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9998]"
          initial={{ x: particle.x, y: particle.y, opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => {
            setParticles((prev) => prev.filter((p) => p.id !== particle.id));
          }}
        >
          <div className="w-full h-full rounded-full bg-purple-400" />
        </motion.div>
      ))}
    </>
  );
};

export default CustomCursor;
