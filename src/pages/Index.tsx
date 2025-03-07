
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PreLoader from '@/components/PreLoader';
import SocialPreviewGenerator from '@/components/SocialPreviewGenerator';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [showPreviewGenerator, setShowPreviewGenerator] = useState(false);
  
  useEffect(() => {
    const minLoadTime = setTimeout(() => {
      setLoading(false);
    }, 6000); // Increased to 6 seconds
    
    return () => clearTimeout(minLoadTime);
  }, []);

  // Function to trigger social preview generation
  const handleGeneratePreview = () => {
    setShowPreviewGenerator(true);
    // Hide after generation
    setTimeout(() => {
      setShowPreviewGenerator(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {loading && <PreLoader onComplete={() => setLoading(false)} />}
      <Navbar />
      <HeroSection />
      
      {/* Social Preview Generator - Only shown when needed */}
      {showPreviewGenerator && <SocialPreviewGenerator />}
      
      {/* Admin button to generate preview - can be removed in production */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={handleGeneratePreview}
          className="bg-black/80 text-white text-xs px-3 py-1 rounded-full opacity-50 hover:opacity-100 transition-opacity"
        >
          Generate Preview
        </button>
      </div>
    </div>
  );
};

export default Index;
