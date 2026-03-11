'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, BookOpen, Users, RefreshCw } from 'lucide-react';
import Image from 'next/image';
import MotionWrapper from '../components/MotionWrapper';
import AnimatedCounter from '../components/AnimatedCounter';

export default function GitHubStats() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchStats = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetch('https://api.github.com/users/lukeewarmcoder');
            if (!res.ok) throw new Error('Failed');
            const json = await res.json();
            setData({
                repos: json.public_repos || 0,
                followers: json.followers || 0,
                following: json.following || 0,
                avatar: json.avatar_url || '',
                bio: json.bio || '',
                name: json.name || 'lukeewarmcoder',
            });
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStats();
    }, []);

    const stats = data
        ? [
            { icon: <BookOpen size={20} />, label: 'Repositories', value: data.repos },
            { icon: <Users size={20} />, label: 'Followers', value: data.followers },
            { icon: <Star size={20} />, label: 'Following', value: data.following },
        ]
        : [];

    return (
        <section id="github" className="section-padding relative overflow-hidden">
            <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-neon-purple/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        GitHub Activity
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full mb-4" />
                    <p className="text-slate-400 text-lg">Live stats from my GitHub profile</p>
                </MotionWrapper>

                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[1, 2, 3].map((n) => (
                            <div key={n} className="shimmer glass rounded-2xl h-32" />
                        ))}
                    </div>
                )}

                {error && (
                    <MotionWrapper className="text-center">
                        <div className="glass rounded-2xl p-8">
                            <p className="text-slate-400 mb-4">Failed to load GitHub stats.</p>
                            <motion.button
                                onClick={fetchStats}
                                className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-neon-cyan border border-neon-cyan/20 hover:border-neon-cyan/50 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <RefreshCw size={16} /> Retry
                            </motion.button>
                        </div>
                    </MotionWrapper>
                )}

                {data && (
                    <div className="space-y-6">
                        {/* Profile card */}
                        <MotionWrapper>
                            <div className="glass gradient-border rounded-2xl p-6 flex items-center gap-6">
                                {data.avatar && (
                                    <Image
                                        src={data.avatar}
                                        alt={data.name}
                                        width={72}
                                        height={72}
                                        className="rounded-full border-2 border-neon-cyan/30"
                                        unoptimized
                                    />
                                )}
                                <div>
                                    <h3 className="text-xl font-bold text-white">{data.name}</h3>
                                    <a
                                        href="https://github.com/lukeewarmcoder"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neon-cyan text-sm hover:underline"
                                    >
                                        @lukeewarmcoder
                                    </a>
                                    {data.bio && <p className="text-slate-400 text-sm mt-1">{data.bio}</p>}
                                </div>
                            </div>
                        </MotionWrapper>

                        {/* Stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <MotionWrapper key={i} delay={i * 0.1}>
                                    <div className="glass gradient-border rounded-2xl p-6 text-center hover-glow">
                                        <div className="inline-flex p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan mb-3">
                                            {stat.icon}
                                        </div>
                                        <div className="text-3xl font-bold text-white mb-1">
                                            <AnimatedCounter target={stat.value} />
                                        </div>
                                        <p className="text-slate-400 text-sm">{stat.label}</p>
                                    </div>
                                </MotionWrapper>
                            ))}
                        </div>

                        {/* Contribution note */}
                        <MotionWrapper delay={0.3} className="text-center">
                            <a
                                href="https://github.com/lukeewarmcoder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-slate-500 hover:text-neon-cyan transition-colors text-sm"
                            >
                                <Github size={16} /> View full profile on GitHub
                            </a>
                        </MotionWrapper>
                    </div>
                )}
            </div>
        </section>
    );
}

