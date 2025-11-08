/**
 * MetadataItem Component
 * 
 * Metadata display with label and value.
 * Uses Space Mono font for technical information.
 * 
 * Usage:
 * <MetadataItem label="Client" value="Acme Corp" />
 * <MetadataItem label="Year" value="2025" />
 * <MetadataItem label="Role" value="Product Design, Development" />
 */

interface MetadataItemProps {
  label: string;
  value: string;
  className?: string;
}

export function MetadataItem({ 
  label, 
  value,
  className = '' 
}: MetadataItemProps) {
  return (
    <div className={className} style={{ fontFamily: 'Space Mono, monospace' }}>
      <div className="text-[#00CE93] uppercase tracking-wider text-xs mb-1">
        {label}
      </div>
      <div className="text-[#EDEDED] text-sm md:text-base">
        {value}
      </div>
    </div>
  );
}