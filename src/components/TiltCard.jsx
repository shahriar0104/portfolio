import { use3DTilt } from '../hooks/use3DTilt';

const TiltCard = ({ children, className = '' }) => {
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
