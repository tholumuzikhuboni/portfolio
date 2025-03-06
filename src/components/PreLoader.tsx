
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, Zap, Atom, Stars } from 'lucide-react';
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
          return prev + 1.8; // Adjusted to complete in ~5.5 seconds (plus 0.5s for final animation)
        });
      }, 100);
      
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-4 sm:px-0"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Additional decorative elements */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        
        {/* Additional floating elements */}
        <div className="absolute top-[15%] right-[15%] w-2 h-2 rounded-full bg-code-red animate-ping" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }} />
        <div className="absolute bottom-[20%] right-[20%] w-3 h-3 rounded-full bg-code-purple animate-ping" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }} />
        
        {/* Code symbols */}
        <div className="absolute top-[25%] left-[30%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
        <div className="absolute top-[30%] left-[60%] text-code-yellow/20 font-mono text-xl animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>{'()'}</div>
        <div className="absolute bottom-[25%] left-[20%] text-code-pink/20 font-mono text-xl animate-float" style={{ animationDuration: '7.5s', animationDelay: '1.5s' }}>{'[]'}</div>
      </div>
      
      <div className="relative flex flex-col items-center max-w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-2">
            <div className="absolute inset-0 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-full opacity-20 animate-pulse"></div>
            <motion.div 
              className="absolute inset-2 border-2 border-code-blue/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute inset-4 border-2 border-code-purple/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative flex items-center justify-center">
              <Code className="h-8 w-8 sm:h-10 sm:w-10 text-code-purple" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 text-code-green animate-pulse" />
              <Stars className="absolute -bottom-1 -left-1 h-3 w-3 sm:h-4 sm:w-4 text-code-yellow animate-pulse" style={{ animationDelay: '0.5s' }} />
              <Atom className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 sm:h-14 sm:w-14 text-code-blue/10 animate-spin" style={{ animationDuration: '15s' }} />
            </div>
          </div>
          
          <span className="block text-center font-mono font-medium text-lg sm:text-xl md:text-2xl gradient-text">
            Tholumuzi.dev
          </span>
        </motion.div>
        
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md space-y-2">
          <Progress value={progress} className="h-2 bg-white/10 backdrop-blur-sm">
            <div className="h-full bg-gradient-to-r from-code-blue via-code-purple to-code-pink" style={{ width: `${progress}%` }} />
          </Progress>
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-code-blue">Loading assets...</span>
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
