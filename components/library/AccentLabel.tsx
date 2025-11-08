/**
 * AccentLabel Component
 * 
 * A reusable accent label component with the electric mint color,
 * Space Mono font, and subtle glow effect.
 * 
 * Usage:
 * <AccentLabel>Selected Work</AccentLabel>
 * <AccentLabel variant="soft">Featured</AccentLabel>
 */

interface AccentLabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'soft';
  className?: string;
}

export function AccentLabel({ 
  children, 
  variant = 'default',
  className = '' 
}: AccentLabelProps) {
  const glowClass = variant === 'soft' ? 'label-glow-soft' : 'label-glow';
  
  return (
    <span 
      className={`text-[#00CE93] uppercase tracking-wider text-xs md:text-sm ${glowClass} ${className}`}
      style={{ fontFamily: 'Space Mono, monospace' }}
    >
      {children}
    </span>
  );
}