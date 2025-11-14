import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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
  Target,
  Terminal,
  Cpu,
  Layers,
  GitBranch,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Trophy,
  Activity,
  Server,
  Boxes,
  Network
} from 'lucide-react'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'
import CodeRain from './components/CodeRain'
import ScrambleText from './components/ScrambleText'
import TiltCard from './components/TiltCard'
import { use3DTilt } from './hooks/use3DTilt'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [terminalText, setTerminalText] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()

  // Terminal typing effect
  useEffect(() => {
    const text = '> Initializing portfolio.exe...\n> Loading developer profile...\n> System ready.'
    let index = 0
    const timer = setInterval(() => {
      if (index < text.length) {
        setTerminalText(text.substring(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Active section tracking
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

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ cursor: 'none' }}>
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Interactive Particle Background */}
      <ParticleBackground />
      
      {/* Code Rain Effect */}
      <CodeRain density={0.3} />
      
      {/* Animated Background Grid */}
      <div className="fixed inset-0 grid-background opacity-30 pointer-events-none" />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-card z-40 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Terminal className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold gradient-text font-bricolage">Shadman Shahriar</span>
            </motion.div>
            <div className="hidden md:flex space-x-1">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 font-medium font-mono text-sm px-4 py-2 rounded-lg relative ${
                    activeSection === section 
                      ? 'text-cyan-400 bg-cyan-400/10' 
                      : 'text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/5'
                  }`}
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 border border-cyan-400/30 rounded-lg"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{section}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - System Boot */}
      <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Terminal Window */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="glass-card rounded-2xl overflow-hidden neon-border">
                <div className="bg-slate-800/50 px-4 py-3 flex items-center space-x-2 border-b border-cyan-500/20">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-slate-400 text-sm font-mono ml-4">terminal</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <pre className="text-cyan-400 whitespace-pre-wrap">{terminalText}</pre>
                  <motion.span 
                    className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: 'Years Exp', value: '5+', icon: TrendingUp },
                  { label: 'Projects', value: '20+', icon: Rocket },
                  { label: 'Tech Stack', value: '15+', icon: Cpu }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="glass-card p-4 rounded-xl text-center hover:border-cyan-400/30 transition-all duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white font-bricolage">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-mono">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Main Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 1, delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-mono">Available for opportunities</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-bricolage leading-tight">
                <span className="text-slate-200">Building</span>{' '}
                <ScrambleText text="Digital" className="gradient-text text-glow" /><br />
                <ScrambleText text="Ecosystems" className="gradient-text-alt text-glow-purple" />
              </h1>

              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl font-space leading-relaxed">
                <ScrambleText 
                  text="Full-stack engineer crafting scalable solutions and innovative experiences. Transforming complex problems into elegant code."
                  speed={30}
                />
              </p>

              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-medium font-space overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center space-x-2 text-white">
                    <Download size={20} />
                    <span>Download Resume</span>
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 rounded-xl font-medium font-space hover:bg-cyan-400/10 transition-all duration-300 neon-border"
                >
                  <span className="flex items-center space-x-2">
                    <ArrowRight size={20} />
                    <span>Get In Touch</span>
                  </span>
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 justify-center lg:justify-start">
                {[
                  { icon: Mail, href: "mailto:swe.shadman@gmail.com", label: "Email" },
                  { icon: Phone, href: "tel:+8801965392623", label: "Phone" },
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 rounded-lg glass-card flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 group"
                    title={social.label}
                  >
                    <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Origin Story */}
      <section id="about" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-mono">Origin Story</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-bricolage">
              <span className="gradient-text">The Journey</span>
            </h2>
            <p className="text-slate-400 max-w-3xl mx-auto font-space text-lg leading-relaxed">
              From curious student to full-stack architect, building digital solutions that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-card-hover rounded-2xl p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-bricolage">Education</h3>
              <p className="text-lg text-slate-300 font-space mb-1">BSc in Computer Science and Engineering</p>
              <p className="text-sm text-slate-500 font-mono">Military Institute Of Science & Technology</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-card-hover rounded-2xl p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-bricolage">Current Role</h3>
              <p className="text-lg text-slate-300 font-space mb-1">Software Engineer</p>
              <p className="text-sm text-slate-500 font-mono">Dynamic Solution Innovators</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-card-hover rounded-2xl p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 font-bricolage">Achievement</h3>
              <p className="text-lg text-slate-300 font-space mb-1">2nd Runner Up</p>
              <p className="text-sm text-slate-500 font-mono">AI Hackathon (RFP Copilot) - May 2025</p>
            </motion.div>
          </div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-3xl font-bold text-white mb-8 font-bricolage flex items-center">
              <Cpu className="w-8 h-8 text-purple-400 mr-3" />
              Core Specializations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Code, title: "Full-Stack Development", desc: "Building end-to-end solutions with modern frameworks" },
                { icon: Server, title: "System Architecture", desc: "Designing scalable and maintainable systems" },
                { icon: Zap, title: "Performance Optimization", desc: "Reducing load times and improving efficiency" },
                { icon: Network, title: "API Integration", desc: "Seamless third-party service connections" }
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <spec.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold font-space mb-1">{spec.title}</h4>
                    <p className="text-slate-400 text-sm font-mono">{spec.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Impact Timeline */}
      <section id="experience" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <GitBranch className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-mono">Impact Timeline</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-bricolage">
              <span className="gradient-text-alt">Professional Journey</span>
            </h2>
            <p className="text-slate-400 font-medium font-space text-lg">Building impactful solutions across diverse domains</p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 opacity-30 hidden md:block" />

            <div className="space-y-8">
              {[
                {
                  title: "Software Engineer",
                  company: "Dynamic Solution Innovators",
                  period: "Sep 2021 - Present",
                  status: "current",
                  icon: Building,
                  achievements: [
                    "Led development of custom Component library",
                    "Executed data migration scripts with 100% accuracy",
                    "Architected two full-featured modules end-to-end",
                    "Optimized database queries, reducing response time by 40%",
                    "Built reusable component libraries in Next.js",
                    "Improved CI/CD pipelines, reducing deployment time by 30%",
                    "Optimized CRVS Laravel system from 50s to <4s execution time",
                    "Mentored junior developers on best practices"
                  ]
                },
                {
                  title: "Reviewer",
                  company: "Outlier AI",
                  period: "Jun 2025 - Present",
                  status: "current",
                  icon: Shield,
                  achievements: [
                    "Promoted to reviewer within 2 weeks due to strong performance",
                    "Started as frontend contributor"
                  ]
                },
                {
                  title: "Junior Software Engineer",
                  company: "Frenclub Mobile",
                  period: "Oct 2019 - Aug 2021",
                  status: "past",
                  icon: Code,
                  achievements: [
                    "Solely developed Daiden Logistics Tracking System web portal using Angular 8",
                    "Implemented responsive UI with seamless API integration",
                    "Followed Angular best practices with modular architecture"
                  ]
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    {/* Timeline Node */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className={`w-16 h-16 rounded-xl ${job.status === 'current' ? 'bg-gradient-to-br from-cyan-500 to-purple-600 neon-glow-cyan' : 'bg-slate-700/50 border border-slate-600'} flex items-center justify-center`}>
                        <job.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 glass-card-hover rounded-2xl p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white font-bricolage mb-1">{job.title}</h3>
                          <p className="text-cyan-400 font-space text-lg">{job.company}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-lg text-sm font-mono ${job.status === 'current' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-slate-700/50 text-slate-400 border border-slate-600'}`}>
                          {job.period}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {job.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3 group"
                          >
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <span className="text-slate-300 font-space">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Tech Arsenal */}
      <section id="skills" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
              <Boxes className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-mono">Tech Arsenal</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-bricolage">
              <span className="gradient-text">Technical Expertise</span>
            </h2>
            <p className="text-slate-400 font-medium font-space text-lg">Mastering modern technologies to build exceptional solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card-hover rounded-2xl p-6 h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Code className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-bricolage">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Java", "Python", "PHP", "C++"].map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono hover:bg-cyan-500/20 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card-hover rounded-2xl p-6 h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Globe className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-bricolage">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind CSS", "Material UI", "Three.js", "shadCN/UI"].map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono hover:bg-purple-500/20 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card-hover rounded-2xl p-6 h-full bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Server className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-bricolage">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {["Express", "Spring Boot", "FastAPI", "Laravel", "Payload CMS"].map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono hover:bg-emerald-500/20 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Database & Cloud */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-card-hover rounded-2xl p-6 h-full bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Database className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 font-bricolage">Database & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "MongoDB", "MSSQL", "Oracle", "Firebase", "Supabase"].map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono hover:bg-amber-500/20 transition-colors duration-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Digital Artifacts */}
      <section id="projects" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-4">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-mono">Digital Artifacts</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-bricolage">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-slate-400 font-medium font-space text-lg">Transforming ideas into impactful digital solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* IEIMS */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="group">
              <TiltCard className="h-full">
                <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border-b border-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-cyan-400" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-bricolage">IEIMS</h3>
                  <p className="text-cyan-300 text-sm font-mono">Integrated Education Information Management System</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-400 font-space leading-relaxed mb-6 flex-1">Large-scale education platform with seamless data migration, optimized performance, and high availability</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Tailwind CSS", "Spring Boot", "MSSQL"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              </TiltCard>
            </motion.div>

            {/* CRVS */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="group">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border-b border-emerald-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-emerald-400" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-bricolage">CRVS</h3>
                  <p className="text-emerald-300 text-sm font-mono">Civil Registration and Vital Statistics</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-400 font-space leading-relaxed mb-6 flex-1">Enhanced Laravel system for better performance, stability, and maintainability</p>
                  <div className="flex flex-wrap gap-2">
                    {["Laravel", "Oracle", "JavaScript"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RJSC */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="group">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="p-6 bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-b border-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                      <Building className="w-6 h-6 text-purple-400" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-bricolage">RJSC</h3>
                  <p className="text-purple-300 text-sm font-mono">Registrar of Joint Stock Companies</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-400 font-space leading-relaxed mb-6 flex-1">Maintained and enhanced registration portal ensuring smooth operations and improved reliability</p>
                  <div className="flex flex-wrap gap-2">
                    {["Spring MVC", "Thymeleaf", "Oracle"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Training Track */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="group">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="p-6 bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-b border-amber-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                      <Target className="w-6 h-6 text-amber-400" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-bricolage">Training Track</h3>
                  <p className="text-amber-300 text-sm font-mono">Army Training Activity System</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-400 font-space leading-relaxed mb-6 flex-1">System to accurately track army training activities including firing, grenade throwing, and formations</p>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "Express", "PostgreSQL", "Tailwind"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Assistant */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="group">
              <div className="glass-card-hover rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="p-6 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-b border-pink-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-pink-400" />
                    </div>
                    <ExternalLink className="w-5 h-5 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-bricolage">AI Assistant</h3>
                  <p className="text-pink-300 text-sm font-mono">Organizational Data Chatbot</p>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-400 font-space leading-relaxed mb-6 flex-1">Dedicated chatbot for public organizational data and non-confidential database information</p>
                  <div className="flex flex-wrap gap-2">
                    {["FastAPI", "Langchain", "React", "PostgreSQL"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Network Connection */}
      <section id="contact" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-4">
              <Network className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-mono">Initialize Connection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-bricolage">
              <span className="gradient-text-alt">Let's Connect</span>
            </h2>
            <p className="text-slate-400 font-medium font-space text-lg">Ready to collaborate on your next project</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <motion.a href="mailto:swe.shadman@gmail.com" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="block glass-card-hover rounded-2xl p-6 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <Mail className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-mono mb-1">Email</h3>
                    <p className="text-white font-space text-lg">swe.shadman@gmail.com</p>
                  </div>
                </div>
              </motion.a>

              <motion.a href="tel:+8801965392623" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="block glass-card-hover rounded-2xl p-6 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-mono mb-1">Phone</h3>
                    <p className="text-white font-space text-lg">+8801965392623</p>
                  </div>
                </div>
              </motion.a>

              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="block glass-card-hover rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                    <MapPin className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-mono mb-1">Location</h3>
                    <p className="text-white font-space text-lg">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Social Links & CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 lg:p-12 flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold text-white mb-4 font-bricolage">Ready to Build Something Amazing?</h3>
              <p className="text-slate-400 mb-8 font-space leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, and creative collaborations.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.a whileHover={{ scale: 1.05, y: -2 }} href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-500/10 border border-slate-500/30 text-slate-300 hover:bg-slate-500/20 transition-all duration-300">
                  <Github size={20} />
                  <span className="font-mono text-sm">GitHub</span>
                </motion.a>
                
                <motion.a whileHover={{ scale: 1.05, y: -2 }} href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300">
                  <Linkedin size={20} />
                  <span className="font-mono text-sm">LinkedIn</span>
                </motion.a>
                
                <motion.a whileHover={{ scale: 1.05, y: -2 }} href="mailto:swe.shadman@gmail.com" className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-all duration-300">
                  <Mail size={20} />
                  <span className="font-mono text-sm">Email</span>
                </motion.a>
              </div>

              {/* Availability Status */}
              <div className="flex items-center space-x-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-emerald-300 font-mono text-sm">Available for opportunities</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20">
        <div className="glass-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-bold font-bricolage">Shadman Shahriar</span>
              </div>
              <p className="text-slate-400 font-mono text-sm">
                &copy; 2025 All rights reserved. Built with React & Tailwind CSS
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow"></div>
                <span className="text-cyan-400 font-mono text-sm">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
