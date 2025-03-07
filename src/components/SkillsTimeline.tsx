
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code, Laptop, Palette, Server } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const SkillsTimeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      year: "2022 - Present",
      title: "Advanced Google Cloud Architecture",
      description: "Designed and implemented scalable cloud solutions using GCP's latest features including Cloud Run, Cloud Functions, and BigQuery.",
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      category: "Google Cloud"
    },
    {
      year: "2021 - 2022",
      title: "Full-Stack Development Lead",
      description: "Led development of complex web applications using React, Node.js, and TypeScript with modern architecture patterns.",
      icon: <Code className="h-8 w-8 text-purple-500" />,
      category: "Software Development"
    },
    {
      year: "2020 - 2021",
      title: "UX Design Systems Implementation",
      description: "Created comprehensive design systems that unified visual language across multiple platforms while improving accessibility.",
      icon: <Palette className="h-8 w-8 text-pink-500" />,
      category: "UX Design"
    },
    {
      year: "2019 - 2020",
      title: "AWS Solutions Architecture",
      description: "Architected serverless applications using AWS Lambda, DynamoDB, and API Gateway for high-performance and cost-effective solutions.",
      icon: <Server className="h-8 w-8 text-orange-500" />,
      category: "AWS"
    },
    {
      year: "2018 - 2019",
      title: "Modern Web Framework Development",
      description: "Specialized in building performant SPAs and PWAs using modern frameworks with a focus on web vitals optimization.",
      icon: <Laptop className="h-8 w-8 text-green-500" />,
      category: "Web Development"
    },
  ];

  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:h-full before:w-0.5 before:bg-border before:left-9 before:ml-px">
      {timelineData.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="relative pl-14 md:pl-16"
        >
          <div className="absolute left-0 top-1 h-10 w-10 flex items-center justify-center rounded-full border border-border bg-background shadow-md z-10">
            {item.icon}
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle>{item.title}</CardTitle>
                <span className="text-sm font-mono bg-muted px-2.5 py-0.5 rounded-full inline-block text-muted-foreground">
                  {item.year}
                </span>
              </div>
              <CardDescription className="text-sm font-medium text-primary">
                {item.category}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsTimeline;
