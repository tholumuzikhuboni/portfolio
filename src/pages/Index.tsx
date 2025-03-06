
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CodeBlock from '@/components/CodeBlock';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      <section className="py-20 px-6 bg-gradient-to-b from-background to-zinc-100 relative">
        {/* Background code elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute -left-20 top-10 transform -rotate-12">
            <CodeBlock 
              code={`function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();`} 
              className="text-[10px] sm:text-xs" 
            />
          </div>
          <div className="absolute right-10 bottom-10 transform rotate-6">
            <CodeBlock 
              code={`const particles = [];
for (let i = 0; i < 100; i++) {
  const p = new Particle();
  p.position.set(
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
    Math.random() * 2 - 1
  );
  particles.push(p);
}`} 
              className="text-[10px] sm:text-xs" 
            />
          </div>
          <div className="absolute left-1/3 top-1/2 transform rotate-3">
            <CodeBlock 
              code={`export const createAnimation = (element) => {
  gsap.to(element, {
    y: -20,
    duration: 1,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });
}`} 
              className="text-[10px] sm:text-xs" 
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono gradient-text">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate software developer who loves creating beautiful and functional web applications.
              My journey in coding started with a fascination for problem-solving and has evolved into crafting
              intuitive digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: "Frontend Development",
                description: "Building responsive and accessible user interfaces with React, Angular, and Vue.",
                icon: "</>"
              },
              {
                title: "Backend Solutions",
                description: "Creating robust APIs and server architectures with Node.js, Express, and MongoDB.",
                icon: "{}"
              },
              {
                title: "UI/UX Design",
                description: "Designing intuitive user experiences with attention to detail and aesthetics.",
                icon: "🎨"
              }
            ].map((item, index) => (
              <div key={index} className="backdrop-blur-md bg-white/5 rounded-xl overflow-hidden border border-white/10 shadow-xl p-6 relative group hover:bg-white/10 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-code-blue/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-code-purple/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="bg-gradient-to-r from-code-blue/20 to-code-purple/20 inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 font-mono text-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 font-mono">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-code-blue to-code-purple group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-block relative">
              <span className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-code-blue to-code-purple text-white font-mono font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer">
                View My Projects
                <div className="absolute inset-0 rounded-lg bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </span>
              
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-code-yellow/20"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-code-green/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
