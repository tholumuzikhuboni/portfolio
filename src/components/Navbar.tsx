
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Code, Menu, Sparkles, Home, User, Briefcase, FolderCode, Mail } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: 'Home', icon: <Home className="h-4 w-4" />, href: '#home' },
    { name: 'About', icon: <User className="h-4 w-4" />, href: '#about' },
    { name: 'Skills', icon: <Briefcase className="h-4 w-4" />, href: '#skills' },
    { name: 'Projects', icon: <FolderCode className="h-4 w-4" />, href: '#projects' },
    { name: 'Contact', icon: <Mail className="h-4 w-4" />, href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 backdrop-blur-sm bg-white/80 shadow-nav",
        scrolled && "py-3 shadow-md"
      )}
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
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="relative text-sm font-medium font-mono text-foreground/80 hover:text-foreground transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="relative z-10 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all group-hover:after:w-full">
                  {item.name}
                </span>
              </a>
            ))}
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="bg-gradient-to-r from-code-blue to-code-purple rounded-full h-9 w-9 flex items-center justify-center transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg py-4 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="flex items-center gap-3 py-3 px-4 rounded-md text-sm font-medium font-mono text-foreground/80 hover:text-foreground hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-code-blue/10 to-code-purple/10">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
            
            {/* Visual decorations */}
            <div className="absolute bottom-5 left-10 w-20 h-20 rounded-full bg-code-blue/5 blur-xl"></div>
            <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-code-purple/5 blur-xl"></div>
          </div>
        )}

        {/* Added visual highlights */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12 w-24 h-24 rounded-full bg-code-blue/5 blur-xl"></div>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-12 w-24 h-24 rounded-full bg-code-purple/5 blur-xl"></div>
      </div>
    </header>
  );
};

export default Navbar;
