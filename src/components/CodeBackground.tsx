
import React, { useEffect, useRef } from 'react';

interface CodeParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  text: string;
}

const CodeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Code-related symbols and words
    const codeTokens = [
      'const', 'let', 'var', '()', '=>', '{}', '[]', 'function',
      'return', 'if', 'else', 'for', 'while', 'import', 'export',
      'class', 'interface', '<>', '/>', 'async', 'await', 'promise',
      'react', 'component', 'useState', 'useEffect', 'render',
      '0', '1', '+', '-', '*', '/', '&&', '||', '===', '!==',
      'true', 'false', 'null', 'undefined', 'this', 'super',
      '#', ':', ';', '.', ',', '`', '"', "'"
    ];
    
    // Create code particles
    const particles: CodeParticle[] = [];
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
    
    const codeColors = [
      '#61dafb', // React blue
      '#c678dd', // Purple
      '#98c379', // Green
      '#e5c07b', // Yellow
      '#e06c75', // Pink
      '#56b6c2'  // Cyan
    ];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 12 + 10,
        color: codeColors[Math.floor(Math.random() * codeColors.length)],
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        text: codeTokens[Math.floor(Math.random() * codeTokens.length)]
      });
    }
    
    // Animation loop
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach(particle => {
        ctx.font = `${particle.size}px JetBrains Mono, monospace`;
        ctx.fillStyle = particle.color + '40'; // Add transparency
        ctx.fillText(particle.text, particle.x, particle.y);
        
        // Update positions
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Boundary checks with wrapping
        if (particle.x < -100) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 100) particle.x = -50;
        if (particle.y < -100) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 100) particle.y = -50;
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    // Add mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      particles.forEach(particle => {
        // Calculate distance between mouse and particle
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply force if within range
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 500;
          
          particle.vx -= Math.cos(angle) * force;
          particle.vy -= Math.sin(angle) * force;
        }
      });
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-auto -z-10 opacity-10"
    />
  );
};

export default CodeBackground;
