
import React, { useState } from 'react';
import TypewriterText from './TypewriterText';

interface CodeBlockProps {
  code: string;
  className?: string;
  delay?: number;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  className = '',
  delay = 30
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const formatCode = (rawCode: string) => {
    return rawCode
      .split('\n')
      .map((line, index) => {
        // Replace keywords with spans and appropriate color classes
        return line
          .replace(/(const|let|var|function|return|import|export|from|if|else|for|while)/g, '<span class="text-code-purple">$1</span>')
          .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="text-code-green">$1</span>')
          .replace(/(\{|\}|\[|\]|\(|\)|,|;)/g, '<span class="text-code-yellow">$1</span>')
          .replace(/(\w+):/g, '<span class="text-code-blue">$1</span>:')
          .replace(/(\/\/.*)/g, '<span class="text-code-gray">$1</span>');
      })
      .join('\n');
  };

  const formattedCode = formatCode(code);

  return (
    <div 
      className={`font-mono text-sm sm:text-base overflow-hidden rounded-lg bg-transparent backdrop-blur-sm border border-white/10 p-4 sm:p-6 ${className}`}
      style={{ boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)' }}
    >
      {isRevealed ? (
        <pre 
          className="whitespace-pre overflow-x-auto text-code-blue"
          dangerouslySetInnerHTML={{ __html: formattedCode }}
        />
      ) : (
        <TypewriterText 
          text={code}
          delay={delay}
          className="whitespace-pre"
          colorClassName="text-code-blue"
          onComplete={() => setIsRevealed(true)}
        />
      )}
    </div>
  );
};

export default CodeBlock;
