
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface FallingCodeParticlesProps {
  count?: number;
  speed?: number;
}

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

const FallingCodeParticles: React.FC<FallingCodeParticlesProps> = ({ count = 20, speed = 1 }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1000,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });
  const isMobile = useIsMobile();

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
    const particleCount = isMobile 
      ? Math.min(Math.floor(windowSize.width / 80), count / 2) // Fewer particles on mobile
      : Math.min(Math.floor(windowSize.width / 40), count); // Regular count for desktop
    
    for (let i = 0; i < particleCount; i++) {
      initialParticles.push(createParticle(windowSize.width, i, windowSize.width, particleCount));
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
            const newY = particle.y + (particle.speed * speed);
            
            // Reset particle if it's off screen
            if (newY > windowSize.height) {
              return createParticle(windowSize.width, undefined, windowSize.width, particleCount);
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
  }, [windowSize.height, windowSize.width, isMobile, count, speed]);

  const createParticle = (width: number, index?: number, totalWidth?: number, totalParticles?: number): Particle => {
    // For better distribution across the width
    let x;
    
    if (index !== undefined && totalWidth && totalParticles) {
      // Divide screen into sections and place particles more evenly
      const sectionWidth = totalWidth / totalParticles;
      x = sectionWidth * index + (Math.random() * sectionWidth * 0.8);
    } else {
      x = Math.random() * width;
    }
      
    return {
      id: Math.random(),
      x,
      y: -100 - Math.random() * 500, // Start above the screen at various positions
      size: Math.random() * (isMobile ? 10 : 12) + (isMobile ? 6 : 8), // Smaller on mobile
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
