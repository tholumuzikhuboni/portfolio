
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/10 to-transparent blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[30%] right-[15%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/15 to-transparent blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -25, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-[40%] right-[30%] w-[25vw] h-[25vw] rounded-full bg-gradient-to-tl from-code-pink/20 via-code-blue/15 to-transparent blur-[90px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, 15, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Additional gradient orbs for enhanced visuals */}
        <motion.div 
          className="absolute top-[70%] left-[25%] w-[20vw] h-[20vw] rounded-full bg-gradient-to-tr from-code-green/15 via-code-blue/10 to-transparent blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        />
      </div>
      
      {/* Grid patterns with enhanced opacity and blur */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:35px_35px] opacity-40 backdrop-blur-[1px]"></div>
      
      {/* Floating code symbols with enhanced animation */}
      <motion.div 
        className="hidden md:block absolute left-[5%] top-[15%] text-code-green/15 font-mono text-7xl"
        animate={{
          y: [0, -15, 0],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >&#123;</motion.div>
      
      <motion.div 
        className="hidden md:block absolute right-[8%] bottom-[20%] text-code-purple/15 font-mono text-8xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >&#125;</motion.div>
      
      <motion.div 
        className="hidden md:block absolute right-[15%] top-[25%] text-code-blue/15 font-mono text-6xl"
        animate={{
          y: [0, -10, 0],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 3, 0]
        }}
        transition={{
          duration: 9, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >&lt;/&gt;</motion.div>
      
      <motion.div 
        className="hidden md:block absolute left-[12%] bottom-[30%] text-code-pink/15 font-mono text-6xl"
        animate={{
          y: [0, -12, 0],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 11, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >( )</motion.div>
      
      {/* Enhanced sparkles with varying sizes and animations */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div 
          key={`sparkle-${i}`}
          className="absolute rounded-full bg-white/50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
      
      {/* Horizontal light beams */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-code-blue/20 to-transparent opacity-70"></div>
      <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-code-purple/20 to-transparent opacity-50"></div>
      <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-code-pink/20 to-transparent opacity-30"></div>
      
      {/* Vertical light beams */}
      <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-code-green/20 to-transparent opacity-30"></div>
      <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-code-yellow/20 to-transparent opacity-40"></div>
    </div>
  );
};

export default BackgroundEffects;
