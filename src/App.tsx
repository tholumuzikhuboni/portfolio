
import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import HireMe from "./pages/HireMe";
import NotFound from "./pages/NotFound";
import PreLoader from "./components/PreLoader";

const queryClient = new QueryClient();

// Page transition wrapper component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  
  // Reset loading state on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Shorter loading time for page transitions
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      <div style={{ display: loading ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
};

// Falling code particles component - improved distribution
const FallingCodeParticles = () => {
  const totalParticles = 30;
  const particles = [];
  const symbols = ['<>', '/>', '{}', '()', '[]', ';', '=', '+', '*', '&&', '||', '=>', '...'];
  
  for (let i = 0; i < totalParticles; i++) {
    // Distribute more evenly across the width (x position)
    const xPosition = `${5 + (i % 10) * 9 + (Math.random() * 5)}%`;
    
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    const size = Math.random() * 1.5 + 0.5;
    const initialPosition = {
      x: xPosition,
      y: `-${Math.random() * 100 + 20}%`
    };
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particles.push(
      <motion.div
        key={`particle-${i}`}
        className="absolute text-code-blue/10 font-mono pointer-events-none select-none"
        initial={{ 
          x: initialPosition.x, 
          y: initialPosition.y,
          opacity: 0.2,
          scale: size
        }}
        animate={{
          y: '120vh',
          opacity: [0.2, 0.5, 0.2],
          rotate: Math.random() * 360
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "linear"
        }}
        style={{
          fontSize: `${size}rem`,
          color: i % 5 === 0 ? 'var(--code-blue)' : 
                 i % 5 === 1 ? 'var(--code-purple)' : 
                 i % 5 === 2 ? 'var(--code-pink)' : 
                 i % 5 === 3 ? 'var(--code-green)' : 
                 'var(--code-yellow)',
          opacity: 0.1
        }}
      >
        {randomSymbol}
      </motion.div>
    );
  }
  
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <FallingCodeParticles />
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <Index />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <Projects />
            </PageTransition>
          } />
          <Route path="/hire-me" element={
            <PageTransition>
              <HireMe />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
