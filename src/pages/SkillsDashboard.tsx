
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import { 
  Cloud, 
  Code, 
  Laptop, 
  PenTool, 
  Server, 
  BarChart4, 
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SkillItem = ({ 
  name, 
  value, 
  icon, 
  color 
}: { 
  name: string; 
  value: number; 
  icon: React.ReactNode; 
  color: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="mb-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center mb-2">
        <div className={`p-2 rounded-lg mr-3 ${color}`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-1">
            <span className="font-mono text-sm font-semibold">{name}</span>
            <span className="font-mono text-sm">{value}%</span>
          </div>
          <Progress 
            value={value} 
            className={`h-2 ${color.replace('bg-', 'bg-opacity-20')} [&>div]:${color}`}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ 
  title, 
  children, 
  delay = 0 
}: { 
  title: string; 
  children: React.ReactNode; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="col-span-1"
    >
      <Card className="h-full border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-mono gradient-text">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const BarChart = ({ 
  data,
  title,
  delay = 0
}: { 
  data: { name: string; value: number; color: string }[];
  title: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="col-span-2"
    >
      <Card className="h-full border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-mono gradient-text flex items-center gap-2">
            <BarChart4 className="h-5 w-5" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-end justify-between gap-2 pt-6">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <motion.div
                  className={`w-16 ${item.color} rounded-t-md`}
                  initial={{ height: 0 }}
                  animate={{ height: `${(item.value / 100) * 200}px` }}
                  transition={{ delay: delay + index * 0.1, duration: 0.8, ease: "easeOut" }}
                ></motion.div>
                <span className="text-xs font-mono text-center">{item.name}</span>
                <span className="text-xs font-mono font-bold">{item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const RadarChartItem = ({ 
  name,
  percentage,
  angle,
  delay
}: {
  name: string;
  percentage: number;
  angle: number;
  delay: number;
}) => {
  const radius = 120;
  const distance = (radius * percentage) / 100;
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  
  return (
    <>
      <motion.line
        x1="0"
        y1="0"
        x2={x}
        y2={y}
        stroke="#e2e8f0"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      />
      <motion.circle
        cx={x}
        cy={y}
        r="4"
        className="fill-code-purple"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: delay + 0.5 + (percentage / 100) * 0.5, duration: 0.3 }}
      />
      <motion.text
        x={x * 1.2}
        y={y * 1.2}
        textAnchor={x > 0 ? "start" : x < 0 ? "end" : "middle"}
        dominantBaseline={y > 0 ? "hanging" : y < 0 ? "text-before-edge" : "middle"}
        className="fill-current text-xs font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.8, duration: 0.3 }}
      >
        {name}
      </motion.text>
    </>
  );
};

const RadarChart = ({ 
  skills,
  title,
  delay = 0
}: { 
  skills: { name: string; value: number }[];
  title: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="col-span-2"
    >
      <Card className="h-full border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-mono gradient-text flex items-center gap-2">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center items-center h-64">
            <svg width="300" height="300" viewBox="-150 -150 300 300">
              {/* Background circles */}
              {[20, 40, 60, 80, 100].map((percentage, i) => (
                <motion.circle
                  key={i}
                  cx="0"
                  cy="0"
                  r={(120 * percentage) / 100}
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ delay: delay + i * 0.1, duration: 0.5 }}
                />
              ))}
              
              {/* Skills */}
              {skills.map((skill, i) => {
                const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                return (
                  <RadarChartItem
                    key={i}
                    name={skill.name}
                    percentage={skill.value}
                    angle={angle}
                    delay={delay + 0.2}
                  />
                );
              })}
              
              {/* Filled polygon */}
              <motion.polygon
                points={skills
                  .map((skill, i) => {
                    const angle = (Math.PI * 2 * i) / skills.length - Math.PI / 2;
                    const distance = (120 * skill.value) / 100;
                    return `${Math.cos(angle) * distance},${Math.sin(angle) * distance}`;
                  })
                  .join(" ")}
                className="fill-code-purple/20 stroke-code-purple"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 1.2, duration: 0.5 }}
              />
            </svg>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsDashboard = () => {
  // Technical skills
  const cloudSkills = [
    { name: "Google Cloud Platform", value: 90, icon: <Cloud className="h-5 w-5 text-white" />, color: "bg-code-blue" },
    { name: "AWS", value: 75, icon: <Cloud className="h-5 w-5 text-white" />, color: "bg-code-yellow" },
    { name: "Azure", value: 65, icon: <Cloud className="h-5 w-5 text-white" />, color: "bg-code-blue" },
    { name: "Kubernetes", value: 80, icon: <Server className="h-5 w-5 text-white" />, color: "bg-code-blue" },
  ];

  const developmentSkills = [
    { name: "JavaScript/TypeScript", value: 95, icon: <Code className="h-5 w-5 text-white" />, color: "bg-code-yellow" },
    { name: "React", value: 90, icon: <Code className="h-5 w-5 text-white" />, color: "bg-code-blue" },
    { name: "Node.js", value: 85, icon: <Server className="h-5 w-5 text-white" />, color: "bg-code-green" },
    { name: "Python", value: 80, icon: <Code className="h-5 w-5 text-white" />, color: "bg-code-blue" },
  ];

  const designSkills = [
    { name: "UI Design", value: 85, icon: <PenTool className="h-5 w-5 text-white" />, color: "bg-code-pink" },
    { name: "UX Research", value: 75, icon: <PenTool className="h-5 w-5 text-white" />, color: "bg-code-pink" },
    { name: "Figma", value: 90, icon: <PenTool className="h-5 w-5 text-white" />, color: "bg-code-pink" },
    { name: "Design Systems", value: 80, icon: <PenTool className="h-5 w-5 text-white" />, color: "bg-code-pink" },
  ];

  // Chart data
  const barChartData = [
    { name: "Web Dev", value: 95, color: "bg-code-blue" },
    { name: "Mobile Dev", value: 80, color: "bg-code-purple" },
    { name: "Backend", value: 90, color: "bg-code-green" },
    { name: "Cloud", value: 85, color: "bg-code-yellow" },
    { name: "DevOps", value: 75, color: "bg-code-pink" },
  ];

  const radarChartData = [
    { name: "Frontend", value: 95 },
    { name: "Backend", value: 90 },
    { name: "Cloud", value: 85 },
    { name: "DevOps", value: 75 },
    { name: "UI/UX", value: 80 },
    { name: "Databases", value: 85 },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl font-mono font-bold mb-6 gradient-text">
              Skills & Expertise
            </h1>
            <div className="h-1 w-40 bg-gradient-to-r from-code-blue via-code-purple to-code-pink rounded-full mb-6"></div>
            <p className="text-foreground/80 text-lg md:text-xl font-mono mb-8 max-w-3xl">
              A comprehensive overview of my technical expertise and proficiency levels across various domains.
            </p>
            
            <Link to="/hire-me">
              <Button className="font-mono text-base group relative overflow-hidden bg-gradient-to-r from-code-blue to-code-purple hover:from-code-purple hover:to-code-pink transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  Hire me for a project
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <SkillCategory title="Cloud Technologies" delay={0.2}>
              {cloudSkills.map((skill, index) => (
                <SkillItem 
                  key={index} 
                  name={skill.name} 
                  value={skill.value} 
                  icon={skill.icon} 
                  color={skill.color} 
                />
              ))}
            </SkillCategory>

            <SkillCategory title="Development" delay={0.4}>
              {developmentSkills.map((skill, index) => (
                <SkillItem 
                  key={index} 
                  name={skill.name} 
                  value={skill.value} 
                  icon={skill.icon} 
                  color={skill.color} 
                />
              ))}
            </SkillCategory>

            <SkillCategory title="Design" delay={0.6}>
              {designSkills.map((skill, index) => (
                <SkillItem 
                  key={index} 
                  name={skill.name} 
                  value={skill.value} 
                  icon={skill.icon} 
                  color={skill.color} 
                />
              ))}
            </SkillCategory>

            <SkillCategory title="Experience (Years)" delay={0.8}>
              <div className="space-y-4 mt-2">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Web Development</span>
                    <span className="font-mono text-sm font-bold">8 years</span>
                  </div>
                  <div className="h-2 bg-code-blue/20 rounded-full">
                    <motion.div 
                      className="h-full bg-code-blue rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: "80%" }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">Cloud Services</span>
                    <span className="font-mono text-sm font-bold">6 years</span>
                  </div>
                  <div className="h-2 bg-code-yellow/20 rounded-full">
                    <motion.div 
                      className="h-full bg-code-yellow rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: "60%" }}
                      transition={{ delay: 1.2, duration: 1 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">UX Design</span>
                    <span className="font-mono text-sm font-bold">5 years</span>
                  </div>
                  <div className="h-2 bg-code-pink/20 rounded-full">
                    <motion.div 
                      className="h-full bg-code-pink rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ delay: 1.4, duration: 1 }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm">DevOps</span>
                    <span className="font-mono text-sm font-bold">4 years</span>
                  </div>
                  <div className="h-2 bg-code-purple/20 rounded-full">
                    <motion.div 
                      className="h-full bg-code-purple rounded-full" 
                      initial={{ width: 0 }}
                      animate={{ width: "40%" }}
                      transition={{ delay: 1.6, duration: 1 }}
                    />
                  </div>
                </div>
              </div>
            </SkillCategory>

            <BarChart 
              data={barChartData} 
              title="Technical Expertise" 
              delay={1}
            />
            
            <RadarChart 
              skills={radarChartData} 
              title="Skill Distribution" 
              delay={1.5}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsDashboard;
