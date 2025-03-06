
import React, { useState, useEffect } from 'react';
import CodeBlock from './CodeBlock';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Code, SendHorizonal, Github, Mail, Linkedin, Instagram, Facebook, Tv } from 'lucide-react';

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
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Added more visual elements */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        
        {/* Code-like background elements */}
        <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
        <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
        <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
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
            className="flex flex-nowrap gap-4 overflow-x-auto sm:flex-wrap"
          >
            <motion.a 
              href="#projects"
              className="group bg-gradient-to-r from-code-blue to-code-purple text-white py-3 px-6 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
              whileHover={{ 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="h-5 w-5" />
              <span>View My Work</span>
              <ChevronRight className="h-4 w-4 transform transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a 
              href="#contact"
              className="group bg-transparent border border-code-purple/30 text-foreground py-3 px-6 rounded-md font-medium transition-all duration-300 hover:bg-code-purple/5 hover:border-code-purple/70 flex items-center gap-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5" />
              <span>Contact Me</span>
              <SendHorizonal className="h-4 w-4 transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          </motion.div>
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center gap-4 pt-4"
          >
            <a 
              href="https://github.com/tholumuzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-code-purple transition-colors p-2 rounded-full hover:bg-code-purple/10"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/tholumuzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[#0A66C2] transition-colors p-2 rounded-full hover:bg-[#0A66C2]/10"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com/tholumuzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[#E4405F] transition-colors p-2 rounded-full hover:bg-[#E4405F]/10"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com/tholumuzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[#1877F2] transition-colors p-2 rounded-full hover:bg-[#1877F2]/10"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://tiktok.com/@tholumuzi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-[#000000] transition-colors p-2 rounded-full hover:bg-[#000000]/10"
            >
              <Tv className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-xl mx-auto lg:mx-0 relative"
        >
          {/* Decorative elements around the code block */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-code-blue/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-code-purple/30 rounded-br-lg"></div>
          
          {isVisible && <CodeBlock code={code} className="shadow-2xl" />}
          
          {/* Additional decorative dots */}
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-code-yellow/20"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-code-green/20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
