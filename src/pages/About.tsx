
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
  Grid3X3
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 px-4 md:px-6 bg-gradient-to-b from-background to-background/90">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center md:text-left"
          >
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-4 gradient-text inline-block">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-full mb-8 mx-auto md:mx-0"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-code-blue/10 to-code-purple/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
                  <Avatar className="h-24 w-24 border-2 border-code-blue/20 shadow-lg">
                    <AvatarImage src="/IMG_20250303_105526_891.webp" alt="Tholumuzi Khuboni" />
                    <AvatarFallback className="bg-code-blue/10 text-xl font-bold">TK</AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center md:text-left">
                    <h2 className="font-mono text-2xl font-semibold mb-2 gradient-text inline-block">Tholumuzi Khuboni</h2>
                    <p className="text-foreground/70 font-mono text-sm">Software Developer &amp; Cloud Enthusiast</p>
                  </div>
                </div>
                
                <p className="font-mono text-foreground/80 mb-6 relative z-10">
                  I am a Software Developer who holds a higher diploma in IT (Software Development). 
                  Growing up, I was inspired by the innovations of Mark Zuckerberg. I started creating 
                  websites with drag and drop platforms but felt limited by their capabilities.
                </p>
                <p className="font-mono text-foreground/80 mb-6 relative z-10">
                  This led me to research about Software Development and eventually enroll for a 
                  Diploma. I am currently leading Google Cloud initiatives and my typical day includes 
                  coding, learning, networking, and reading. I regularly attend Google Developer events 
                  to stay updated with the latest trends in technology.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <motion.div 
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-code-blue/5 to-code-blue/10 hover:from-code-blue/10 hover:to-code-blue/20 transition-colors duration-300"
                    whileHover={{ y: -5 }}
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
                    whileHover={{ y: -5 }}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <h3 className="font-mono text-xl font-semibold mb-6 gradient-text inline-block">My Focus Areas</h3>
                <ul className="space-y-4 flex-grow">
                  {focusAreas.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100/50 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="h-8 w-8 rounded-md bg-gradient-to-br from-white to-gray-100 shadow-sm flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="font-mono text-foreground/80">{item.name}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-mono text-sm font-semibold text-foreground/70 mb-5 gradient-text inline-block">Technical Expertise</h4>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-mono font-medium">{skill.name}</span>
                          <span className="text-xs font-mono font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color}/70 rounded-full`}
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
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-16"
          >
            <h2 className="text-2xl font-mono font-bold mb-8 gradient-text text-center">
              A Day in My Life
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { type: "spring", stiffness: 400 } }}
                  className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <Card className="h-full border-0 bg-transparent overflow-hidden">
                    <CardContent className="p-6 relative">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100/50 to-transparent rounded-full blur-xl -mr-5 -mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="flex flex-col items-center text-center">
                        <div className="h-14 w-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                          {activity.icon}
                        </div>
                        <h3 className="font-mono font-semibold text-lg mb-2">{activity.text}</h3>
                        <p className="text-sm text-foreground/70 font-mono">{activity.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-r from-code-blue/5 to-code-purple/5 p-6 md:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-code-purple/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-code-blue/5 rounded-full blur-xl -ml-10 -mb-10"></div>
            
            <h2 className="font-mono text-xl font-semibold mb-4 relative z-10 gradient-text inline-block">Journey and Inspiration</h2>
            <p className="font-mono text-foreground/80 mb-4 relative z-10">
              My journey in software development started with simple drag-and-drop website builders,
              but I quickly became fascinated with understanding the code behind these platforms.
              Inspired by innovators like Mark Zuckerberg, I pursued formal education in software
              development to deepen my knowledge.
            </p>
            <p className="font-mono text-foreground/80 relative z-10">
              Today, I'm passionate about Google Cloud technologies and helping others discover
              the endless possibilities in software development. I believe in continuous learning
              and sharing knowledge through community events and collaborations.
            </p>
            
            <div className="mt-8 flex items-center justify-center gap-1 text-sm font-mono text-foreground/60">
              <span>Built with</span>
              <Heart className="h-3 w-3 text-code-pink" />
              <span>using React & TypeScript</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
