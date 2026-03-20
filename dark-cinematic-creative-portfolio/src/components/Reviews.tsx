import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "𝙍𝙄𝙆𝙐",
    text: "I hired him to do GUIs for one of my projects and it was honestly amazing. The attention to detail and performance optimization is top-tier. Highly recommend!"
  },
  {
    name: "SuperBeast",
    text: "Working with him was a great experience. He delivered high-quality interfaces that perfectly matched the vision for my game. Fast and professional."
  },
  {
    name: "Cryptic",
    text: "The GUIs created for Cryptic are fully complete and optimized. Extremely clean, minimal, and functional. Best UI designer I've worked with."
  },
  {
    name: "𝙍𝙄𝙆𝙐",
    text: "I hired him to do GUIs for one of my projects and it was honestly amazing. The attention to detail and performance optimization is top-tier. Highly recommend!"
  },
  {
    name: "SuperBeast",
    text: "Working with him was a great experience. He delivered high-quality interfaces that perfectly matched the vision for my game. Fast and professional."
  },
  {
    name: "Cryptic",
    text: "The GUIs created for Cryptic are fully complete and optimized. Extremely clean, minimal, and functional. Best UI designer I've worked with."
  }
];

export function Reviews() {
  return (
    <section className="py-24 overflow-hidden bg-white/[0.01]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-12 mb-16">
        <FadeIn>
          <h2 className="text-[clamp(32px,5vw,64px)] font-bold leading-tight tracking-tighter text-center uppercase">
            Client <span className="font-serif italic text-accent-cyan lowercase font-medium">Reviews</span>
          </h2>
        </FadeIn>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div 
          className="flex whitespace-nowrap py-12"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Double the reviews for seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="inline-block w-[350px] md:w-[450px] mx-4 p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-accent-cyan/30 hover:bg-white/[0.04] transition-all duration-300 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent-warm text-accent-warm" />
                ))}
              </div>
              <p className="text-text-muted text-base md:text-lg leading-relaxed mb-6 whitespace-normal">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-cyan/20 flex items-center justify-center text-accent-cyan font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-text-soft">{review.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
