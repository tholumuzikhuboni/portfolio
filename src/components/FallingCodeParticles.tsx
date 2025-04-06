
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  content: string;
  color: string;
}

const codeSnippets = [
  '{', '}', '()', '=>', ';', '++', '--', '&&', '||',
  'if', 'for', 'let', 'const', 'var', '===', '<>', '!=',
  '[]', '.map', '.then', 'async', 'await', 'import', 'export',
  'function', 'return', 'class', '<>', '</>', 'useState', 'useEffect'
];

const colors = [
  'var(--code-blue)',
  'var(--code-purple)',
  'var(--code-pink)',
  'var(--code-green)',
  'var(--code-yellow)'
];

const FallingCodeParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Generate initial particles
    const initialParticles: Particle[] = [];
    const particleCount = Math.min(Math.floor(windowSize.width / 40), 30); // Responsive count
    
    for (let i = 0; i < particleCount; i++) {
      initialParticles.push(createParticle(windowSize.width, i));
    }
    
    setParticles(initialParticles);
    
    // Animation frame for moving particles
    let animationFrameId: number;
    let lastTime = 0;
    
    const animate = (time: number) => {
      // Throttle updates to improve performance
      if (time - lastTime > 50) { // Update every 50ms
        lastTime = time;
        
        setParticles(prevParticles => 
          prevParticles.map(particle => {
            // Move particle down
            const newY = particle.y + particle.speed;
            
            // Reset particle if it's off screen
            if (newY > windowSize.height) {
              return createParticle(windowSize.width);
            }
            
            return {
              ...particle,
              y: newY
            };
          })
        );
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [windowSize.height, windowSize.width]);

  const createParticle = (width: number, index?: number): Particle => {
    // Distribute particles evenly across the width initially if index is provided
    const x = index !== undefined 
      ? (width / Math.min(Math.floor(width / 40), 30)) * index + Math.random() * 20
      : Math.random() * width;
      
    return {
      id: Math.random(),
      x,
      y: -100 - Math.random() * 500, // Start above the screen at various positions
      size: Math.random() * 12 + 8,
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      content: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: particle.opacity }}
          style={{
            position: 'absolute',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            color: particle.color,
            fontSize: `${particle.size}px`,
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 'bold',
            textShadow: '0 0 5px rgba(0,0,0,0.1)',
            zIndex: 0,
            userSelect: 'none'
          }}
        >
          {particle.content}
        </motion.div>
      ))}
    </div>
  );
};

export default FallingCodeParticles;
