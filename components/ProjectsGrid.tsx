'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, FileText, Rocket } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    role: string;
    outcome: string;
    links: {
        live?: string;
        code?: string;
        caseStudy?: string;
    };
    status: 'live' | 'development' | 'completed';
}

const projects: Project[] = [
    {
        id: 'ieims',
        title: 'IEIMS - National Education System',
        description: 'Government-scale education information management system serving millions of students and institutions across Bangladesh.',
        techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Redis'],
        role: 'Lead Full-Stack Engineer',
        outcome: 'Successfully deployed to production, handling 2M+ records',
        links: {},
        status: 'live'
    },
    {
        id: 'crvs',
        title: 'CRVS Performance Optimization',
        description: 'Critical performance optimization project reducing execution time from ~50s to <4s for civil registration and vital statistics system.',
        techStack: ['Angular', 'PostgreSQL', 'Query Optimization'],
        role: 'Performance Engineer',
        outcome: '92% reduction in query execution time',
        links: {},
        status: 'completed'
    },
    {
        id: 'rjsc',
        title: 'RJSC - Company Registration Portal',
        description: 'Registrar of Joint Stock Companies system for business registration and compliance management.',
        techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
        role: 'Full-Stack Developer',
        outcome: 'Streamlined company registration process nationwide',
        links: {},
        status: 'live'
    },
    {
        id: 'ai-training',
        title: 'AI Training & LLM Evaluation',
        description: 'Specialized work in training and evaluating large language models, with focus on prompt engineering and quality assurance.',
        techStack: ['AI/ML', 'LLMs', 'React', 'TypeScript'],
        role: 'AI Reviewer & Frontend Developer',
        outcome: 'Promoted to reviewer role, 95%+ accuracy rate',
        links: {},
        status: 'live'
    }
];

export function ProjectsGrid() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section id="projects" className="relative py-32 bg-gradient-to-b from-space-medium to-space-dark overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.05),transparent_70%)]" />

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
                    <h2 className="text-5xl font-display font-bold text-white mb-4">
                        Project Portfolio
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Mission-critical systems built for scale, performance, and reliability
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

    const statusColors = {
        live: 'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/40',
        development: 'bg-accent-purple/20 text-accent-purple border-accent-purple/40',
        completed: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/40',
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            animate={cardInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, boxShadow: '0 0 40px rgba(0, 217, 255, 0.15)' }}
            className="bg-space-medium/60 backdrop-blur-xl border border-white/10 rounded-xl p-8 hover:border-accent-cyan/30 transition-all duration-300 group"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {project.title}
                </h3>
                <span className={`px-3 py-1 text-xs font-mono border rounded-full ${statusColors[project.status]}`}>
                    {project.status}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
            </p>

            {/* Role & Outcome */}
            <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2">
                    <span className="text-accent-cyan text-sm font-mono">Role:</span>
                    <span className="text-gray-400 text-sm">{project.role}</span>
                </div>
                <div className="flex items-start gap-2">
                    <span className="text-accent-emerald text-sm font-mono">Outcome:</span>
                    <span className="text-gray-400 text-sm">{project.outcome}</span>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-2 py-1 text-xs font-mono bg-accent-purple/10 text-accent-purple border border-accent-purple/30 rounded"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            {(project.links.live || project.links.code || project.links.caseStudy) && (
                <div className="flex gap-3 pt-4 border-t border-white/10">
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live
                        </a>
                    )}
                    {project.links.code && (
                        <a
                            href={project.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    )}
                    {project.links.caseStudy && (
                        <a
                            href={project.links.caseStudy}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-accent-cyan hover:text-accent-cyan/80 transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            Case Study
                        </a>
                    )}
                </div>
            )}
        </motion.div>
    );
}
