'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Dynamically import Globe with no SSR
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

export function GlobeSection() {
    const globeEl = useRef<any>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (!globeEl.current) return;

        // Start focused on Dhaka
        globeEl.current.pointOfView({ lat: 23.8103, lng: 90.4125, altitude: 1.5 }, 0);

        // After a moment, zoom out to show the world
        setTimeout(() => {
            setIsReady(true);
            // Pull back to show global view
            globeEl.current.pointOfView(
                { lat: 20, lng: 0, altitude: 2.5 },
                3000
            );
        }, 1000);
    }, []);

    const markerData = [
        {
            lat: 23.8103,
            lng: 90.4125,
            size: 1.2,
            color: '#00d9ff',
            label: 'Dhaka, Bangladesh'
        }
    ];

    return (
        <section id="globe" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-space-dark to-space-medium">
            {/* Background stars - same as main page */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />

            {/* Fullscreen Globe - No Container */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="pointer-events-none"
                    style={{
                        // Disable all interactions with the globe
                        userSelect: 'none',
                        touchAction: 'none',
                    }}
                >
                    <Globe
                        ref={globeEl}
                        width={typeof window !== 'undefined' ? window.innerWidth : 1920}
                        height={typeof window !== 'undefined' ? window.innerHeight : 1080}
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        backgroundColor="rgba(0,0,0,0)"

                        // Marker for Dhaka
                        pointsData={markerData}
                        pointAltitude={0.01}
                        pointRadius={0.8}
                        pointColor="color"
                        pointLabel="label"

                        // Rings animation around Dhaka
                        ringsData={markerData}
                        ringColor={() => '#00d9ff'}
                        ringMaxRadius={4}
                        ringPropagationSpeed={2}
                        ringRepeatPeriod={1500}

                        // Atmosphere
                        atmosphereColor="#00d9ff"
                        atmosphereAltitude={0.15}

                        // Animation
                        animateIn={true}
                    />
                </div>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 text-center px-8 max-w-4xl mx-auto pointer-events-none">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-emerald/30 bg-accent-emerald/10 backdrop-blur-xl mb-4">
                        <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                        <span className="text-sm font-mono text-accent-emerald">LAUNCH TRAJECTORY</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-[0_0_30px_rgba(0,217,255,0.5)]">
                        Based in Dhaka
                        <br />
                        <span className="bg-gradient-to-r from-accent-emerald via-accent-cyan to-accent-purple bg-clip-text text-transparent">
                            Ready for Global Missions
                        </span>
                    </h2>
                    <p className="text-xl text-gray-200 leading-relaxed drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                        Starting my journey from <strong className="text-accent-cyan">Dhaka, Bangladesh</strong> 🇧🇩
                        <br />
                        Ready to launch anywhere in the world for the next career opportunity
                    </p>
                </motion.div>

                {/* Status text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isReady ? 1 : 0 }}
                    transition={{ delay: 3.5, duration: 0.8 }}
                    className="mt-12"
                >
                    <div className="inline-flex flex-col gap-2 px-6 py-4 rounded-xl bg-space-dark/80 backdrop-blur-xl border border-accent-cyan/30">
                        <p className="text-accent-cyan font-mono text-sm">
                            ✓ Home base: Dhaka, Bangladesh
                        </p>
                        <p className="text-gray-300 text-sm">
                            🌍 Open to opportunities worldwide
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-dark/30 to-space-medium pointer-events-none" />
        </section>
    );
}
