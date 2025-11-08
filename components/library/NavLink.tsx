/**
 * NavLink Component
 * 
 * Navigation link with hover effect and smooth scroll.
 * Used in Navigation component.
 * 
 * Usage:
 * <NavLink onClick={() => scrollToSection('work')}>
 *   Work
 * </NavLink>
 * 
 * <NavLink onClick={handleClick} active>
 *   About
 * </NavLink>
 */

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
  className?: string;
}

export function NavLink({ 
  children, 
  onClick,
  active = false,
  className = '' 
}: NavLinkProps) {
  const activeClass = active ? 'text-[#00CE93]' : 'text-[#B3B3B3]';
  
  return (
    <button
      onClick={onClick}
      className={`${activeClass} hover:text-[#00CE93] transition-colors duration-200 uppercase tracking-wider text-sm ${className}`}
      style={{ fontFamily: 'Space Mono, monospace' }}
    >
      {children}
    </button>
  );
}