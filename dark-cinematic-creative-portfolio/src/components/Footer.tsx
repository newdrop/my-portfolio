import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 md:px-12 border-t border-white/10 mt-12 bg-white/[0.02]">
      <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span style={{ fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'bold', textDecorationLine: 'none' }} className="text-xl tracking-tight text-text-soft">
            LA_SUKO
          </span>
          <div className="text-sm text-text-muted">
            © {new Date().getFullYear()} LA_SUKO. All rights reserved.
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <span className="text-sm font-medium text-text-muted/60 italic bg-white/5 px-4 py-2 rounded-full border border-white/10">
            Social links coming soon...
          </span>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm text-text-muted hover:text-accent-warm transition-colors group"
        >
          Back to top
          <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-warm/50 transition-colors">
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}
