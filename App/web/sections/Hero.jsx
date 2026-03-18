'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Github, ChevronDown, Download } from 'lucide-react';

const stagger = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.6 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Hero() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const handleVideoLoad = useCallback(() => {
        setVideoLoaded(true);
    }, []);

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const tryPlay = () => { v.play().catch(() => { }); };
        tryPlay();
        document.addEventListener('touchstart', tryPlay, { once: true });
        return () => document.removeEventListener('touchstart', tryPlay);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#070d1f] to-slate-950" />
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onCanPlayThrough={handleVideoLoad}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] will-change-auto ${videoLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    aria-hidden="true"
                >
                    <source src="/video.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#030712]/80 via-[#030712]/60 to-[#030712]/90" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,#030712_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-40 z-[1] bg-gradient-to-t from-[#030712] to-transparent" />

            {/* Scanlines */}
            <div
                className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04]"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.08) 2px, rgba(0,240,255,0.08) 4px)',
                }}
                aria-hidden="true"
            />

            {/* Grid */}
            <div
                className="absolute inset-0 z-[2] opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,240,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '70px 70px',
                }}
                aria-hidden="true"
            />

            {/* Ambient orbs */}
            <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
                <div className="absolute top-[15%] left-[8%] w-[500px] h-[500px] rounded-full bg-neon-cyan/[0.06] blur-[130px] animate-glow-pulse" />
                <div
                    className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] rounded-full bg-neon-purple/[0.05] blur-[140px] animate-glow-pulse"
                    style={{ animationDelay: '1.5s' }}
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-neon-blue/[0.03] blur-[160px] animate-float" />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                style={{ y: contentY, opacity: contentOpacity }}
            >
                <motion.div variants={stagger} initial="hidden" animate="visible">
                    {/* Status Badge */}
                    <motion.div variants={fadeUp} className="mb-8">
                        <span className="inline-flex items-center gap-2.5 px-5 py-2.5 glass rounded-full text-sm font-medium text-neon-cyan border border-neon-cyan/20 shadow-[0_0_20px_rgba(0,240,255,0.08)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan" />
                            </span>
                            Available for opportunities
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display font-bold tracking-tight mb-6 leading-[0.95]"
                    >
                        <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]">
                            Ayushman
                        </span>
                        <br />
                        <span className="hero-gradient-text">Dixit</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeUp}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        <span className="text-gradient-subtle font-semibold">Full-Stack Developer</span>
                        <span className="text-slate-600 mx-2">·</span>
                        BTech CS Student
                        <span className="text-slate-600 mx-2">·</span>
                        <br className="sm:hidden" />
                        Building Clean Code &amp; Smart Solutions
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap"
                    >
                        {/* Primary CTA */}
                        <motion.a
                            href="#projects"
                            onClick={(e) => handleClick(e, '#projects')}
                            className="hero-btn-primary group"
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View My Projects
                                <ArrowRight
                                    size={18}
                                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                                />
                            </span>
                        </motion.a>

                        {/* Resume Download */}
                        <motion.a
                            href="/Resume.pdf"
                            download="Ayushman_Dixit_Resume.pdf"
                            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white border border-neon-cyan/40 bg-neon-cyan/10 hover:bg-neon-cyan/20 hover:border-neon-cyan/70 shadow-[0_0_20px_rgba(0,240,255,0.08)] hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-300"
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Download size={18} />
                            Download Resume
                        </motion.a>

                        {/* Secondary CTA */}
                        <motion.a
                            href="#contact"
                            onClick={(e) => handleClick(e, '#contact')}
                            className="hero-btn-secondary"
                            whileHover={{ scale: 1.04, y: -3 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>

                    {/* GitHub link */}
                    <motion.div variants={fadeUp} className="mt-14">
                        <a
                            href="https://github.com/lukeewarmcoder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-slate-500 hover:text-neon-cyan transition-colors duration-300 group"
                        >
                            <Github
                                size={18}
                                className="group-hover:rotate-[15deg] transition-transform duration-300"
                            />
                            <span className="text-sm font-mono">@lukeewarmcoder</span>
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.a
                    href="#about"
                    onClick={(e) => handleClick(e, '#about')}
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <span className="text-[10px] text-slate-600 uppercase tracking-[0.25em] group-hover:text-slate-400 transition-colors">
                        Scroll
                    </span>
                    <div className="w-5 h-8 rounded-full border border-slate-700/60 flex justify-center pt-1.5 group-hover:border-neon-cyan/30 transition-colors">
                        <motion.div
                            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1 h-1 rounded-full bg-neon-cyan"
                        />
                    </div>
                </motion.a>
            </motion.div>
        </section>
    );
}
