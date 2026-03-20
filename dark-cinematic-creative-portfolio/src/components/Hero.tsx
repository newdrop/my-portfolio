import { motion, useSpring, useMotionValue } from 'motion/react';
import { FadeIn } from './FadeIn';
import { MouseEvent, useEffect } from 'react';

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fast springs for snappy liquid effect
  const smoothX1 = useSpring(mouseX, { damping: 20, stiffness: 300 });
  const smoothY1 = useSpring(mouseY, { damping: 20, stiffness: 300 });
  
  const smoothX2 = useSpring(mouseX, { damping: 25, stiffness: 200 });
  const smoothY2 = useSpring(mouseY, { damping: 25, stiffness: 200 });
  
  const smoothX3 = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const smoothY3 = useSpring(mouseY, { damping: 30, stiffness: 120 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    // Set initial position to center of screen to avoid flying in from top left
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 md:px-12 w-full">
        
        {/* The main hero display card */}
        <motion.div 
          onMouseMove={handleMouseMove}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/[0.02] backdrop-blur-2xl rounded-3xl md:rounded-[32px] p-5 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl border border-white/10 group"
        >
          {/* Liquid Hover Effect Backgrounds */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            {/* Core blob - fast */}
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full bg-accent-cyan opacity-10 blur-[80px]"
              style={{ x: smoothX1, y: smoothY1, translateX: '-50%', translateY: '-50%' }}
            />
            {/* Secondary blob - medium */}
            <motion.div
              className="absolute w-[550px] h-[550px] rounded-full bg-accent-warm opacity-[0.08] blur-[100px]"
              style={{ x: smoothX2, y: smoothY2, translateX: '-50%', translateY: '-50%' }}
            />
            {/* Tertiary blob - slow */}
            <motion.div
              className="absolute w-[700px] h-[700px] rounded-full bg-accent-cyan opacity-[0.1] blur-[120px]"
              style={{ x: smoothX3, y: smoothY3, translateX: '-50%', translateY: '-50%' }}
            />
          </div>

          {/* Top meta info inside card */}
          <div className="flex justify-between items-start mb-16 md:mb-32 text-xs font-semibold tracking-widest uppercase text-text-soft/60 relative z-10">
            <div>LA_SUKO</div>
          </div>

          {/* Main Typography */}
          <div className="relative z-10 max-w-5xl">
            <h1 className="text-[clamp(48px,8vw,120px)] leading-[0.9] font-medium tracking-[-0.02em] text-text-soft pointer-events-none">
              <FadeIn delay={0.2}>Graphical</FadeIn>
              <FadeIn delay={0.4} className="flex flex-wrap items-center gap-x-6 md:gap-x-12 ml-0 md:ml-32">
                <span className="font-serif italic text-accent-cyan lowercase tracking-normal">User</span>
              </FadeIn>
              <FadeIn delay={0.6} className="ml-0 md:ml-64">
                Interface
              </FadeIn>
            </h1>
            <FadeIn delay={0.7} className="mt-8 md:mt-12 max-w-xl">
              <p className="text-text-muted text-lg md:text-xl leading-relaxed">
                Specializing in immersive, high-performance UI/UX design for Roblox and beyond. Crafting digital experiences that captivate and engage.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#work" className="inline-flex items-center justify-center px-8 py-4 bg-accent-warm text-white font-bold rounded-full hover:bg-accent-warm/80 transition-colors duration-300">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-text-soft font-bold rounded-full hover:bg-white/10 transition-colors duration-300">
                  Contact Me
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Bottom meta info */}
          <FadeIn delay={0.8} className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-medium text-text-soft/70 relative z-10">
            <div>
              <p className="mt-4 text-text-soft/40">CURRENTLY AVAILABLE</p>
              <p className="text-text-soft/40">FOR FREELANCE</p>
              <p className="text-text-soft/40">WORLDWIDE</p>
            </div>
            <div>
            </div>
            <div className="hidden md:block"></div>
            <div className="flex items-end justify-end hidden md:flex">
              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-[1px] h-12 bg-text-soft/30 relative"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 border-b border-r border-text-soft/30 transform rotate-45"></div>
              </motion.div>
            </div>
          </FadeIn>
        </motion.div>
      </div>
    </section>
  );
}
