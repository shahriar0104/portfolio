'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Wrench, Layers, Terminal } from 'lucide-react';

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    skills: string[];
    color: string;
}

const skillCategories: SkillCategory[] = [
    {
        id: 'javascript-frameworks',
        title: 'JavaScript Frameworks',
        icon: <Code2 className="w-5 h-5" />,
        skills: ['Next.js', 'React.js', 'Angular', 'jQuery'],
        color: 'cyan'
    },
    {
        id: 'nodejs-frameworks',
        title: 'Node.js Frameworks',
        icon: <Layers className="w-5 h-5" />,
        skills: ['Express.js', 'NestJS'],
        color: 'purple'
    },
    {
        id: 'java-frameworks',
        title: 'Java Frameworks',
        icon: <Terminal className="w-5 h-5" />,
        skills: ['Spring Boot', 'Spring MVC'],
        color: 'emerald'
    },
    {
        id: 'relational-databases',
        title: 'Relational Databases',
        icon: <Database className="w-5 h-5" />,
        skills: ['Oracle', 'MySQL', 'SQL Server', 'PostgreSQL', 'Supabase', 'SQLite'],
        color: 'cyan'
    },
    {
        id: 'nosql-databases',
        title: 'NoSQL Databases',
        icon: <Database className="w-5 h-5" />,
        skills: ['MongoDB', 'Firebase'],
        color: 'purple'
    },
    {
        id: 'cloud-services',
        title: 'Cloud & Virtualization',
        icon: <Cloud className="w-5 h-5" />,
        skills: ['Docker', 'AWS', 'Wasabi', 'Vercel'],
        color: 'emerald'
    },
    {
        id: 'miscellaneous',
        title: 'Miscellaneous Expertise',
        icon: <Wrench className="w-5 h-5" />,
        skills: ['CSS3', 'HTML5', 'Debian/Ubuntu Server', 'Tomcat', 'Agile/Scrum', 'Maven', 'Git', 'IntelliJ IDEA', 'VS Code'],
        color: 'cyan'
    }
];

export function SkillsDashboard() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="relative py-32 bg-gradient-to-b from-space-dark to-space-medium overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent_50%)]" />

            <div className="container mx-auto px-8 relative z-10" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-emerald/30 bg-accent-emerald/5 mb-4">
                        <Terminal className="w-4 h-4 text-accent-emerald" />
                        <span className="text-sm font-mono text-accent-emerald">TECH ARSENAL</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Control Systems
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Mission-critical technologies for building scalable, performant systems
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <SkillPanel
                            key={category.id}
                            category={category}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillPanel({ category, index, isInView }: { category: SkillCategory; index: number; isInView: boolean }) {
    const panelRef = useRef(null);
    const panelInView = useInView(panelRef, { once: true, margin: '-50px' });

    const colorMap: Record<string, string> = {
        cyan: 'border-accent-cyan/30 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,217,255,0.2)]',
        purple: 'border-accent-purple/30 hover:border-accent-purple/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]',
        emerald: 'border-accent-emerald/30 hover:border-accent-emerald/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]',
    };

    const iconColorMap: Record<string, string> = {
        cyan: 'text-accent-cyan',
        purple: 'text-accent-purple',
        emerald: 'text-accent-emerald',
    };

    return (
        <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 30 }}
            animate={panelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className={`bg-space-medium/60 backdrop-blur-xl border rounded-xl p-6 transition-all duration-300 ${colorMap[category.color]}`}
        >
            {/* Panel Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className={`${iconColorMap[category.color]}`}>
                    {category.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                    {category.title}
                </h3>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                    <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={panelInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                        className={`px-3 py-1 text-xs font-mono bg-${category.color === 'cyan' ? 'accent-cyan' : category.color === 'purple' ? 'accent-purple' : 'accent-emerald'}/10 text-${category.color === 'cyan' ? 'accent-cyan' : category.color === 'purple' ? 'accent-purple' : 'accent-emerald'} border border-${category.color === 'cyan' ? 'accent-cyan' : category.color === 'purple' ? 'accent-purple' : 'accent-emerald'}/30 rounded-full hover:scale-105 transition-transform`}
                        style={{
                            backgroundColor: category.color === 'cyan' ? 'rgba(0, 217, 255, 0.1)' : category.color === 'purple' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                            color: category.color === 'cyan' ? '#00d9ff' : category.color === 'purple' ? '#a855f7' : '#10b981',
                            borderColor: category.color === 'cyan' ? 'rgba(0, 217, 255, 0.3)' : category.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' : 'rgba(16, 185, 129, 0.3)',
                        }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}
