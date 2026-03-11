'use client';

import MotionWrapper from '../components/MotionWrapper';
import TiltCard from '../components/TiltCard';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        category: 'Languages',
        skills: ['Python', 'JavaScript', 'TypeScript'],
        gradient: 'from-cyan-400 to-blue-500',
        glow: 'rgba(0, 240, 255, 0.12)',
    },
    {
        category: 'Frontend',
        skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Next.js'],
        gradient: 'from-blue-400 to-purple-500',
        glow: 'rgba(96, 165, 250, 0.12)',
    },
    {
        category: 'Backend',
        skills: ['Supabase', 'REST APIs'],
        gradient: 'from-purple-400 to-pink-500',
        glow: 'rgba(139, 92, 246, 0.12)',
    },
    {
        category: 'Databases',
        skills: ['PostgreSQL'],
        gradient: 'from-pink-400 to-red-500',
        glow: 'rgba(236, 72, 153, 0.12)',
    },
    {
        category: 'Tools',
        skills: ['Git', 'GitHub', 'VS Code', 'Vercel'],
        gradient: 'from-orange-400 to-yellow-500',
        glow: 'rgba(251, 146, 60, 0.12)',
    },
    {
        category: 'Concepts',
        skills: ['DSA', 'Authentication', 'API Integration', 'Responsive UI', 'Production Deployments'],
        gradient: 'from-emerald-400 to-cyan-500',
        glow: 'rgba(52, 211, 153, 0.12)',
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding relative overflow-hidden">
            <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-neon-cyan/3 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-neon-purple/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full mb-4" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable applications
                    </p>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, ci) => (
                        <MotionWrapper key={ci} delay={ci * 0.08}>
                            <TiltCard glowColor={cat.glow} className="h-full">
                                <div className="glass gradient-border rounded-2xl p-6 h-full">
                                    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                                        {cat.category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map((skill, si) => (
                                            <motion.span
                                                key={si}
                                                whileHover={{ scale: 1.08, y: -2 }}
                                                className={`px-3 py-1.5 text-sm rounded-full glass border border-white/10 text-slate-300 hover:text-white hover:border-white/20 cursor-default transition-colors`}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </TiltCard>
                        </MotionWrapper>
                    ))}
                </div>

                <MotionWrapper delay={0.6} className="mt-16 text-center">
                    <p className="text-slate-400 text-lg">
                        Always learning, always growing. Currently exploring{' '}
                        <span className="text-neon-cyan font-semibold">AI integrations</span> and{' '}
                        <span className="text-neon-purple font-semibold">advanced React patterns</span>.
                    </p>
                </MotionWrapper>
            </div>
        </section>
    );
}
