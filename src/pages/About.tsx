
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  GraduationCap, 
  Code, 
  BrainCircuit, 
  Github, 
  Linkedin, 
  Award, 
  Star, 
  Sparkles,
  CloudSun,
  BookOpen,
  Coffee,
  Lightbulb,
  Users
} from 'lucide-react';
import Navbar from '../components/Navbar';
import { useIsMobile } from '../hooks/use-mobile';

// Timeline item component
const TimelineItem = ({ 
  year, 
  title, 
  description, 
  icon: Icon, 
  iconColor 
}: { 
  year: string, 
  title: string, 
  description: string, 
  icon: React.ElementType, 
  iconColor: string 
}) => (
  <div className="relative pl-12 py-6 group">
    {/* Connecting line */}
    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-code-blue/30 via-code-purple/30 to-code-pink/30 group-hover:from-code-blue group-hover:via-code-purple group-hover:to-code-pink transition-colors duration-300"></div>
    
    {/* Icon bubble */}
    <div className={`absolute left-0 top-6 w-8 h-8 rounded-full flex items-center justify-center ${iconColor} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-4 h-4 text-white" />
    </div>
    
    {/* Content */}
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm font-mono text-code-purple">{year}</span>
        <h3 className="text-lg font-semibold font-mono gradient-text">{title}</h3>
      </div>
      <p className="text-sm font-mono text-foreground/70 leading-relaxed">{description}</p>
      
      {/* Decorative element */}
      <div className="absolute -right-2 top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-1 h-1 rounded-full bg-code-blue animate-ping"></div>
      </div>
    </div>
  </div>
);

// Activity card component
const ActivityCard = ({ 
  title, 
  icon: Icon, 
  color 
}: { 
  title: string, 
  icon: React.ElementType, 
  color: string 
}) => (
  <div className={`p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-${color}/10 hover:border-${color}/30 transition-all group`}>
    <div className="flex items-center gap-3">
      <div className={`p-2 rounded-full bg-${color}/10 group-hover:bg-${color}/20 transition-colors`}>
        <Icon className={`w-5 h-5 text-${color}`} />
      </div>
      <span className="font-mono text-sm">{title}</span>
    </div>
  </div>
);

const About = () => {
  // Refs for animated elements
  const codeBlockRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Setup floating code particles
  useEffect(() => {
    if (!codeBlockRef.current) return;
    
    const codeSymbols = ['{}', '()', '[]', '=>', ';;', '//'];
    const container = codeBlockRef.current;
    
    // Create floating code symbols
    for (let i = 0; i < 15; i++) {
      const symbol = document.createElement('div');
      symbol.className = 'absolute text-xs font-mono text-code-blue/20 animate-float';
      symbol.style.animationDuration = `${3 + Math.random() * 4}s`;
      symbol.style.left = `${Math.random() * 100}%`;
      symbol.style.top = `${Math.random() * 100}%`;
      symbol.innerText = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
      container.appendChild(symbol);
    }
    
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 px-4 md:px-6 max-w-6xl mx-auto relative">
        {/* Background decorations */}
        <div ref={codeBlockRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-code-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-code-blue/5 rounded-full filter blur-3xl"></div>
        
        {/* Header section */}
        <section className="relative mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:text-left text-center max-w-3xl mx-auto md:mx-0"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-mono">
              About Me
            </h1>
            <div className="relative inline-block mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-code-blue via-code-purple to-code-pink p-1">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-code-purple" />
                </div>
              </div>
              {/* Decorative orbit */}
              <div className="absolute inset-0 rounded-full border border-dashed border-code-blue/30 animate-spin-slow"></div>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed font-mono md:text-left text-center">
              Passionate software developer with a love for building innovative applications
              and constantly exploring new technologies. My journey began with simple drag-and-drop
              platforms and evolved into full-stack development and cloud technologies.
            </p>
          </motion.div>
        </section>
        
        {/* Journey section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8 inline-flex items-center font-mono">
              <span className="mr-3 gradient-text">My Journey</span>
              <div className="h-px flex-1 w-20 bg-gradient-to-r from-code-blue to-transparent"></div>
            </h2>
            
            <div className="space-y-2">
              <TimelineItem 
                year="High School" 
                title="Tech Inspiration" 
                description="Developed a passion for technology in high school. Inspired by innovators like Mark Zuckerberg, I became fascinated with the idea of creating digital experiences that could connect people."
                icon={Lightbulb}
                iconColor="bg-code-yellow"
              />
              
              <TimelineItem 
                year="Early Start" 
                title="First Steps" 
                description="Started building websites and apps using drag-and-drop platforms. While I enjoyed creating digital products, I quickly felt limited by what these platforms allowed me to do."
                icon={Code}
                iconColor="bg-code-blue"
              />
              
              <TimelineItem 
                year="Education" 
                title="Software Development" 
                description="Pursued formal education in software development to overcome limitations. Learned programming fundamentals, data structures, algorithms, and full-stack development techniques."
                icon={GraduationCap}
                iconColor="bg-code-purple"
              />
              
              <TimelineItem 
                year="Cloud Computing" 
                title="AWS & Google Cloud" 
                description="Expanded my knowledge into cloud platforms, mastering both AWS and Google Cloud technologies to build scalable, resilient applications that can handle modern requirements."
                icon={CloudSun}
                iconColor="bg-code-green"
              />
              
              <TimelineItem 
                year="Present" 
                title="Continuous Growth" 
                description="Regularly attend Google Developer Events to stay updated with emerging trends. Connect with other developers on GitHub and LinkedIn while continuously learning and improving my skillset."
                icon={BrainCircuit}
                iconColor="bg-code-pink"
              />
            </div>
          </motion.div>
        </section>
        
        {/* Daily routine section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8 inline-flex items-center font-mono">
              <span className="mr-3 gradient-text">A Day in My Life</span>
              <div className="h-px flex-1 w-20 bg-gradient-to-r from-code-blue to-transparent"></div>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <ActivityCard title="Coding Sessions" icon={Code} color="code-blue" />
              <ActivityCard title="Relaxation Time" icon={Coffee} color="code-yellow" />
              <ActivityCard title="Learning Technologies" icon={BookOpen} color="code-purple" />
              <ActivityCard title="Research & Reading" icon={Lightbulb} color="code-green" />
              <ActivityCard title="Collaboration" icon={Users} color="code-pink" />
              <ActivityCard title="Problem Solving" icon={BrainCircuit} color="code-red" />
            </div>
          </motion.div>
        </section>
        
        {/* Connect section with github and linkedin only */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-wrap gap-6 md:justify-start justify-center">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-code-blue/20 hover:bg-code-blue/10 hover:border-code-blue/40 transition-all group font-mono"
              >
                <Github className="w-5 h-5 text-code-blue group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-code-purple/20 hover:bg-code-purple/10 hover:border-code-purple/40 transition-all group font-mono"
              >
                <Linkedin className="w-5 h-5 text-code-purple group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </section>
        
        {/* Philosophy section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/5 rounded-lg p-6 md:p-8 border border-white/10 backdrop-blur-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-code-purple/10 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-code-blue/10 rounded-full filter blur-3xl -z-10"></div>
            
            <h2 className="text-2xl font-bold mb-6 gradient-text font-mono">My Philosophy</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-3 font-mono text-code-blue">Forever Learning</h3>
                <p className="text-foreground/70 font-mono">
                  The tech world evolves constantly, and I believe in staying curious 
                  and continuously expanding my knowledge. Every day presents new 
                  opportunities to learn something valuable.
                </p>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-medium mb-3 font-mono text-code-purple">Building Without Limits</h3>
                <p className="text-foreground/70 font-mono">
                  I'm passionate about creating solutions without restrictions. My journey 
                  from drag-and-drop platforms to full-stack development has shown me the 
                  power of having the skills to build exactly what I envision.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Skills section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-2xl font-bold mb-8 inline-flex items-center font-mono">
              <span className="mr-3 gradient-text">Skills & Expertise</span>
              <div className="h-px flex-1 w-20 bg-gradient-to-r from-code-blue to-transparent"></div>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-lg border border-white/10 hover:border-code-blue/30 transition-all flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-code-blue/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-code-blue" />
                </div>
                <span className="font-mono text-sm mb-1">Web Development</span>
                <div className="w-16 h-1 bg-gradient-to-r from-code-blue to-transparent rounded-full"></div>
              </div>
              
              <div className="p-4 rounded-lg border border-white/10 hover:border-code-purple/30 transition-all flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-code-purple/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <CloudSun className="w-6 h-6 text-code-purple" />
                </div>
                <span className="font-mono text-sm mb-1">Cloud Computing</span>
                <div className="w-16 h-1 bg-gradient-to-r from-code-purple to-transparent rounded-full"></div>
              </div>
              
              <div className="p-4 rounded-lg border border-white/10 hover:border-code-green/30 transition-all flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-code-green/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-code-green" />
                </div>
                <span className="font-mono text-sm mb-1">Collaboration</span>
                <div className="w-16 h-1 bg-gradient-to-r from-code-green to-transparent rounded-full"></div>
              </div>
              
              <div className="p-4 rounded-lg border border-white/10 hover:border-code-pink/30 transition-all flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-code-pink/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6 text-code-pink" />
                </div>
                <span className="font-mono text-sm mb-1">Problem Solving</span>
                <div className="w-16 h-1 bg-gradient-to-r from-code-pink to-transparent rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default About;

