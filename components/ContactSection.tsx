'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export function ContactSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: '-100px' });

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: 'shadman.shahriar@example.com',
            href: 'mailto:shadman.shahriar@example.com',
            color: 'cyan'
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: 'LinkedIn',
            value: 'Connect on LinkedIn',
            href: 'https://linkedin.com',
            color: 'purple'
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: 'GitHub',
            value: 'View repositories',
            href: 'https://github.com',
            color: 'emerald'
        }
    ];

    return (
        <section id="contact" className="relative py-32 bg-gradient-to-b from-space-dark to-space-medium overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,217,255,0.1),transparent_50%)]" />

            <div className="container mx-auto px-8 relative z-10" ref={containerRef}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Header */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 mb-6">
                        <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                        <span className="text-sm font-mono text-accent-cyan">MISSION CONTROL</span>
                    </div>

                    <h2 className="text-5xl font-display font-bold text-white mb-6">
                        Ready to Dock
                    </h2>

                    <p className="text-xl text-gray-300 mb-4">
                        Let's collaborate on building mission-critical systems
                    </p>

                    <p className="text-gray-400 mb-12">
                        Specializing in <strong className="text-white">AI integration</strong>,
                        <strong className="text-white"> performance optimization</strong>, and
                        <strong className="text-white"> large-scale systems</strong>.
                        Based in Dhaka, Bangladesh 🇧🇩
                    </p>

                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.label}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`bg-space-medium/60 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-accent-${method.color}/30 transition-all duration-300 group`}
                            >
                                <div className={`text-accent-${method.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                                    {method.icon}
                                </div>
                                <h3 className="text-white font-semibold mb-1">{method.label}</h3>
                                <p className="text-sm text-gray-400">{method.value}</p>
                            </motion.a>
                        ))}
                    </div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex items-center justify-center gap-2 text-gray-400"
                    >
                        <MapPin className="w-4 h-4 text-accent-cyan" />
                        <span className="text-sm">Dhaka, Bangladesh • Available for remote opportunities</span>
                    </motion.div>

                    {/* Closing Statement */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-16 pt-8 border-t border-white/10"
                    >
                        <p className="text-gray-400 text-sm">
                            Future trajectory: <span className="text-accent-cyan">AI-powered systems</span> •
                            <span className="text-accent-purple"> Performance at scale</span> •
                            <span className="text-accent-emerald"> Government & enterprise solutions</span>
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-30" />
        </section>
    );
}
