'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const defaults = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function MotionWrapper({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
    amount = 0.2,
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount });
    const variant = defaults[direction] || defaults.up;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variant}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
