import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Mail, MapPin, Github, Linkedin, Instagram, Facebook, UserCheck, Code, TerminalSquare, Cpu, ServerCrash, Star, Sparkles, BrainCircuit, CheckCircle2, XCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xgveoyla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: (
            <div className="flex items-center gap-2">
              <span className="text-code-green">Your message has been delivered.</span>
              <CheckCircle2 className="h-4 w-4 text-code-green animate-pulse" />
            </div>
          ),
          className: "bg-gradient-to-r from-code-blue/20 to-code-green/20 border border-code-green/30",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Message not sent",
        description: (
          <div className="flex items-center gap-2">
            <span className="text-code-red">Please try again or contact me directly.</span>
            <XCircle className="h-4 w-4 text-code-red animate-pulse" />
          </div>
        ),
        variant: "destructive",
        className: "bg-gradient-to-r from-code-red/20 to-code-pink/20 border border-code-red/30",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Large gradient blobs */}
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Animated dots */}
        <div className="absolute top-[20%] left-[15%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute bottom-[30%] left-[40%] w-2 h-2 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-[35%] right-[40%] w-2 h-2 rounded-full bg-code-pink animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        <div className="absolute bottom-[40%] right-[15%] w-3 h-3 rounded-full bg-code-purple animate-ping" style={{ animationDuration: '4.5s', animationDelay: '1.2s' }} />
        <div className="absolute top-[15%] right-[35%] w-2 h-2 rounded-full bg-code-red animate-ping" style={{ animationDuration: '2.8s', animationDelay: '0.3s' }} />
        <div className="absolute bottom-[20%] right-[40%] w-3 h-3 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '3.2s', animationDelay: '1.2s' }} />
        
        {/* Additional animated dots */}
        <div className="absolute top-[10%] left-[40%] w-3 h-3 rounded-full bg-code-purple animate-ping" style={{ animationDuration: '4.3s', animationDelay: '0.8s' }} />
        <div className="absolute top-[70%] left-[20%] w-2 h-2 rounded-full bg-code-yellow animate-ping" style={{ animationDuration: '3.7s', animationDelay: '1.3s' }} />
        <div className="absolute top-[40%] left-[65%] w-2 h-2 rounded-full bg-code-green animate-ping" style={{ animationDuration: '3.1s', animationDelay: '1.7s' }} />
        <div className="absolute top-[25%] right-[10%] w-3 h-3 rounded-full bg-code-blue animate-ping" style={{ animationDuration: '4.6s', animationDelay: '0.2s' }} />
        <div className="absolute bottom-[10%] right-[35%] w-2 h-2 rounded-full bg-code-red animate-ping" style={{ animationDuration: '3.9s', animationDelay: '1.5s' }} />
        
        {/* Floating code symbols */}
        <div className="absolute top-[25%] left-[30%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6s' }}>{'<>'}</div>
        <div className="absolute bottom-[35%] right-[30%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>{'/>'}</div>
        <div className="absolute top-[45%] right-[20%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>{'{ }'}</div>
        <div className="absolute top-[30%] left-[60%] text-code-yellow/20 font-mono text-xl animate-float" style={{ animationDuration: '5s', animationDelay: '0.5s' }}>{'()'}</div>
        <div className="absolute bottom-[25%] left-[20%] text-code-pink/20 font-mono text-xl animate-float" style={{ animationDuration: '7.5s', animationDelay: '1.5s' }}>{'[]'}</div>
        
        {/* Additional floating code symbols */}
        <div className="absolute top-[18%] left-[45%] text-code-red/20 font-mono text-xl animate-float" style={{ animationDuration: '5.5s', animationDelay: '0.7s' }}>{'if()'}</div>
        <div className="absolute bottom-[45%] right-[15%] text-code-green/20 font-mono text-xl animate-float" style={{ animationDuration: '6.5s', animationDelay: '1.2s' }}>{'==='}</div>
        <div className="absolute top-[55%] left-[10%] text-code-blue/20 font-mono text-xl animate-float" style={{ animationDuration: '7.2s', animationDelay: '1.8s' }}>{'/**/'}</div>
        <div className="absolute top-[40%] right-[40%] text-code-purple/20 font-mono text-xl animate-float" style={{ animationDuration: '8.5s', animationDelay: '0.3s' }}>{'while'}</div>
        <div className="absolute bottom-[60%] left-[50%] text-code-yellow/20 font-mono text-xl animate-float" style={{ animationDuration: '6.8s', animationDelay: '2.2s' }}>{'return'}</div>
        
        {/* Large code symbols */}
        <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
        <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
        <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
        
        {/* Additional large code symbols */}
        <div className="hidden lg:block absolute top-[60%] left-[15%] text-code-yellow/10 font-mono text-5xl">&#36;&#40;&#41;</div>
        <div className="hidden lg:block absolute top-[40%] right-[5%] text-code-pink/10 font-mono text-5xl">&#91;&#93;</div>
        <div className="hidden lg:block absolute bottom-[30%] left-[20%] text-code-red/10 font-mono text-4xl">function()</div>
        
        {/* Decorative Lucide icons */}
        <div className="absolute top-[12%] left-[25%] text-code-blue/15 animate-float" style={{ animationDuration: '9s' }}>
          <Code size={40} />
        </div>
        <div className="absolute bottom-[22%] right-[10%] text-code-purple/15 animate-float" style={{ animationDuration: '8s', animationDelay: '1s' }}>
          <TerminalSquare size={36} />
        </div>
        <div className="absolute top-[50%] right-[25%] text-code-green/15 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}>
          <Cpu size={32} />
        </div>
        <div className="absolute bottom-[40%] left-[10%] text-code-yellow/15 animate-float" style={{ animationDuration: '10s', animationDelay: '0.5s' }}>
          <ServerCrash size={38} />
        </div>
        <div className="absolute top-[35%] left-[35%] text-code-pink/15 animate-float" style={{ animationDuration: '6.5s', animationDelay: '1.5s' }}>
          <Star size={30} />
        </div>
        <div className="absolute bottom-[15%] right-[40%] text-code-blue/15 animate-float" style={{ animationDuration: '7.5s', animationDelay: '0.8s' }}>
          <Sparkles size={34} />
        </div>
        <div className="absolute top-[20%] right-[30%] text-code-purple/15 animate-float" style={{ animationDuration: '9.5s', animationDelay: '1.3s' }}>
          <BrainCircuit size={42} />
        </div>
        
        {/* Matrix-like falling elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute font-mono text-code-green"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fall ${5 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.3 + Math.random() * 0.7
              }}
            >
              {['0', '1', '<>', '/>', '{}', '[]', 'JS', 'TS', 'let', 'var', 'const', 'async', 'await', 'import', 'export', 'function', 'class', 'interface', 'for', 'while'][Math.floor(Math.random() * 20)]}
            </div>
          ))}
        </div>
      </div>
      
      <main className="container mx-auto px-4 pt-32 pb-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text font-mono">Get in Touch</h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <ContactInfoCard 
                icon={<Mail className="h-8 w-8 text-white" />}
                title="Email"
                description="Send me an email directly"
                content="tholumuzi@linkedme.co.za"
                link="mailto:tholumuzi@linkedme.co.za"
                color="bg-gradient-to-br from-code-blue to-code-purple"
              />
              
              <ContactInfoCard 
                icon={<AtSign className="h-8 w-8 text-white" />}
                title="Social Media"
                description="Connect with me online"
                socialLinks={[
                  { name: "Github", icon: <Github />, url: "https://github.com/tholumuzikhuboni", color: "#333" },
                  { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com/in/tholumuzikhuboni", color: "#0077B5" },
                  { name: "Instagram", icon: <Instagram />, url: "https://instagram.com/tholumuzikhuboni", color: "#E1306C" },
                  { name: "Facebook", icon: <Facebook />, url: "https://facebook.com/tholumuzikhuboni", color: "#1877F2" },
                ]}
                color="bg-gradient-to-br from-code-purple to-code-pink"
              />
              
              <ContactInfoCard 
                icon={<MapPin className="h-8 w-8 text-white" />}
                title="Location"
                description="Based in"
                content="Johannesburg, South Africa"
                color="bg-gradient-to-br from-code-pink to-code-yellow"
              />
            </div>
            
            {/* Contact Form */}
            <Card className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm border border-white/20 hover:shadow-xl transition-all duration-300">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-code-blue/10 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-code-purple/10 to-transparent rounded-full transform -translate-x-16 translate-y-16" />
              <div className="absolute top-[30%] left-[20%] w-32 h-32 bg-gradient-radial from-code-green/10 to-transparent rounded-full" />
              <div className="absolute bottom-[40%] right-[20%] w-24 h-24 bg-gradient-radial from-code-yellow/10 to-transparent rounded-full" />
              
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl font-bold font-mono">
                  <span className="text-code-blue">Send</span> me a <span className="text-code-purple">Message</span>
                </CardTitle>
                <CardDescription className="font-mono">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <label htmlFor="name" className="text-sm font-medium font-mono group-hover:text-code-green transition-colors duration-300">
                        Your <span className="text-code-green">Name</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tholumuzi Doe"
                        required
                        className="focus:border-code-purple font-mono transition-all duration-300 focus:ring-2 focus:ring-code-blue/20 hover:border-code-green/50"
                      />
                    </div>
                    
                    <div className="space-y-2 group">
                      <label htmlFor="email" className="text-sm font-medium font-mono group-hover:text-code-blue transition-colors duration-300">
                        Your <span className="text-code-blue">Email</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="muzi@example.com"
                        required
                        className="focus:border-code-purple font-mono transition-all duration-300 focus:ring-2 focus:ring-code-purple/20 hover:border-code-blue/50"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 group">
                    <label htmlFor="subject" className="text-sm font-medium font-mono group-hover:text-code-yellow transition-colors duration-300">
                        <span className="text-code-yellow">Subject</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="focus:border-code-purple font-mono transition-all duration-300 focus:ring-2 focus:ring-code-yellow/20 hover:border-code-yellow/50"
                    />
                  </div>
                  
                  <div className="space-y-2 group">
                    <label htmlFor="message" className="text-sm font-medium font-mono group-hover:text-code-purple transition-colors duration-300">
                      <span className="text-code-purple">Message</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                      className="resize-none focus:border-code-purple font-mono transition-all duration-300 focus:ring-2 focus:ring-code-purple/20 hover:border-code-purple/50"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-blue text-white font-medium py-2 transition-all duration-300 font-mono shadow-xl hover:shadow-2xl hover:translate-y-[-2px]"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-pulse">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  content?: string;
  link?: string;
  color?: string;
  socialLinks?: {
    name: string;
    icon: React.ReactNode;
    url: string;
    color?: string;
  }[];
}

