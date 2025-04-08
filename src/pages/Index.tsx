
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PreLoader from '@/components/PreLoader';
import BackgroundEffects from '@/components/BackgroundEffects';
import FallingCodeParticles from '@/components/FallingCodeParticles';
import { Toaster } from '@/components/ui/sonner';
import { motion } from 'framer-motion';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <motion.div 
      className="min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      
      {/* Background visual elements */}
      <BackgroundEffects />
      <FallingCodeParticles />
      
      <Navbar />
      
      {/* Main content */}
      <main>
        <HeroSection />
        
        {/* Additional section with animated reveal */}
        <motion.section 
          className="py-16 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-between">
              <div className="w-full md:w-1/2 space-y-6">
                <motion.div 
                  className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="mr-2 h-2 w-2 rounded-full bg-code-green animate-pulse"></span>
                  Innovative Solutions
                </motion.div>
                
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-mono">
                  Bringing Your <span className="gradient-text">Ideas to Life</span>
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed max-w-lg font-mono">
                  From concept to deployment, I specialize in creating seamless digital experiences that combine 
                  <span className="text-code-blue"> elegant design</span> with <span className="text-code-green">powerful functionality</span>.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-code-blue mb-2 font-mono text-sm">Frontend</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-code-blue/10 text-code-blue rounded text-xs">React</span>
                      <span className="px-2 py-1 bg-code-purple/10 text-code-purple rounded text-xs">TypeScript</span>
                      <span className="px-2 py-1 bg-code-green/10 text-code-green rounded text-xs">Tailwind</span>
                    </div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-code-yellow mb-2 font-mono text-sm">Backend</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-code-yellow/10 text-code-yellow rounded text-xs">Node.js</span>
                      <span className="px-2 py-1 bg-code-pink/10 text-code-pink rounded text-xs">APIs</span>
                      <span className="px-2 py-1 bg-code-green/10 text-code-green rounded text-xs">Database</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-code-blue to-code-purple rounded-lg blur-sm opacity-75"></div>
                <div className="relative bg-white/5 backdrop-blur-md rounded-lg p-6 border border-white/10">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-code-pink"></div>
                    <div className="w-3 h-3 rounded-full bg-code-yellow"></div>
                    <div className="w-3 h-3 rounded-full bg-code-green"></div>
                  </div>
                  
                  <pre className="font-mono text-sm text-white/90 overflow-x-auto p-2">
                    <code>
                      <span className="text-code-purple">const</span> <span className="text-code-blue">developerSkills</span> = {`{`}<br/>
                      {"  "}<span className="text-code-green">creativity</span>: <span className="text-code-yellow">'unlimited'</span>,<br/>
                      {"  "}<span className="text-code-green">problemSolving</span>: <span className="text-code-yellow">'exceptional'</span>,<br/>
                      {"  "}<span className="text-code-green">passion</span>: <span className="text-code-yellow">'overflowing'</span>,<br/>
                      {"  "}<span className="text-code-green">collaboration</span>: <span className="text-code-yellow">'teamwork-oriented'</span>,<br/>
                      {`}`};<br/><br/>
                      <span className="text-code-purple">function</span> <span className="text-code-blue">createAmazingProject</span>() {`{`}<br/>
                      {"  "}<span className="text-code-pink">return</span> developerSkills.creativity + <br/>
                      {"    "}developerSkills.problemSolving;<br/>
                      {`}`}
                    </code>
                  </pre>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-code-blue/30 rounded-tr-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-code-purple/30 rounded-bl-lg"></div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Toaster />
    </motion.div>
  );
};

export default Index;
