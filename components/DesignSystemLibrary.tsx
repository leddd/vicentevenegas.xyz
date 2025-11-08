/**
 * Design System Library
 * 
 * Comprehensive visual library showcasing all components, tokens,
 * colors, typography, spacing, and effects.
 */

import { useState } from 'react';
import { ArrowRight, Copy, Check, Palette, Type, Box, Sparkles, Layout } from 'lucide-react';
import { 
  AccentLabel, 
  PrimaryButton, 
  SectionHeader, 
  SectionContainer,
  NavLink,
  ProjectCard,
  MetadataItem 
} from './library';

export function DesignSystemLibrary() {
  const [activeTab, setActiveTab] = useState<'colors' | 'typography' | 'components' | 'spacing' | 'effects'>('colors');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const colors = [
    { name: 'Background', value: '#151515', var: '--vv-bg' },
    { name: 'Text Primary', value: '#EDEDED', var: '--vv-text-primary' },
    { name: 'Text Secondary', value: '#B3B3B3', var: '--vv-text-secondary' },
    { name: 'Accent', value: '#00CE93', var: '--vv-accent' },
    { name: 'Accent Hover', value: '#00FFA8', var: '--vv-accent-hover' },
    { name: 'Accent Muted', value: '#002820', var: '--vv-accent-muted' },
  ];

  const typeScales = [
    { name: 'text-xs', size: '0.75rem', example: 'Small labels' },
    { name: 'text-sm', size: '0.875rem', example: 'Labels, metadata' },
    { name: 'text-base', size: '1rem', example: 'Body text' },
    { name: 'text-lg', size: '1.125rem', example: 'Large body' },
    { name: 'text-xl', size: '1.25rem', example: 'Small headings' },
    { name: 'text-2xl', size: '1.5rem', example: 'H2' },
    { name: 'text-3xl', size: '1.875rem', example: 'H1 mobile' },
    { name: 'text-4xl', size: '2.25rem', example: 'H1 tablet' },
    { name: 'text-5xl', size: '3rem', example: 'H1 desktop' },
    { name: 'text-7xl', size: '4.5rem', example: 'Hero text' },
  ];

  const spacing = [
    { name: 'gap-3', value: '12px', use: 'Tight spacing' },
    { name: 'gap-4', value: '16px', use: 'Element spacing' },
    { name: 'gap-5', value: '20px', use: 'Grid gutter' },
    { name: 'gap-6', value: '24px', use: 'Component spacing' },
    { name: 'gap-8', value: '32px', use: 'Section spacing' },
    { name: 'gap-12', value: '48px', use: 'Large spacing' },
    { name: 'px-6', value: '24px', use: 'Mobile padding' },
    { name: 'px-12', value: '48px', use: 'Tablet padding' },
    { name: 'px-[220px]', value: '220px', use: 'Desktop padding' },
    { name: 'py-20', value: '80px', use: 'Section padding' },
    { name: 'py-32', value: '128px', use: 'Section padding desktop' },
  ];

  const effects = [
    { 
      name: 'label-glow', 
      code: 'text-shadow: 0 0 10px rgba(0, 206, 147, 0.3), 0 0 20px rgba(0, 206, 147, 0.15)',
      demo: <span className="text-[#00CE93] label-glow">GLOWING LABEL</span>
    },
    { 
      name: 'label-glow-soft', 
      code: 'text-shadow: 0 0 8px rgba(0, 206, 147, 0.2)',
      demo: <span className="text-[#00CE93] label-glow-soft">SOFT GLOW</span>
    },
    { 
      name: 'mint-glow', 
      code: 'box-shadow: 0 0 15px rgba(0, 206, 147, 0.2), 0 0 30px rgba(0, 206, 147, 0.1)',
      demo: <div className="w-24 h-24 bg-[#00CE93]/20 mint-glow" />
    },
    { 
      name: 'grid-overlay', 
      code: 'background: linear-gradient grid pattern',
      demo: <div className="w-full h-24 grid-overlay bg-[#151515]" />
    },
    { 
      name: 'fade-in', 
      code: 'animation: fadeIn 0.6s ease-out forwards',
      demo: <div className="fade-in text-[#EDEDED]">Fading in...</div>
    },
  ];

  return (
    <SectionContainer id="design-library" className="pb-32">
      <div className="mb-12">
        <AccentLabel>System Library</AccentLabel>
        <h1 className="text-[#EDEDED] mt-4 text-4xl md:text-5xl lg:text-6xl">
          Design System
        </h1>
        <p className="text-[#B3B3B3] mt-6 max-w-3xl text-base md:text-lg leading-relaxed">
          Complete visual reference for all design tokens, components, and patterns used in Vicente Venegas' portfolio.
        </p>
      </div>

      {/* Tab Navigation */}
      <div 
        className="flex flex-wrap gap-4 mb-12 border-b border-[#00CE93]/20 pb-4"
        style={{ fontFamily: 'Space Mono, monospace' }}
      >
        <button
          onClick={() => setActiveTab('colors')}
          className={`px-4 py-2 uppercase tracking-wider text-sm transition-colors duration-200 ${
            activeTab === 'colors' ? 'text-[#00CE93] border-b-2 border-[#00CE93]' : 'text-[#B3B3B3] hover:text-[#00CE93]'
          }`}
        >
          <Palette className="inline w-4 h-4 mr-2" />
          Colors
        </button>
        <button
          onClick={() => setActiveTab('typography')}
          className={`px-4 py-2 uppercase tracking-wider text-sm transition-colors duration-200 ${
            activeTab === 'typography' ? 'text-[#00CE93] border-b-2 border-[#00CE93]' : 'text-[#B3B3B3] hover:text-[#00CE93]'
          }`}
        >
          <Type className="inline w-4 h-4 mr-2" />
          Typography
        </button>
        <button
          onClick={() => setActiveTab('components')}
          className={`px-4 py-2 uppercase tracking-wider text-sm transition-colors duration-200 ${
            activeTab === 'components' ? 'text-[#00CE93] border-b-2 border-[#00CE93]' : 'text-[#B3B3B3] hover:text-[#00CE93]'
          }`}
        >
          <Box className="inline w-4 h-4 mr-2" />
          Components
        </button>
        <button
          onClick={() => setActiveTab('spacing')}
          className={`px-4 py-2 uppercase tracking-wider text-sm transition-colors duration-200 ${
            activeTab === 'spacing' ? 'text-[#00CE93] border-b-2 border-[#00CE93]' : 'text-[#B3B3B3] hover:text-[#00CE93]'
          }`}
        >
          <Layout className="inline w-4 h-4 mr-2" />
          Spacing
        </button>
        <button
          onClick={() => setActiveTab('effects')}
          className={`px-4 py-2 uppercase tracking-wider text-sm transition-colors duration-200 ${
            activeTab === 'effects' ? 'text-[#00CE93] border-b-2 border-[#00CE93]' : 'text-[#B3B3B3] hover:text-[#00CE93]'
          }`}
        >
          <Sparkles className="inline w-4 h-4 mr-2" />
          Effects
        </button>
      </div>

      {/* Colors Tab */}
      {activeTab === 'colors' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-[#EDEDED] mb-6 text-2xl md:text-3xl">Color Palette</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color) => (
                <div key={color.name} className="border border-[#00CE93]/20 p-6 hover:border-[#00CE93]/40 transition-colors duration-300">
                  <div 
                    className="w-full h-32 mb-4 rounded" 
                    style={{ backgroundColor: color.value }}
                  />
                  <div style={{ fontFamily: 'Space Mono, monospace' }}>
                    <div className="text-[#EDEDED] mb-2">{color.name}</div>
                    <div className="flex items-center justify-between">
                      <code className="text-[#00CE93] text-sm">{color.value}</code>
                      <button
                        onClick={() => copyToClipboard(color.value, color.name)}
                        className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors"
                      >
                        {copiedItem === color.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="text-[#B3B3B3] text-xs mt-2">{color.var}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#00CE93]/20 pt-8">
            <h4 className="text-[#EDEDED] mb-4 text-xl">Usage Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#00CE93]/20 p-6">
                <div className="text-[#00CE93] text-xs mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  BACKGROUND
                </div>
                <code className="text-[#B3B3B3] text-sm">bg-[#151515]</code>
                <div className="mt-4 bg-[#151515] p-4 text-[#EDEDED]">
                  Example background
                </div>
              </div>
              <div className="border border-[#00CE93]/20 p-6">
                <div className="text-[#00CE93] text-xs mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  ACCENT BORDER
                </div>
                <code className="text-[#B3B3B3] text-sm">border border-[#00CE93]</code>
                <div className="mt-4 border border-[#00CE93] p-4 text-[#00CE93]">
                  Accent border
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Typography Tab */}
      {activeTab === 'typography' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-[#EDEDED] mb-6 text-2xl md:text-3xl">Type Scale</h3>
            <div className="space-y-6">
              {typeScales.map((scale) => (
                <div key={scale.name} className="border border-[#00CE93]/20 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div style={{ fontFamily: 'Space Mono, monospace' }}>
                      <code className="text-[#00CE93] text-sm">{scale.name}</code>
                      <div className="text-[#B3B3B3] text-xs mt-1">{scale.size}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(scale.name, scale.name)}
                      className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors"
                    >
                      {copiedItem === scale.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className={`text-[#EDEDED] ${scale.name}`}>
                    {scale.example}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#00CE93]/20 pt-8">
            <h4 className="text-[#EDEDED] mb-4 text-xl">Font Families</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#00CE93]/20 p-6">
                <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                  SPACE GROTESK
                </div>
                <div className="text-[#EDEDED] text-2xl mb-2">
                  The quick brown fox jumps over the lazy dog
                </div>
                <div className="text-[#B3B3B3] text-sm">
                  Default font for headings and body text
                </div>
              </div>
              <div className="border border-[#00CE93]/20 p-6">
                <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                  SPACE MONO
                </div>
                <div className="text-[#EDEDED] text-2xl mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
                  The quick brown fox jumps over the lazy dog
                </div>
                <div className="text-[#B3B3B3] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>
                  Monospace font for labels and metadata
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Components Tab */}
      {activeTab === 'components' && (
        <div className="space-y-12">
          <div>
            <h3 className="text-[#EDEDED] mb-6 text-2xl md:text-3xl">Component Library</h3>
            
            {/* AccentLabel */}
            <div className="border border-[#00CE93]/20 p-8 mb-8">
              <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                ACCENT LABEL
              </div>
              <div className="space-y-4 mb-6">
                <AccentLabel>Default Label</AccentLabel>
                <AccentLabel variant="soft">Soft Glow Label</AccentLabel>
              </div>
              <code className="text-[#B3B3B3] text-sm block bg-[#0A0A0A] p-4 rounded">
                {'<AccentLabel>Label Text</AccentLabel>'}
              </code>
            </div>

            {/* PrimaryButton */}
            <div className="border border-[#00CE93]/20 p-8 mb-8">
              <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                PRIMARY BUTTON
              </div>
              <div className="space-y-4 mb-6">
                <PrimaryButton onClick={() => {}}>
                  Button Text
                </PrimaryButton>
                <PrimaryButton onClick={() => {}} icon={<ArrowRight className="w-4 h-4" />}>
                  With Icon
                </PrimaryButton>
              </div>
              <code className="text-[#B3B3B3] text-sm block bg-[#0A0A0A] p-4 rounded">
                {'<PrimaryButton onClick={handleClick}>Button Text</PrimaryButton>'}
              </code>
            </div>

            {/* SectionHeader */}
            <div className="border border-[#00CE93]/20 p-8 mb-8">
              <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                SECTION HEADER
              </div>
              <div className="mb-6">
                <SectionHeader label="Section Label" title="Section Title" />
              </div>
              <code className="text-[#B3B3B3] text-sm block bg-[#0A0A0A] p-4 rounded">
                {'<SectionHeader label="Label" title="Title" />'}
              </code>
            </div>

            {/* NavLink */}
            <div className="border border-[#00CE93]/20 p-8 mb-8">
              <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                NAV LINK
              </div>
              <div className="space-y-4 mb-6">
                <NavLink onClick={() => {}}>Work</NavLink>
                <NavLink onClick={() => {}} active>About</NavLink>
              </div>
              <code className="text-[#B3B3B3] text-sm block bg-[#0A0A0A] p-4 rounded">
                {'<NavLink onClick={handleClick}>Link Text</NavLink>'}
              </code>
            </div>

            {/* MetadataItem */}
            <div className="border border-[#00CE93]/20 p-8 mb-8">
              <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                METADATA ITEM
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <MetadataItem label="Client" value="Acme Corp" />
                <MetadataItem label="Year" value="2025" />
                <MetadataItem label="Role" value="Design" />
                <MetadataItem label="Duration" value="6 months" />
              </div>
              <code className="text-[#B3B3B3] text-sm block bg-[#0A0A0A] p-4 rounded">
                {'<MetadataItem label="Client" value="Acme Corp" />'}
              </code>
            </div>

            {/* ProjectCard */}
            <div className="border border-[#00CE93]/20 p-8">
              <div className="text-[#00CE93] text-xs mb-4" style={{ fontFamily: 'Space Mono, monospace' }}>
                PROJECT CARD
              </div>
              <div className="max-w-md mb-6">
                <ProjectCard
                  title="Project Title"
                  role="Product Design, Development"
                  year="2025"
                  image="https://images.unsplash.com/photo-1762222687051-4c9926eba36d?w=400"
                />
              </div>
              <code className="text-[#B3B3B3] text-sm block bg-[#0A0A0A] p-4 rounded">
                {'<ProjectCard title="..." role="..." year="..." image="..." />'}
              </code>
            </div>
          </div>
        </div>
      )}

      {/* Spacing Tab */}
      {activeTab === 'spacing' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-[#EDEDED] mb-6 text-2xl md:text-3xl">Spacing System</h3>
            <div className="space-y-4">
              {spacing.map((space) => (
                <div key={space.name} className="border border-[#00CE93]/20 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div style={{ fontFamily: 'Space Mono, monospace' }}>
                      <code className="text-[#00CE93] text-sm">{space.name}</code>
                      <div className="text-[#B3B3B3] text-xs mt-1">{space.value} • {space.use}</div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(space.name, space.name)}
                      className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors"
                    >
                      {copiedItem === space.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div 
                    className="bg-[#00CE93]/20 h-8" 
                    style={{ width: space.value }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Effects Tab */}
      {activeTab === 'effects' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-[#EDEDED] mb-6 text-2xl md:text-3xl">Effects & Animations</h3>
            <div className="space-y-8">
              {effects.map((effect) => (
                <div key={effect.name} className="border border-[#00CE93]/20 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div style={{ fontFamily: 'Space Mono, monospace' }}>
                      <code className="text-[#00CE93] text-sm">.{effect.name}</code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(effect.name, effect.name)}
                      className="text-[#B3B3B3] hover:text-[#00CE93] transition-colors"
                    >
                      {copiedItem === effect.name ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="flex items-center justify-center p-8 bg-[#0A0A0A] mb-4 rounded">
                    {effect.demo}
                  </div>
                  <code className="text-[#B3B3B3] text-xs block bg-[#0A0A0A] p-4 rounded overflow-x-auto">
                    {effect.code}
                  </code>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#00CE93]/20 pt-8">
            <h4 className="text-[#EDEDED] mb-4 text-xl">Transition Durations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#00CE93]/20 p-6">
                <code className="text-[#00CE93] text-sm">duration-200</code>
                <div className="text-[#B3B3B3] text-sm mt-2">Fast • 200ms • Quick interactions</div>
              </div>
              <div className="border border-[#00CE93]/20 p-6">
                <code className="text-[#00CE93] text-sm">duration-300</code>
                <div className="text-[#B3B3B3] text-sm mt-2">Standard • 300ms • Default transitions</div>
              </div>
              <div className="border border-[#00CE93]/20 p-6">
                <code className="text-[#00CE93] text-sm">duration-500</code>
                <div className="text-[#B3B3B3] text-sm mt-2">Smooth • 500ms • Overlays</div>
              </div>
              <div className="border border-[#00CE93]/20 p-6">
                <code className="text-[#00CE93] text-sm">duration-700</code>
                <div className="text-[#B3B3B3] text-sm mt-2">Slow • 700ms • Dramatic effects</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
