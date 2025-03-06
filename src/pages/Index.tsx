
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CodePlayground from '@/components/CodePlayground';
import CodeBlock from '@/components/CodeBlock';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      
      <section className="py-20 px-6 bg-gradient-to-b from-background to-zinc-100 relative">
        {/* Background code element */}
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
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono gradient-text">Interactive Code Playground</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Write, edit, and execute JavaScript code directly in your browser. 
              Try out your ideas instantly and see the results in real-time!
            </p>
          </div>
          
          <CodePlayground />
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              Tip: The playground supports standard JavaScript features. 
              Try experimenting with loops, functions, and DOM manipulation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
