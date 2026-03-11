'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, CheckCircle } from 'lucide-react';
import MotionWrapper from '../components/MotionWrapper';
import TiltCard from '../components/TiltCard';

const projects = [
    {
        title: 'Monthly Budget Tracker',
        description: 'A comprehensive budget management application that helps users track income, expenses, and spending patterns. Built with modern web technologies and deployed on Vercel.',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'Vercel'],
        features: [
            'Income and expense tracking with category-based organization',
            'Interactive analytics dashboard with spend trend charts',
            'Secure data storage with Supabase authentication',
            'Real-time budget calculations and insights',
            'Responsive design for mobile and desktop',
        ],
        githubUrl: 'https://github.com/lukeewarmcoder',
        liveUrl: null,
        accent: 'from-neon-cyan to-blue-500',
        glow: 'rgba(0, 240, 255, 0.15)',
    },
    {
        title: 'Personal AI Assistant (Jarvis)',
        description: 'An intelligent AI-powered assistant designed to enhance developer productivity. Provides coding assistance, debugging support, and automation capabilities.',
        techStack: ['Python', 'JavaScript', 'AI/ML', 'APIs'],
        features: [
            'Intelligent coding assistance and suggestions',
            'Automated debugging and error detection',
            'Task automation for repetitive workflows',
            'Natural language processing for command interpretation',
            'Developer productivity optimization',
        ],
        githubUrl: 'https://github.com/lukeewarmcoder',
        liveUrl: null,
        accent: 'from-neon-purple to-pink-500',
        glow: 'rgba(139, 92, 246, 0.15)',
    },
    {
        title: 'Academic & Personal Projects',
        description: 'A collection of diverse projects showcasing various technologies and problem-solving approaches. Each project represents a learning milestone.',
        techStack: ['React', 'Python', 'JavaScript', 'TypeScript', 'PostgreSQL'],
        features: [
            'Full-stack web applications with modern frameworks',
            'Data structures and algorithms implementations',
            'API integrations and third-party service connections',
            'Responsive UI/UX designs',
            'Production-ready deployments',
        ],
        githubUrl: 'https://github.com/lukeewarmcoder',
        liveUrl: null,
        accent: 'from-pink-500 to-orange-500',
        glow: 'rgba(236, 72, 153, 0.15)',
    },
];

export default function Projects() {
    const [selected, setSelected] = useState(null);

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full mb-4" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A showcase of my work, from full-stack applications to AI-powered tools
                    </p>
                </MotionWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <MotionWrapper key={i} delay={i * 0.1}>
                            <TiltCard glowColor={project.glow} className="h-full">
                                <div
                                    className="glass gradient-border rounded-2xl p-6 sm:p-8 cursor-pointer h-full flex flex-col"
                                    onClick={() => setSelected(project)}
                                >
                                    {/* Title */}
                                    <h3 className={`text-xl sm:text-2xl font-bold mb-3 bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, ti) => (
                                            <span
                                                key={ti}
                                                className="px-2.5 py-1 text-xs rounded-full glass border border-white/10 text-slate-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3 mt-auto">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-cyan transition-colors"
                                            >
                                                <Github size={16} /> Code
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-neon-cyan transition-colors"
                                            >
                                                <ExternalLink size={16} /> Live
                                            </a>
                                        )}
                                        <span className="ml-auto text-xs text-slate-600">Click for details →</span>
                                    </div>
                                </div>
                            </TiltCard>
                        </MotionWrapper>
                    ))}
                </div>

                {/* CTA */}
                <MotionWrapper delay={0.4} className="mt-16 text-center">
                    <p className="text-slate-400 text-lg mb-6">
                        Want to see more? Check out my GitHub for additional projects and contributions.
                    </p>
                    <motion.a
                        href="https://github.com/lukeewarmcoder"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-white rounded-xl font-semibold shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-shadow"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View GitHub Profile
                    </motion.a>
                </MotionWrapper>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                            onClick={() => setSelected(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal content */}
                        <motion.div
                            className="relative glass-strong rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto border border-white/10"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${selected.accent} bg-clip-text text-transparent`}>
                                {selected.title}
                            </h3>
                            <p className="text-slate-400 mb-6">{selected.description}</p>

                            <h4 className="text-white font-semibold mb-3">Key Features</h4>
                            <ul className="space-y-2 mb-6">
                                {selected.features.map((f, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-2 text-slate-300 text-sm"
                                    >
                                        <CheckCircle size={16} className="text-neon-cyan shrink-0 mt-0.5" />
                                        {f}
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selected.techStack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1.5 text-xs rounded-full glass border border-white/10 text-slate-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {selected.githubUrl && (
                                    <a
                                        href={selected.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 glass rounded-xl text-sm text-slate-300 hover:text-neon-cyan transition-colors border border-white/10"
                                    >
                                        <Github size={16} /> View Code
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
