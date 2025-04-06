
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Briefcase, Code, CalendarClock, BookOpen, Users, GraduationCap, Coffee, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 pb-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6 gradient-text">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-full mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="font-mono text-2xl font-semibold mb-4">Tholumuzi Khuboni</h2>
                <p className="font-mono text-foreground/80 mb-6">
                  I am a Software Developer who holds a higher diploma in IT (Software Development). 
                  Growing up, I was inspired by the innovations of Mark Zuckerberg. I started creating 
                  websites with drag and drop platforms but felt limited by their capabilities.
                </p>
                <p className="font-mono text-foreground/80 mb-6">
                  This led me to research about Software Development and eventually enroll for a 
                  Diploma. I am currently leading Google Cloud initiatives and my typical day includes 
                  coding, learning, networking, and reading. I regularly attend Google Developer events 
                  to stay updated with the latest trends in technology.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-code-blue/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-code-blue" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 font-mono">Current Role</p>
                      <p className="font-mono font-medium">Head of Technology</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-code-purple/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-code-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 font-mono">Education</p>
                      <p className="font-mono font-medium">Higher Diploma in IT</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-sm h-full flex flex-col">
                <h3 className="font-mono text-xl font-semibold mb-4">My Focus Areas</h3>
                <ul className="space-y-4 flex-grow">
                  {['Web Development', 'Cloud Computing', 'Software Architecture', 'Google Cloud Platform'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-gradient-to-r from-code-blue to-code-purple"></div>
                      <span className="font-mono text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-mono text-sm font-semibold text-foreground/70 mb-3">Technical Expertise</h4>
                  <div className="space-y-3">
                    {[
                      { name: "React", level: 90 },
                      { name: "Google Cloud", level: 85 },
                      { name: "TypeScript", level: 80 },
                      { name: "UI/UX Design", level: 75 }
                    ].map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-mono">{skill.name}</span>
                          <span className="text-xs font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-code-blue to-code-purple rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
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
            <h2 className="text-2xl font-mono font-bold mb-6 gradient-text text-center">
              A Day in My Life
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-xl overflow-hidden group hover:shadow-md transition-all duration-300"
                >
                  <Card className="h-full border-0 bg-transparent">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
            className="bg-gradient-to-r from-code-blue/5 to-code-purple/5 p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-code-purple/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-code-blue/5 rounded-full blur-xl -ml-10 -mb-10"></div>
            
            <h2 className="font-mono text-xl font-semibold mb-4 relative z-10">Journey and Inspiration</h2>
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
