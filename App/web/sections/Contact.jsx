'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import MotionWrapper from '../components/MotionWrapper';

const contactInfo = [
    {
        icon: <Mail size={22} />,
        label: 'Email',
        value: 'ayushmandixit585@gmail.com',
        link: 'mailto:ayushmandixit585@gmail.com',
    },
    {
        icon: <Github size={22} />,
        label: 'GitHub',
        value: '@lukeewarmcoder',
        link: 'https://github.com/lukeewarmcoder',
    },
    {
        icon: <Linkedin size={22} />,
        label: 'LinkedIn',
        value: 'Connect with me',
        link: 'https://www.linkedin.com/in/ayushman-dixit-a486512b6',
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) return;

        setStatus('sending');
        try {
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push({ ...form, timestamp: new Date().toISOString() });
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            setStatus('sent');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const openMailto = () => {
        const subject = `Contact from Portfolio: ${form.name || ''}`.trim();
        const body = [`Name: ${form.name || ''}`, `Email: ${form.email || ''}`, '', (form.message || '').trim()].join('\n');
        window.location.href = `mailto:ayushmandixit585@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const inputClasses =
        'w-full px-4 py-3.5 rounded-xl glass border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_20px_rgba(0,240,255,0.1)] transition-all duration-300 bg-transparent';

    return (
        <section id="contact" className="section-padding relative overflow-hidden">
            <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-neon-cyan/3 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-neon-purple/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto rounded-full mb-4" />
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I&apos;d love to hear from you!
                    </p>
                </MotionWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    {/* Contact Info */}
                    <MotionWrapper direction="left">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-3">Contact Information</h3>
                            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
                                Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects, creative ideas, or opportunities.
                            </p>

                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <MotionWrapper key={i} delay={i * 0.1} direction="left">
                                        <motion.a
                                            href={item.link}
                                            target={item.link.startsWith('http') ? '_blank' : undefined}
                                            rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-4 p-4 glass gradient-border rounded-2xl hover-glow group"
                                            whileHover={{ x: 4 }}
                                        >
                                            <div className="p-2.5 rounded-xl bg-neon-cyan/10 text-neon-cyan group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <p className="text-slate-500 text-xs uppercase tracking-wider">{item.label}</p>
                                                <p className="text-white font-medium text-sm">{item.value}</p>
                                            </div>
                                        </motion.a>
                                    </MotionWrapper>
                                ))}
                            </div>

                            {/* Social icons */}
                            <div className="mt-8 flex gap-3">
                                {[
                                    { href: 'https://github.com/lukeewarmcoder', icon: <Github size={20} />, label: 'GitHub' },
                                    { href: 'https://www.linkedin.com/in/ayushman-dixit-a486512b6', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                                ].map((s) => (
                                    <motion.a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="p-3 glass rounded-xl text-slate-400 hover:text-neon-cyan border border-white/5 hover:border-neon-cyan/30 transition-all"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {s.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Form */}
                    <MotionWrapper direction="right">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-white text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`${inputClasses} resize-none`}
                                    placeholder="Tell me about your project or just say hi!"
                                    required
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="flex-1 px-6 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/40 transition-shadow disabled:opacity-50"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {status === 'sending' && 'Sending...'}
                                    {status === 'sent' && '✓ Sent!'}
                                    {status === 'error' && 'Error — Try Again'}
                                    {status === 'idle' && (
                                        <>Send Message <Send size={16} /></>
                                    )}
                                </motion.button>

                                <motion.button
                                    type="button"
                                    onClick={openMailto}
                                    className="flex-1 px-6 py-4 glass rounded-xl font-semibold text-slate-300 hover:text-white border border-white/10 hover:border-neon-cyan/30 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Email
                                </motion.button>
                            </div>
                        </form>
                    </MotionWrapper>
                </div>
            </div>
        </section>
    );
}
