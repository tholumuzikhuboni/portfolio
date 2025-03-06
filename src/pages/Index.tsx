
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CodeBackground from '@/components/CodeBackground';
import SpotifyPlayer from '@/components/SpotifyPlayer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <CodeBackground />
      <Navbar />
      <HeroSection />
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-mono gradient-text inline-block">
              My Playlist
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w-md mx-auto">
              Check out my favorite tracks that keep me coding through the day and night
            </p>
          </div>
          
          <SpotifyPlayer playlistId="3rcJKHRgUR6Jaaptcr0KrB" />
        </div>
      </section>
    </div>
  );
};

export default Index;
