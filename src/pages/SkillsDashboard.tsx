
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Cloud, 
  Code, 
  Layout, 
  Figma, 
  Server, 
  ChevronRight, 
  Database, 
  LineChart,
  Sparkles
} from "lucide-react";

// Animation variants
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
    transition: { duration: 0.5 }
  }
};

// Skill data
const skills = [
  {
    name: "Google Cloud",
    level: 85,
    icon: <Cloud className="h-6 w-6 text-code-blue" />,
    color: "from-blue-400 to-blue-600",
    expertise: ["GCP Infrastructure", "Cloud Functions", "Firebase", "Cloud Storage", "App Engine"]
  },
  {
    name: "Software Development",
    level: 90,
    icon: <Code className="h-6 w-6 text-code-purple" />,
    color: "from-purple-400 to-purple-600",
    expertise: ["TypeScript", "React", "Node.js", "Python", "Java"]
  },
  {
    name: "Web Development",
    level: 95,
    icon: <Layout className="h-6 w-6 text-code-green" />,
    color: "from-green-400 to-green-600",
    expertise: ["Responsive Design", "React", "Next.js", "Tailwind CSS", "Web Performance"]
  },
  {
    name: "UX Design",
    level: 80,
    icon: <Figma className="h-6 w-6 text-code-pink" />,
    color: "from-pink-400 to-pink-600",
    expertise: ["Wireframing", "Prototyping", "User Testing", "Accessibility", "Design Systems"]
  },
  {
    name: "AWS",
    level: 75,
    icon: <Server className="h-6 w-6 text-code-yellow" />,
    color: "from-yellow-400 to-yellow-600",
    expertise: ["EC2", "S3", "Lambda", "CloudFormation", "Route 53"]
  }
];

const SkillsDashboard = () => {
  const [selectedSkill, setSelectedSkill] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col relative bg-background overflow-hidden">
      <Navbar />
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/20 via-code-purple/20 to-code-pink/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/20 via-code-green/20 to-code-blue/20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="hidden lg:block absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
        <div className="hidden lg:block absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
        <div className="hidden lg:block absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-8 flex-1">
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text inline-block"
          >
            Skills Dashboard
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            An interactive overview of my technical expertise and proficiency levels across different domains
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border border-border/50 backdrop-blur-sm bg-white/80"
                onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <CardTitle className="text-xl">{skill.name}</CardTitle>
                    </div>
                    <Badge variant="outline" className="font-mono">
                      {skill.level}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Progress 
                      value={skill.level} 
                      className="h-2.5 bg-gray-100" 
                    />
                    <div className={`h-2.5 rounded-full bg-gradient-to-r ${skill.color} -mt-2.5`} style={{ width: `${skill.level}%` }}></div>
                  </div>

                  <div className={`grid grid-cols-2 gap-2 mt-4 ${selectedSkill === index ? '' : 'hidden'}`}>
                    {skill.expertise.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-2 w-full text-xs flex justify-between items-center text-muted-foreground"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSkill(selectedSkill === index ? null : index);
                    }}
                  >
                    <span>{selectedSkill === index ? "Show less" : "Show expertise"}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${selectedSkill === index ? 'rotate-90' : ''}`} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10"
        >
          <Card className="backdrop-blur-sm bg-white/80 border border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <LineChart className="h-6 w-6 text-code-purple" />
                <CardTitle>Skills Overview</CardTitle>
              </div>
              <CardDescription>
                Comparative view of my technical proficiency across domains
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {skill.icon}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex justify-center items-center p-3 gap-2 rounded-full bg-white/80 border border-border/50 backdrop-blur-sm shadow-sm">
            <Sparkles className="h-4 w-4 text-code-yellow animate-pulse" />
            <span className="text-sm text-muted-foreground">Click on a skill card to view expertise details</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsDashboard;
