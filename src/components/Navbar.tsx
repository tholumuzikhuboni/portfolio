
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/hire-me', label: 'Hire Me' },
    { path: '/contact', label: 'Contact' },
  ];

  const navbarClasses = cn(
    "fixed top-0 w-full z-50 transition-all duration-300 py-3 md:py-4 px-4 md:px-6",
    isScrolled ? "bg-white/80 shadow-nav backdrop-blur-sm" : "bg-transparent"
  );

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold font-mono text-foreground">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center"
          >
            <span className="text-xl font-bold gradient-text">dev</span>
            <span className="text-foreground">Portfolio</span>
          </motion.div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "relative px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors",
                      isActive
                        ? "text-code-purple"
                        : "text-foreground/70 hover:text-foreground"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-code-purple rounded-full"
                          layoutId="navbar-indicator"
                          transition={{ 
                            type: "spring", 
                            stiffness: 500, 
                            damping: 30 
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <Button 
            asChild
            variant="outline" 
            size="sm"
            className="ml-2 font-mono text-xs border-code-purple text-code-purple hover:bg-code-purple/10"
          >
            <NavLink to="/contact">
              Get in Touch
            </NavLink>
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <motion.div
          className={`absolute top-full left-0 right-0 bg-white shadow-md ${isMenuOpen ? 'block' : 'hidden'}`}
          initial={false}
          animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col p-4 space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-2 rounded-md text-sm font-medium font-mono transition-colors",
                      isActive
                        ? "bg-code-purple/10 text-code-purple"
                        : "text-foreground/70 hover:bg-gray-100"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 mt-2 bg-code-purple/10 text-code-purple rounded-md text-sm font-medium font-mono"
              >
                Get in Touch
              </NavLink>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
