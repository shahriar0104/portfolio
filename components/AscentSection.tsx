'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export function AscentSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effects for different star layers
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -450]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section ref={ref} className="relative h-[80vh] overflow-hidden bg-gradient-to-b from-space-medium to-space-dark">
            {/* Star layers with parallax */}
            <motion.div style={{ y: y1, opacity }} className="absolute inset-0">
                <Stars count={30} size="small" />
            </motion.div>

            <motion.div style={{ y: y2, opacity }} className="absolute inset-0">
                <Stars count={20} size="medium" />
            </motion.div>

            <motion.div style={{ y: y3, opacity }} className="absolute inset-0">
                <Stars count={15} size="large" />
            </motion.div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-space-dark/50 to-space-dark" />

            {/* Optional text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    style={{ opacity }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-display font-bold text-white/80">
                        Ascending to Orbit
                    </h2>
                    <p className="text-gray-400 mt-2 font-mono text-sm">
                        Trajectory: Stable
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

// Star field component
function Stars({ count, size }: { count: number; size: 'small' | 'medium' | 'large' }) {
    const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: number }>>([]);

    useEffect(() => {
        // Generate stars only on client-side to avoid hydration mismatch
        setStars(
            Array.from({ length: count }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: Math.random() * 3,
            }))
        );
    }, [count]);

    const sizeMap = {
        small: 'w-0.5 h-0.5',
        medium: 'w-1 h-1',
        large: 'w-1.5 h-1.5'
    };

    return (
        <>
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className={`absolute ${sizeMap[size]} bg-white rounded-full`}
                    style={{
                        left: star.left,
                        top: star.top,
                    }}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </>
    );
}
