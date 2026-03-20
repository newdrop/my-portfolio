import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Maximize2, X } from 'lucide-react';

type Project = {
  id: string | number;
  title: string;
  image: string;
  description?: string;
  isIcon?: boolean;
  tags?: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Adopt Me Shop',
    image: 'https://i.ibb.co/V0yQ1GgZ/Screenshot-2026-03-20-032429.png',
    tags: ['Roblox', 'UI/UX', 'Shop'],
    description: 'A clean shop interface recreation. Note: This design was created using a reference image from Adopt Me to study and replicate its engaging style.'
  },
  {
    id: 2,
    title: 'Adopt Me Role Selection',
    image: 'https://i.ibb.co/wZs1xCwx/Screenshot-2026-03-20-032856.png',
    tags: ['Roblox', 'UI/UX', 'Menu'],
    description: 'Parent or child role selection screen. Note: This was also made using a reference image from Adopt Me to practice layout and visual hierarchy.'
  },
  {
    id: 3,
    title: 'Adopt Me Store Interface',
    image: 'https://i.ibb.co/35LBd3QL/Screenshot-2026-03-20-032821.png',
    tags: ['Roblox', 'UI/UX', 'Store'],
    description: 'Another variation of the store interface. Note: Designed using a reference image from Adopt Me to ensure authentic proportions and styling.'
  },
];

const crypticImages: Project[] = [
  { id: 'shop', title: 'Shop GUI', image: 'https://i.ibb.co/DDFkHBv2/Shop.png', isIcon: true, description: 'This GUI is fully complete and optimized for seamless player interaction.' },
  { id: 'kill-all', title: 'Kill All GUI', image: 'https://i.ibb.co/8nqy8gqx/Kill-All.png', isIcon: true, description: 'This GUI is fully complete. Clean, minimal, and highly functional.' },
  { id: 'gear', title: 'Gear GUI', image: 'https://i.ibb.co/YBB6j98W/Gear.png', isIcon: true, description: 'This GUI is fully complete. Designed with a focus on quick inventory management.' },
  { id: 'troll', title: 'Troll GUI', image: 'https://i.ibb.co/G31CCnkS/TROLL.png', isIcon: true, description: 'This GUI is fully complete. A fun, interactive panel with custom iconography.' },
  { id: 'trails', title: 'Trails GUI', image: 'https://i.ibb.co/q3BPdtFp/Trails.png', isIcon: true, description: 'This GUI is fully complete. Smooth visual feedback for equipping custom trails.' },
  { id: 'pets', title: 'Pets GUI', image: 'https://i.ibb.co/q3KTg2tF/Pets.png', isIcon: true, description: 'This GUI is fully complete. Cute, compact, and perfectly scaled for the pet system.' },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isCrypticHovered, setIsCrypticHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="work" className="py-16 md:py-24 px-4 md:px-12 max-w-[1320px] mx-auto">
      <FadeIn>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-tight tracking-tight">
            Works <span className="font-serif italic text-accent-warm">showcase</span>
          </h2>
        </div>
      </FadeIn>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        <AnimatePresence mode="popLayout">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="group cursor-pointer"
            >
              <div 
                className="relative overflow-hidden rounded-2xl aspect-video mb-6 bg-white/[0.02] border border-white/10 group-hover:border-accent-warm/20 transition-colors duration-500"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="w-full h-full object-contain bg-white/[0.02] p-1 scale-[1.02] transition-transform duration-700 group-hover:scale-[1.07] select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 bg-accent-warm text-white px-6 py-3 rounded-full font-bold shadow-2xl">
                    <Maximize2 size={18} /> View Project
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Cryptic Work Section */}
      <FadeIn>
        <div className="mt-24 mb-12 text-center">
          <h2 className="text-[clamp(28px,4vw,48px)] font-medium leading-tight tracking-tight">
            My work with <span className="font-serif italic text-accent-cyan">Cryptic</span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            A collection of custom, fully complete GUI icons and interfaces designed specifically for the Cryptic project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {crypticImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -15, scale: 1.08, rotate: [0, -2, 2, 0] }}
              className="relative aspect-square bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl shadow-xl flex items-center justify-center hover:border-accent-cyan/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)] transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(item)}
            >
              <motion.img 
                src={item.image} 
                alt={item.title} 
                className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-110 select-none" 
                referrerPolicy="no-referrer"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* View overlay */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl md:rounded-3xl flex items-center justify-center">
                <Maximize2 size={24} className="text-accent-warm drop-shadow-lg scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      {/* Image Viewer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-bg-primary/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-full flex flex-col bg-grain rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className={`w-full overflow-auto p-4 flex items-center justify-center bg-black/20 ${selectedProject.isIcon ? 'min-h-[40vh]' : ''}`}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className={`max-w-full h-auto max-h-[70vh] rounded-xl shadow-2xl select-none ${selectedProject.isIcon ? 'object-contain w-48 h-48 md:w-64 md:h-64' : 'object-contain'}`} 
                  referrerPolicy="no-referrer"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>
              
              <div className="p-6 md:p-8 bg-black/50 backdrop-blur-md border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3">{selectedProject.title}</h3>
                    <p className="text-text-muted leading-relaxed text-sm md:text-base">
                      {selectedProject.description || 'This is still in progress and may not be the final result for all.'}
                    </p>
                    {selectedProject.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-accent-warm/10 border border-accent-warm/20 text-accent-warm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="shrink-0">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors border border-white/10"
                    >
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
