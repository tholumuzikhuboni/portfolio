
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { 
  Briefcase, 
  Code, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Coffee, 
  Heart,
  CloudLightning, 
  Layers, 
  Grid3X3,
  Award,
  Sparkles,
  Star,
  CheckCircle2
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const isMobile = useIsMobile();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const activities = [
    { 
      icon: <Code className="h-5 w-5 text-code-blue" />, 
      text: "Coding", 
      description: "Building innovative web applications and software solutions" 
    },
    { 
      icon: <BookOpen className="h-5 w-5 text-code-green" />, 
      text: "Learning", 
      description: "Continuously expanding my knowledge in cloud computing and development" 
    },
    { 
      icon: <Users className="h-5 w-5 text-code-purple" />, 
      text: "Networking", 
      description: "Connecting with other professionals in the tech industry" 
    },
    { 
      icon: <Coffee className="h-5 w-5 text-code-yellow" />, 
      text: "Reading", 
      description: "Staying updated with the latest tech articles and documentation" 
    }
  ];

  const skills = [
    { name: "React", level: 90, color: "code-blue" },
    { name: "Google Cloud", level: 85, color: "code-purple" },
    { name: "TypeScript", level: 80, color: "code-pink" },
    { name: "UI/UX Design", level: 75, color: "code-green" }
  ];

  const focusAreas = [
    { name: 'Web Development', icon: <Layers className="h-4 w-4 text-code-blue" /> },
    { name: 'Cloud Computing', icon: <CloudLightning className="h-4 w-4 text-code-purple" /> },
    { name: 'Software Architecture', icon: <Grid3X3 className="h-4 w-4 text-code-pink" /> },
    { name: 'Google Cloud Platform', icon: <Code className="h-4 w-4 text-code-green" /> }
  ];

  const achievements = [
    "Led Google Cloud initiatives spanning multiple projects",
    "Developed and launched responsive web applications",
    "Mentored junior developers in modern web technologies",
    "Participated in Google Developer events as a speaker"
  ];

  return (
    <ScrollArea className="h-screen">
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 overflow-x-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 z-[-1] overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-code-blue/10 filter blur-[120px]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-code-purple/10 filter blur-[120px]"></div>
          <div className="absolute top-2/3 right-1/4 w-64 h-64 rounded-full bg-code-pink/10 filter blur-[80px]"></div>
          
          {/* Additional visual elements */}
          <div className="absolute top-20 right-20 w-12 h-12 rounded-full bg-code-yellow/20 animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-8 h-8 rounded-full bg-code-green/20 animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 right-10 w-10 h-10 rounded-full bg-code-pink/20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-left"
          >
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4 gradient-text">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-full mb-8"></div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="relative"
                  >
                    <Avatar className="h-32 w-32 border-2 border-code-blue/20 shadow-lg">
                      <AvatarImage src="/IMG_20250303_105526_891.webp" alt="Tholumuzi Khuboni" />
                      <AvatarFallback className="bg-code-blue/10 text-2xl font-bold">TK</AvatarFallback>
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-code-blue to-code-purple rounded-full flex items-center justify-center">
                        <Sparkles className="h-3 w-3 text-white" />
                      </span>
                    </Avatar>
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 rounded-full blur-xl animate-pulse"></div>
                  </motion.div>
                </div>
                
                <div className="text-left flex-1">
                  <h2 className="font-mono text-2xl md:text-3xl font-semibold mb-2 gradient-text">Tholumuzi Khuboni</h2>
                  <p className="text-foreground/70 font-mono text-sm mb-4">Software Developer &amp; Cloud Enthusiast</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-code-blue/10 text-code-blue">
                      <Code size={12} /> React
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-code-purple/10 text-code-purple">
                      <CloudLightning size={12} /> Google Cloud
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-code-pink/10 text-code-pink">
                      <Layers size={12} /> TypeScript
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-code-green/10 text-code-green">
                      <Star size={12} /> UI/UX
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-code-blue/5 to-code-blue/10 hover:from-code-blue/10 hover:to-code-blue/20 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-code-blue/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-code-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 font-mono">Current Role</p>
                        <p className="font-mono font-medium">Head of Technology</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-code-purple/5 to-code-purple/10 hover:from-code-purple/10 hover:to-code-purple/20 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-code-purple/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-5 w-5 text-code-purple" />
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60 font-mono">Education</p>
                        <p className="font-mono font-medium">Higher Diploma in IT</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 max-w-3xl">
                <p className="font-mono text-foreground/80 text-left">
                  I am a Software Developer who holds a higher diploma in IT (Software Development). 
                  Growing up, I was inspired by the innovations of Mark Zuckerberg. I started creating 
                  websites with drag and drop platforms but felt limited by their capabilities.
                </p>
                <p className="font-mono text-foreground/80 text-left">
                  This led me to research about Software Development and eventually enroll for a 
                  Diploma. I am currently leading Google Cloud initiatives and my typical day includes 
                  coding, learning, networking, and reading. I regularly attend Google Developer events 
                  to stay updated with the latest trends in technology.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills and Focus Areas Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-mono font-bold mb-8 gradient-text text-left">
              Technical Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-mono text-xl font-semibold mb-4 text-foreground/90">Focus Areas</h3>
                <div className="space-y-4">
                  {focusAreas.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-10 w-10 rounded-md bg-gradient-to-br from-white/5 to-white/10 shadow-sm flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="font-mono text-foreground/80">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="font-mono text-xl font-semibold mb-4 text-foreground/90">Skill Levels</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-mono font-medium">{skill.name}</span>
                        <span className="text-sm font-mono font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200/20 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements Section - NEW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-mono font-bold mb-8 gradient-text text-left">
              Key Achievements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-code-green" />
                  </div>
                  <p className="font-mono text-foreground/80">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Daily Activities Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h2 className="text-2xl font-mono font-bold mb-8 gradient-text text-left">
              A Day in My Life
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { type: "spring", stiffness: 400 } }}
                  className="flex items-start gap-4 p-4 border-l-2 border-white/10 bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all duration-300"
                >
                  <div className="h-12 w-12 bg-gradient-to-br from-gray-50/5 to-gray-100/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-lg mb-2">{activity.text}</h3>
                    <p className="text-sm text-foreground/70 font-mono">{activity.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-code-purple/5 rounded-full blur-2xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-code-blue/5 rounded-full blur-xl -z-10"></div>
            
            <h2 className="font-mono text-xl font-semibold mb-6 gradient-text text-left">Journey and Inspiration</h2>
            <div className="md:flex items-start gap-8">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <p className="font-mono text-foreground/80 mb-4 text-left">
                  My journey in software development started with simple drag-and-drop website builders,
                  but I quickly became fascinated with understanding the code behind these platforms.
                  Inspired by innovators like Mark Zuckerberg, I pursued formal education in software
                  development to deepen my knowledge.
                </p>
                <p className="font-mono text-foreground/80 text-left">
                  Today, I'm passionate about Google Cloud technologies and helping others discover
                  the endless possibilities in software development. I believe in continuous learning
                  and sharing knowledge through community events and collaborations.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-start">
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 flex items-center justify-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center">
                      <Award className="h-12 w-12 md:h-16 md:w-16 text-code-purple" />
                    </div>
                  </div>
                  <motion.div 
                    className="absolute -z-10 inset-0 bg-gradient-to-br from-code-blue/10 via-code-purple/10 to-code-pink/10 rounded-full blur-xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>
              </div>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-1 text-sm font-mono text-foreground/60">
              <span>Built with</span>
              <Heart className="h-3 w-3 text-code-pink" />
              <span>using React & TypeScript</span>
            </div>
          </motion.div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default About;
