"use client";

import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiExpress,
  SiNestjs,
  SiNodedotjs,
  SiSpringboot,
  SiPostgresql,
  SiOracle,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiGit,
  SiLinux,
  SiRender,
  SiWasabi,
} from "react-icons/si";

type TechIconMeta = {
  icon: IconType;
  color: string;
};

const map: Record<string, TechIconMeta> = {
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  React: { icon: SiReact, color: "#61dafb" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  Angular: { icon: SiAngular, color: "#DD0031" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  "Node.js": { icon: SiNodedotjs, color: "#3C873A" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "Spring MVC": { icon: SiSpringboot, color: "#6DB33F" },
  PostgreSQL: { icon: SiPostgresql, color: "#336791" },
  Oracle: { icon: SiOracle, color: "#F80000" },
  MySQL: { icon: SiMysql, color: "#00758F" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  Docker: { icon: SiDocker, color: "#0DB7ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  Git: { icon: SiGit, color: "#F05032" },
  "Linux / Debian": { icon: SiLinux, color: "#D70A53" },
  Wasabi: { icon: SiWasabi, color: "#78A83B" },
  Render: { icon: SiRender, color: "#46E3B7" },
};

export function getTechIcon(name: string): ReactNode | null {
  const entry = map[name];
  if (!entry) return null;
  const Icon = entry.icon;
  return <Icon color={entry.color} />;
}
