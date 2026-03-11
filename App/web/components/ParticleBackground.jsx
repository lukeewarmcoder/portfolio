'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function ParticleBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    const createParticles = useCallback((width, height) => {
        const count = Math.min(Math.floor((width * height) / 12000), 120);
        return Array.from({ length: count }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            hue: Math.random() * 60 + 170,
        }));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.matches) return;

        let w, h;
        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            particlesRef.current = createParticles(w, h);
        };
        resize();
        window.addEventListener('resize', resize);

        const handleMouse = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMouse, { passive: true });

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            const particles = particlesRef.current;
            const mouse = mouseRef.current;
            const scrollY = window.scrollY || 0;
            const hueShift = (scrollY * 0.05) % 360;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    p.x -= dx * force * 0.01;
                    p.y -= dy * force * 0.01;
                }

                const hue = (p.hue + hueShift) % 360;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${hue}, 80%, 65%, ${p.opacity})`;
                ctx.fill();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const ddx = p.x - p2.x;
                    const ddy = p.y - p2.y;
                    const d = Math.sqrt(ddx * ddx + ddy * ddy);
                    if (d < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `hsla(${hue}, 70%, 55%, ${0.12 * (1 - d / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouse);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [createParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.6 }}
            aria-hidden="true"
        />
    );
}
