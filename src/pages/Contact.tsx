
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import EasterEgg from '@/components/EasterEgg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.',
        duration: 5000
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20 relative">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            Get in <span className="text-code-purple">Touch</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-code-green/20 -z-10 rotate-1"></span>
            <EasterEgg type="message" position="top-right" className="absolute -top-4 -right-4" />
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together? Drop me a message and I'll get back to you soon.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start relative">
          <Card className="lg:col-span-2 border-gray-200 shadow-sm group relative">
            <EasterEgg type="fact" visibleOnHover={true} position="top-right" />
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium block">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium block">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or ask a question..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-blue text-white"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-6 relative group">
            <EasterEgg type="joke" visibleOnHover={true} position="top-left" />
            <Card className="border-gray-200 shadow-sm overflow-hidden">
              <CardContent className="p-6 relative">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Mail className="h-5 w-5 text-code-purple" />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="h-5 w-5 text-code-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <a href="mailto:hello@tholumuzi.dev" className="text-sm text-gray-600 hover:text-code-purple transition-colors">
                        hello@tholumuzi.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-code-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <a href="tel:+27123456789" className="text-sm text-gray-600 hover:text-code-purple transition-colors">
                        +27 12 345 6789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-code-blue mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-gray-600">
                        Cape Town, South Africa
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-code-purple/5 rounded-full"></div>
                <EasterEgg type="cat" position="bottom-right" className="absolute bottom-2 right-2" />
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 relative">
                  Office Hours
                  <EasterEgg type="coffee" position="top-right" className="absolute -top-2 -right-2" />
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Monday - Friday</span>
                    <span className="text-sm font-medium">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Saturday</span>
                    <span className="text-sm font-medium">10:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Sunday</span>
                    <span className="text-sm font-medium">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-code-blue/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-code-purple/5 rounded-full blur-3xl -z-10"></div>
      </main>
    </div>
  );
};

export default Contact;
