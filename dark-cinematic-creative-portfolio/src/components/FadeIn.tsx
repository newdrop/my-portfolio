import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const directions = {
    up: { y: 18, x: 0 },
    down: { y: -18, x: 0 },
    left: { x: 18, y: 0 },
    right: { x: -18, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.52,
        ease: "easeOut",
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
