import { FadeIn } from './FadeIn';
import { motion } from 'motion/react';

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 relative">
      <div className="max-w-[1320px] mx-auto px-4 md:px-12">
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-tight tracking-tight mb-12">
            Pricing & <span className="font-serif italic text-accent-warm">Commissions</span>
          </h2>
          
          <motion.div 
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent-cyan/30 hover:shadow-[0_10px_40px_rgba(14,165,233,0.05)] transition-all duration-500 backdrop-blur-sm"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 gap-10">
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-text-soft mb-4">Standard Rate</h3>
                <p className="text-lg text-text-muted leading-relaxed max-w-2xl">
                  Rates are highly negotiable depending on the complexity and scale of your project. I focus on delivering high-quality, custom-tailored interfaces.
                </p>
              </div>
              
              <div className="relative group/price">
                {/* Animated background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan/20 via-accent-warm/20 to-accent-cyan/20 rounded-[40px] blur-2xl opacity-50 group-hover/price:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                <div className="relative flex flex-col items-center justify-center p-8 md:p-10 rounded-[32px] bg-bg-primary/40 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[280px]">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex flex-col items-center">
                      <span className="text-5xl md:text-6xl font-bold text-text-soft tracking-tighter">$5</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-cyan mt-1">USD</span>
                    </div>
                    <div className="h-12 w-[1px] bg-white/10 mx-2"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-5xl md:text-6xl font-bold text-text-soft tracking-tighter">500</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-accent-warm mt-1">Robux</span>
                    </div>
                  </div>
                  <div className="mt-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
                    <span className="text-sm font-medium text-text-muted italic">per frame</span>
                  </div>
                  
                  {/* Shimmer effect "trick" */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[32px]">
                    <motion.div 
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                      className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -skew-x-12"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-sm font-semibold text-text-soft uppercase tracking-widest mb-4">Payment Methods</h4>
                <p className="text-base text-text-muted leading-relaxed">
                  For USD payments, I currently accept <strong>PayPal Xoom</strong> (I will provide my UPI ID for the transaction). <strong>Robux</strong> payments are also accepted via group payouts or gamepasses.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-soft uppercase tracking-widest mb-4">Project Terms</h4>
                <ul className="list-disc list-inside text-base text-text-muted leading-relaxed space-y-2">
                  <li>50% upfront payment required before starting.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
