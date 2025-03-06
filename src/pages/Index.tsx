import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PreLoader from '@/components/PreLoader';

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setLoading(false);
    }, 2000);
    
    return () => clearTimeout(minLoadTime);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
