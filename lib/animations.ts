/**
 * Framer Motion Animation Variants for Dark Luxury Theme
 * All animations use ease-out timing for smooth, precise stops
 */

import { Variants } from 'framer-motion';

/**
 * Staggered Fade-Up Animation
 * Elements start 20px lower with opacity 0, then animate to their final position
 */
export const fadeUpVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

/**
 * Container variant for staggered children animations
 * Each child will have a 0.1s delay from the previous one
 */
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

/**
 * Fade-up variant with custom delay
 * Use this for individual elements that need specific timing
 */
export const fadeUpWithDelay = (delay: number = 0): Variants => ({
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
            delay,
        },
    },
});

/**
 * Scale-in animation for interactive elements
 * Smooth entrance with slight scale effect
 */
export const scaleInVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

/**
 * Viewport animation hook config
 * Elements animate when 20% visible, only once
 */
export const viewportConfig = {
    once: true,
    amount: 0.2,
};
