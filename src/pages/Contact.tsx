
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AtSign, Mail, MapPin, Github, Linkedin, UserCheck } from "lucide-react";
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
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submission:", formData);
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out through
              the contact form or connect with me directly on social media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <div className="space-y-6">
              <ContactInfoCard 
                icon={<Mail className="h-8 w-8 text-code-blue" />}
                title="Email"
                description="Send me an email directly"
                content="contact@tholumuzi.dev"
                link="mailto:contact@tholumuzi.dev"
              />
              
              <ContactInfoCard 
                icon={<AtSign className="h-8 w-8 text-code-purple" />}
                title="Social Media"
                description="Connect with me online"
                socialLinks={[
                  { name: "Github", icon: <Github />, url: "https://github.com/tholumuzikhuboni" },
                  { name: "LinkedIn", icon: <Linkedin />, url: "https://linkedin.com/in/tholumuzikhuboni" },
                ]}
              />
              
              <ContactInfoCard 
                icon={<MapPin className="h-8 w-8 text-code-pink" />}
                title="Location"
                description="Based in"
                content="Johannesburg, South Africa"
              />
            </div>
            
            {/* Contact Form */}
            <Card className="lg:col-span-2 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-code-blue/10 to-transparent rounded-full transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-radial from-code-purple/10 to-transparent rounded-full transform -translate-x-16 translate-y-16" />
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="focus:border-code-purple"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="focus:border-code-purple"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      required
                      className="focus:border-code-purple"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      rows={6}
                      required
                      className="resize-none focus:border-code-purple"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-blue text-white font-medium py-2 transition-all duration-300"
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
  socialLinks?: {
    name: string;
    icon: React.ReactNode;
    url: string;
  }[];
}

const ContactInfoCard = ({
  icon,
  title,
  description,
  content,
  link,
  socialLinks,
}: ContactInfoCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-l-4 border-l-transparent hover:border-l-code-purple">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="bg-muted/30 rounded-full p-3 group-hover:bg-muted/50 transition-all duration-300">
            {icon}
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            
            {content && (
              <div className="pt-1">
                {link ? (
                  <a
                    href={link}
                    className="text-sm font-medium text-code-blue hover:text-code-purple transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{content}</p>
                )}
              </div>
            )}
            
            {socialLinks && (
              <div className="flex gap-3 pt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-code-purple transition-colors p-2 rounded-full hover:bg-muted/50"
                    aria-label={social.name}
                  >
                    {social.icon}
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
