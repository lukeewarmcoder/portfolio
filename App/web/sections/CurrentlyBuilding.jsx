'use client';

import { motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import { Rocket, Sparkles } from 'lucide-react';

export default function CurrentlyBuilding() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper>
                    <div className="relative">
                        {/* Pulsing neon border */}
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-60 blur-sm animate-border-glow" />
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-30" />

                        <div className="relative glass-strong rounded-2xl p-8 sm:p-10">
                            {/* Live indicator */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan" />
                                </span>
                                <span className="text-neon-cyan text-sm font-semibold uppercase tracking-wider">Currently Building</span>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 shrink-0">
                                    <Rocket size={28} className="text-neon-cyan" />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
                                        Profitilo — This Portfolio
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed mb-4">
                                        A premium, cinematic portfolio experience built with Next.js 14, Tailwind CSS, and Framer Motion. Featuring particle animations, glassmorphism UI, 3D interactions, and live GitHub integration.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Canvas API'].map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs rounded-full glass border border-neon-cyan/20 text-neon-cyan">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sparkle decoration */}
                            <motion.div
                                className="absolute top-4 right-4 text-neon-cyan/30"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            >
                                <Sparkles size={24} />
                            </motion.div>
                        </div>
                    </div>
                </MotionWrapper>
            </div>
        </section>
    );
}
