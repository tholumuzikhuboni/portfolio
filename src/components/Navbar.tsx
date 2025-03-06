
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Github, Sparkles } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <Code className="h-6 w-6 text-code-purple group-hover:text-code-blue transition-colors duration-300" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-code-green animate-pulse" />
            </div>
            <span className="font-mono font-medium text-lg relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-code-blue via-code-purple to-code-pink">
              Tholumuzi.dev
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-code-blue via-code-purple to-code-pink group-hover:w-full transition-all duration-700"></span>
            </span>
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
            className="bg-[#333] rounded-full h-9 w-9 flex items-center justify-center transition-all duration-300 hover:bg-[#24292e] hover:scale-105 hover:shadow-lg active:scale-95"
          >
            <Github className="h-5 w-5 text-white" />
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
