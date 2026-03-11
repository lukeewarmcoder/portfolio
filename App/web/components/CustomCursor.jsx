'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const glowRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        let mx = -100, my = -100;
        let gx = -100, gy = -100;

        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            if (!visible) setVisible(true);
        };

        const onLeave = () => setVisible(false);
        const onEnter = () => setVisible(true);

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseleave', onLeave);
        document.addEventListener('mouseenter', onEnter);

        let raf;
        const tick = () => {
            gx += (mx - gx) * 0.15;
            gy += (my - gy) * 0.15;

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
            }
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${gx - 20}px, ${gy - 20}px)`;
            }
            raf = requestAnimationFrame(tick);
        };
        tick();

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseleave', onLeave);
            document.removeEventListener('mouseenter', onEnter);
            cancelAnimationFrame(raf);
        };
    }, [visible]);

    if (typeof window !== 'undefined') {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return null;
    }

    return (
        <>
            <div
                ref={dotRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none"
                style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#00f0ff',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s',
                    mixBlendMode: 'screen',
                }}
                aria-hidden="true"
            />
            <div
                ref={glowRef}
                className="fixed top-0 left-0 z-[9998] pointer-events-none"
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 70%)',
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s',
                    mixBlendMode: 'screen',
                }}
                aria-hidden="true"
            />
        </>
    );
}
