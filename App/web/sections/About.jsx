'use client';

import MotionWrapper from '../components/MotionWrapper';
import { GraduationCap, Code2, Lightbulb, Target } from 'lucide-react';

const highlights = [
    {
        icon: <GraduationCap size={22} />,
        title: 'Education',
        desc: 'BTech in Computer Science — 1st Year, 2nd Semester',
        color: 'from-neon-cyan to-blue-500',
    },
    {
        icon: <Code2 size={22} />,
        title: 'Clean Code',
        desc: 'Passionate about writing maintainable, efficient code',
        color: 'from-blue-500 to-neon-purple',
    },
    {
        icon: <Lightbulb size={22} />,
        title: 'Problem Solver',
        desc: 'Love tackling complex challenges with creative solutions',
        color: 'from-neon-purple to-pink-500',
    },
    {
        icon: <Target size={22} />,
        title: 'Learning Focus',
        desc: 'Continuously expanding skills in full-stack development',
        color: 'from-pink-500 to-neon-cyan',
    },
];

const timeline = [
    { year: 'Present', label: 'Building production apps & exploring AI integrations' },
    { year: '2025', label: 'Started BTech CS — Dove deep into React, Next.js & Supabase' },
    { year: '2024', label: 'First full-stack project — Discovered the joy of clean architecture' },
    { year: 'Origin', label: 'Curiosity about how things work behind the scenes sparked it all' },
];

export default function About() {
    return (
        <section id="about" className="section-padding relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full" />
                </MotionWrapper>

                {/* Bio */}
                <MotionWrapper delay={0.1} className="mb-16">
                    <div className="glass gradient-border rounded-2xl p-6 sm:p-8 lg:p-10">
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                            Hi! I&apos;m <span className="text-neon-cyan font-semibold">Ayushman Dixit</span>, a passionate full-stack developer currently pursuing my BTech in Computer Science. I&apos;m in my 1st year, 2nd semester, and every day brings new opportunities to learn and grow.
                        </p>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
                            My journey into programming started with a simple curiosity about how things work behind the scenes. That curiosity quickly evolved into a deep passion for creating clean, efficient, and user-friendly applications.
                        </p>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                            I&apos;m driven by a problem-solving mindset and a commitment to continuous learning. Whether it&apos;s building a budget tracker, exploring AI integrations, or diving into new frameworks, I approach every project as an opportunity to push my boundaries.
                        </p>
                    </div>
                </MotionWrapper>

                {/* Timeline */}
                <MotionWrapper delay={0.2} className="mb-16">
                    <div className="relative pl-8 border-l-2 border-slate-800 space-y-8">
                        {timeline.map((item, i) => (
                            <MotionWrapper key={i} delay={0.1 * i} direction="left">
                                <div className="relative">
                                    {/* Dot */}
                                    <div className="absolute -left-[calc(2rem+5px)] top-1 w-2.5 h-2.5 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                    <span className="text-xs font-mono text-neon-cyan uppercase tracking-wider">{item.year}</span>
                                    <p className="text-slate-300 mt-1">{item.label}</p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </MotionWrapper>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {highlights.map((item, i) => (
                        <MotionWrapper key={i} delay={0.1 * i}>
                            <div className="glass gradient-border rounded-2xl p-6 hover-glow group cursor-default h-full">
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} bg-opacity-10 text-white/90 shrink-0 group-hover:scale-110 transition-transform`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Quote */}
                <MotionWrapper delay={0.5} className="mt-16 text-center">
                    <blockquote className="text-xl sm:text-2xl text-slate-400 italic font-display">
                        &ldquo;Code is like humor. When you have to explain it, it&apos;s bad.&rdquo;
                    </blockquote>
                    <p className="text-neon-cyan text-sm mt-3">— My development philosophy</p>
                </MotionWrapper>
            </div>
        </section>
    );
}