const ContactInfoCard = ({
  icon,
  title,
  description,
  content,
  link,
  color = "bg-gradient-to-br from-code-blue to-code-green",
  socialLinks,
}: ContactInfoCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-none">
      <div className={`absolute inset-0 opacity-90 ${color}`}></div>
      <div className="absolute inset-0 bg-white/90 dark:bg-black/80"></div>
      
      {/* Card decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-white/10 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-white/10 to-transparent rounded-full transform -translate-x-16 translate-y-16"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-radial from-white/5 to-transparent rounded-full"></div>
        <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-code-green animate-ping opacity-75" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-code-purple animate-ping opacity-75" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
      
      <CardContent className="p-6 relative z-10">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left sm:flex-row sm:gap-6">
          <div className={`${color} text-white rounded-full p-5 shadow-lg mb-4 sm:mb-0 transform transition-transform group-hover:scale-110 duration-500`}>
            {icon}
          </div>
          
          <div className="space-y-3 font-mono">
            <h3 className="text-xl font-bold tracking-tight gradient-text">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            
            {content && (
              <div className="pt-1">
                {link ? (
                  <a
                    href={link}
                    className="text-sm font-medium text-code-blue hover:text-code-purple transition-colors hover:underline"
                  >
                    {content}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{content}</p>
                )}
              </div>
            )}
            
            {socialLinks && (
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/icon relative hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <div 
                      className="absolute inset-0 rounded-full opacity-10 group-hover/icon:opacity-20 transition-opacity" 
                      style={{ backgroundColor: social.color || 'currentColor' }}
                    ></div>
                    <div 
                      className="flex items-center justify-center p-3 rounded-full shadow-md transition-all duration-300 text-white" 
                      style={{ backgroundColor: social.color || 'currentColor' }}
                    >
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Contact;
