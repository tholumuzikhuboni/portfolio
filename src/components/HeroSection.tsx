
import React, { useState, useEffect } from 'react';
import CodeBlock from './CodeBlock';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const code = `const tholumuzi = {
  role: "Software Developer",
  education: "Higher Diploma in IT (Software Development)",
  passions: [
    "Web Development",
    "UI/UX Design",
    "Clean Code"
  ],
  currentlyLearning: [
    "Advanced React Patterns",
    "Fullstack Development"
  ],
  askMeAbout: [
    "Software Dev",
    "Tech",
    "UI/UX"
  ]
};`;

  return (
    <section className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/10 via-code-purple/10 to-code-pink/10 blur-3xl" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/10 via-code-green/10 to-code-blue/10 blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center rounded-full bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <span className="mr-2 h-2 w-2 rounded-full bg-code-green animate-pulse"></span>
              Available for hire
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="block">Hello, I'm</span>
              <span className="gradient-text mt-2 block">Tholumuzi Khuboni</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl"
          >
            I craft elegant, user-friendly web applications with clean code and exceptional attention to detail. 
            Let's build something extraordinary together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]">
              View My Work
            </button>
            <button className="bg-transparent border border-primary/20 text-primary py-3 px-6 rounded-md font-medium transition-all hover:bg-primary/5">
              Contact Me
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-xl mx-auto lg:mx-0"
        >
          {isVisible && <CodeBlock code={code} className="shadow-2xl" />}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
