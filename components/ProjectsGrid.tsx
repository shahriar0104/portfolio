'use client';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp, Rocket, CheckCircle2, Satellite } from 'lucide-react';
import Lottie from 'lottie-react';
import rocketAnimation from '../public/animations/rocket.json';
import satelliteAnimation from '../public/animations/satellite.json';
import checkmarkAnimation from '../public/animations/checkmark.json';

interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    role: string;
    outcome: string;
    detailedResponsibilities?: string[];
    keyFeatures?: string[];
    technicalHighlights?: string[];
    client?: string;
    status: 'live' | 'development' | 'completed';
    themeColor: 'cyan' | 'purple' | 'emerald';
}

interface Particle {
    id: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
}

const projects: Project[] = [
    {
        id: 'boardsmith',
        title: 'Board Smith',
        description: 'Full-stack board-meeting and productivity platform powered by Next.js 15, Tailwind, and TypeScript Express backend.',
        techStack: ['Next.js 15', 'TypeScript', 'Express.js', 'Prisma', 'PostgreSQL', 'Supabase', 'Tailwind', 'Turborepo'],
        role: 'Full-Stack Architect & Lead Developer',
        outcome: 'Architected production-grade backend with clean-layered Express + Prisma stack, DI containers, strict TypeScript, Supabase JWT validation, rate limiting.',
        detailedResponsibilities: [
            'Gathered and validated requirements with client',
            'Designed comprehensive database schema',
            'Architected production-grade backend with clean-layered Express + Prisma stack',
            'Implemented DI containers, strict TypeScript, and Supabase JWT validation',
            'Led Next.js/Tailwind implementation with Auth context and collaborative UI'
        ],
        keyFeatures: [
            'AI-assisted board paper creation with custom Tiptap editor',
            'Automatic conversion to presentation-ready slides',
            'Real-time collaboration capabilities',
            'Customizable boards with Turborepo workspace strategy'
        ],
        technicalHighlights: [
            'Clean-layered architecture (controllers → services → models)',
            'Rate limiting and graceful ops tooling',
            'Modern frontend workflows with consistent dev/build/test'
        ],
        status: 'development',
        themeColor: 'purple'
    },
    {
        id: 'ieims',
        title: 'IEIMS - Integrated Educational Information Management System',
        description: 'National-scale educational software serving all education boards of Bangladesh.',
        techStack: ['Next.js', 'TypeScript', 'Monorepo', 'SWC', 'Custom Component Library'],
        role: 'Frontend Lead & Module Developer',
        outcome: 'Built monorepo architecture and developed 4 major modules serving millions of students nationwide.',
        client: 'All Education Boards of Bangladesh',
        detailedResponsibilities: [
            'Built monorepo architecture for the entire project',
            'Developed transpilation scripts using SWC for custom component library',
            'Led frontend development for CDR, PMC modules',
            'Contributed major portions to MST and EAP modules'
        ],
        keyFeatures: [
            'CDR (Centre Daily Report): Live attendance tracking during SSC/HSC exams, bundle creation',
            'PMC (Practical Mark Collection): Mark validation and submission, report generation',
            'MST (Master Data): Curriculum/session/exam creation, static data management',
            'EAP (Examiner Assign Pay): Complete examiner workflow from invitation to scrutiny'
        ],
        technicalHighlights: [
            'Monorepo architecture with custom build tooling',
            'Real-time reporting during national exams',
            'Comprehensive data validation and submission workflows',
            'Multi-module integration with shared component library'
        ],
        status: 'live',
        themeColor: 'cyan'
    },
    {
        id: 'crvs',
        title: 'CRVS - Civil Registration and Vital Statistics',
        description: 'Student registration & identification system with birth certificate verification and enrollment tracking.',
        techStack: ['Angular', 'PostgreSQL', 'NID Integration', 'BRN Integration'],
        role: 'Performance Engineer & Bug Fix Specialist',
        outcome: 'Fixed critical integration issues and achieved significant system performance improvements.',
        detailedResponsibilities: [
            'Fixed existing project issues and bugs',
            'Resolved NID and BRN integration problems',
            'Corrected wrong business logic implementations',
            'Optimized overall system performance'
        ],
        keyFeatures: [
            'Student registration and identification',
            'Birth certificate verification',
            'School enrollment tracking',
            'Dropout monitoring',
            'Migration and transfer records management'
        ],
        technicalHighlights: [
            'Third-party API integration (NID, BRN)',
            'Database query optimization',
            'Business logic refactoring'
        ],
        status: 'completed',
        themeColor: 'emerald'
    },
    {
        id: 'rjsc',
        title: 'RJSC - Register of Joint Stock Companies & Firms',
        description: 'Comprehensive company registration system handling all types of company registrations.',
        techStack: ['Angular', 'Node.js', 'PostgreSQL', 'NID API', 'TIN API', 'Docker'],
        role: 'Core Feature Developer',
        outcome: 'Developed core features and integrated 3rd party APIs, optimized for high-traffic loads.',
        detailedResponsibilities: [
            'Developed dynamic form creation system',
            'Built comprehensive report generation engine',
            'Integrated NID and TIN third-party APIs',
            'Optimized data display for high traffic scenarios'
        ],
        keyFeatures: [
            'All company types: private, public, one-person, partnership, foreign',
            'Business name clearance before registration',
            'Annual filing and compliance management',
            'Share transfer and consolidation',
            'Company address changes and lifecycle management'
        ],
        technicalHighlights: [
            'Dynamic form builder with validation',
            'High-performance data rendering',
            'Third-party API integration and error handling',
            'Docker containerization for deployment'
        ],
        status: 'live',
        themeColor: 'purple'
    },
    {
        id: 'ai-assistant',
        title: 'AI Assistant - Universal Chat Widget',
        description: 'Plug-and-play AI bot that seamlessly integrates into any frontend application.',
        techStack: ['React', 'Vue', 'Angular', 'JavaScript', 'RAG', 'AI/ML', 'OCR'],
        role: 'Full-Stack Developer & AI Integration Specialist',
        outcome: 'Built universal chat widget with cross-framework compatibility and advanced document processing.',
        detailedResponsibilities: [
            'Built plug-and-play bot for any frontend framework',
            'Optimized RAG (Retrieval-Augmented Generation) performance',
            'Implemented robust document extraction pipeline',
            'Developed Bengali text and non-Unicode font processing'
        ],
        keyFeatures: [
            'Cross-framework compatibility (React, Vue, Angular, Vanilla JS)',
            'Optimized RAG performance',
            'Multi-format document extraction (images, PDFs)',
            'Bengali text processing with SutonnyMJ font support'
        ],
        technicalHighlights: [
            'Framework-agnostic architecture',
            'Advanced OCR with Bengali language support',
            'RAG optimization for accurate responses',
            'Non-Unicode font handling (SutonnyMJ)'
        ],
        status: 'completed',
        themeColor: 'cyan'
    }
];

