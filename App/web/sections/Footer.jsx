'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { href: 'https://github.com/lukeewarmcoder', icon: <Github size={18} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/ayushman-dixit-a486512b6', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: 'mailto:ayushmandixit585@gmail.com', icon: <Mail size={18} />, label: 'Email' },
];

export default function Footer() {
    const handleClick = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/5 bg-[#020510]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div>
                        <span className="text-xl font-display font-bold text-gradient">lukeewarmcoder</span>
                        <p className="text-slate-500 mt-2 text-sm">Building clean code & smart solutions</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <span className="text-white font-semibold text-sm uppercase tracking-wider mb-4 block">Quick Links</span>
                        <div className="space-y-2">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className="block text-slate-500 hover:text-neon-cyan transition-colors text-sm group"
                                >
                                    <span className="group-hover:translate-x-1 inline-block transition-transform">{link.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <span className="text-white font-semibold text-sm uppercase tracking-wider mb-4 block">Connect</span>
                        <div className="flex gap-3">
                            {socialLinks.map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith('http') ? '_blank' : undefined}
                                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    aria-label={s.label}
                                    className="p-2.5 glass rounded-lg text-slate-500 hover:text-neon-cyan border border-white/5 hover:border-neon-cyan/20 transition-all"
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-slate-600 text-xs">
                        © {year} Ayushman Dixit. All rights reserved.
                    </p>
                    <motion.button
                        onClick={scrollToTop}
                        className="p-2.5 glass rounded-lg text-slate-500 hover:text-neon-cyan border border-white/5 hover:border-neon-cyan/20 transition-all"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={16} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
