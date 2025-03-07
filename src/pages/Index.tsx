
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PreLoader from '@/components/PreLoader';
import { Toaster } from '@/components/ui/sonner';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setLoading(false);
    }, 6000); // Increased to 6 seconds
    
    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      <Navbar />
      <HeroSection />
      <Toaster />
    </div>
  );
};

export default Index;
