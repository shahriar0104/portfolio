'use client';
import { motion } from 'framer-motion';
import { RocketAnimation } from './RocketAnimation';
import { MapPin, Code2, TrendingUp } from 'lucide-react';

export function LaunchPad() {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Mission Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="space-y-8"
                    >
                        {/* Mission ID */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5"
                        >
                            <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                            <span className="text-sm font-mono text-accent-cyan">MISSION: SHADMAN-01</span>
                        </motion.div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl lg:text-6xl font-display font-bold text-white leading-tight"
                            >
                                Full-Stack Launch
                                <br />
                                <span className="bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-emerald bg-clip-text text-transparent">
                                    From Dhaka to Orbit
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-gray-300 leading-relaxed max-w-xl"
                            >
                                Building production systems like launch missions: <strong className="text-white">precise</strong>,
                                <strong className="text-white"> redundant</strong>, and <strong className="text-white">highly optimized</strong>.
                                Every line of code engineered for scale, performance, and reliability.
                            </motion.p>
                        </div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-4"
                        >
                            <button
                                onClick={() => scrollToSection('career')}
                                className="group relative px-8 py-4 bg-accent-cyan text-space-dark font-semibold rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,217,255,0.5)]"
                            >
                                <span className="relative z-10">Start the Journey</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>

                            <button
                                onClick={() => scrollToSection('projects')}
                                className="px-8 py-4 border-2 border-accent-cyan/50 text-accent-cyan font-semibold rounded-lg hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all hover:scale-105"
                            >
                                View Missions
                            </button>
                        </motion.div>

                        {/* Info Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
                        >
                            <InfoCard
                                icon={<MapPin className="w-5 h-5" />}
                                label="Base"
                                value="Dhaka, Bangladesh"
                            />
                            <InfoCard
                                icon={<Code2 className="w-5 h-5" />}
                                label="Stack"
                                value="Next.js, React, Node"
                            />
                            <InfoCard
                                icon={<TrendingUp className="w-5 h-5" />}
                                label="Trajectory"
                                value="Gov-scale systems"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right: Rocket Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
                        className="relative flex justify-center"
                    >
                        <RocketAnimation />
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 border-2 border-accent-cyan/50 rounded-full flex items-start justify-center p-2"
                >
                    <div className="w-1.5 h-1.5 bg-accent-cyan rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}

// Info Card Component
function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="space-y-1">
            <div className="flex items-center gap-2 text-accent-cyan/70">
                {icon}
                <span className="text-xs font-mono uppercase tracking-wider">{label}</span>
            </div>
            <p className="text-sm text-white font-medium">{value}</p>
        </div>
    );
}