export function ProjectsGrid() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate particles only on the client to avoid SSR/client mismatch
        const generated: Particle[] = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 2,
            duration: 3 + Math.random() * 2,
        }));

        setParticles(generated);
    }, []);

    return (
        <section id="projects" className="relative py-32 bg-gradient-to-b from-space-medium to-space-dark overflow-hidden">
            {/* Parallax Background Layers */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,217,255,0.08),transparent_50%)]"
            />
            <motion.div
                style={{ y: y2, opacity }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_50%)]"
            />

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-accent-cyan/30 rounded-full"
                        style={{
                            left: particle.left,
                            top: particle.top,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-8 relative z-10" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 mb-4">
                        <Rocket className="w-4 h-4 text-accent-cyan" />
                        <span className="text-sm font-mono text-accent-cyan">COMPLETED MISSIONS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Project Portfolio
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Mission-critical systems built for scale, performance, and reliability
                    </p>
                </motion.div>

                {/* Projects Timeline */}
                <div className="max-w-6xl mx-auto space-y-12">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

    const colorThemes = {
        cyan: {
            border: 'border-accent-cyan/30 hover:border-accent-cyan/50',
            shadow: 'hover:shadow-[0_0_40px_rgba(0,217,255,0.2)]',
            gradient: 'from-accent-cyan/10 to-transparent',
            text: 'text-accent-cyan',
            bg: 'bg-accent-cyan/10',
            badge: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40'
        },
        purple: {
            border: 'border-accent-purple/30 hover:border-accent-purple/50',
            shadow: 'hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]',
            gradient: 'from-accent-purple/10 to-transparent',
            text: 'text-accent-purple',
            bg: 'bg-accent-purple/10',
            badge: 'bg-accent-purple/20 text-accent-purple border-accent-purple/40'
        },
        emerald: {
            border: 'border-accent-emerald/30 hover:border-accent-emerald/50',
            shadow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]',
            gradient: 'from-accent-emerald/10 to-transparent',
            text: 'text-accent-emerald',
            bg: 'bg-accent-emerald/10',
            badge: 'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/40'
        }
    };

    const theme = colorThemes[project.themeColor];
    const isEven = index % 2 === 0;

    // Animation for status
    const getStatusAnimation = () => {
        switch (project.status) {
            case 'development':
                return { animation: rocketAnimation, icon: Rocket };
            case 'live':
                return { animation: satelliteAnimation, icon: Satellite };
            case 'completed':
                return { animation: checkmarkAnimation, icon: CheckCircle2 };
        }
    };

    const statusInfo = getStatusAnimation();

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={cardInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
        >
            {/* Timeline Connector */}
            {index < projects.length - 1 && (
                <div className="absolute left-1/2 -bottom-12 w-0.5 h-12 bg-gradient-to-b from-white/20 to-transparent transform -translate-x-1/2 hidden lg:block" />
            )}

            <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                className={`relative bg-space-medium/60 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-500 group ${theme.border} ${theme.shadow}`}
            >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

                <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-2">
                                <h3 className={`text-2xl lg:text-3xl font-display font-bold text-white group-hover:${theme.text} transition-colors`}>
                                    {project.title}
                                </h3>
                                {/* Lottie Animation */}
                                <div className="w-12 h-12 flex-shrink-0">
                                    <Lottie
                                        animationData={statusInfo.animation}
                                        loop={true}
                                        className="w-full h-full"
                                    />
                                </div>
                            </div>
                            {project.client && (
                                <p className="text-sm text-gray-400 mb-3">
                                    <span className="font-mono text-accent-purple">Client:</span> {project.client}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                        {project.description}
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className={`p-4 rounded-lg ${theme.bg} border ${theme.border}`}>
                            <span className={`text-sm font-mono ${theme.text} block mb-1`}>Role</span>
                            <span className="text-white text-sm">{project.role}</span>
                        </div>
                        <div className={`p-4 rounded-lg ${theme.bg} border ${theme.border}`}>
                            <span className={`text-sm font-mono ${theme.text} block mb-1`}>Status</span>
                            <span className="text-white text-sm capitalize flex items-center gap-2">
                                <statusInfo.icon className="w-4 h-4" />
                                {project.status}
                            </span>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                        <h4 className="text-sm font-mono text-gray-400 mb-3">TECH STACK</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className={`px-3 py-1.5 text-xs font-mono ${theme.badge} border rounded-full transition-all`}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Expandable Details */}
                    <motion.div
                        initial={false}
                        animate={{ height: isExpanded ? 'auto' : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 border-t border-white/10 space-y-6">
                            {/* Detailed Responsibilities */}
                            {project.detailedResponsibilities && (
                                <div>
                                    <h4 className={`text-sm font-mono ${theme.text} mb-3 flex items-center gap-2`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                        RESPONSIBILITIES
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.detailedResponsibilities.map((resp, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: i * 0.05 }}
                                                className="text-gray-300 text-sm flex items-start gap-2"
                                            >
                                                <span className={`${theme.text} mt-1.5`}>▸</span>
                                                <span>{resp}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Key Features */}
                            {project.keyFeatures && (
                                <div>
                                    <h4 className={`text-sm font-mono ${theme.text} mb-3 flex items-center gap-2`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                        KEY FEATURES
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.keyFeatures.map((feature, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: i * 0.05 }}
                                                className="text-gray-300 text-sm flex items-start gap-2"
                                            >
                                                <span className={`${theme.text} mt-1.5`}>▸</span>
                                                <span>{feature}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Technical Highlights */}
                            {project.technicalHighlights && (
                                <div>
                                    <h4 className={`text-sm font-mono ${theme.text} mb-3 flex items-center gap-2`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                        TECHNICAL HIGHLIGHTS
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.technicalHighlights.map((highlight, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: i * 0.05 }}
                                                className="text-gray-300 text-sm flex items-start gap-2"
                                            >
                                                <span className={`${theme.text} mt-1.5`}>▸</span>
                                                <span>{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Outcome */}
                            <div className={`p-4 rounded-lg ${theme.bg} border ${theme.border}`}>
                                <h4 className={`text-sm font-mono ${theme.text} mb-2`}>OUTCOME & IMPACT</h4>
                                <p className="text-gray-300 text-sm">{project.outcome}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Expand/Collapse Button */}
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`mt-6 w-full py-3 px-6 rounded-lg border ${theme.border} ${theme.bg} ${theme.text} font-mono text-sm flex items-center justify-center gap-2 transition-all hover:${theme.shadow}`}
                    >
                        {isExpanded ? (
                            <>
                                <ChevronUp className="w-4 h-4" />
                                Show Less
                            </>
                        ) : (
                            <>
                                <ChevronDown className="w-4 h-4" />
                                Show More Details
                            </>
                        )}
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
}
