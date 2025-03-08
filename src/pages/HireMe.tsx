
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { 
  Code, 
  Laptop, 
  Server, 
  TrendingUp, 
  Cloud, 
  PenTool, 
  ChevronRight, 
  CheckCircle,
  Star,
  Sparkles,
  Heart,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const HireMe = () => {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="h-10 w-10 text-code-blue" />,
      description: "Modern, responsive websites built with the latest technologies for optimal performance and user experience.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Software Development",
      icon: <Laptop className="h-10 w-10 text-code-purple" />,
      description: "Custom software solutions tailored to your specific business needs and requirements.",
      skills: ["Full-Stack Development", "API Integration", "Database Design", "Testing & Deployment"]
    },
    {
      title: "IT Consulting",
      icon: <Server className="h-10 w-10 text-code-green" />,
      description: "Expert guidance on technology decisions to optimize your business operations and strategy.",
      skills: ["Technology Assessment", "Strategic Planning", "Process Optimization", "Security Consulting"]
    },
    {
      title: "Digital Transformation",
      icon: <TrendingUp className="h-10 w-10 text-code-pink" />,
      description: "Transform your business with innovative digital solutions that drive growth and efficiency.",
      skills: ["Process Automation", "Legacy System Modernization", "Digital Strategy", "Change Management"]
    },
    {
      title: "Google Cloud",
      icon: <Cloud className="h-10 w-10 text-code-blue" />,
      description: "Leverage the power of Google Cloud to build scalable, secure, and reliable applications.",
      skills: ["Cloud Architecture", "GCP Services", "Cloud Migration", "Serverless Computing"]
    },
    {
      title: "Brand Design",
      icon: <PenTool className="h-10 w-10 text-code-yellow" />,
      description: "Crafting visual identities that communicate your brand's unique story and values.",
      skills: ["Logo Design", "Brand Guidelines", "User Interface Design", "Visual Identity"]
    }
  ];

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
  
  // Falling animation elements
  const totalParticles = 40;
  const generateParticles = () => {
    const particles = [];
    const symbols = ['<>', '/>', '{}', '()', '[]', ';', '=', '+', '*', '&&', '||', '=>', '...'];
    
    for (let i = 0; i < totalParticles; i++) {
      const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
      const size = Math.random() * 1.5 + 0.5;
      const initialPosition = {
        x: `${Math.random() * 100}%`,
        y: `-${Math.random() * 100 + 20}%`
      };
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      
      particles.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute text-code-blue/10 font-mono pointer-events-none select-none"
          initial={{ 
            x: initialPosition.x, 
            y: initialPosition.y,
            opacity: 0.2,
            scale: size
          }}
          animate={{
            y: '120vh',
            opacity: [0.2, 0.5, 0.2],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
          }}
          style={{
            fontSize: `${size}rem`,
            color: i % 5 === 0 ? 'var(--code-blue)' : 
                   i % 5 === 1 ? 'var(--code-purple)' : 
                   i % 5 === 2 ? 'var(--code-pink)' : 
                   i % 5 === 3 ? 'var(--code-green)' : 
                   'var(--code-yellow)'
          }}
        >
          {randomSymbol}
        </motion.div>
      );
    }
    
    return particles;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 px-4 md:px-6 relative overflow-hidden">
        {/* Falling animations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {generateParticles()}
        </div>
        
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
          <div className="absolute bottom-[40%] right-[15%] w-3 h-3 rounded-full bg-code-purple animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.2s' }} />
          
          <div className="absolute top-[25%] left-[30%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6s' }}>{'<>'}</div>
          <div className="absolute bottom-[35%] right-[30%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
          <div className="absolute top-[45%] right-[20%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
          
          <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
          <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
          <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6 gradient-text">
                Ready to build something amazing?
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-full mb-6"></div>
              <p className="text-foreground/80 text-lg md:text-xl font-mono mb-8 max-w-3xl">
                I offer specialized solutions tailored to your unique needs. Let's collaborate to bring your vision to life with cutting-edge technology and innovative approaches.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button className="font-mono text-base group relative overflow-hidden bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-pink transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Get in touch
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
              
              <Button variant="outline" className="font-mono text-base group relative overflow-hidden border-code-purple/30 hover:border-code-purple/70">
                <span className="relative z-10 flex items-center gap-2">
                  View Portfolio
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-code-purple/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 transition-colors group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white group-hover:shadow-md">
                        {service.icon}
                      </div>
                      <div className="h-px w-10 bg-gradient-to-r from-transparent via-code-purple/20 to-transparent mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>
                    <CardTitle className="text-xl font-mono mt-4 text-foreground group-hover:gradient-text transition-colors duration-500">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 font-mono text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center gap-2 font-mono text-xs text-foreground/70">
                          <CheckCircle className="h-3.5 w-3.5 text-code-green flex-shrink-0" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 p-6 md:p-8 rounded-xl bg-gradient-to-r from-code-blue/5 to-code-purple/5 border border-gray-200 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-code-purple/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-code-blue/5 rounded-full blur-xl"></div>
            
            <h2 className="text-2xl font-mono font-bold mb-6 gradient-text flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-code-yellow" />
              My Development Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "01", title: "Discovery", description: "Understanding your goals, needs, and vision", icon: <Sparkles className="h-4 w-4 text-code-blue" /> },
                { number: "02", title: "Planning", description: "Mapping out the strategy and technical approach", icon: <PenTool className="h-4 w-4 text-code-purple" /> },
                { number: "03", title: "Development", description: "Building your solution with precision and care", icon: <Code className="h-4 w-4 text-code-green" /> },
                { number: "04", title: "Delivery", description: "Testing, refinement, and successful deployment", icon: <Star className="h-4 w-4 text-code-yellow" /> }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative p-6 border border-gray-200 bg-white/70 backdrop-blur-sm rounded-lg group hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute -top-3 -right-3 font-mono text-3xl font-bold text-code-purple/10 group-hover:text-code-purple/20 transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="font-mono font-bold text-foreground group-hover:text-code-purple transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm font-mono text-foreground/70">
                    {step.description}
                  </p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-code-blue to-code-purple group-hover:w-full transition-all duration-500"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Testimonials Section */}
          <motion.div 
            className="mt-16 p-6 md:p-8 rounded-xl bg-gradient-to-r from-code-green/5 to-code-blue/5 border border-gray-200 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h2 className="text-2xl font-mono font-bold mb-6 gradient-text flex items-center gap-2">
              <Heart className="h-5 w-5 text-code-pink" />
              Why Work With Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Passion", description: "I'm deeply passionate about creating exceptional software solutions that make a difference.", icon: <Heart className="h-5 w-5 text-code-pink" /> },
                { title: "Expertise", description: "With a solid foundation in software development and cloud technologies, I bring technical excellence to every project.", icon: <Star className="h-5 w-5 text-code-yellow" /> },
                { title: "Dedication", description: "I'm committed to delivering high-quality, maintainable code that meets your business objectives.", icon: <CheckCircle className="h-5 w-5 text-code-green" /> }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-code-blue/10 to-code-purple/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-mono font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 font-mono">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Final CTA */}
          <motion.div 
            className="mt-16 p-8 md:p-12 rounded-xl bg-gradient-to-r from-code-blue/10 via-code-purple/10 to-code-pink/10 border border-gray-200 shadow-sm text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-mono font-bold mb-4 gradient-text">
                Let's Create Something Extraordinary
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto mb-6 font-mono">
                Ready to start your next project? I'm here to help turn your ideas into reality with clean code and exceptional design.
              </p>
              <Link to="/contact">
                <Button size="lg" className="font-mono text-base group relative overflow-hidden bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-pink transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Start a conversation
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HireMe;
