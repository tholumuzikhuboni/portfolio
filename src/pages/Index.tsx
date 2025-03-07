
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TypewriterText from '@/components/TypewriterText';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import { ArrowRight, Code, BookOpen, PanelLeft, Bot, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import EasterEgg from '@/components/EasterEgg';

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing clean, maintainable code that follows best practices and modern standards.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Documentation",
      description: "Creating comprehensive documentation to ensure your team understands the codebase.",
    },
    {
      icon: <PanelLeft className="h-6 w-6" />,
      title: "Responsive Design",
      description: "Building applications that work flawlessly across all devices and screen sizes.",
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Content */}
      <main className="flex-grow px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <section className="py-12 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">
                  Building <span className="text-code-purple">exceptional</span> web experiences
                </span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-code-green/20 -z-10 -rotate-1"></span>
                <span className="absolute -top-2 -right-4 text-xs text-code-blue">&lt;/&gt;</span>
                <EasterEgg type="joke" position="top-right" className="absolute -top-2 -right-12" />
              </h2>
              <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto relative">
                I create modern, responsive web applications with a focus on user experience and performance.
                <EasterEgg type="fact" position="bottom-right" className="absolute -bottom-3 right-0" />
              </p>
              
              {/* Feature showcase */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative group">
                <EasterEgg type="ghost" visibleOnHover={true} position="top-left" />
                
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-500 relative overflow-hidden group",
                      activeIndex === index ? "scale-105 border-code-purple shadow-lg" : "hover:border-code-blue/50 hover:shadow"
                    )}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-code-blue/10 to-code-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className={cn(
                        "text-code-purple transition-colors duration-300",
                        activeIndex === index ? "text-code-blue" : ""
                      )}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-foreground/70">{feature.description}</p>
                    
                    <div className={cn(
                      "absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-code-blue to-code-purple scale-x-0 origin-left transition-transform duration-500",
                      activeIndex === index && "scale-x-100"
                    )}></div>
                    
                    {/* Visual elements */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-code-purple/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-code-blue/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
                
                <EasterEgg type="message" visibleOnHover={true} position="bottom-right" />
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="py-12 md:py-20 relative">
            <div className="max-w-3xl mx-auto text-center relative group">
              <EasterEgg type="coffee" position="top-left" className="absolute -top-4 -left-4" />
              
              <div className="bg-gradient-to-br from-code-blue/10 to-code-purple/10 p-8 md:p-12 rounded-xl border border-white/10 relative overflow-hidden">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Let's work together
                </h2>
                <p className="text-lg text-foreground/80 mb-8">
                  Ready to bring your ideas to life? I'm available for freelance projects and collaborations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/projects">
                    <Button variant="outline" size="lg" className="gap-2 bg-white hover:bg-gray-50 hover:text-code-purple transition-all">
                      <Bot className="h-5 w-5" />
                      <span>View Projects</span>
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" className="gap-2 bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-blue text-white">
                      <Send className="h-5 w-5" />
                      <span>Get in Touch</span>
                    </Button>
                  </Link>
                </div>
                
                {/* Visual elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-code-purple/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-code-blue/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-code-green animate-ping delay-100"></div>
                <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-code-pink animate-ping delay-300"></div>
                
                <EasterEgg type="bug" position="bottom-right" className="absolute bottom-4 right-4" />
              </div>
            </div>
          </section>
          
          {/* Typewriter section */}
          <section className="py-12 md:py-16 relative">
            <EasterEgg type="dna" position="top-right" className="absolute top-0 right-4" />
            <EasterEgg type="cat" position="bottom-left" className="absolute bottom-0 left-4" />
            
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-mono font-medium mb-6 text-code-purple">
                <TypewriterText 
                  texts={[
                    "Building the web, one line at a time.",
                    "Turning ideas into digital reality.",
                    "Code. Create. Innovate.",
                    "Crafting digital experiences.",
                  ]}
                  typingSpeed={50}
                  deletingSpeed={30}
                  delayBetweenTexts={2000}
                />
              </h3>
              <Link to="/hire-me" className="inline-flex items-center gap-2 text-code-blue hover:text-code-purple transition-colors">
                <span>Learn more about my services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <EasterEgg type="magic" position="center-right" className="mt-4 mx-auto" />
            </div>
          </section>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200 relative group">
        <EasterEgg type="music" visibleOnHover={true} position="top-right" />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Tholumuzi.dev. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-code-purple transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-500 hover:text-code-purple transition-colors">
                GitHub
              </a>
              <a href="#" className="text-gray-500 hover:text-code-purple transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
