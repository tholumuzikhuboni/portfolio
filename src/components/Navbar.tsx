
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Github } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-mono font-medium text-lg">Tholumuzi.dev</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <a 
          href="https://github.com/tholumuzi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2"
        >
          <Github className="h-4 w-4" />
          <span className="hidden md:inline">GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
