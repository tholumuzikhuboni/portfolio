
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/10 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[30%] right-[15%] w-[25vw] h-[25vw] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/10 to-transparent blur-[80px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-[40%] right-[30%] w-[20vw] h-[20vw] rounded-full bg-gradient-to-tl from-code-pink/15 via-code-blue/10 to-transparent blur-[70px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
      
      {/* Grid patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      
      {/* Floating code symbols */}
      <div className="hidden md:block absolute left-[5%] top-[15%] text-code-green/10 font-mono text-6xl animate-float" style={{ animationDuration: '8s' }}>&#123;</div>
      <div className="hidden md:block absolute right-[8%] bottom-[20%] text-code-purple/10 font-mono text-7xl animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>&#125;</div>
      <div className="hidden md:block absolute right-[15%] top-[25%] text-code-blue/10 font-mono text-5xl animate-float" style={{ animationDuration: '9s', animationDelay: '0.5s' }}>&lt;/&gt;</div>
      <div className="hidden md:block absolute left-[12%] bottom-[30%] text-code-pink/10 font-mono text-5xl animate-float" style={{ animationDuration: '11s', animationDelay: '1.5s' }}>( )</div>
      
      {/* Sparkles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2,
            animation: `ping ${2 + Math.random() * 3}s cubic-bezier(0, 0, 0.2, 1) infinite ${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundEffects;
