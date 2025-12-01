import React from "react";
import { use3DTilt } from "../hooks/use3DTilt";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => {
  const tilt = use3DTilt({ max: 10, scale: 1.02, speed: 300 });

  return (
    <div
      ref={tilt.ref}
      style={tilt.style}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
};

export default TiltCard;
