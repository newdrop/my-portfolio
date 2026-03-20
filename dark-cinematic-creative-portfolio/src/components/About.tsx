import { FadeIn } from './FadeIn';
import { Layout, Palette, Code, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const tools = [
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
    { name: 'Roblox Studio', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDBBMkZGIiBkPSJNMTExLjQgMEwwIDQwMC42IDQwMC42IDUxMiA1MTIgMTExLjQgMTExLjQgMHpNMzIyIDI4MC40bC05MC42IDI1LjItMjUuMi05MC42IDkwLjYtMjUuMiAyNS4yIDkwLjZ6Ii8+PC9zdmc+' },
  ];

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive, user-centered interfaces that prioritize usability and engagement.',
      icon: <Layout className="w-6 h-6 text-accent-warm" />
    },
    {
      title: 'Asset Creation',
      description: 'Designing custom icons, buttons, and visual elements tailored to your game\'s unique style.',
      icon: <Palette className="w-6 h-6 text-accent-cyan" />
    },
    {
      title: 'Roblox Integration',
      description: 'Implementing designs directly into Roblox Studio with clean, scalable UI hierarchies.',
      icon: <Code className="w-6 h-6 text-accent-warm" />
    },
    {
      title: 'Wireframing',
      description: 'Mapping out user flows and interface structures before moving into high-fidelity design.',
      icon: <Layers className="w-6 h-6 text-accent-cyan" />
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-12 max-w-[1320px] mx-auto">
      <div className="flex flex-col gap-16">
        <div>
          <FadeIn>
            <h2 className="text-[clamp(32px,5vw,64px)] font-medium leading-tight tracking-tight mb-8">
              Behind the <span className="font-serif italic text-accent-warm">pixels</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-text-muted leading-relaxed max-w-3xl">
              <p>
                As a specialized UI/UX Developer, I bring a clean, modern perspective to every project I undertake. I focus on crafting custom interfaces that enhance player engagement and navigation, ensuring every design is both beautiful and intuitive.
              </p>
              <p>
                My workflow leverages Photoshop for bespoke asset creation and Roblox Studio for structured, scalable UI development. Whether it's HUD design, inventory systems, or main menus, I am dedicated to delivering high-quality visuals that elevate the player experience and help your game stand out.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-text-soft">What I Do</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ y: -5 }}
                  className="group p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent-cyan/30 hover:bg-white/[0.04] transition-all duration-300 shadow-lg hover:shadow-[0_8px_30px_rgba(14,165,233,0.05)]"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent-warm/10 flex items-center justify-center mb-6 border border-accent-warm/20 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-text-soft mb-3 group-hover:text-accent-warm transition-colors">{service.title}</h4>
                  <p className="text-base text-text-muted leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="space-y-16">
          <FadeIn delay={0.4}>
            <h3 className="text-2xl font-semibold mb-8 text-text-soft">Toolkit</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <motion.div 
                  key={tool.name} 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-4 group p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent-cyan/40 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgba(14,165,233,0.05)] transition-all duration-300"
                >
                  <div className="w-16 h-16 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain drop-shadow-xl" />
                  </div>
                  <span className="text-sm text-text-muted font-medium group-hover:text-accent-warm transition-colors">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
