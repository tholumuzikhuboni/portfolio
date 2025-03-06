
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CodePlayground from '@/components/CodePlayground';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      <section className="py-20 px-6 bg-gradient-to-b from-background to-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono gradient-text">Interactive Code Playground</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Try out some JavaScript code directly in your browser. Edit the code and click Run to see the results!
            </p>
          </div>
          
          <CodePlayground />
        </div>
      </section>
    </div>
  );
};

export default Index;
