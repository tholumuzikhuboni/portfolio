
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Github, Linkedin, Instagram, Facebook, Tv, Terminal, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 backdrop-blur-sm bg-white/80 shadow-nav"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Code className="h-6 w-6 text-primary" />
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-code-green rounded-full animate-ping"></span>
            </div>
            <span className="font-mono font-medium text-lg">Tholumuzi.dev</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative text-sm font-medium font-mono text-foreground/80 hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <a 
            href="https://github.com/tholumuzi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium font-mono transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
        
        {/* Social media icons bar */}
        <div className="flex items-center justify-center gap-6 py-1">
          <a 
            href="https://github.com/tholumuzi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform duration-200"
          >
            <Github className="h-4 w-4" />
          </a>
          <a 
            href="https://linkedin.com/in/tholumuzi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#0A66C2] transition-colors hover:scale-110 transform duration-200"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a 
            href="https://instagram.com/tholumuzi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#E4405F] transition-colors hover:scale-110 transform duration-200"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a 
            href="https://facebook.com/tholumuzi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#1877F2] transition-colors hover:scale-110 transform duration-200"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a 
            href="https://tiktok.com/@tholumuzi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-[#000000] transition-colors hover:scale-110 transform duration-200"
          >
            <Tv className="h-4 w-4" />
          </a>
        </div>

        {/* Added visual highlights */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12 w-24 h-24 rounded-full bg-code-blue/5 blur-xl"></div>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-12 w-24 h-24 rounded-full bg-code-purple/5 blur-xl"></div>
      </div>
    </header>
  );
};

export default Navbar;
