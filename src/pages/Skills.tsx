
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tabs, TabsContent, TabsList, TabsTrigger 
} from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code, Laptop, Palette, Server } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Bar, BarChart, ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import SkillsTimeline from '@/components/SkillsTimeline';

const Skills = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Skills data for progress bars
  const skillsProgress = [
    { name: "Google Cloud", level: 85, icon: <Cloud className="text-blue-500" /> },
    { name: "Software Development", level: 90, icon: <Code className="text-purple-500" /> },
    { name: "Web Development", level: 95, icon: <Laptop className="text-green-500" /> },
    { name: "UX Design", level: 80, icon: <Palette className="text-pink-500" /> },
    { name: "AWS", level: 82, icon: <Server className="text-orange-500" /> },
  ];

  // Data for the bar chart
  const barChartData = [
    { name: "GCP", value: 85, fill: "#4285F4" },
    { name: "Software", value: 90, fill: "#8B5CF6" },
    { name: "Web", value: 95, fill: "#10B981" },
    { name: "UX", value: 80, fill: "#EC4899" },
    { name: "AWS", value: 82, fill: "#F97316" },
  ];

  // Data for the radar chart
  const radarChartData = [
    {
      subject: "Cloud Infrastructure",
      GCP: 90,
      AWS: 85,
      fullMark: 100,
    },
    {
      subject: "Development",
      GCP: 70, 
      AWS: 70,
      fullMark: 100,
    },
    {
      subject: "Security",
      GCP: 85,
      AWS: 90,
      fullMark: 100,
    },
    {
      subject: "Scalability",
      GCP: 95,
      AWS: 80,
      fullMark: 100,
    },
    {
      subject: "Cost Optimization",
      GCP: 80,
      AWS: 92,
      fullMark: 100,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-code-blue via-code-purple to-code-pink">
          Skills Dashboard
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
          An interactive overview of my technical skills and expertise across different domains
        </p>

        <Tabs defaultValue="overview" className="max-w-5xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background border border-border">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="charts">Charts</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab - Progress Bars */}
          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="grid gap-6"
            >
              {skillsProgress.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="bg-muted p-3 rounded-full">{skill.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                      // Add animated appearance
                      style={{
                        background: 'linear-gradient(to right, rgba(240,240,240,0.5) 0%, rgba(245,245,245,0.9) 50%, rgba(240,240,240,0.5) 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 1.5s infinite'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Charts Tab - Bar and Radar Charts */}
          <TabsContent value="charts" className="space-y-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills Distribution</CardTitle>
                  <CardDescription>Skill levels across different domains</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ChartContainer config={{}}>
                    <BarChart data={barChartData} layout="vertical" margin={{ left: 80 }}>
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cloud Platforms Comparison</CardTitle>
                  <CardDescription>GCP vs AWS capabilities</CardDescription>
                </CardHeader>
                <CardContent className="h-80">
                  <ChartContainer config={{}}>
                    <RadarChart outerRadius={90} data={radarChartData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="GCP" dataKey="GCP" stroke="#4285F4" fill="#4285F4" fillOpacity={0.6} />
                      <Radar name="AWS" dataKey="AWS" stroke="#FF9900" fill="#FF9900" fillOpacity={0.6} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Experience Tab - Timeline */}
          <TabsContent value="experience" className="animate-fade-in">
            <SkillsTimeline />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Skills;
