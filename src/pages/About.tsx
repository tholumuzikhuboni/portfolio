
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Code, Cloud, CloudLightning, Github, Linkedin, Users, Calendar, BookOpen, Coffee, Sparkles, Cpu, Server, Globe, Award, BookMarked, HeartHandshake, Briefcase, GraduationCap, User, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden font-mono">
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-code-blue/10 via-code-purple/10 to-code-pink/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-code-yellow/10 via-code-green/10 to-code-blue/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="absolute top-[15%] left-[5%] text-code-green/10 font-mono text-6xl">&#123;</div>
          <div className="absolute bottom-[15%] right-[5%] text-code-purple/10 font-mono text-6xl">&#125;</div>
          <div className="absolute top-[25%] right-[15%] text-code-blue/10 font-mono text-4xl">&lt;/&gt;</div>
          
          {/* Added more code symbols as background */}
          <div className="absolute top-[45%] left-[15%] text-code-yellow/10 font-mono text-4xl">( )</div>
          <div className="absolute bottom-[35%] right-[20%] text-code-pink/10 font-mono text-5xl">[ ]</div>
          <div className="absolute top-[65%] left-[25%] text-code-blue/10 font-mono text-3xl">=&gt;</div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm px-3 py-1 text-sm font-medium text-primary border border-primary/20 mb-4">
              <span className="mr-2 h-2 w-2 rounded-full bg-code-green animate-pulse"></span>
              <Code className="h-3 w-3 mr-1" /> My Journey
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-mono mb-4 gradient-text">
              About Me
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-code-blue via-code-purple to-code-pink mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              From tech enthusiast to software developer, cloud engineer, and lifelong learner
            </p>
          </motion.div>

          {/* Profile Card - New Addition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="border-code-blue/20 overflow-hidden relative backdrop-blur-sm bg-white/80">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-code-blue/20 via-code-purple/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-tl from-code-green/20 via-code-yellow/10 to-transparent rounded-full blur-xl"></div>
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="bg-gradient-to-br from-code-blue/20 to-code-purple/20 p-2 rounded-full w-32 h-32 flex items-center justify-center">
                    <User className="h-20 w-20 text-code-purple" />
                  </div>
                  <div className="space-y-4 text-center sm:text-left">
                    <h2 className="text-2xl font-bold gradient-text">Software Developer & Cloud Engineer</h2>
                    <p className="text-foreground/80">
                      Passionate about creating innovative solutions and continuously expanding my technical expertise. 
                      My journey from tech enthusiast to professional developer has been driven by curiosity and a love for problem-solving.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      <span className="px-3 py-1 bg-code-blue/10 text-code-blue rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-code-purple/10 text-code-purple rounded-full text-sm">React</span>
                      <span className="px-3 py-1 bg-code-green/10 text-code-green rounded-full text-sm">AWS</span>
                      <span className="px-3 py-1 bg-code-yellow/10 text-code-yellow rounded-full text-sm">GCP</span>
                      <span className="px-3 py-1 bg-code-pink/10 text-code-pink rounded-full text-sm">Node.js</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Journey Timeline */}
          <div className="space-y-16 mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                <div className="text-right hidden md:block pt-4">
                  <div className="text-sm font-mono text-foreground/60">THE BEGINNING</div>
                  <div className="text-xl font-bold text-code-blue">High School</div>
                </div>
                <Card className="border-code-blue/20 overflow-hidden relative group backdrop-blur-sm bg-white/80">
                  <div className="absolute -right-2 -top-2 w-20 h-20 bg-gradient-to-br from-code-blue/20 via-code-purple/10 to-transparent rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="md:hidden mb-2">
                      <div className="text-sm font-mono text-foreground/60">THE BEGINNING</div>
                      <div className="text-xl font-bold text-code-blue">High School</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-code-blue/10 p-3 rounded-xl">
                        <Lightbulb className="h-6 w-6 text-code-blue" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">First Tech Inspirations</h3>
                        <p className="text-foreground/80">
                          My passion for technology began in high school. I was captivated by the innovative spirit of tech entrepreneurs like Mark Zuckerberg, whose journey inspired me to explore the world of software development.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                <div className="text-right hidden md:block pt-4">
                  <div className="text-sm font-mono text-foreground/60">EARLY ATTEMPTS</div>
                  <div className="text-xl font-bold text-code-yellow">First Websites</div>
                </div>
                <Card className="border-code-yellow/20 overflow-hidden relative group backdrop-blur-sm bg-white/80">
                  <div className="absolute -left-2 -top-2 w-20 h-20 bg-gradient-to-br from-code-yellow/20 via-code-green/10 to-transparent rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="md:hidden mb-2">
                      <div className="text-sm font-mono text-foreground/60">EARLY ATTEMPTS</div>
                      <div className="text-xl font-bold text-code-yellow">First Websites</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-code-yellow/10 p-3 rounded-xl">
                        <Globe className="h-6 w-6 text-code-yellow" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Building with No-code Tools</h3>
                        <p className="text-foreground/80">
                          I started creating websites and apps using drag-and-drop platforms. While I was able to build functioning projects, I soon felt limited by what these tools could offer and yearned to understand what was happening behind the scenes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                <div className="text-right hidden md:block pt-4">
                  <div className="text-sm font-mono text-foreground/60">EDUCATION</div>
                  <div className="text-xl font-bold text-code-purple">Software Development</div>
                </div>
                <Card className="border-code-purple/20 overflow-hidden relative group backdrop-blur-sm bg-white/80">
                  <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-gradient-to-tl from-code-purple/20 via-code-pink/10 to-transparent rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="md:hidden mb-2">
                      <div className="text-sm font-mono text-foreground/60">EDUCATION</div>
                      <div className="text-xl font-bold text-code-purple">Software Development</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-code-purple/10 p-3 rounded-xl">
                        <GraduationCap className="h-6 w-6 text-code-purple" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Formal Education in Software Development</h3>
                        <p className="text-foreground/80">
                          I pursued formal education in software development, learning programming fundamentals, algorithms, and software design principles. This education gave me the skills to build applications from scratch, no longer constrained by pre-built tools.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6">
                <div className="text-right hidden md:block pt-4">
                  <div className="text-sm font-mono text-foreground/60">CLOUD SKILLS</div>
                  <div className="text-xl font-bold text-code-green">AWS & Google Cloud</div>
                </div>
                <Card className="border-code-green/20 overflow-hidden relative group backdrop-blur-sm bg-white/80">
                  <div className="absolute -left-2 -bottom-2 w-20 h-20 bg-gradient-to-tr from-code-green/20 via-code-blue/10 to-transparent rounded-full blur-xl group-hover:w-24 group-hover:h-24 transition-all duration-700"></div>
                  <CardContent className="p-6 relative">
                    <div className="md:hidden mb-2">
                      <div className="text-sm font-mono text-foreground/60">CLOUD SKILLS</div>
                      <div className="text-xl font-bold text-code-green">AWS & Google Cloud</div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-code-green/10 p-3 rounded-xl">
                        <Cloud className="h-6 w-6 text-code-green" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Cloud Computing Expertise</h3>
                        <p className="text-foreground/80">
                          To expand my skillset, I learned AWS and Google Cloud, enabling me to build scalable, cloud-native applications. These platforms have become essential tools in my development arsenal, allowing me to deploy and manage applications at scale.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Current Activities */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-2">Staying Current</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-code-blue to-code-purple mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="backdrop-blur-sm bg-white/80 border-code-blue/20 group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-code-blue/10 p-3 rounded-xl group-hover:bg-code-blue/20 transition-colors">
                      <Calendar className="h-6 w-6 text-code-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Google Developer Events</h3>
                      <p className="text-foreground/80">
                        I regularly attend Google Developer Events in my area to stay updated with the latest trends, network with fellow developers, and gain insights from industry experts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 border-code-purple/20 group transition-all duration-300 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-code-purple/10 p-3 rounded-xl group-hover:bg-code-purple/20 transition-colors">
                      <Users className="h-6 w-6 text-code-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Professional Networking</h3>
                      <p className="text-foreground/80">
                        I connect with other developers and tech professionals on GitHub and LinkedIn, collaborating on projects and sharing knowledge with the broader tech community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* A Day in My Life - Improved with Icons and Visuals */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-2">A Day in My Life</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-code-blue to-code-purple mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="backdrop-blur-sm bg-white/80 border-code-yellow/20 group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-code-yellow/10 p-3 rounded-xl mx-auto w-fit mb-4 group-hover:bg-code-yellow/20 transition-colors">
                    <Code className="h-6 w-6 text-code-yellow" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Coding</h3>
                  <p className="text-foreground/80 text-sm">
                    Dedicated time for working on projects, solving problems, and building new applications
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 border-code-green/20 group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-code-green/10 p-3 rounded-xl mx-auto w-fit mb-4 group-hover:bg-code-green/20 transition-colors">
                    <Coffee className="h-6 w-6 text-code-green" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Relaxing</h3>
                  <p className="text-foreground/80 text-sm">
                    Taking breaks to recharge, maintaining a healthy work-life balance
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 border-code-blue/20 group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-code-blue/10 p-3 rounded-xl mx-auto w-fit mb-4 group-hover:bg-code-blue/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-code-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Learning</h3>
                  <p className="text-foreground/80 text-sm">
                    Exploring new technologies, taking courses, and expanding my knowledge
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 border-code-purple/20 group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-code-purple/10 p-3 rounded-xl mx-auto w-fit mb-4 group-hover:bg-code-purple/20 transition-colors">
                    <Sparkles className="h-6 w-6 text-code-purple" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Researching</h3>
                  <p className="text-foreground/80 text-sm">
                    Staying updated with the latest tech trends and industry developments
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/80 border-code-pink/20 group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-code-pink/10 p-3 rounded-xl mx-auto w-fit mb-4 group-hover:bg-code-pink/20 transition-colors">
                    <HeartHandshake className="h-6 w-6 text-code-pink" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Collaborating</h3>
                  <p className="text-foreground/80 text-sm">
                    Working with other developers on projects and sharing knowledge
                  </p>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-sm bg-white/80 border-code-red/20 group transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-code-red/10 p-3 rounded-xl mx-auto w-fit mb-4 group-hover:bg-code-red/20 transition-colors">
                    <Server className="h-6 w-6 text-code-red" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Cloud Engineering</h3>
                  <p className="text-foreground/80 text-sm">
                    Managing cloud infrastructure and optimizing deployments
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Skills Section - New Addition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-2">Technical Skills</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-code-blue to-code-purple mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-code-blue">Frontend Development</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-blue"></div>
                    <span>JavaScript / TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-blue"></div>
                    <span>React.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-blue"></div>
                    <span>HTML5 / CSS3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-blue"></div>
                    <span>Tailwind CSS</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-code-purple">Backend Development</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-purple"></div>
                    <span>Node.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-purple"></div>
                    <span>Express.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-purple"></div>
                    <span>RESTful APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-purple"></div>
                    <span>MongoDB / SQL</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-code-green">Cloud Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-green"></div>
                    <span>AWS (EC2, S3, Lambda)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-green"></div>
                    <span>Google Cloud Platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-green"></div>
                    <span>Serverless Architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-green"></div>
                    <span>Cloud Databases</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-code-yellow">DevOps & Tools</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-yellow"></div>
                    <span>Git / GitHub</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-yellow"></div>
                    <span>Docker</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-yellow"></div>
                    <span>CI/CD Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-code-yellow"></div>
                    <span>VS Code</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connect With Me - New Addition */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-mono mb-2">Connect With Me</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-code-blue to-code-purple mx-auto rounded-full"></div>
            </div>

            <Card className="backdrop-blur-sm bg-white/80 border-code-blue/20 overflow-hidden relative">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-gradient-to-br from-code-blue/10 via-code-purple/10 to-transparent rounded-full blur-xl"></div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tl from-code-green/10 via-code-yellow/10 to-transparent rounded-full blur-xl"></div>
              
              <CardContent className="p-8">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="text-center group">
                    <div className="bg-code-blue/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-2 group-hover:bg-code-blue/20 transition-all duration-300 transform group-hover:scale-110">
                      <Github className="h-8 w-8 text-code-blue" />
                    </div>
                    <p className="text-sm">GitHub</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-code-purple/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-2 group-hover:bg-code-purple/20 transition-all duration-300 transform group-hover:scale-110">
                      <Linkedin className="h-8 w-8 text-code-purple" />
                    </div>
                    <p className="text-sm">LinkedIn</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-code-green/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-2 group-hover:bg-code-green/20 transition-all duration-300 transform group-hover:scale-110">
                      <BookMarked className="h-8 w-8 text-code-green" />
                    </div>
                    <p className="text-sm">Blog</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-code-yellow/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-2 group-hover:bg-code-yellow/20 transition-all duration-300 transform group-hover:scale-110">
                      <Briefcase className="h-8 w-8 text-code-yellow" />
                    </div>
                    <p className="text-sm">Portfolio</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="bg-code-pink/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-2 group-hover:bg-code-pink/20 transition-all duration-300 transform group-hover:scale-110">
                      <Award className="h-8 w-8 text-code-pink" />
                    </div>
                    <p className="text-sm">Achievements</p>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <p className="font-mono text-foreground/80">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;
