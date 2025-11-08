/**
 * PrimaryButton Component
 * 
 * Primary CTA button with accent border, hover fill effect,
 * and optional icon support.
 * 
 * Usage:
 * <PrimaryButton onClick={handleClick}>
 *   View Work
 * </PrimaryButton>
 * 
 * <PrimaryButton onClick={handleClick} icon={<ArrowRight />}>
 *   Learn More
 * </PrimaryButton>
 */

import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export function PrimaryButton({ 
  children, 
  onClick,
  icon,
  className = '',
  type = 'button'
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center gap-3 px-6 py-3 border border-[#00CE93] text-[#00CE93] hover:bg-[#00CE93] hover:text-[#151515] transition-all duration-300 ${className}`}
      style={{ fontFamily: 'Space Mono, monospace' }}
    >
      <span className="uppercase tracking-wider text-sm">
        {children}
      </span>
      {icon && (
        <span className="group-hover:translate-x-1 transition-transform">
          {icon}
        </span>
      )}
    </button>
  );
}