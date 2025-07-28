import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Download,
  Code,
  Database,
  Cloud,
  Globe,
  Award,
  Calendar,
  MapPin,
  Zap,
  Shield,
  Building,
  Target
} from 'lucide-react'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text font-bricolage"
            >
              Shadman Shahriar
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 font-medium font-space relative ${
                    activeSection === section 
                      ? 'text-blue-600' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 font-bricolage leading-tight">
              Hi, I'm <span className="gradient-text">Shadman</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-medium font-space">
              Software Engineer passionate about building scalable applications and innovative solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-xl transition-all duration-300 font-space shadow-lg"
              >
                <Download className="inline mr-2" size={20} />
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 font-space hover:shadow-xl"
              >
                Get In Touch
              </motion.button>
            </div>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Mail, href: "mailto:swe.shadman@gmail.com", color: "hover:text-red-500" },
                { icon: Phone, href: "tel:+8801965392623", color: "hover:text-green-500" },
                { icon: Github, href: "https://github.com", color: "hover:text-gray-800" },
                { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`text-gray-600 transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-bricolage">About Me</h2>
            <p className="text-gray-600 max-w-4xl mx-auto font-space text-lg leading-relaxed">
              Experienced Software Engineer with a passion for building scalable applications and innovative solutions. 
              Currently working at Dynamic Solution Innovators, leading frontend development and system architecture.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-10 rounded-3xl text-white shadow-2xl">
                <h3 className="text-3xl font-semibold mb-6 font-bricolage">Education</h3>
                <div className="space-y-6">
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                    <h4 className="font-semibold text-xl font-space">BSc in Computer Science and Engineering</h4>
                    <p className="text-blue-100 font-space mt-2">Military Institute Of Science & Technology, Dhaka</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { title: "Current Role", content: "Software Engineer at Dynamic Solution Innovators", icon: Building, color: "from-green-500 to-emerald-600" },
                { title: "Specialization", content: "Full-stack development, System Architecture, Performance Optimization", icon: Code, color: "from-purple-500 to-pink-600" },
                { title: "Achievements", content: "2nd runner up AI Hackathon (RFP Copilot) - May 2025", icon: Award, color: "from-orange-500 to-red-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r ${item.color} p-6 rounded-2xl text-white shadow-lg`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg font-space">{item.title}</h4>
                      <p className="text-white/90 font-space mt-1">{item.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-bricolage">Experience</h2>
            <p className="text-gray-600 font-medium font-space text-lg">My professional journey in software development</p>
          </motion.div>
          
          <div className="space-y-12">
            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl card-hover border border-gray-200/50"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-600 font-bricolage">Software Engineer</h3>
                  <p className="text-gray-600 font-medium font-space text-lg">Dynamic Solution Innovators</p>
                </div>
                <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium font-space shadow-lg">
                  Sep 2021 - Present
                </span>
              </div>
              <ul className="space-y-3 text-gray-600 font-space text-lg">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Led the development and integration of a custom Component library</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Designed and executed critical data migration scripts with 100% accuracy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Architected and delivered two full-featured modules end-to-end</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Optimized complex database queries, reducing response time by over 40%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Built reusable component libraries in Next.js with Tailwind</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Improved CI/CD pipelines, reducing deployment time by 30%</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Took full ownership of CRVS Laravel system, reducing execution time from 50+ seconds to less than 4 seconds</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Mentored junior developers and promoted best coding practices</span>
                </li>
              </ul>
            </motion.div>

            {/* Reviewer Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl card-hover border border-gray-200/50"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-600 font-bricolage">Reviewer</h3>
                  <p className="text-gray-600 font-medium font-space text-lg">Outlier AI</p>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium font-space shadow-lg">
                  Jun 2025 - Present
                </span>
              </div>
              <p className="text-gray-600 font-space text-lg">
                Started as a frontend contributor and, within 2 weeks, earned the opportunity to become a reviewer due to strong performance.
              </p>
            </motion.div>

            {/* Previous Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl card-hover border border-gray-200/50"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-semibold text-blue-600 font-bricolage">Junior Software Engineer</h3>
                  <p className="text-gray-600 font-medium font-space text-lg">Frenclub Mobile</p>
                </div>
                <span className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium font-space shadow-lg">
                  Oct 2019 - Aug 2021
                </span>
              </div>
              <ul className="space-y-3 text-gray-600 font-space text-lg">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Solely developed the web portal for the Daiden Logistics Tracking System using Angular 8</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Implemented responsive UI, integrating APIs, and ensuring smooth logistics management workflow</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span>Followed Angular best practices including modular architecture and reusable components</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-bricolage">Technical Skills</h2>
            <p className="text-gray-600 font-medium font-space text-lg">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Code, title: "Languages", desc: "Javascript, Typescript, Java, Python, PHP, C++, C", color: "from-blue-500 to-blue-600" },
              { icon: Globe, title: "Frontend", desc: "ReactJs, Material UI, Tailwind CSS, HTML canvas, three.js, shadCN/UI", color: "from-purple-500 to-purple-600" },
              { icon: Database, title: "Backend", desc: "NextJs, Express, Payload, Spring Boot, FastAPI, Laravel", color: "from-green-500 to-green-600" },
              { icon: Cloud, title: "Cloud & DB", desc: "MSSQL, PostgreSQL, Oracle, MongoDB, Firebase, Supabase", color: "from-orange-500 to-orange-600" }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br ${skill.color} p-8 rounded-3xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <skill.icon className="w-14 h-14 mb-6" />
                <h3 className="text-2xl font-semibold mb-4 font-bricolage">{skill.title}</h3>
                <p className="text-white/90 font-space leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-bricolage">Featured Projects</h2>
            <p className="text-gray-600 font-medium font-space text-lg">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IEIMS Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden card-hover border border-gray-200/50"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-3 font-bricolage">IEIMS</h3>
                <p className="text-blue-100 font-medium font-space">Integrated Education Information Management System</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 font-space leading-relaxed">
                  A large-scale education platform with seamless data migration, optimized performance, and high availability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["NextJS", "Tailwind CSS", "Spring Boot", "MSSQL Server"].map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium font-space">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CRVS Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden card-hover border border-gray-200/50"
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-3 font-bricolage">CRVS</h3>
                <p className="text-green-100 font-medium font-space">Civil Registration and Vital Statistics</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 font-space leading-relaxed">
                  Enhanced a Laravel CRVS system for better performance, stability, and maintainability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Laravel", "Oracle", "JavaScript"].map((tech, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium font-space">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RJSC Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden card-hover border border-gray-200/50"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-blue-600 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-3 font-bricolage">RJSC</h3>
                <p className="text-indigo-100 font-medium font-space">Registrar of Joint Stock Companies</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 font-space leading-relaxed">
                  Maintained and enhanced the RJSC registration portal, ensuring smooth operations and improved reliability.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Spring MVC", "Thymeleaf", "Oracle"].map((tech, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium font-space">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Training Track Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden card-hover border border-gray-200/50"
            >
              <div className="bg-gradient-to-r from-red-500 to-pink-600 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-3 font-bricolage">Training Track</h3>
                <p className="text-red-100 font-medium font-space">Army Training Activity System</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 font-space leading-relaxed">
                  Developed a system to accurately track army training activities, including firing, grenade throwing, and formations.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Express", "PostgreSQL", "Tailwind CSS"].map((tech, index) => (
                    <span key={index} className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium font-space">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI Assistant Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden card-hover border border-gray-200/50"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-3 font-bricolage">AI Assistant</h3>
                <p className="text-purple-100 font-medium font-space">Dedicated chatbot for organizational data</p>
              </div>
              <div className="p-8">
                <p className="text-gray-600 mb-6 font-space leading-relaxed">
                  Dedicated chatbot for public organizational data and non-confidential database info.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "Langchain", "React", "PostgreSQL"].map((tech, index) => (
                    <span key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium font-space">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 font-bricolage">Get In Touch</h2>
            <p className="text-gray-600 font-medium font-space text-lg">Let's work together on your next project</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                { icon: Mail, title: "Email", content: "swe.shadman@gmail.com", color: "from-red-500 to-pink-600" },
                { icon: Phone, title: "Phone", content: "+8801965392623", color: "from-green-500 to-emerald-600" },
                { icon: MapPin, title: "Location", content: "Dhaka, Bangladesh", color: "from-blue-500 to-cyan-600" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r ${contact.color} p-8 rounded-3xl text-white shadow-xl`}
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-white/20 p-4 rounded-2xl">
                      <contact.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl font-space">{contact.title}</h3>
                      <p className="text-white/90 font-space text-lg mt-1">{contact.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-3xl shadow-xl border border-gray-200/50"
            >
              <h3 className="text-3xl font-semibold mb-6 font-bricolage">Let's Connect</h3>
              <p className="text-gray-600 mb-8 font-space text-lg leading-relaxed">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <div className="flex space-x-6">
                {[
                  { icon: Github, href: "https://github.com", color: "bg-gray-800 hover:bg-gray-700" },
                  { icon: Linkedin, href: "https://linkedin.com", color: "bg-blue-600 hover:bg-blue-700" },
                  { icon: Mail, href: "mailto:swe.shadman@gmail.com", color: "bg-red-500 hover:bg-red-600" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`${social.color} text-white p-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-space text-lg">&copy; 2025 Shadman Shahriar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
