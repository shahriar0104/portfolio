'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, Rocket } from 'lucide-react';

interface Mission {
    id: string;
    company: string;
    role: string;
    period: string;
    achievements: string[];
    techStack: string[];
}

const missions: Mission[] = [
    {
        id: 'outlier',
        company: 'Outlier AI',
        role: 'AI Training & Frontend Development',
        period: '2023 - Present',
        achievements: [
            'Promoted to reviewer based on exceptional performance in AI training tasks',
            'Specialized in LLM evaluation and prompt engineering for production systems',
            'Contributed to frontend development for AI-powered applications',
            'Maintained 95%+ accuracy rate across training assignments'
        ],
        techStack: ['React', 'TypeScript', 'AI/ML', 'LLMs']
    },
    {
        id: 'dsi',
        company: 'Dynamic Solution Innovators',
        role: 'Full-Stack Engineer',
        period: '2021 - 2023',
        achievements: [
            'Reduced CRVS execution time from ~50s to <4s through query optimization',
            'Architected modules end-to-end for national education information system (IEIMS)',
            'Built government-scale systems serving millions of users (RJSC, CRVS)',
            'Led performance optimization initiatives across multiple projects',
            'Implemented real-time data synchronization for critical government services'
        ],
        techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Redis', 'Docker']
    },
    {
        id: 'frenclub',
        company: 'Frenclub Mobile',
        role: 'Junior Software Engineer',
        period: '2019 - 2021',
        achievements: [
            'Developed logistics and delivery management systems',
            'Built responsive web applications using Angular framework',
            'Collaborated with cross-functional teams on product features',
            'Gained foundational experience in full-stack development'
        ],
        techStack: ['Angular', 'TypeScript', 'REST APIs']
    }
];

export function CareerTimeline() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    return (
        <section id="career" className="relative py-32 bg-gradient-to-b from-space-medium to-space-dark overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />

            <div className="container mx-auto px-8 relative z-10" ref={containerRef}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-purple/30 bg-accent-purple/5 mb-4">
                        <Rocket className="w-4 h-4 text-accent-purple" />
                        <span className="text-sm font-mono text-accent-purple">MISSION LOGS</span>
                    </div>
                    <h2 className="text-5xl font-display font-bold text-white mb-4">
                        Career Trajectory
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A journey through mission-critical systems, from logistics to government-scale platforms
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Flight Path Line */}
                    <div className="hidden lg:block absolute left-[15%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-emerald opacity-30" />

                    {/* Active Progress Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={isInView ? { height: '100%' } : {}}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        className="hidden lg:block absolute left-[15%] top-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-emerald"
                    />

                    {/* Mission Cards */}
                    <div className="space-y-16">
                        {missions.map((mission, index) => (
                            <MissionCard
                                key={mission.id}
                                mission={mission}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function MissionCard({ mission, index, isInView }: { mission: Mission; index: number; isInView: boolean }) {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, x: 100 }}
            animate={cardInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start gap-8"
        >
            {/* Node on flight path */}
            <div className="hidden lg:block absolute left-[15%] -translate-x-1/2 top-8">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={cardInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className="relative"
                >
                    {/* Outer ring */}
                    <div className="w-6 h-6 rounded-full border-2 border-accent-cyan bg-space-dark flex items-center justify-center">
                        {/* Inner dot */}
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-cyan" />
                    </div>

                    {/* Pulse effect */}
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                        className="absolute inset-0 rounded-full border-2 border-accent-cyan"
                    />
                </motion.div>
            </div>

            {/* Spacer for left column on desktop */}
            <div className="hidden lg:block w-[15%]" />

            {/* Mission Card */}
            <motion.div
                whileHover={{ y: -4, boxShadow: '0 0 40px rgba(0, 217, 255, 0.2)' }}
                transition={{ duration: 0.3 }}
                className="flex-1 bg-space-medium/60 backdrop-blur-xl border border-white/10 rounded-xl p-8 group cursor-pointer hover:border-accent-cyan/30"
            >
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <Building2 className="w-5 h-5 text-accent-cyan flex-shrink-0" />
                            <h3 className="text-2xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                                {mission.company}
                            </h3>
                        </div>
                        <p className="text-lg text-gray-300 font-medium">{mission.role}</p>
                    </div>

                    <div className="flex items-center gap-2 text-accent-cyan/70">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-mono">{mission.period}</span>
                    </div>
                </div>

                {/* Mission Logs */}
                <div className="space-y-3 mb-6">
                    {mission.achievements.map((achievement, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={cardInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 + 0.1 * i }}
                            className="flex items-start gap-3 text-gray-300"
                        >
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {mission.techStack.map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={cardInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: index * 0.2 + 0.05 * i }}
                            className="px-3 py-1 text-xs font-mono bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 rounded-full hover:bg-accent-cyan/20 hover:scale-105 transition-all"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
