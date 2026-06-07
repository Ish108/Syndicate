import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowUpRight, ChevronDown, Sparkles, Network, Zap, Cpu
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { HeroGeometric } from '../components/ui/HeroGeometric';
import { DisplayCards } from '../components/ui/DisplayCards';
import { cn } from '../utils/cn';

const YoutubeIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={cn("fill-current", className)}><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const LinkedinIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={cn("fill-current", className)}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const InstagramIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={cn("fill-current", className)}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const XIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("fill-current", className)}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);

const TikTokIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={cn("fill-current", className)}><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.52 3.23-1.48 4.54-1.22 1.64-3.1 2.72-5.12 3-2.12.28-4.32-.1-6.07-1.34-1.72-1.21-2.82-3.1-3.13-5.18-.32-2.1.09-4.31 1.25-6.07 1.14-1.74 2.94-2.93 4.96-3.32 1.83-.35 3.75-.08 5.4.88v4.18c-1.3-.87-3.03-1.07-4.47-.53-1.35.5-2.45 1.58-2.92 2.92-.48 1.34-.37 2.89.3 4.12.7 1.3 1.96 2.27 3.4 2.56 1.48.29 3.09.05 4.33-.78 1.25-.84 2.1-2.22 2.22-3.72V.02z"/></svg>
);

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  // Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Will the AI sound robotic or generic?", a: "No. SYNDICATE uses an advanced Voice Calibration Engine. By ingesting your previous content, it maps your exact vocabulary, pacing, and emotional register. It sounds like you on your best day." },
    { q: "Do I need to be a prompt engineer?", a: "Absolutely not. The machine handles the complex underlying context injection and structural formatting. You simply drop in a PDF, transcript, or YouTube URL and click generate." },
    { q: "Does it just copy-paste the same post to every platform?", a: "Never. That kills reach. SYNDICATE engineers platform-native content. An X thread gets the 'Broetry' hook format, while a LinkedIn post gets the PAS framework with heavy whitespace." },
    { q: "How long does it take to process an hour-long podcast?", a: "Under 60 seconds. The Context Engine rapidly extracts the most counter-intuitive, highly valuable angles, discarding the fluff instantly." },
    { q: "Is there a limit to how much I can generate?", a: "SYNDICATE scales with your ambition. Check our pricing page for detailed volume tiers tailored to solo creators and large agencies." }
  ];

  return (
    <div className="min-h-screen bg-syndicate-bg text-syndicate-text-primary flex flex-col relative z-10 font-sans">
      
      {/* ---------------- SECTION 1: TOP NAVBAR ---------------- */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-1 flex items-center justify-between border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        <div className="flex items-center cursor-pointer group" onClick={() => navigate('/')}>
          <img 
            src="/syndicate-logo.jpg" 
            alt="SYNDICATE" 
            className="w-24 h-24 object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-syndicate-text-secondary">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>Log In</Button>
          <Button variant="primary" size="sm" onClick={() => navigate('/dashboard')}>Get Access</Button>
        </div>
      </nav>

      {/* ---------------- SECTION 2: HERO SECTION ---------------- */}
      <section className="relative w-full">
        <HeroGeometric />
      </section>

      {/* ---------------- SECTION 3: SOCIAL PROOF MARQUEE ---------------- */}
      <section className="py-10 border-y border-syndicate-border bg-black/20 overflow-hidden relative flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-syndicate-bg to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-syndicate-bg to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex whitespace-nowrap space-x-16 items-center text-syndicate-text-secondary opacity-60"
        >
          {/* We duplicate the list to make the infinite scroll seamless */}
          {[1, 2].map((group) => (
            <React.Fragment key={group}>
              <div className="flex items-center space-x-3"><YoutubeIcon className="w-8 h-8"/> <span className="text-2xl font-bold">YouTube</span></div>
              <div className="flex items-center space-x-3"><XIcon className="w-8 h-8"/> <span className="text-2xl font-bold">X (Twitter)</span></div>
              <div className="flex items-center space-x-3"><LinkedinIcon className="w-8 h-8"/> <span className="text-2xl font-bold">LinkedIn</span></div>
              <div className="flex items-center space-x-3"><InstagramIcon className="w-8 h-8"/> <span className="text-2xl font-bold">Instagram</span></div>
              <div className="flex items-center space-x-3"><TikTokIcon className="w-8 h-8"/> <span className="text-2xl font-bold">TikTok</span></div>
            </React.Fragment>
          ))}
        </motion.div>
      </section>

      {/* ---------------- SECTION 4: PROBLEM & AGITATION (The Old Way) ---------------- */}
      <section className="py-32 px-6 sm:px-12 max-w-5xl mx-auto text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-neutral-400">
          The content treadmill is broken.
        </h2>
        <div className="space-y-6 text-lg md:text-xl text-syndicate-text-secondary max-w-3xl mx-auto font-medium">
          <p>
            You spend 10 hours a week filming a video or writing a newsletter. You post it once. It gets 300 views. <span className="text-red-400/80">Then it dies.</span>
          </p>
          <p>
            You know you need to be on X, LinkedIn, and Shorts. But rewriting the same concept 5 different ways for 5 different algorithms is exhausting. 
          </p>
          <p className="text-white font-bold text-2xl pt-6">
            You don't need to work harder. You need a machine.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 5: SYNDICATE SOLUTION (Display Cards) ---------------- */}
      <section id="features" className="py-24 px-6 sm:px-12 w-full max-w-5xl mx-auto overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">The New Paradigm.</h2>
          <p className="text-xl text-syndicate-text-secondary">Engineered to dominate the feed.</p>
        </div>

        <div className="flex min-h-[600px] w-full items-center justify-center">
          <div className="w-full max-w-4xl flex items-center justify-center relative left-[-40px]">
            <DisplayCards cards={[
              {
                icon: <Cpu className="w-5 h-5 text-purple-400" />,
                title: "The Context Engine",
                description: "Drop in a massive PDF, an hour-long podcast transcript, or a messy brain-dump. SYNDICATE instantly extracts the most counter-intuitive angles and discards the fluff.",
                date: "Phase 01",
                iconClassName: "text-purple-400",
                titleClassName: "text-purple-400",
                className:
                  "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
              },
              {
                icon: <Sparkles className="w-5 h-5 text-rose-400" />,
                title: "Brand Voice Cloning",
                description: "By analyzing your past top-performing posts, the engine calibrates to your exact pacing, slang, and emotional register. It sounds like you on your best day.",
                date: "Phase 02",
                iconClassName: "text-rose-400",
                titleClassName: "text-rose-400",
                className:
                  "[grid-area:stack] translate-x-8 translate-y-8 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-10",
              },
              {
                icon: <Network className="w-5 h-5 text-amber-400" />,
                title: "Platform Native Architecture",
                description: "A LinkedIn post requires PAS structure and whitespace. An X thread needs a Broetry hook and fast pacing. The output perfectly satisfies each algorithm.",
                date: "Phase 03",
                iconClassName: "text-amber-400",
                titleClassName: "text-amber-400",
                className:
                  "[grid-area:stack] translate-x-16 translate-y-16 hover:translate-y-8 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-20",
              },
              {
                icon: <Zap className="w-5 h-5 text-cyan-400" />,
                title: "Viral Retention Hooks",
                description: "Every script is embedded with engineered open-loops to maximize watch time. Never lose the viewer's attention and dominate the feed.",
                date: "Phase 04",
                iconClassName: "text-cyan-400",
                titleClassName: "text-cyan-400",
                className:
                  "[grid-area:stack] translate-x-24 translate-y-24 hover:translate-y-16 z-30",
              },
            ]} />
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: 3-STEP OPERATING SYSTEM ---------------- */}
      <section id="how-it-works" className="py-24 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">The Operating System</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16 relative">
            
            {/* Connecting line for desktop removed per user request */}

            <div className="flex flex-col items-center max-w-xs relative bg-syndicate-bg md:bg-transparent p-4">
              <div className="w-20 h-20 rounded-full bg-syndicate-surface border border-syndicate-border flex items-center justify-center text-2xl font-bold mb-6 text-syndicate-accent-navy shadow-[0_0_30px_rgba(29,78,216,0.2)]">1</div>
              <h3 className="text-xl font-bold mb-3">Inject Source</h3>
              <p className="text-syndicate-text-secondary text-sm">Provide raw transcripts, messy notes, or long-form PDFs. Give it the raw material.</p>
            </div>

            <div className="flex flex-col items-center max-w-xs relative bg-syndicate-bg md:bg-transparent p-4">
              <div className="w-20 h-20 rounded-full bg-syndicate-surface border border-syndicate-border flex items-center justify-center text-2xl font-bold mb-6 text-syndicate-accent-emerald shadow-[0_0_30px_rgba(16,185,129,0.2)]">2</div>
              <h3 className="text-xl font-bold mb-3">Calibrate AI</h3>
              <p className="text-syndicate-text-secondary text-sm">The engine maps your brand voice, applying your exact tone, pacing, and vocabulary to the output.</p>
            </div>

            <div className="flex flex-col items-center max-w-xs relative bg-syndicate-bg md:bg-transparent p-4">
              <div className="w-20 h-20 rounded-full bg-syndicate-surface border border-syndicate-border flex items-center justify-center text-2xl font-bold mb-6 text-white shadow-[0_0_30px_rgba(255,255,255,0.2)]">3</div>
              <h3 className="text-xl font-bold mb-3">Syndicate</h3>
              <p className="text-syndicate-text-secondary text-sm">Instantly receive a month's worth of optimized, highly-converting assets for every major platform.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: OBJECTION-CRUSHING FAQ ---------------- */}
      <section id="faq" className="py-32 px-6 sm:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">You have doubts.<br/>We have answers.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-0 overflow-hidden !rounded-2xl cursor-pointer" onClick={() => toggleFaq(index)}>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-lg font-bold pr-8">{faq.q}</h3>
                <ChevronDown className={cn("w-5 h-5 text-syndicate-text-secondary transition-transform duration-300", openFaq === index && "rotate-180")} />
              </div>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-syndicate-text-secondary leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* ---------------- SECTION 8: FINAL CTA SECTION ---------------- */}
      <section className="py-40 px-6 sm:px-12 text-center relative overflow-hidden">
        <div className="relative z-20 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Stop building an audience manually.
          </h2>
          <p className="text-xl text-syndicate-text-secondary mb-12">
            The algorithm rewards volume and quality. SYNDICATE gives you both. Unlock the ultimate content leverage today.
          </p>
          <Button variant="primary" size="lg" className="h-16 px-12 text-xl group shadow-[0_0_50px_rgba(16,185,129,0.3)]" onClick={() => navigate('/dashboard')}>
            Access The Machine Now
            <ArrowUpRight className="ml-3 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* ---------------- SECTION 9: MINIMALIST FOOTER ---------------- */}
      <footer className="border-t border-syndicate-border py-12 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <img 
              src="/syndicate-logo.jpg" 
              alt="SYNDICATE" 
              className="w-[4.5rem] h-[4.5rem] object-contain mix-blend-screen opacity-90"
            />
            <span className="text-neutral-500 border-l border-neutral-800 pl-4 py-1">&copy; {new Date().getFullYear()} Wondel.ai. All rights reserved.</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Twitter (X)</a>
          </div>
        </div>
      </footer>

    </div>
  );
};
