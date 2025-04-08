import React, { useState, useEffect } from 'react';
import CodeBlock from './CodeBlock';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Code, SendHorizonal, Github, Mail, Linkedin, Instagram, Facebook, Sparkles, Search, Layers, Terminal, ArrowRight } from 'lucide-react';

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
    "Software Development",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen pt-24 pb-16 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        <div className="absolute bottom-[40%] right-[15%] w-3 h-3 rounded-full bg-code-purple animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.2s' }} />
        
        <div className="absolute top-[25%] left-[30%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
        
        <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
        <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
        <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
        
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-code-blue/20 to-transparent transform -translate-y-1/2"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-code-purple/20 to-transparent transform -translate-y-1/2"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-2"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary border border-primary/20">
              <span className="mr-2 h-2 w-2 rounded-full bg-code-green animate-pulse"></span>
              <Terminal className="h-3 w-3 mr-1" /> Available for hire <Sparkles className="h-3 w-3 ml-1 text-code-yellow" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-mono">
              <span className="block">Hello, I'm</span>
              <span className="gradient-text mt-2 block relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Tholumuzi Khuboni
                <span className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-code-blue to-code-purple rounded-full"></span>
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl font-mono"
          >
            I craft <span className="text-code-green">elegant</span>, <span className="text-code-blue">user-friendly</span> web applications with <span className="text-code-purple">clean code</span> and <span className="text-code-yellow">exceptional attention to detail</span>. 
            Let's build something <span className="gradient-text font-bold">extraordinary</span> together.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 flex-nowrap overflow-x-auto sm:flex-wrap"
          >
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/projects"
                className="group bg-gradient-to-r from-code-blue to-code-purple text-white py-4 px-8 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center gap-2 whitespace-nowrap text-base sm:text-lg"
              >
                <Search className="h-5 w-5" />
                <span className="font-mono">View My Work</span>
                <motion.span
                  initial={{ x: 0, opacity: 0.5 }}
                  animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-4"
          >
            <motion.a 
              href="https://github.com/tholumuzikhuboni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#333] hover:bg-[#24292E] text-white rounded-full p-2 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/tholumuzikhuboni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full p-2 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/tholumuzikhuboni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#E4405F] to-[#C13584] hover:from-[#D93B57] hover:to-[#B52F7C] text-white rounded-full p-2 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <Instagram className="h-5 w-5" />
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/profile.php?id=61560262494384" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:bg-[#0E5FCF] text-white rounded-full p-2 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <Facebook className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-xl mx-auto lg:mx-0 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-xl blur opacity-30 animate-pulse"></div>
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-code-blue/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-code-purple/30 rounded-br-lg"></div>
          
          <div className="absolute -top-6 right-6 bg-code-green/10 p-1 rounded text-xs font-mono text-code-green border border-code-green/20 animate-float" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <Layers className="h-3 w-3 inline mr-1" />
            code.tsx
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {isVisible && 
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CodeBlock code={code} className="shadow-2xl" />
              </motion.div>
            }
          </motion.div>
          
          <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-code-yellow/20"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-code-green/20"></div>
          <div className="absolute bottom-10 -right-4 w-3 h-3 rounded-full bg-code-blue/20"></div>
          <div className="absolute top-10 -left-4 w-3 h-3 rounded-full bg-code-purple/20"></div>
          
          <motion.div 
            className="absolute -top-3 left-1/3 h-12 w-4"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-code-blue/40 to-transparent rounded-t-full"></div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-3 right-1/3 h-12 w-4"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="w-full h-full bg-gradient-to-t from-code-purple/40 to-transparent rounded-b-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
