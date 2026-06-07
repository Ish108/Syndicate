import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ComponentProps<typeof motion.button> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-syndicate-accent-emerald/50 disabled:opacity-50 disabled:pointer-events-none overflow-hidden rounded-full";
    
    const variants = {
      primary: "bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 bg-[length:200%_auto] animate-gradient text-white shadow-[0_0_20px_rgba(244,63,94,0.2)] hover:shadow-[0_0_30px_rgba(244,63,94,0.4)]",
      secondary: "bg-syndicate-surface backdrop-blur-xl border border-syndicate-border text-syndicate-text-primary hover:bg-syndicate-surface-hover hover:border-syndicate-border-hover",
      ghost: "text-neutral-300 hover:text-white hover:bg-white/5",
      outline: "border-2 border-syndicate-accent-emerald text-syndicate-accent-emerald hover:bg-syndicate-accent-emerald/10",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center whitespace-nowrap w-full">{children}</span>
        {variant === 'primary' && (
          <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
