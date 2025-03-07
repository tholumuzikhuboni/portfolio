
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Zap, Atom, Stars, Terminal, Rocket } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface PreLoaderProps {
  onComplete: () => void;
}

const PreLoader: React.FC<PreLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onComplete();
            }, 500);
            return 100;
          }
          // Increase speed based on whether this is a page transition
          const increment = window.location.pathname !== '/' ? 5 : 1.8; 
          return prev + increment;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  // Get loading message based on current page
  const getLoadingMessage = () => {
    const path = window.location.pathname;
    if (path === '/') return 'Loading portfolio...';
    if (path === '/projects') return 'Loading projects...';
    if (path === '/contact') return 'Establishing connection...';
    return 'Loading content...';
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-4 sm:px-0"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Enhanced background elements with faster animations for transitions */}
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }} />
        
        {/* Animated particles */}
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`preloader-particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white/40 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 1}s`
            }}
          />
        ))}
        
        {/* Enhanced decorative elements */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.3s' }} />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink animate-ping" style={{ animationDuration: '2.2s', animationDelay: '0.4s' }} />
        
        {/* Additional floating elements */}
        <div className="absolute top-[15%] right-[15%] w-2 h-2 rounded-full bg-code-red animate-ping" style={{ animationDuration: '2s', animationDelay: '0.2s' }} />
        <div className="absolute bottom-[20%] right-[20%] w-3 h-3 rounded-full bg-code-purple animate-ping" style={{ animationDuration: '2.1s', animationDelay: '0.6s' }} />
        
        {/* Code symbols */}
        <div className="absolute top-[25%] left-[30%] text-code-green/30 font-mono text-xl animate-float" style={{ animationDuration: '4s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/30 font-mono text-xl animate-float" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/30 font-mono text-xl animate-float" style={{ animationDuration: '5s', animationDelay: '1s' }}>{'{ }'}</div>
        <div className="absolute top-[30%] left-[60%] text-code-yellow/30 font-mono text-xl animate-float" style={{ animationDuration: '3.5s', animationDelay: '0.2s' }}>{'()'}</div>
        <div className="absolute bottom-[25%] left-[20%] text-code-pink/30 font-mono text-xl animate-float" style={{ animationDuration: '4.2s', animationDelay: '0.7s' }}>{'[]'}</div>
      </div>
      
      <div className="relative flex flex-col items-center max-w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          {/* Text logo with rotating icon based on current page */}
          <span className="block text-center font-mono font-medium text-2xl sm:text-3xl md:text-4xl gradient-text mb-2">
            Tholumuzi.dev
          </span>
          
          {/* Page-specific animated icon */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 -z-10"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.2, rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            {window.location.pathname === '/' && <Terminal size={80} />}
            {window.location.pathname === '/projects' && <Code size={80} />}
            {window.location.pathname === '/contact' && <Rocket size={80} />}
            {!['/', '/projects', '/contact'].includes(window.location.pathname) && <Zap size={80} />}
          </motion.div>
          
          {/* Floating background icons */}
          <div className="absolute -z-10 opacity-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <Code className="absolute top-0 left-1/4 h-6 w-6 text-code-purple animate-float" style={{ animationDuration: '3s' }} />
            <Sparkles className="absolute bottom-0 right-1/4 h-5 w-5 text-code-green animate-float" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }} />
            <Stars className="absolute top-1/2 left-3/4 h-5 w-5 text-code-yellow animate-float" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
            <Zap className="absolute bottom-1/2 right-[10%] h-5 w-5 text-code-pink animate-float" style={{ animationDuration: '3.2s', animationDelay: '0.8s' }} />
          </div>
        </motion.div>
        
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md space-y-2">
          <Progress value={progress} className="h-2 bg-white/10 backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-code-blue via-code-purple to-code-pink" style={{ width: `${progress}%` }} />
          </Progress>
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-code-blue">{getLoadingMessage()}</span>
            <span className="text-code-purple">{progress.toFixed(0)}%</span>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 text-xs md:text-sm font-mono text-foreground/70 bg-white/5 backdrop-blur-sm rounded-md px-3 sm:px-4 py-2 border border-white/10">
          <span className="text-code-green">$</span> initializing<span className="animate-pulse">_</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PreLoader;
