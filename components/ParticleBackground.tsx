import React, { useEffect, useRef } from "react";

type MouseState = {
  x: number | null;
  y: number | null;
  radius: number;
};

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  private canvas: HTMLCanvasElement;
  private mouse: MouseState;

  constructor(canvas: HTMLCanvasElement, mouse: MouseState) {
    this.canvas = canvas;
    this.mouse = mouse;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.color =
      Math.random() > 0.5
        ? "rgba(0, 245, 255, 0.5)"
        : "rgba(124, 58, 237, 0.5)";
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    const dx =
      this.mouse.x === null ? 0 : (this.mouse.x as number) - this.x;
    const dy =
      this.mouse.y === null ? 0 : (this.mouse.y as number) - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (
      this.mouse.x !== null &&
      this.mouse.y !== null &&
      distance < this.mouse.radius
    ) {
      const force = (this.mouse.radius - distance) / this.mouse.radius;
      const angle = Math.atan2(dy, dx);
      this.x -= Math.cos(angle) * force * 3;
      this.y -= Math.sin(angle) * force * 3;
    }

    if (this.x < 0 || this.x > this.canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.speedY *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const particles: Particle[] = [];
    const baseParticleCount = 100;
    const particleCount = hasFinePointer
      ? baseParticleCount
      : Math.floor(baseParticleCount / 2);

    const mouse: MouseState = { x: null, y: null, radius: 150 };
    let animationFrameId: number | null = null;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas, mouse));
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.2 *
              (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      connectParticles();
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.3 }}
    />
  );
};

export default ParticleBackground;
