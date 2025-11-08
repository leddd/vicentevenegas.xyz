/**
 * SectionHeader Component
 * 
 * Standard section header with label and title.
 * Includes responsive typography and consistent spacing.
 * 
 * Usage:
 * <SectionHeader 
 *   label="Selected Work" 
 *   title="Projects"
 * />
 * 
 * <SectionHeader 
 *   label="About Me" 
 *   title="Vicente Venegas"
 *   className="mb-20"
 * />
 */

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ 
  label, 
  title, 
  className = 'mb-12 md:mb-16' 
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div 
        className="text-[#00CE93] uppercase tracking-wider text-xs md:text-sm mb-4 label-glow"
        style={{ fontFamily: 'Space Mono, monospace' }}
      >
        {label}
      </div>
      <h2 className="text-[#EDEDED] text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}