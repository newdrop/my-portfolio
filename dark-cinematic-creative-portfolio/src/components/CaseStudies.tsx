import { FadeIn } from './FadeIn';

export function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-white/5 border-y border-white/5">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-tight tracking-tight mb-16">
            Deep <span className="font-serif italic text-accent-warm">dives</span>
          </h2>
        </FadeIn>

        <div className="space-y-24">
          {/* Case Study 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-7 order-2 lg:order-1">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video relative group">
                <img 
                  src="https://picsum.photos/seed/case1/1200/800" 
                  alt="Case Study 1" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-60"></div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="lg:col-span-5 order-1 lg:order-2">
              <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">Fintech Platform</span>
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Redesigning the future of personal banking</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                A complete overhaul of the Nexus mobile app, focusing on accessibility, intuitive data visualization, and a frictionless onboarding experience that increased conversion by 42%.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs">UX Research</span>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs">UI Design</span>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs">Design System</span>
              </div>
              <button className="text-accent-warm font-medium hover:text-white transition-colors flex items-center gap-2">
                Read full case study <span className="text-xl">→</span>
              </button>
            </FadeIn>
          </div>

          {/* Case Study 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn delay={0.2} className="lg:col-span-5">
              <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase mb-4 block">E-Commerce</span>
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Elevating a luxury skincare brand</h3>
              <p className="text-text-muted mb-8 leading-relaxed">
                Creating a digital flagship store for Aura that matches their premium physical retail experience. The new headless Shopify build improved load times by 60% and AOV by 18%.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs">Art Direction</span>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs">Web Design</span>
                <span className="px-3 py-1 rounded-full border border-white/10 text-xs">Prototyping</span>
              </div>
              <button className="text-accent-warm font-medium hover:text-white transition-colors flex items-center gap-2">
                Read full case study <span className="text-xl">→</span>
              </button>
            </FadeIn>
            <FadeIn className="lg:col-span-7">
              <div className="glass-card rounded-2xl overflow-hidden aspect-video relative group">
                <img 
                  src="https://picsum.photos/seed/case2/1200/800" 
                  alt="Case Study 2" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-60"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
