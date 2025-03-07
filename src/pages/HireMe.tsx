
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Laptop, 
  Briefcase, 
  TrendingUp, 
  Cloud, 
  PenTool, 
  ChevronRight, 
  CheckCircle
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
      icon: <Briefcase className="h-10 w-10 text-code-green" />,
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

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
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
          className="mt-16 p-6 md:p-8 rounded-xl bg-gradient-to-r from-code-blue/5 to-code-purple/5 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-mono font-bold mb-4 gradient-text">My Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "01", title: "Discovery", description: "Understanding your goals, needs, and vision" },
              { number: "02", title: "Planning", description: "Mapping out the strategy and technical approach" },
              { number: "03", title: "Development", description: "Building your solution with precision and care" },
              { number: "04", title: "Delivery", description: "Testing, refinement, and successful deployment" }
            ].map((step, index) => (
              <div key={index} className="relative p-4 border border-gray-200 bg-white/70 rounded-lg group hover:shadow-md transition-all duration-300">
                <div className="absolute -top-3 -right-3 font-mono text-3xl font-bold text-code-purple/10 group-hover:text-code-purple/20 transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="font-mono font-bold text-foreground group-hover:text-code-purple transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm font-mono text-foreground/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HireMe;
