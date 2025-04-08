
import React, { useState, useEffect } from 'react';
import CodeBlock from './CodeBlock';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Code, Sparkles, Layers, Terminal, Zap, Cpu, Globe, Star, CloudLightning } from 'lucide-react';

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

  const floatingIcons = [
    { icon: <Code className="h-5 w-5" />, delay: 0, position: "top-[15%] left-[10%]", color: "text-code-blue" },
    { icon: <Cpu className="h-5 w-5" />, delay: 1.2, position: "top-[25%] right-[12%]", color: "text-code-purple" },
    { icon: <Zap className="h-5 w-5" />, delay: 0.5, position: "bottom-[20%] left-[15%]", color: "text-code-yellow" },
    { icon: <Star className="h-5 w-5" />, delay: 0.8, position: "bottom-[30%] right-[18%]", color: "text-code-green" },
    { icon: <Globe className="h-5 w-5" />, delay: 1.5, position: "top-[45%] right-[25%]", color: "text-code-pink" },
    { icon: <CloudLightning className="h-5 w-5" />, delay: 2, position: "bottom-[40%] left-[25%]", color: "text-code-purple" },
  ];

  return (
    <section className="min-h-screen pt-16 pb-16 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Enhanced visual elements */}
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated sparkles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div 
            key={`sparkle-${i}`}
            className="absolute rounded-full bg-white/60"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
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
        
        {/* Animated beams */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-code-blue/30 to-transparent transform -translate-y-1/2"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-code-purple/30 to-transparent transform -translate-y-1/2"></div>
        <div className="absolute left-1/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-code-green/30 to-transparent transform -translate-x-1/2"></div>
        <div className="absolute left-2/3 top-0 h-full w-px bg-gradient-to-b from-transparent via-code-yellow/30 to-transparent transform -translate-x-1/2"></div>
        
        {/* Floating code symbols with enhanced animation */}
        <div className="absolute top-[25%] left-[30%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
        
        <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
        <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
        <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
      </div>
      
      {/* Floating tech icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={`icon-${index}`}
          className={`absolute ${item.position} ${item.color} bg-white/5 backdrop-blur-sm p-2 rounded-full border border-white/10 shadow-lg hidden md:flex`}
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay
          }}
        >
          {item.icon}
        </motion.div>
      ))}
      
      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 lg:col-span-2"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-3"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary border border-primary/20">
              <span className="mr-2 h-2 w-2 rounded-full bg-code-green animate-pulse"></span>
              <Terminal className="h-3 w-3 mr-1" /> Available for hire <Sparkles className="h-3 w-3 ml-1 text-code-yellow" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-mono mt-3">
              <span className="block">Hello, I'm</span>
              <span className="gradient-text mt-2 block relative">
                Tholumuzi
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
          
          {/* Skill pills */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2"
          >
            {['React', 'TypeScript', 'UI/UX', 'Node.js', 'Fullstack'].map((skill, i) => (
              <motion.div 
                key={skill}
                className="px-3 py-1 rounded-full text-sm bg-white/5 backdrop-blur-sm border border-white/10 font-mono"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + (i * 0.1) }}
              >
                {skill}
              </motion.div>
            ))}
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
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/tholumuzikhuboni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0A66C2] hover:bg-[#004182] text-white rounded-full p-2 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/tholumuzikhuboni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#E4405F] to-[#C13584] hover:from-[#D93B57] hover:to-[#B52F7C] text-white rounded-full p-2 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </motion.a>
            <motion.a 
              href="https://www.facebook.com/profile.php?id=61560262494384" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1877F2] hover:bg-[#0E5FCF] text-white rounded-full p-2 transition-all hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10"
              whileHover={{ y: -3, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full lg:col-span-3 relative"
        >
          {/* Animated glowing border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-xl blur opacity-30 animate-pulse"></div>
          
          {/* Corner decorations */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-code-blue/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-code-purple/30 rounded-br-lg"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-code-green/30 rounded-tr-lg"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-code-yellow/30 rounded-bl-lg"></div>
          
          {/* File tab */}
          <div className="absolute -top-6 right-6 bg-code-green/10 p-1 rounded text-xs font-mono text-code-green border border-code-green/20 animate-float" style={{ animation: 'float 3s ease-in-out infinite' }}>
            <Layers className="h-3 w-3 inline mr-1" />
            developer.tsx
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
          
          {/* Light beams */}
          <motion.div 
            className="absolute -top-5 left-1/3 h-16 w-6"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-code-blue/40 to-transparent rounded-t-full"></div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-5 right-1/3 h-16 w-6"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="w-full h-full bg-gradient-to-t from-code-purple/40 to-transparent rounded-b-full"></div>
          </motion.div>
          
          {/* Additional decorative elements */}
          <motion.div 
            className="absolute top-1/2 -right-3 h-24 w-1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="w-full h-full bg-gradient-to-b from-code-pink/30 via-code-yellow/30 to-transparent"></div>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 -left-3 h-24 w-1"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <div className="w-full h-full bg-gradient-to-t from-code-green/30 via-code-blue/30 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
