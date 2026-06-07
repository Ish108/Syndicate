import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface GlassCardProps extends React.ComponentProps<typeof motion.div> {
  children: React.ReactNode;
  gradientHover?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, gradientHover = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={gradientHover ? { y: -4 } : {}}
        className={cn(
          "relative bg-syndicate-surface backdrop-blur-xl border border-syndicate-border rounded-3xl p-6 transition-all duration-500 overflow-hidden group",
          gradientHover && "hover:border-white/20 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]",
          className
        )}
        {...props}
      >
        {gradientHover && (
          <div className="absolute inset-0 bg-gradient-to-br from-syndicate-accent-navy/10 to-syndicate-accent-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
        )}
        <div className="relative z-10 h-full">
          {children}
        </div>
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";
