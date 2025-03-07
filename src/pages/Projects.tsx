
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, ExternalLink, Code, Sparkles, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import EasterEgg from '@/components/EasterEgg';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'other';
  date: string;
  client?: string;
}

const ProjectsPage = () => {
  // Projects data
  const projects: Project[] = [
    {
      id: "project-1",
      title: "E-commerce Dashboard",
      description: "A full-featured dashboard for e-commerce stores with analytics, order management, and inventory tracking.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff?text=E-commerce+Dashboard",
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
      date: "June 2023",
      client: "RetailTech Inc."
    },
    {
      id: "project-2",
      title: "Health & Fitness App",
      description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      tags: ["React Native", "GraphQL", "Node.js"],
      imageUrl: "https://placehold.co/600x400/0f3460/ffffff?text=Fitness+App",
      demoUrl: "#",
      githubUrl: "#",
      category: "mobile",
      date: "March 2023"
    },
    {
      id: "project-3",
      title: "Finance Management Tool",
      description: "A web application for personal finance management, budgeting, and investment tracking.",
      tags: ["Vue.js", "Express", "MongoDB", "Chart.js"],
      imageUrl: "https://placehold.co/600x400/16213e/ffffff?text=Finance+Tool",
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
      date: "December 2022",
      client: "FinTech Solutions"
    },
    {
      id: "project-4",
      title: "Smart Home Controller",
      description: "An IoT interface for controlling smart home devices with automation rules and energy monitoring.",
      tags: ["React", "Node.js", "MQTT", "Socket.io"],
      imageUrl: "https://placehold.co/600x400/1a1a2e/ffffff?text=Smart+Home",
      demoUrl: "#",
      githubUrl: "#",
      category: "other",
      date: "August 2022"
    },
    {
      id: "project-5",
      title: "Educational Platform",
      description: "A platform for online courses with video content, quizzes, and progress tracking.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      imageUrl: "https://placehold.co/600x400/0f3460/ffffff?text=Educational+Platform",
      demoUrl: "#",
      githubUrl: "#",
      category: "web",
      date: "May 2022",
      client: "EduTech Corp"
    },
    {
      id: "project-6",
      title: "Travel Companion App",
      description: "A mobile app for travelers with itinerary planning, local recommendations, and offline maps.",
      tags: ["Flutter", "Firebase", "Google Maps API"],
      imageUrl: "https://placehold.co/600x400/16213e/ffffff?text=Travel+App",
      demoUrl: "#",
      githubUrl: "#",
      category: "mobile",
      date: "February 2022"
    }
  ];
  
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterProjects = (category: string) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20 relative">
        <div className="text-center mb-12 max-w-2xl mx-auto relative">
          <h1 className="text-4xl font-bold mb-4 relative inline-block">
            My <span className="text-code-purple">Projects</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-code-green/20 -z-10 rotate-1"></span>
            <EasterEgg type="dna" position="top-right" className="absolute -top-4 -right-4" />
          </h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work, ranging from web applications to mobile apps and more.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="relative group">
          <EasterEgg type="magic" visibleOnHover={true} position="top-left" />
          
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-lg">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects('all').map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setActiveProject(project)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="web" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects('web').map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setActiveProject(project)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects('mobile').map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setActiveProject(project)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="other" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterProjects('other').map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => setActiveProject(project)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <EasterEgg type="bug" visibleOnHover={true} position="bottom-right" />
        </Tabs>
        
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-code-blue/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-code-purple/5 rounded-full blur-3xl -z-10"></div>
      </main>
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: Project, onClick: () => void }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:border-code-purple/30 hover:shadow-md transition-all duration-300 group relative">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <div className="flex gap-2">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-code-green">
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-code-green">
                <Github className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <EasterEgg 
          type={project.id === "project-1" ? "joke" : 
                project.id === "project-3" ? "fact" : 
                project.id === "project-5" ? "cat" : "message"} 
          position="top-right" 
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-30" 
        />
      </div>
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold relative group">
            {project.title}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-code-purple/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </CardTitle>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-gray-50">
              {tag}
            </Badge>
          ))}
          {project.tags.length > 3 && (
            <Badge variant="outline" className="text-xs bg-gray-50">
              +{project.tags.length - 3}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-2">
        <CardDescription className="line-clamp-2 text-sm text-gray-600 mb-3">
          {project.description}
        </CardDescription>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.date}</span>
          </div>
          
          {project.client && (
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>{project.client}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsPage;
