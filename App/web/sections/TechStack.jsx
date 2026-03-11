'use client';

import { motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';

const techItems = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'Supabase', color: '#3FCF8E' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'Git', color: '#F05032' },
    { name: 'GitHub', color: '#ffffff' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Vercel', color: '#ffffff' },
    { name: 'Framer Motion', color: '#FF4154' },
    { name: 'REST APIs', color: '#00f0ff' },
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
];

export default function TechStack() {
    return (
        <section id="techstack" className="section-padding relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Tech Stack
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full mb-4" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        The tools and technologies I work with every day
                    </p>
                </MotionWrapper>

                {/* Badge grid */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
                    {techItems.map((tech, i) => (
                        <MotionWrapper key={i} delay={i * 0.03} direction="scale">
                            <motion.div
                                whileHover={{ scale: 1.1, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass gradient-border rounded-xl px-5 py-3 flex items-center gap-3 cursor-default group"
                            >
                                <div
                                    className="w-2.5 h-2.5 rounded-full shrink-0 group-hover:shadow-[0_0_10px_currentColor] transition-shadow"
                                    style={{ backgroundColor: tech.color, color: tech.color }}
                                />
                                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </motion.div>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Marquee row */}
                <div className="mt-12 overflow-hidden relative">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030712] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030712] to-transparent z-10" />
                    <div className="animate-marquee flex gap-8 whitespace-nowrap">
                        {[...techItems, ...techItems].map((tech, i) => (
                            <span key={i} className="text-slate-700 text-sm font-mono">
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
