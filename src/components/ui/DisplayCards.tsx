import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { BrainCircuit } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  onClick?: () => void;
  layoutId?: string;
}

// Base card size increased for readability
function DisplayCard({
  className,
  icon = <BrainCircuit className="w-5 h-5 text-emerald-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  titleClassName = "text-emerald-400",
  onClick,
  layoutId,
}: DisplayCardProps) {
  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      className={cn(
        "relative flex h-[22rem] w-[32rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-zinc-900/70 backdrop-blur-md px-8 py-8 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-[''] hover:border-white/30 hover:bg-zinc-800/90 [&>*]:flex [&>*]:items-center [&>*]:gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer",
        className
      )}
    >
      <div className="flex items-center space-x-4">
        <span className="relative inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-3 shrink-0">
          {icon}
        </span>
        <p className={cn("text-2xl font-bold tracking-wide", titleClassName)}>{title}</p>
      </div>
      <p className="whitespace-normal text-lg text-zinc-300 leading-relaxed pr-8 z-10 relative">{description}</p>
      <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{date}</p>
    </motion.div>
  );
}

// Expanded Card (Un-skewed, centered)
function ExpandedCard({
  card,
  layoutId,
  onClose,
}: {
  card: DisplayCardProps;
  layoutId: string;
  onClose: () => void;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
      />
      <div className="fixed inset-0 flex items-center justify-center z-[110] pointer-events-none">
        <motion.div
          layoutId={layoutId}
          className="relative flex h-[28rem] w-[40rem] select-none flex-col justify-between rounded-2xl border-2 border-white/20 bg-zinc-900/95 px-12 py-10 shadow-[0_0_80px_rgba(255,255,255,0.1)] pointer-events-auto"
        >
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>

          <div className="flex items-center space-x-6">
            <span className="relative inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 p-5 shrink-0">
              {card.icon}
            </span>
            <p className={cn("text-3xl font-bold tracking-wide", card.titleClassName)}>{card.title}</p>
          </div>
          <p className="whitespace-normal text-xl text-zinc-300 leading-relaxed z-10 relative pr-4">{card.description}</p>
          <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{card.date}</p>
        </motion.div>
      </div>
    </>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

export function DisplayCards({ cards }: DisplayCardsProps) {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <>
      {/* The base stack of cards */}
      <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 perspective-1000 mt-20">
        {cards?.map((cardProps, index) => {
          // If this card is currently expanded, we still render its placeholder to keep the layout, 
          // but we might want to hide it or keep it visible. We'll just hide it so layoutId can pull it out.
          if (selectedCard === index) {
            return (
              <div key={index} className={cn("invisible", cardProps.className)} style={{ width: '32rem', height: '22rem' }} />
            );
          }

          return (
            <DisplayCard 
              key={index} 
              layoutId={`card-${index}`}
              onClick={() => setSelectedCard(index)}
              {...cardProps} 
            />
          );
        })}
      </div>

      {/* The Modal Overlay for the clicked card */}
      <AnimatePresence>
        {selectedCard !== null && cards && cards[selectedCard] && (
          <ExpandedCard 
            card={cards[selectedCard]}
            layoutId={`card-${selectedCard}`}
            onClose={() => setSelectedCard(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
