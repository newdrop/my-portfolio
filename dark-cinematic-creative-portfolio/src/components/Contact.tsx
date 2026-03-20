import { FadeIn } from './FadeIn';
import { ArrowRight, Mail, MapPin, X, MessageSquare, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'motion/react';
import React, { MouseEvent, useEffect, useState } from 'react';

export function Contact() {
  const [isDiscordModalOpen, setIsDiscordModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isInvalidEmailModalOpen, setIsInvalidEmailModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleDiscordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDiscordModalOpen(true);
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!formData.email.toLowerCase().endsWith('@gmail.com')) {
      setIsInvalidEmailModalOpen(true);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('submitting');

    // Using the key you provided from the screenshot!
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'fcfa5a93-29b6-4b40-b6a2-79b5336d0b85';
    
    if (!accessKey) {
      // Fallback simulation if no key is provided yet
      console.warn('No Web3Forms access key found. Simulating email send.');
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setIsDiscordModalOpen(true);
          setStatus('idle');
        }, 1500);
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Portfolio Message from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Pop up discord modal after success for faster comms
        setTimeout(() => {
          setIsDiscordModalOpen(true);
          setStatus('idle');
        }, 2000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-12 max-w-[1320px] mx-auto">
      <div 
        onMouseMove={handleMouseMove}
        className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl md:rounded-[32px] p-5 md:p-16 lg:p-24 relative overflow-hidden group"
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

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          <div>
            <FadeIn>
              <h2 className="text-[clamp(40px,6vw,80px)] font-medium leading-[1.1] tracking-tight mb-6">
                Let's create something <span className="font-serif italic text-accent-warm">extraordinary</span>
              </h2>

              <div className="mt-8 p-5 rounded-2xl bg-accent-warm/10 border border-accent-warm/20 flex items-start gap-4">
                <AlertCircle size={20} className="text-accent-warm shrink-0 mt-0.5" />
                <div className="text-sm text-text-soft leading-relaxed space-y-3">
                  <p>
                    <strong className="text-white">Project Terms:</strong> To secure your spot and ensure mutual commitment, I require a <strong className="text-accent-warm">50% upfront payment</strong> before starting any work. The remaining balance is due upon project completion.
                  </p>
                  <p>
                    <strong className="text-white">Accepted Methods:</strong> PhonePe, Robux Gift Cards, and Roblox Gamepass. To process a payment or discuss alternative options, please contact me directly via Discord or Email.
                  </p>
                </div>
              </div>

              <div className="space-y-6 mt-12">
                <div onClick={handleEmailClick} className="flex items-center gap-3 md:gap-4 text-text-soft hover:text-accent-warm transition-colors group cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-warm transition-colors">
                    <Mail size={18} className="md:w-5 md:h-5" />
                  </div>
                  <span className="text-base md:text-lg font-medium break-all">torozoro980@gmail.com</span>
                </div>

                <div onClick={handleDiscordClick} className="flex items-center gap-3 md:gap-4 text-text-soft hover:text-accent-warm transition-colors group cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-warm transition-colors">
                    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                    </svg>
                  </div>
                  <span className="text-base md:text-lg font-medium">la_suko</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn delay={0.2}>
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-text-muted">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-soft focus:outline-none focus:border-accent-warm transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-text-muted">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-soft focus:outline-none focus:border-accent-warm transition-colors"
                      placeholder="jane@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-text-muted">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-text-soft focus:outline-none focus:border-accent-warm transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  disabled={status === 'submitting' || status === 'success'}
                  className={`w-full font-bold text-lg py-4 rounded-xl transition-all flex items-center justify-center gap-2 group ${
                    status === 'success' 
                      ? 'bg-green-500 text-white' 
                      : status === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-accent-warm text-white hover:bg-accent-warm/90'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                  {status === 'submitting' && (
                    <>
                      Sending...
                      <Loader2 size={20} className="animate-spin" />
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      Message Sent!
                      <CheckCircle2 size={20} />
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      Error Sending. Try Again.
                    </>
                  )}
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      <AnimatePresence>
        {isEmailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/80 backdrop-blur-sm"
            onClick={() => setIsEmailModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-bg-primary/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-accent-warm/20 rounded-full blur-[60px] pointer-events-none"></div>
              
              <button
                onClick={() => setIsEmailModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-soft transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-warm/20 border border-accent-warm/30 flex items-center justify-center mb-6 text-accent-warm">
                  <Mail size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">Send me an Email!</h3>
                
                <p className="text-text-muted mb-8 leading-relaxed">
                  This is my official email address. Feel free to contact me here for business inquiries or project details.
                </p>
                
                <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-center justify-between">
                  <span className="text-text-muted text-sm">Email Address</span>
                  <span className="font-mono font-bold text-accent-warm">torozoro980@gmail.com</span>
                </div>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('torozoro980@gmail.com');
                    setCopiedEmail(true);
                    setTimeout(() => setCopiedEmail(false), 2000);
                  }}
                  className="w-full bg-accent-warm hover:bg-accent-warm/90 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  {copiedEmail ? 'Copied!' : 'Copy Email Address'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Invalid Email Modal */}
      <AnimatePresence>
        {isInvalidEmailModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/80 backdrop-blur-sm"
            onClick={() => setIsInvalidEmailModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-bg-primary/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-red-500/20 rounded-full blur-[60px] pointer-events-none"></div>
              
              <button
                onClick={() => setIsInvalidEmailModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-soft transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center mb-6 text-red-500">
                  <AlertCircle size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">Gmail Required</h3>
                
                <p className="text-text-muted mb-6 leading-relaxed">
                  To ensure the best communication and avoid spam filters, I currently only accept messages from <strong className="text-white">@gmail.com</strong> addresses. Please use a valid Google email to reach out!
                </p>

                <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-center justify-between">
                  <span className="text-text-muted text-sm">Or reach me on Discord</span>
                  <span className="font-mono font-bold text-[#5865F2]">la_suko</span>
                </div>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('la_suko');
                    setCopiedDiscord(true);
                    setTimeout(() => setCopiedDiscord(false), 2000);
                  }}
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 rounded-xl transition-colors mb-3"
                >
                  {copiedDiscord ? 'Copied!' : 'Copy Discord Username'}
                </button>
                <button 
                  onClick={() => setIsInvalidEmailModalOpen(false)}
                  className="w-full bg-transparent hover:bg-white/5 text-text-muted font-bold py-3 rounded-xl transition-colors"
                >
                  I'll use a Gmail address
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discord Modal */}
      <AnimatePresence>
        {isDiscordModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-primary/80 backdrop-blur-sm"
            onClick={() => setIsDiscordModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md bg-bg-primary/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-accent-cyan/20 rounded-full blur-[60px] pointer-events-none"></div>
              
              <button
                onClick={() => setIsDiscordModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-text-muted hover:text-text-soft transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#5865F2]/20 border border-[#5865F2]/30 flex items-center justify-center mb-6 text-[#5865F2]">
                  <MessageSquare size={32} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">Let's Chat on Discord!</h3>
                
                <p className="text-text-muted mb-8 leading-relaxed">
                  For the fastest response and best results, please add me on Discord. I'm much more active there and we can discuss your project in detail!
                </p>
                
                <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mb-6 flex items-center justify-between">
                  <span className="text-text-muted text-sm">Discord Username</span>
                  <span className="font-mono font-bold text-accent-cyan">la_suko</span>
                </div>
                
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText('la_suko');
                    setCopiedDiscord(true);
                    setTimeout(() => setCopiedDiscord(false), 2000);
                  }}
                  className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 rounded-xl transition-colors"
                >
                  {copiedDiscord ? 'Copied!' : 'Copy Username'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
