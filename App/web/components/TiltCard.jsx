'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ children, className = '', glowColor = 'rgba(0, 240, 255, 0.15)' }) {
    const ref = useRef(null);
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

    const handleMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setTransform({
            rotateX: (y - 0.5) * -10,
            rotateY: (x - 0.5) * 10,
        });
        setGlowPos({ x: x * 100, y: y * 100 });
    };

    const handleLeave = () => {
        setTransform({ rotateX: 0, rotateY: 0 });
        setGlowPos({ x: 50, y: 50 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
                perspective: 1000,
                transformStyle: 'preserve-3d',
            }}
            animate={{
                rotateX: transform.rotateX,
                rotateY: transform.rotateY,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`relative ${className}`}
        >
            {/* Glow overlay */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                    background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 60%)`,
                }}
            />
            {children}
        </motion.div>
    );
}
