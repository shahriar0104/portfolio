'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const navItems = [
    { id: 'hero', label: 'Launch' },
    { id: 'career', label: 'Journey' },
    { id: 'skills', label: 'Arsenal' },
    { id: 'projects', label: 'Missions' },
    { id: 'contact', label: 'Contact' },
];

export function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navItems.map(item => item.id);
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId === 'hero' ? '' : sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-space-dark/80 backdrop-blur-xl border-b border-white/10'
                    : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Rocket className="w-5 h-5 text-white" />
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-display font-bold text-white text-lg">Shadman Shahriar</div>
                            <div className="text-xs text-accent-cyan font-mono">Full-Stack Engineer</div>
                        </div>
                    </button>

                    {/* Nav Items */}
                    <div className="flex items-center gap-1 bg-space-medium/60 backdrop-blur-xl border border-white/10 rounded-full px-2 py-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute inset-0 bg-accent-cyan/20 border border-accent-cyan/30 rounded-full"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
