'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech Stack', href: '#techstack' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 30);
            const sections = navLinks.map((l) => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 150) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => handleClick(e, '#home')}
                        className="text-xl sm:text-2xl font-display font-bold text-gradient"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        lukeewarmcoder
                    </motion.a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg group ${activeSection === link.href.slice(1)
                                        ? 'text-neon-cyan'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-300 ${activeSection === link.href.slice(1) ? 'w-6' : 'w-0 group-hover:w-6'
                                        }`}
                                />
                            </a>
                        ))}

                        {/* Resume Button */}
                        <motion.a
                            href="/resume.pdf"
                            download="Ayushman_Dixit_Resume.pdf"
                            className="ml-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-white text-sm font-semibold shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-shadow"
                            whileHover={{ scale: 1.05, y: -1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={14} />
                            Resume
                        </motion.a>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-slate-300 hover:text-neon-cyan transition-colors"
                        whileTap={{ scale: 0.9 }}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="lg:hidden glass-strong overflow-hidden border-t border-white/5"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === link.href.slice(1)
                                            ? 'text-neon-cyan bg-white/5'
                                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {link.name}
                                </motion.a>
                            ))}

                            {/* Mobile Resume Button */}
                            <motion.a
                                href="/resume.pdf"
                                download="Ayushman_Dixit_Resume.pdf"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20"
                            >
                                <Download size={14} />
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
