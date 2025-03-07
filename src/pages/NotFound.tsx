
import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Search, Home, Sparkles } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showConsole, setShowConsole] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Terminal simulation effect
    const lines = [
      "> Searching for route...",
      `> ERROR: Cannot find "${location.pathname}"`,
      "> Running diagnostics...",
      "> Checking code repositories...",
      "> Initiating recovery protocol...",
      "> Recovery failed: Path not found",
      "> Suggestion: Navigate to homepage",
    ];

    const timer = setTimeout(() => {
      setShowConsole(true);
    }, 1000);

    let lineIndex = 0;
    const terminalTimer = setInterval(() => {
      if (lineIndex < lines.length) {
        setTerminalLines((prev) => [...prev, lines[lineIndex]]);
        lineIndex++;
      } else {
        clearInterval(terminalTimer);
      }
    }, 600);

    // Add countdown and redirect to home after 30 seconds
    const redirectTimer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(redirectTimer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(terminalTimer);
      clearInterval(redirectTimer);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      <Navbar />
      
      {/* Background elements similar to the home page */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        
        <div className="absolute top-[25%] left-[30%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
        
        <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
        <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
        <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto text-center space-y-6 px-4 py-12 md:py-0">
          {/* The 404 error code with animated appearance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h1 className="text-7xl md:text-9xl font-bold font-mono gradient-text mb-2 relative inline-block">
              404
              <div className="absolute -top-6 -right-6 animate-ping" style={{ animationDuration: '3s' }}>
                <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-code-yellow" />
              </div>
              <div className="absolute -bottom-2 -left-2 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <Sparkles className="h-4 w-4 md:h-6 md:w-6 text-code-green" />
              </div>
            </h1>
          </motion.div>

          {/* Lost in Code message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-3 md:mb-4 flex items-center justify-center gap-2 md:gap-3">
              <span className="text-foreground">Lost in</span>
              <span className="relative">
                <span className="gradient-text">Code</span>
                <span className="absolute -top-3 right-0 text-code-green text-xs animate-ping" style={{ animationDuration: '2s' }}>404</span>
              </span>
              <span className="text-foreground">?</span>
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 font-mono">
              The page you're looking for seems to have wandered into unknown territory.
            </p>
          </motion.div>

          {/* Animated console/terminal with white background matching home page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showConsole ? 1 : 0, y: showConsole ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/90 rounded-lg p-3 md:p-4 font-mono text-left text-sm max-w-2xl mx-auto border border-code-green/30 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-2 border-b border-code-green/20 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-600 text-xs ml-2">terminal @ tholumuzi.dev</span>
            </div>
            
            <div className="text-gray-800 space-y-1 h-[220px] sm:h-[200px] md:h-[200px] overflow-y-auto">
              {terminalLines.map((line, index) => (
                <TypewriterText
                  key={index}
                  text={line}
                  delay={20}
                  colorClassName={
                    line.includes("ERROR") 
                      ? "text-code-pink" 
                      : line.includes("Suggestion") 
                        ? "text-code-green" 
                        : "text-gray-700"
                  }
                />
              ))}
              {terminalLines.length === 7 && (
                <div className="pt-2 flex flex-col md:flex-row md:flex-wrap gap-2">
                  <div className="flex items-center">
                    <span className="text-code-purple">root@tholumuzi:~$</span>
                    <TypewriterText 
                      text=" redirect --to home" 
                      delay={40}
                      colorClassName="text-code-blue"
                    />
                  </div>
                  <div className="mt-2 text-gray-800 animate-pulse">
                    Redirecting to home in {countdown} seconds...
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Code elements for decoration */}
          <div className="absolute -bottom-12 -right-12 text-6xl text-code-purple/10 font-mono hidden md:block">&#125;</div>
          <div className="absolute -top-12 -left-12 text-6xl text-code-green/10 font-mono hidden md:block">&#123;</div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
