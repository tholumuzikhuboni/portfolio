
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Code, X, Menu, Sparkles } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('home');
  const isMobile = useIsMobile();
  
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

  useEffect(() => {
    // Set active link based on the current path
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/projects') {
      setActiveLink('projects');
    } else if (path === '/hire-me') {
      setActiveLink('hire-me');
    } else if (path === '/contact') {
      setActiveLink('contact');
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Hire Me', path: '/hire-me', id: 'hire-me' },
    { name: 'Contact', path: '/contact', id: 'contact' }
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
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <Code className="h-6 w-6 text-code-purple group-hover:text-code-blue transition-colors duration-300" />
              <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-code-green animate-pulse" />
            </div>
            <span className="font-mono font-medium text-lg relative overflow-hidden bg-clip-text text-transparent bg-gradient-to-r from-code-blue via-code-purple to-code-pink">
              Tholumuzi.dev
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-code-blue via-code-purple to-code-pink group-hover:w-full transition-all duration-700"></span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="relative text-sm font-medium font-mono text-foreground/80 hover:text-foreground transition-colors duration-200 group"
                onClick={() => setActiveLink(item.id)}
              >
                <div className="relative z-10 overflow-hidden">
                  <span className="relative z-10">
                    {item.name}
                  </span>
                  <div className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-code-blue via-code-purple to-code-pink transition-all duration-300 group-hover:w-full",
                    activeLink === item.id && "w-full"
                  )}></div>
                </div>
                
                {/* Visual elements */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-code-blue scale-0 group-hover:scale-100 transition-all duration-300"></div>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-code-purple scale-0 group-hover:scale-100 transition-all duration-300"></div>
                
                {/* Particle effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
                  <div className="absolute -top-2 left-1/4 w-0.5 h-0.5 rounded-full bg-code-green opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute -top-3 left-1/2 w-0.5 h-0.5 rounded-full bg-code-yellow opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute -top-2 left-3/4 w-0.5 h-0.5 rounded-full bg-code-pink opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.4s' }}></div>
                </div>
                
                {/* Highlight glow */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-code-blue/0 via-code-purple/5 to-code-pink/0 opacity-0 rounded-md -z-10 blur-md transition-opacity duration-300 group-hover:opacity-100",
                  activeLink === item.id && "opacity-50"
                )}></div>
              </Link>
            ))}
          </nav>
          
          <button 
            onClick={toggleMenu}
            className="bg-gradient-to-r from-code-blue to-code-purple rounded-full h-9 w-9 flex items-center justify-center transition-all duration-300 hover:opacity-90 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group md:hidden"
            aria-label="Toggle navigation menu"
          >
            <div className="relative z-10 transition-all duration-300">
              {menuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </div>
            <div className="absolute inset-0 bg-white/20 scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></div>
            <div className="absolute -inset-px rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation Menu with enhanced visuals */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg py-4 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name} 
                  to={item.path}
                  className="flex items-center gap-3 py-3 px-4 rounded-md text-sm font-medium font-mono text-foreground/80 hover:text-foreground relative overflow-hidden group transition-colors duration-200"
                  onClick={() => {
                    setActiveLink(item.id);
                    setMenuOpen(false);
                  }}
                >
                  {/* Visual container */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-code-blue/10 to-code-purple/10 relative overflow-hidden">
                    <span className="absolute w-1.5 h-1.5 rounded-full bg-code-pink -top-0.5 right-1 animate-pulse"></span>
                    <span className="absolute w-1 h-1 rounded-full bg-code-blue bottom-1 left-0.5 animate-pulse delay-300"></span>
                    
                    {/* Animated brackets */}
                    <span className="text-xs text-code-purple/70 font-mono">{`{ }`}</span>
                  </div>
                  
                  <span className="relative">
                    {item.name}
                    <span className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-code-blue to-code-pink transition-all duration-300 group-hover:w-full",
                      activeLink === item.id && "w-full"
                    )}></span>
                  </span>
                  
                  {/* Background hover effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-code-blue/0 via-code-purple/5 to-code-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </Link>
              ))}
            </nav>
            
            {/* Visual decorations */}
            <div className="absolute bottom-5 left-10 w-20 h-20 rounded-full bg-code-blue/5 blur-xl"></div>
            <div className="absolute top-10 right-10 w-16 h-16 rounded-full bg-code-purple/5 blur-xl"></div>
            <div className="absolute bottom-10 right-20 h-px w-10 bg-gradient-to-r from-transparent via-code-green/30 to-transparent"></div>
            <div className="absolute top-16 left-14 h-px w-6 bg-gradient-to-r from-transparent via-code-pink/30 to-transparent"></div>
          </div>
        )}

        {/* Added visual highlights */}
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-12 w-24 h-24 rounded-full bg-code-blue/5 blur-xl"></div>
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-12 w-24 h-24 rounded-full bg-code-purple/5 blur-xl"></div>
        <div className="hidden md:block absolute top-5 left-1/4 h-px w-10 bg-gradient-to-r from-transparent via-code-green/20 to-transparent"></div>
        <div className="hidden md:block absolute bottom-2 right-1/3 h-px w-16 bg-gradient-to-r from-transparent via-code-pink/20 to-transparent"></div>
      </div>
    </header>
  );
};

export default Navbar;
