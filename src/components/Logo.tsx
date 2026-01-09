import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ className, size = 'md' }) => {
    const sizeClasses = {
        sm: 'w-8 h-8 text-sm',
        md: 'w-10 h-10 text-lg',
        lg: 'w-12 h-12 text-xl',
        xl: 'w-16 h-16 text-2xl',
    };

    return (
        <div
            className={cn("flex items-center gap-2", className)}
            role="img"
            aria-label="Quantix Logo - Quantum-Safe Finance"
        >
            <div
                className={cn(
                    "rounded-lg bg-gradient-primary flex items-center justify-center glow-primary shrink-0",
                    sizeClasses[size]
                )}
            >
                <span className="font-display font-bold text-primary-foreground">Q</span>
            </div>
            <span className={cn(
                "font-display font-bold text-foreground",
                size === 'sm' ? 'text-lg' : 'text-xl'
            )}>
                Quantix
            </span>
        </div>
    );

};

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <div className={cn(
        "w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center glow-primary",
        className
    )}>
        <span className="font-display font-bold text-primary-foreground text-lg">Q</span>
    </div>
);
