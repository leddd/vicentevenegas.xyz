/**
 * SectionContainer Component
 * 
 * Standard full-screen section container with consistent padding,
 * scroll snap behavior, and grid overlay.
 * 
 * Usage:
 * <SectionContainer id="work">
 *   <SectionHeader label="Selected Work" title="Projects" />
 *   Content goes here
 * </SectionContainer>
 * 
 * <SectionContainer id="about" className="py-12 md:py-20">
 *   Custom padding
 * </SectionContainer>
 */

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
  overlay?: boolean;
}

export function SectionContainer({ 
  id,
  children,
  className = '',
  fullScreen = true,
  overlay = true
}: SectionContainerProps) {
  const heightClass = fullScreen ? 'min-h-screen' : '';
  const overlayClass = overlay ? 'grid-overlay' : '';
  
  return (
    <section 
      id={id}
      className={`snap-section bg-[#151515] px-6 md:px-12 lg:px-[220px] py-20 md:py-32 ${heightClass} ${overlayClass} ${className}`}
    >
      {children}
    </section>
  );
}