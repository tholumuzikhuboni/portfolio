
import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  colorClassName?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  delay = 50, 
  className = '',
  onComplete,
  colorClassName = 'text-code-blue' // Default color class
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, delay, text, onComplete, isComplete]);

  return (
    <span className={`${className} ${colorClassName}`}>
      {displayText}
      {currentIndex < text.length && (
        <span className="opacity-100 animate-cursor-blink text-code-green">|</span>
      )}
    </span>
  );
};

export default TypewriterText;
