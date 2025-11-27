import { useEffect, useState } from 'react';

const ScrambleText = ({ text, className = '', speed = 50 }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  
  const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split('').map((char, index) => {
          if (char === ' ') return ' ';
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }
      
      iteration += 1 / 3;
    }, speed);
  };

  useEffect(() => {
    scramble();
  }, [text]);

  return (
    <span 
      className={className}
      onMouseEnter={scramble}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
