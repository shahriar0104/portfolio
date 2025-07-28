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
  MapPin
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold gradient-text"
            >
              Shadman Shahriar
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Shadman</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Software Engineer passionate about building scalable applications and innovative solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Download className="inline mr-2" size={20} />
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get In Touch
              </motion.button>
            </div>
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="mailto:swe.shadman@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:+8801965392623"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experienced Software Engineer with a passion for building scalable applications and innovative solutions. 
              Currently working at Dynamic Solution Innovators, leading frontend development and system architecture.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">BSc in Computer Science and Engineering</h4>
                    <p className="text-blue-100">Military Institute Of Science & Technology, Dhaka</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">Current Role</h4>
                <p className="text-gray-600">Software Engineer at Dynamic Solution Innovators</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">Specialization</h4>
                <p className="text-gray-600">Full-stack development, System Architecture, Performance Optimization</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-lg mb-2">Achievements</h4>
                <p className="text-gray-600">2nd runner up AI Hackathon (RFP Copilot) - May 2025</p>
              </div>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-gray-600">My professional journey in software development</p>
          </motion.div>
          
          <div className="space-y-8">
            {/* Current Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">Software Engineer</h3>
                  <p className="text-gray-600">Dynamic Solution Innovators</p>
                </div>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Sep 2021 - Present
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Led the development and integration of a custom Component library</li>
                <li>• Designed and executed critical data migration scripts with 100% accuracy</li>
                <li>• Architected and delivered two full-featured modules end-to-end</li>
                <li>• Optimized complex database queries, reducing response time by over 40%</li>
                <li>• Built reusable component libraries in Next.js with Tailwind</li>
                <li>• Improved CI/CD pipelines, reducing deployment time by 30%</li>
                <li>• Took full ownership of CRVS Laravel system, reducing execution time from 50+ seconds to less than 4 seconds</li>
                <li>• Mentored junior developers and promoted best coding practices</li>
              </ul>
            </motion.div>

            {/* Reviewer Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">Reviewer</h3>
                  <p className="text-gray-600">Outlier AI</p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Jun 2025 - Present
                </span>
              </div>
              <p className="text-gray-600">
                Started as a frontend contributor and, within 2 weeks, earned the opportunity to become a reviewer due to strong performance.
              </p>
            </motion.div>

            {/* Previous Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600">Junior Software Engineer</h3>
                  <p className="text-gray-600">Frenclub Mobile</p>
                </div>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  Oct 2019 - Aug 2021
                </span>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Solely developed the web portal for the Daiden Logistics Tracking System using Angular 8</li>
                <li>• Implemented responsive UI, integrating APIs, and ensuring smooth logistics management workflow</li>
                <li>• Followed Angular best practices including modular architecture and reusable components</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-gray-600">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white"
            >
              <Code className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Languages</h3>
              <p className="text-blue-100">Javascript, Typescript, Java, Python, PHP, C++, C</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white"
            >
              <Globe className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-purple-100">ReactJs, Material UI, Tailwind CSS, HTML canvas, three.js, shadCN/UI</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white"
            >
              <Database className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-green-100">NextJs, Express, Payload, Spring Boot, FastAPI, Laravel</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white"
            >
              <Cloud className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cloud & DB</h3>
              <p className="text-orange-100">MSSQL, PostgreSQL, Oracle, MongoDB, Firebase, Supabase</p>
            </motion.div>
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
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600">Some of my recent work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* IEIMS Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">IEIMS</h3>
                <p className="text-blue-100">Integrated Education Information Management System</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  A large-scale education platform with seamless data migration, optimized performance, and high availability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">NextJS</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Spring Boot</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MSSQL Server</span>
                </div>
              </div>
            </motion.div>

            {/* CRVS Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">CRVS</h3>
                <p className="text-green-100">Civil Registration and Vital Statistics</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Enhanced a Laravel CRVS system for better performance, stability, and maintainability.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Laravel</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Oracle</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
            </motion.div>

            {/* AI Assistant Project */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
                <p className="text-purple-100">Dedicated chatbot for organizational data</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Dedicated chatbot for public organizational data and non-confidential database info.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">FastAPI</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Langchain</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-600">Let's work together on your next project</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">swe.shadman@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+8801965392623</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">Dhaka, Bangladesh</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:swe.shadman@gmail.com"
                  className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Shadman Shahriar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
