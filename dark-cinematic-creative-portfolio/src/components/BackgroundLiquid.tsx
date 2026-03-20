import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

export function BackgroundLiquid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Faster, more responsive spring for the mouse follower
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-primary pointer-events-none">
      <div className="absolute inset-0 opacity-40">
        {/* Ambient blobs - Faster, wider movements, softer blurs to make it less "thick" */}
        <motion.div
          animate={{
            x: ['-10%', '10%', '-10%'],
            y: ['-10%', '10%', '-10%'],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[#0EA5E9]/25 blur-[180px]"
        />
        <motion.div
          animate={{
            x: ['10%', '-10%', '10%'],
            y: ['10%', '-10%', '10%'],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full bg-[#F97316]/20 blur-[180px]"
        />
        <motion.div
          animate={{
            x: ['0%', '15%', '0%'],
            y: ['15%', '0%', '15%'],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[30%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] rounded-full bg-[#0EA5E9]/25 blur-[180px]"
        />
        
        {/* Mouse follower blob - Faster and softer */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-[#0EA5E9]/15 blur-[200px]"
          style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        />
      </div>
      <div className="absolute inset-0 bg-grain opacity-40"></div>
    </div>
  );
}
