
import React, { useState, useEffect, useRef } from 'react';

interface TypewriterTextProps {
  text?: string;
  texts?: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  onComplete?: () => void;
  colorClassName?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  texts = [],
  delay = 50,
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenTexts = 2000,
  className = '',
  onComplete,
  colorClassName = 'text-code-blue' // Default color class
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Determine current text to type
  const currentText = text || (texts.length > 0 ? texts[textIndex] : '');

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!currentText) return;

    if (isDeleting) {
      // Deleting characters
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        // Move to the next text
        setIsDeleting(false);
        const nextTextIndex = (textIndex + 1) % texts.length;
        timeoutRef.current = setTimeout(() => {
          setTextIndex(nextTextIndex);
        }, delay);
      }
    } else {
      // Typing characters
      if (currentIndex < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(prev => prev + currentText[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, typingSpeed);
      } else {
        // Finished typing, wait before deleting
        if (texts.length > 1) {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenTexts);
        } else if (!isComplete) {
          setIsComplete(true);
          onComplete?.();
        }
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    currentIndex, 
    delay, 
    displayText, 
    isDeleting, 
    textIndex, 
    texts, 
    currentText,
    isComplete,
    onComplete,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts
  ]);

  // Reset current index when changing to a new text
  useEffect(() => {
    setCurrentIndex(0);
  }, [textIndex]);

  return (
    <span className={`${className} ${colorClassName}`}>
      {displayText}
      {((currentIndex < currentText?.length) || isDeleting) && (
        <span className="opacity-100 animate-cursor-blink text-code-green">|</span>
      )}
    </span>
  );
};

export default TypewriterText;
