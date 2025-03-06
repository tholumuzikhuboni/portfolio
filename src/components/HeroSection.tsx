
import React, { useState, useEffect } from 'react';
import CodeBlock from './CodeBlock';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Code, SendHorizonal, Github, Mail, Linkedin, Instagram, Facebook, Tv, Terminal, Sparkles, Search, Layers } from 'lucide-react';

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
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* More visual elements */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        <div className="absolute bottom-[40%] right-[15%] w-3 h-3 rounded-full bg-code-purple animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.2s' }} />
        
        {/* Added floating coding symbols */}
        <div className="absolute top-[25%] left-[30%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
        
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
            <div className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary border border-primary/20">
              <span className="mr-2 h-2 w-2 rounded-full bg-code-green animate-pulse"></span>
              <Terminal className="h-3 w-3 mr-1" /> Available for hire <Sparkles className="h-3 w-3 ml-1 text-code-yellow" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-mono">
              <span className="block">Hello, I'm</span>
              <span className="gradient-text mt-2 block relative">
                Tholumuzi Khuboni
                <span className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-code-blue to-code-purple rounded-full"></span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl font-mono"
          >
            I craft <span className="text-code-green">elegant</span>, <span className="text-code-blue">user-friendly</span> web applications with <span className="text-code-purple">clean code</span> and <span className="text-code-yellow">exceptional attention to detail</span>. 
            Let's build something <span className="gradient-text font-bold">extraordinary</span> together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 flex-nowrap overflow-x-auto sm:flex-wrap"
          >
            <motion.a 
              href="#projects"
              className="group bg-gradient-to-r from-code-blue to-code-purple text-white py-2.5 px-5 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap"
              whileHover={{ 
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Search className="h-4 w-4" />
              <span className="font-mono">View My Work</span>
            </motion.a>
            <motion.a 
              href="#contact"
              className="group bg-transparent border border-code-purple/30 text-foreground py-2.5 px-5 rounded-md font-medium transition-all duration-300 hover:bg-code-purple/5 hover:border-code-purple/70 flex items-center gap-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-4 w-4" />
              <span className="font-mono">Contact Me</span>
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

          {/* Added skills indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-3 pt-2 flex-wrap"
          >
            <div className="px-3 py-1 rounded-full bg-code-blue/10 text-code-blue text-xs font-mono border border-code-blue/20">React</div>
            <div className="px-3 py-1 rounded-full bg-code-green/10 text-code-green text-xs font-mono border border-code-green/20">TypeScript</div>
            <div className="px-3 py-1 rounded-full bg-code-purple/10 text-code-purple text-xs font-mono border border-code-purple/20">UI/UX</div>
            <div className="px-3 py-1 rounded-full bg-code-yellow/10 text-code-yellow text-xs font-mono border border-code-yellow/20">Node.js</div>
            <div className="px-3 py-1 rounded-full bg-code-pink/10 text-code-pink text-xs font-mono border border-code-pink/20">Tailwind</div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-xl mx-auto lg:mx-0 relative"
        >
          {/* Enhanced decorative elements around the code block */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-code-blue/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-code-purple/30 rounded-br-lg"></div>
          
          {/* Added floating decorator */}
          <div className="absolute -top-6 right-6 bg-code-green/10 p-1 rounded text-xs font-mono text-code-green border border-code-green/20 animate-float">
            <Layers className="h-3 w-3 inline mr-1" />
            code.tsx
          </div>
          
          {isVisible && <CodeBlock code={code} className="shadow-2xl" />}
          
          {/* Additional decorative dots */}
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-code-yellow/20"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-code-green/20"></div>
          <div className="absolute bottom-10 -right-4 w-3 h-3 rounded-full bg-code-blue/20"></div>
          <div className="absolute top-10 -left-4 w-3 h-3 rounded-full bg-code-purple/20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
