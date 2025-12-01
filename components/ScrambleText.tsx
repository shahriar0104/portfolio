import React, { useEffect, useState } from "react";

type ScrambleTextProps = {
  text: string;
  className?: string;
  speed?: number;
};

const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  className = "",
  speed = 50,
}) => {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    const interval = window.setInterval(() => {
      setDisplayText(() =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        window.clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    scramble();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span className={className} onMouseEnter={scramble}>
      {displayText}
    </span>
  );
};

export default ScrambleText;
