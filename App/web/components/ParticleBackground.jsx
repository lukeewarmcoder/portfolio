'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function ParticleBackground() {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const rotationRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

    const PROJECT = useCallback((x, y, z, fov, cx, cy) => {
        const scale = fov / (fov + z);
        return {
            x: x * scale + cx,
            y: y * scale + cy,
            scale,
        };
    }, []);

    const createParticles = useCallback((w, h) => {
        const count = Math.min(Math.floor((w * h) / 9000), 150);
        return Array.from({ length: count }, () => ({
            x: (Math.random() - 0.5) * w * 1.2,
            y: (Math.random() - 0.5) * h * 1.2,
            z: (Math.random() - 0.5) * 600,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            vz: (Math.random() - 0.5) * 0.3,
            radius: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.6 + 0.2,
            hue: Math.random() * 60 + 170,
            pulseSpeed: Math.random() * 0.02 + 0.01,
            pulseOffset: Math.random() * Math.PI * 2,
        }));
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.matches) return;

        let w, h, cx, cy;
        const fov = 400;

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            cx = w / 2;
            cy = h / 2;
            particlesRef.current = createParticles(w, h);
        };
        resize();
        window.addEventListener('resize', resize);

        const handleMouse = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
            rotationRef.current.targetX = ((e.clientY - cy) / h) * 0.4;
            rotationRef.current.targetY = ((e.clientX - cx) / w) * 0.4;
        };
        window.addEventListener('mousemove', handleMouse, { passive: true });

        let frame = 0;

        const rotateX = (y, z, angle) => ({
            y: y * Math.cos(angle) - z * Math.sin(angle),
            z: y * Math.sin(angle) + z * Math.cos(angle),
        });

        const rotateY = (x, z, angle) => ({
            x: x * Math.cos(angle) + z * Math.sin(angle),
            z: -x * Math.sin(angle) + z * Math.cos(angle),
        });

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            frame++;

            // Smooth rotation towards mouse
            const rot = rotationRef.current;
            rot.x += (rot.targetX - rot.x) * 0.03;
            rot.y += (rot.targetY - rot.y) * 0.03;

            const particles = particlesRef.current;
            const mouse = mouseRef.current;

            // Transform and project particles
            const projected = particles.map((p, i) => {
                // Update position
                p.x += p.vx;
                p.y += p.vy;
                p.z += p.vz;

                // Wrap around bounds
                const bound = 700;
                if (p.x > bound) p.x = -bound;
                if (p.x < -bound) p.x = bound;
                if (p.y > bound) p.y = -bound;
                if (p.y < -bound) p.y = bound;
                if (p.z > bound) p.z = -bound;
                if (p.z < -bound) p.z = bound;

                // Apply 3D rotation based on mouse
                let { x, y, z } = p;
                const ry = rotateY(x, z, rot.y);
                x = ry.x; z = ry.z;
                const rx = rotateX(y, z, rot.x);
                y = rx.y; z = rx.z;

                // Project to 2D
                const proj = PROJECT(x, y, z, fov, cx, cy);

                // Mouse repulsion in screen space
                const dx = mouse.x - proj.x;
                const dy = mouse.y - proj.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    p.x -= (dx / dist) * force * 1.5;
                    p.y -= (dy / dist) * force * 1.5;
                }

                // Pulse opacity
                const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.2 + 0.8;

                return {
                    sx: proj.x,
                    sy: proj.y,
                    scale: proj.scale,
                    z,
                    opacity: p.opacity * pulse * Math.max(0.2, proj.scale),
                    radius: p.radius * proj.scale,
                    hue: p.hue,
                    orig: p,
                    index: i,
                };
            });

            // Sort by z depth (painter's algorithm)
            projected.sort((a, b) => a.z - b.z);

            // Draw connections
            for (let i = 0; i < projected.length; i++) {
                const a = projected[i];
                for (let j = i + 1; j < projected.length; j++) {
                    const b = projected[j];
                    const dx = a.sx - b.sx;
                    const dy = a.sy - b.sy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 130;

                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * Math.min(a.opacity, b.opacity) * 0.6;
                        const avgHue = (a.hue + b.hue) / 2;
                        const avgScale = (a.scale + b.scale) / 2;

                        // Gradient line for depth effect
                        const grad = ctx.createLinearGradient(a.sx, a.sy, b.sx, b.sy);
                        grad.addColorStop(0, `hsla(${a.hue}, 80%, 65%, ${alpha * a.scale})`);
                        grad.addColorStop(1, `hsla(${b.hue}, 80%, 65%, ${alpha * b.scale})`);

                        ctx.beginPath();
                        ctx.moveTo(a.sx, a.sy);
                        ctx.lineTo(b.sx, b.sy);
                        ctx.strokeStyle = grad;
                        ctx.lineWidth = avgScale * 1.2;
                        ctx.stroke();

                        // Bright node at connection midpoint for web effect
                        if (dist < 60) {
                            const mx = (a.sx + b.sx) / 2;
                            const my = (a.sy + b.sy) / 2;
                            ctx.beginPath();
                            ctx.arc(mx, my, avgScale * 0.8, 0, Math.PI * 2);
                            ctx.fillStyle = `hsla(${avgHue}, 90%, 75%, ${alpha * 0.4})`;
                            ctx.fill();
                        }
                    }
                }
            }

            // Draw particles (front to back order already sorted)
            for (const p of projected) {
                if (p.sx < -50 || p.sx > w + 50 || p.sy < -50 || p.sy > h + 50) continue;

                // Outer glow
                const grd = ctx.createRadialGradient(p.sx, p.sy, 0, p.sx, p.sy, p.radius * 4);
                grd.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${p.opacity * 0.8})`);
                grd.addColorStop(0.4, `hsla(${p.hue}, 80%, 60%, ${p.opacity * 0.3})`);
                grd.addColorStop(1, `hsla(${p.hue}, 70%, 50%, 0)`);

                ctx.beginPath();
                ctx.arc(p.sx, p.sy, p.radius * 4, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Core dot
                ctx.beginPath();
                ctx.arc(p.sx, p.sy, Math.max(0.5, p.radius), 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, ${p.opacity})`;
                ctx.fill();
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouse);
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [PROJECT, createParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ opacity: 0.75 }}
            aria-hidden="true"
        />
    );
}
