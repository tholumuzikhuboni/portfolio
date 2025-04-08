
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PreLoader from '@/components/PreLoader';
import { Toaster } from '@/components/ui/sonner';
import FallingCodeParticles from '@/components/FallingCodeParticles';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setLoading(false);
    }, 5000);
    
    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      <Navbar />
      <HeroSection />
      <Toaster />
      
      {/* Add subtle animated code particles in the background */}
      <div className="fixed inset-0 -z-10 opacity-30 pointer-events-none">
        <FallingCodeParticles count={30} speed={1.5} />
      </div>
    </div>
  );
};

export default Index;
