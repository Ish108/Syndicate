import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { Button } from "./Button";
import { GlassCard } from "./GlassCard";
import { useNavigate } from "react-router-dom";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    text,
    icon,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    text?: string;
    icon?: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: "easeOut",
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 25, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 3 + Math.random() * 2, // 3-5 seconds (faster bounce)
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full flex items-center justify-center",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.10]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
                    )}
                >
                    <div className="flex items-center justify-center space-x-3 z-10 drop-shadow-md">
                        {icon && <span className="text-white/50">{icon}</span>}
                        {text && (
                            <span className="text-white/40 font-bold tracking-[0.2em] uppercase">
                                {text}
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
);

export function HeroGeometric({
    badge = "THE V1.0 ENGINE IS LIVE \u2192",
    title1 = "Stop Posting.",
    title2 = "Start Syndicating.",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const navigate = useNavigate();
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: "easeOut" as const,
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-32 pb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.08] via-transparent to-orange-900/[0.08] blur-3xl" />

            {/* Confine the animated shapes strictly to the top portion of the screen without clipping */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <ElegantShape
                    delay={0.3}
                    width={350}
                    height={100}
                    rotate={12}
                    gradient="from-rose-500/[0.15]"
                    className="left-[5%] md:left-[10%] top-[10%] md:top-[15%]"
                    text="YouTube"
                    icon={<YoutubeIcon />}
                />

                <ElegantShape
                    delay={0.5}
                    width={300}
                    height={80}
                    rotate={-15}
                    gradient="from-violet-500/[0.15]"
                    className="right-[5%] md:right-[10%] top-[15%] md:top-[20%]"
                    text="LinkedIn"
                    icon={<LinkedinIcon />}
                />

                <ElegantShape
                    delay={0.4}
                    width={200}
                    height={60}
                    rotate={-8}
                    gradient="from-blue-500/[0.15]"
                    className="left-[15%] md:left-[20%] top-[35%] md:top-[40%]"
                    icon={<XIcon />}
                />

                <ElegantShape
                    delay={0.6}
                    width={250}
                    height={70}
                    rotate={20}
                    gradient="from-fuchsia-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[40%] md:top-[45%]"
                    text="Instagram"
                    icon={<InstagramIcon />}
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                        <span className="text-sm text-white tracking-wide font-medium uppercase">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1]">
                            <span className="bg-clip-text text-white">
                                {title1}
                            </span>
                            <br />
                            <span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600"
                                )}
                            >
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mb-12 leading-relaxed font-medium mx-auto">
                            Transform a single raw transcript into a month of viral X threads, highly-engaged LinkedIn posts, and retention-optimized Reels. <br className="hidden md:block"/>
                            <span className="text-white/80 font-semibold">Reach millions without burning out.</span>
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Button variant="primary" size="lg" className="h-14 px-10 text-lg group whitespace-nowrap" onClick={() => navigate('/dashboard')}>
                            Deploy Your Content Machine
                            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Interactive Terminal Visual Payload */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
                        className="mt-20 w-full max-w-4xl relative z-20 group perspective-1000 pointer-events-auto"
                    >
                        <GlassCard className="p-0 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/20 transform-gpu transition-transform duration-700 group-hover:rotate-x-2">
                        <div className="bg-black/80 px-4 py-3 border-b border-white/10 flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            <span className="ml-4 text-xs font-mono text-zinc-400">SYNDICATE_RUNTIME_ENV</span>
                        </div>
                        <div className="p-6 font-mono text-sm md:text-base text-left h-64 overflow-hidden relative bg-black/40">
                            <motion.div 
                            animate={{ y: [0, -100] }} 
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="space-y-3 text-emerald-400/80"
                            >
                            <p>&gt; Ingesting raw_transcript_ep42.mp4... [OK]</p>
                            <p>&gt; Analyzing psychological hooks... [FOUND 7 ANGLES]</p>
                            <p>&gt; Discarding fluff... [REMOVED 42%]</p>
                            <p className="text-white">&gt; Calibrating Brand Voice module...</p>
                            <p className="text-zinc-400">  - Pacing: Aggressive, staccato</p>
                            <p className="text-zinc-400">  - Vocabulary: Direct-response, authority</p>
                            <p className="text-blue-400 mt-4">&gt; Generating X Thread (Broetry format)... [DONE]</p>
                            <p className="text-blue-400">&gt; Generating LinkedIn Post (PAS framework)... [DONE]</p>
                            <p className="text-blue-400">&gt; Generating YT Shorts Script (Under 60s)... [DONE]</p>
                            <p className="text-white mt-4 font-bold animate-pulse">&gt; SYNDICATION READY. WAITING FOR DEPLOYMENT_</p>
                            </motion.div>
                            {/* Gradient fade at bottom to hide scrolling text */}
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent" />
                        </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 pointer-events-none" />
        </div>
    );
}
