import React, { useRef } from 'react';
import { motion, useInView, UseInViewOptions } from 'framer-motion';

interface RevealOnScrollProps {
    children: React.ReactNode;
    delay?: number;
    width?: 'fit-content' | '100%';
    className?: string;
    viewportMargin?: string; // e.g., "-100px"
}

/**
 * RevealOnScroll - "The Architectural Reveal"
 * 
 * Implements a heavy, precise reveal animation for the "Dark Luxury" aesthetic.
 * - Initial: Opacity 0, y: 30 (Start slightly below)
 * - Animate: Opacity 1, y: 0 (Move to natural position)
 * - Transition: Ease-Out Quart (Heavy friction stop)
 * - Viewport: Once true (No exit animations)
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
    children,
    delay = 0,
    width = 'fit-content',
    className = "",
    viewportMargin = "-50px"
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: viewportMargin as any });

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ width, position: 'relative' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1], // Ease-Out Quart
                delay: delay
            }}
        >
            {children}
        </motion.div>
    );
};
