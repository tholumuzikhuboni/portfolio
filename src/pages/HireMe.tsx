
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Calendar, MessagesSquare, Code, FileText, Link2, Settings, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import EasterEgg from '@/components/EasterEgg';

const HireMe = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications tailored to your specific needs and goals.",
      icon: <Code className="h-6 w-6" />,
      features: [
        "Responsive Design",
        "Frontend & Backend Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Development & Integration"
      ]
    },
    {
      title: "Web Design",
      description: "User-focused designs that blend aesthetics with functionality for optimal user experience.",
      icon: <FileText className="h-6 w-6" />,
      features: [
        "UI/UX Design",
        "Wireframing & Prototyping",
        "Mobile-First Design",
        "Design Systems",
        "Interactive Experiences"
      ]
    },
    {
      title: "Technical Consulting",
      description: "Strategic guidance on technology choices, architecture, and implementation.",
      icon: <Settings className="h-6 w-6" />,
      features: [
        "Technology Stack Selection",
        "Performance Optimization",
        "Security Audits",
        "Code Reviews",
        "Technical Documentation"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20 relative">
        <div className="text-center mb-12 max-w-2xl mx-auto relative">
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            Hire <span className="text-code-purple">Me</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-code-green/20 -z-10 rotate-1"></span>
            <EasterEgg type="ghost" position="top-right" className="absolute -top-4 -right-4" />
          </h1>
          <p className="text-lg text-muted-foreground">
            I help businesses and individuals bring their digital ideas to life with clean, efficient, and beautiful code.
          </p>
        </div>
        
        {/* Services Section */}
        <section className="mb-20 relative group">
          <EasterEgg type="fact" visibleOnHover={true} position="top-left" />
          
          <h2 className="text-2xl font-bold mb-8 text-center">Services I Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:border-code-purple/30 hover:shadow-md transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-code-blue/10 to-code-purple/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-code-purple group-hover:text-code-blue transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-code-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                {index === 0 && <EasterEgg type="joke" position="bottom-right" className="absolute bottom-4 right-4" />}
                {index === 1 && <EasterEgg type="music" position="bottom-right" className="absolute bottom-4 right-4" />}
                {index === 2 && <EasterEgg type="bug" position="bottom-right" className="absolute bottom-4 right-4" />}
              </Card>
            ))}
          </div>
          
          <EasterEgg type="message" visibleOnHover={true} position="bottom-right" />
        </section>
        
        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center relative inline-block">
            My Process
            <span className="absolute -bottom-1 left-0 w-full h-2 bg-code-blue/20 -z-10 -rotate-1"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-code-blue/10 to-code-purple/10 rounded-full flex items-center justify-center mb-4">
                <MessagesSquare className="h-6 w-6 text-code-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Consultation</h3>
              <p className="text-muted-foreground text-sm">
                We'll discuss your goals, requirements, timeline, and budget to ensure we're aligned on expectations.
              </p>
              <EasterEgg type="coffee" position="bottom-right" className="absolute bottom-0 right-0" />
              
              <div className="hidden md:block absolute top-1/2 right-[-30px] w-[60px] h-[2px] bg-gradient-to-r from-code-purple to-transparent transform -translate-y-1/2 z-10"></div>
            </div>
            
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-code-blue/10 to-code-purple/10 rounded-full flex items-center justify-center mb-4">
                <Link2 className="h-6 w-6 text-code-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Planning & Design</h3>
              <p className="text-muted-foreground text-sm">
                I'll create wireframes, mockups, and project plans to map out the development process and design.
              </p>
              <EasterEgg type="cat" position="bottom-right" className="absolute bottom-0 right-0" />
              
              <div className="hidden md:block absolute top-1/2 right-[-30px] w-[60px] h-[2px] bg-gradient-to-r from-code-purple to-transparent transform -translate-y-1/2 z-10"></div>
            </div>
            
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-code-blue/10 to-code-purple/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-code-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Development & Launch</h3>
              <p className="text-muted-foreground text-sm">
                I'll build your project with regular updates and revisions, then help you launch it successfully.
              </p>
              <EasterEgg type="dna" position="bottom-right" className="absolute bottom-0 right-0" />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="text-center relative group">
          <EasterEgg type="magic" visibleOnHover={true} position="top-left" />
          
          <div className="bg-gradient-to-br from-code-blue/10 to-code-purple/10 p-8 md:p-12 rounded-xl border border-white/10 relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
            <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life. Reach out to schedule a consultation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-blue text-white">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule a Call</span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="gap-2 bg-white hover:bg-gray-50">
                <ArrowRight className="h-5 w-5" />
                <span>View My Portfolio</span>
              </Button>
            </div>
            
            {/* Visual elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-code-purple/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-code-blue/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <EasterEgg type="joke" position="bottom-right" className="absolute bottom-4 right-4" />
          </div>
          
          <EasterEgg type="ghost" visibleOnHover={true} position="bottom-right" />
        </section>
        
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-code-blue/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-code-purple/5 rounded-full blur-3xl -z-10"></div>
      </main>
    </div>
  );
};

export default HireMe;
