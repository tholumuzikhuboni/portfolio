
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Laptop, GraduationCap, Github, Linkedin, Cloud, Code, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center"
          >
            <span className="relative inline-block">
              <span className="relative z-10">About Me</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-blue-100 opacity-50 z-0"></span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-xl text-center text-gray-600 max-w-3xl mx-auto"
          >
            My journey from an inspired high school student to a versatile software developer
          </motion.p>
        </motion.div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              custom={1}
              variants={fadeInUp}
              className="order-2 md:order-1"
            >
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                My Story
              </span>
              <h2 className="mt-4 text-3xl font-bold text-gray-900">
                From Inspiration to Innovation
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                My fascination with technology began during high school, where I found myself deeply inspired by the groundbreaking innovations of tech pioneers like Mark Zuckerberg. Their ability to transform ideas into platforms that connect millions around the world ignited my passion for digital creation.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Initially, I explored website and app development through drag-and-drop platforms, creating functional projects that solved real problems. However, I soon encountered limitations that restricted my creative vision and technical ambitions.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                This realization led me to pursue formal education in software development, where I acquired the skills to build applications from the ground up with complete creative and technical freedom.
              </p>
            </motion.div>
            <motion.div
              custom={2}
              variants={fadeInUp}
              className="order-1 md:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-2xl transform translate-x-3 translate-y-3 opacity-20"></div>
                <div className="relative bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Laptop className="w-6 h-6 text-blue-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Early Exploration</h3>
                        <p className="text-gray-600">Building with drag-and-drop platforms</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <GraduationCap className="w-6 h-6 text-purple-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Education</h3>
                        <p className="text-gray-600">Formal software development training</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 p-3 rounded-full">
                        <Code className="w-6 h-6 text-green-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Professional Growth</h3>
                        <p className="text-gray-600">Building any app I envision</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Cloud className="w-6 h-6 text-orange-700" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">Cloud Expertise</h3>
                        <p className="text-gray-600">Mastering AWS and Google Cloud</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Capabilities
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Skills & Expertise</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From ideation to deployment, I've developed a diverse skill set that allows me to bring digital products to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-blue-600" />,
                title: "Software Development",
                description: "Building robust, scalable applications with modern frameworks and clean code practices."
              },
              {
                icon: <Globe className="w-8 h-8 text-green-600" />,
                title: "Web Development",
                description: "Creating responsive, user-friendly websites that deliver exceptional experiences across all devices."
              },
              {
                icon: <Cloud className="w-8 h-8 text-indigo-600" />,
                title: "Cloud Solutions",
                description: "Leveraging AWS and Google Cloud to build scalable, resilient infrastructure for applications."
              },
              {
                icon: <Laptop className="w-8 h-8 text-purple-600" />,
                title: "UI/UX Design",
                description: "Designing intuitive interfaces that balance aesthetics with functionality for optimal user engagement."
              },
              {
                icon: <Users className="w-8 h-8 text-orange-600" />,
                title: "Collaboration",
                description: "Working effectively in teams to deliver complex projects through clear communication and shared goals."
              },
              {
                icon: <GraduationCap className="w-8 h-8 text-red-600" />,
                title: "Continuous Learning",
                description: "Staying current with emerging technologies and best practices through dedicated self-improvement."
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Life Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="bg-rose-100 text-rose-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Daily Rhythm
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">A Day in My Life</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              My typical day balances coding, learning, and collaboration to maintain creativity and technical growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { time: "Morning", activity: "Coding", desc: "Focused development work on current projects" },
              { time: "Midday", activity: "Research", desc: "Exploring new technologies and solutions" },
              { time: "Afternoon", activity: "Collaboration", desc: "Connecting with peers and attending meetings" },
              { time: "Evening", activity: "Learning", desc: "Enhancing skills through courses and tutorials" },
              { time: "Night", activity: "Relaxation", desc: "Unwinding to recharge creativity" }
            ].map((timeblock, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-3 px-4">
                  <p className="font-medium text-gray-900">{timeblock.time}</p>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{timeblock.activity}</h3>
                  <p className="text-gray-600 text-sm">{timeblock.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Staying Connected
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Community Engagement</h2>
            <p className="mt-4 text-xl text-gray-600">
              I believe in the power of community and continuous growth through connection and knowledge sharing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Tech Events & Meetups
                </h3>
                <p className="text-gray-600 mb-4">
                  I regularly attend Google Developer Events to stay updated with the latest trends, network with fellow developers, and gain insights into upcoming technologies.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <p className="text-blue-700 font-medium mb-1">Benefits of Community Events:</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Exposure to cutting-edge innovations
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Networking with industry professionals
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Hands-on workshops and learning opportunities
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Inspiration from diverse perspectives
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Online Collaboration
                </h3>
                <p className="text-gray-600 mb-4">
                  I maintain active connections with other professionals through platforms like GitHub and LinkedIn, collaborating on projects and sharing knowledge.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                    <Github className="w-8 h-8 text-gray-800 mb-2" />
                    <h4 className="font-medium text-gray-900">GitHub</h4>
                    <p className="text-sm text-gray-600">Code collaboration & open source contributions</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
                    <Linkedin className="w-8 h-8 text-blue-700 mb-2" />
                    <h4 className="font-medium text-gray-900">LinkedIn</h4>
                    <p className="text-sm text-gray-600">Professional networking & industry insights</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:max-w-2xl">
                <h2 className="text-3xl font-bold text-white">Ready to bring your ideas to life?</h2>
                <p className="mt-4 text-blue-100 text-lg">
                  Let's collaborate and create something amazing together. Whether you need a web application, mobile app, or cloud solution, I'm here to help.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md"
                >
                  Get in Touch
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="bg-transparent text-white border border-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  View My Work
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
