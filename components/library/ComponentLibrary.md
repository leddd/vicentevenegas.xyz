# Vicente Venegas Portfolio - Component Library

A comprehensive guide to all components in the Vicente Venegas portfolio website.

## Table of Contents
1. [Layout Components](#layout-components)
2. [UI Components](#ui-components)
3. [Content Components](#content-components)
4. [Common Patterns](#common-patterns)

---

## Layout Components

### Navigation
**File:** `/components/Navigation.tsx`

**Description:** Fixed navigation with scroll-based backdrop blur and mobile menu.

**Features:**
- Fixed positioning with scroll detection
- Backdrop blur effect when scrolled
- Responsive mobile menu with slide-down animation
- Smooth scroll navigation to sections
- Space Mono font for all navigation items

**Props:** None (self-contained)

**Usage:**
```tsx
import { Navigation } from './components/Navigation';

<Navigation />
```

**Key Classes:**
- `fixed top-0 left-0 right-0 z-50` - Fixed navigation
- `bg-[#151515]/80 backdrop-blur-md` - Scrolled state background
- Mobile menu: `md:hidden` with conditional rendering

---

### Hero
**File:** `/components/Hero.tsx`

**Description:** Landing section with title, description, and CTA button.

**Features:**
- Full viewport height section
- Fade-in animation
- Scroll snap alignment
- Grid overlay background
- Responsive typography scale
- CTA button with smooth scroll

**Props:** None

**Usage:**
```tsx
import { Hero } from './components/Hero';

<Hero />
```

**Structure:**
```
section (full screen)
  └── container (max-w-5xl)
      ├── label (Space Mono, accent color, glow)
      ├── h1 (large responsive heading)
      ├── p (secondary text, description)
      └── button (CTA with icon)
```

**Key Features:**
- Label with `label-glow` effect
- Responsive text: `text-4xl md:text-5xl lg:text-7xl`
- Button hover: fills with accent color
- Arrow icon translates on hover

---

### Footer
**File:** `/components/Footer.tsx`

**Description:** Site footer with contact information and social links.

**Features:**
- Snap section
- Grid overlay
- Social media links
- Contact information
- Space Mono for labels

**Props:** None

**Usage:**
```tsx
import { Footer } from './components/Footer';

<Footer />
```

---

## Content Components

### ProjectGrid
**File:** `/components/ProjectGrid.tsx`

**Description:** 2-column grid of project cards with hover effects.

**Features:**
- Responsive grid layout (1 col mobile, 2 cols desktop)
- Hover state management
- Image scale and brightness transitions
- Accent overlay on hover
- Project metadata with year and role

**Props:** None (uses internal project data)

**Data Structure:**
```tsx
interface Project {
  id: number;
  title: string;
  role: string;
  year: string;
  image: string;
}
```

**Usage:**
```tsx
import { ProjectGrid } from './components/ProjectGrid';

<ProjectGrid />
```

**Hover Effects:**
- Image scales up: `group-hover:scale-105`
- Brightness reduces: `brightness(0.9) → brightness(0.7)`
- Mint overlay appears: `opacity-0 group-hover:opacity-20`
- Title changes color: `group-hover:text-[#7DFFC5]`

**Key Classes:**
- Grid: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5`
- Image container: `aspect-[4/3]` with overflow hidden
- Background fallback: `bg-[#1D3C31]` (muted accent)

---

### CaseStudy
**File:** `/components/CaseStudy.tsx`

**Description:** Detailed case study template with sections for overview, process, and outcome.

**Features:**
- Multi-section layout
- Image showcases
- Process steps
- Metrics display
- Responsive typography

**Props:** None (uses template data)

**Usage:**
```tsx
import { CaseStudy } from './components/CaseStudy';

<CaseStudy />
```

**Sections:**
1. **Hero** - Title, role, year, description
2. **Overview** - Client, services, project image
3. **Process** - Numbered steps with descriptions
4. **Outcome** - Metrics and results
5. **Visual Showcase** - Additional project images

---

### About
**File:** `/components/About.tsx`

**Description:** About section with bio, skills, and experience.

**Features:**
- Personal introduction
- Skills list
- Experience timeline
- Responsive layout

**Props:** None

**Usage:**
```tsx
import { About } from './components/About';

<About />
```

---

## UI Components

### Common Patterns

All UI components follow these patterns:

#### Section Container
```tsx
<section 
  id="section-id"
  className="min-h-screen snap-section bg-[#151515] px-6 md:px-12 lg:px-[220px] py-20 md:py-32 grid-overlay"
>
  {/* Content */}
</section>
```

**Breakdown:**
- `min-h-screen` - Minimum viewport height
- `snap-section` - Enables scroll snapping
- `bg-[#151515]` - Dark background
- `px-6 md:px-12 lg:px-[220px]` - Responsive horizontal padding
- `py-20 md:py-32` - Responsive vertical padding
- `grid-overlay` - Adds subtle grid texture

#### Section Header
```tsx
<div className="mb-12 md:mb-16">
  <div 
    className="text-[#7DFFC5] uppercase tracking-wider text-xs md:text-sm mb-4 label-glow"
    style={{ fontFamily: 'Space Mono, monospace' }}
  >
    Section Label
  </div>
  <h2 className="text-[#EDEDED] text-3xl md:text-4xl lg:text-5xl">
    Section Title
  </h2>
</div>
```

**Features:**
- Label with glow effect
- Space Mono font for label
- Responsive heading sizes
- Consistent spacing

#### Accent Label
```tsx
<span 
  className="text-[#7DFFC5] uppercase tracking-wider text-xs md:text-sm label-glow"
  style={{ fontFamily: 'Space Mono, monospace' }}
>
  Label Text
</span>
```

#### Primary Button
```tsx
<button
  className="group inline-flex items-center gap-3 px-6 py-3 border border-[#7DFFC5] text-[#7DFFC5] hover:bg-[#7DFFC5] hover:text-[#151515] transition-all duration-300"
  style={{ fontFamily: 'Space Mono, monospace' }}
>
  <span className="uppercase tracking-wider text-sm">
    Button Text
  </span>
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</button>
```

**Features:**
- Outlined style with accent border
- Fill animation on hover
- Icon animation (translate)
- Space Mono font
- Group utilities for coordinated animations

#### Navigation Link
```tsx
<button
  onClick={() => scrollToSection('section-id')}
  className="text-[#B3B3B3] hover:text-[#7DFFC5] transition-colors duration-200 uppercase tracking-wider text-sm"
  style={{ fontFamily: 'Space Mono, monospace' }}
>
  Link Text
</button>
```

#### Project Card
```tsx
<div
  className="group relative overflow-hidden cursor-pointer"
  onMouseEnter={() => setHoveredId(id)}
  onMouseLeave={() => setHoveredId(null)}
>
  <div className="relative aspect-[4/3] overflow-hidden bg-[#1D3C31]">
    <ImageWithFallback
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
      style={{
        filter: isHovered ? 'brightness(0.7)' : 'brightness(0.9)',
      }}
    />
    <div className="absolute inset-0 bg-[#7DFFC5] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
  </div>
  <div className="mt-4" style={{ fontFamily: 'Space Mono, monospace' }}>
    <h3 className="text-[#EDEDED] mb-1 text-base md:text-lg group-hover:text-[#7DFFC5] transition-colors duration-300">
      {title}
    </h3>
    <div className="flex items-center gap-3 text-[#B3B3B3] text-xs md:text-sm">
      <span>{metadata}</span>
      <span className="text-[#7DFFC5]">•</span>
      <span>{year}</span>
    </div>
  </div>
</div>
```

**Hover Choreography:**
1. Image scales up (700ms)
2. Brightness decreases (700ms)
3. Mint overlay fades in (500ms)
4. Title color changes (300ms)

---

## Reusable Component Patterns

### ImageWithFallback
**File:** `/components/figma/ImageWithFallback.tsx` (Protected)

**Description:** Image component with fallback handling.

**Usage:**
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback
  src="image-url"
  alt="Description"
  className="w-full h-full object-cover"
/>
```

---

## State Management Patterns

### Hover State
```tsx
const [hoveredId, setHoveredId] = useState<number | null>(null);

// In JSX
onMouseEnter={() => setHoveredId(id)}
onMouseLeave={() => setHoveredId(null)}

// Conditional styling
style={{
  filter: hoveredId === id ? 'brightness(0.7)' : 'brightness(0.9)',
}}
```

### Scroll State
```tsx
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Mobile Menu State
```tsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Toggle
<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
  {isMobileMenuOpen ? <X /> : <Menu />}
</button>

// Conditional render
{isMobileMenuOpen && (
  <div className="md:hidden">
    {/* Menu content */}
  </div>
)}
```

---

## Utility Functions

### Smooth Scroll to Section
```tsx
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};
```

**Usage in Navigation:**
- Home section: `id="home"`
- Work section: `id="work"`
- About section: `id="about"`
- Contact/Footer: `id="contact"`

---

## Animation Patterns

### Fade In (On Mount)
```tsx
<div className="fade-in">
  {/* Content */}
</div>
```

**CSS:**
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in { animation: fadeIn 0.6s ease-out forwards; }
```

### Hover Transform
```tsx
<Icon className="group-hover:translate-x-1 transition-transform" />
```

### Staggered Transitions
```tsx
className="transition-all duration-700"  // Image
className="transition-opacity duration-500"  // Overlay
className="transition-colors duration-300"  // Text
```

---

## Responsive Design Patterns

### Mobile-First Approach
Always start with mobile styles, then add breakpoints:

```tsx
className="
  text-sm          /* Mobile */
  md:text-base     /* Tablet */
  lg:text-lg       /* Desktop */
"
```

### Common Breakpoint Patterns

**Typography:**
```tsx
text-3xl md:text-4xl lg:text-5xl lg:text-7xl
```

**Spacing:**
```tsx
px-6 md:px-12 lg:px-[220px]
py-6 md:py-8 lg:py-12
gap-6 md:gap-8 lg:gap-12
mb-8 md:mb-12 lg:mb-16
```

**Layout:**
```tsx
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
flex-col md:flex-row
hidden md:flex  /* Show on tablet+ */
md:hidden  /* Show on mobile only */
```

**Sizing:**
```tsx
w-full md:w-1/2 lg:w-1/3
max-w-sm md:max-w-2xl lg:max-w-5xl
```

---

## Best Practices

### Component Structure
1. Import dependencies
2. Define interfaces/types
3. Define component function
4. Add state/hooks
5. Define event handlers
6. Return JSX

### Styling Conventions
1. Use Tailwind utility classes for layout and spacing
2. Use hex colors from design tokens
3. Apply Space Mono via inline styles: `style={{ fontFamily: 'Space Mono, monospace' }}`
4. Use responsive breakpoints consistently
5. Apply group utilities for coordinated hover effects

### Performance
1. Use `ImageWithFallback` for all images
2. Memoize expensive calculations
3. Clean up event listeners in useEffect
4. Use proper key props in lists

### Accessibility
1. Use semantic HTML elements
2. Provide alt text for images
3. Include aria-label for icon buttons
4. Maintain proper heading hierarchy
5. Ensure keyboard navigation works

---

## Component Checklist

When creating a new component:

- [ ] Uses appropriate semantic HTML
- [ ] Follows mobile-first responsive design
- [ ] Applies design tokens correctly
- [ ] Includes proper TypeScript types
- [ ] Uses Space Mono for labels/metadata
- [ ] Implements hover states with transitions
- [ ] Adds grid-overlay to major sections
- [ ] Includes proper spacing (px-6 md:px-12 lg:px-[220px])
- [ ] Uses snap-section for full-screen sections
- [ ] Applies label-glow to accent labels
- [ ] Tests on mobile, tablet, and desktop
- [ ] Includes proper key props for lists
- [ ] Cleans up event listeners
- [ ] Uses ImageWithFallback for images

---

## Quick Copy-Paste Components

### Empty Section Template
```tsx
export function NewSection() {
  return (
    <section 
      id="new-section"
      className="min-h-screen snap-section bg-[#151515] px-6 md:px-12 lg:px-[220px] py-20 md:py-32 grid-overlay"
    >
      <div className="mb-12 md:mb-16">
        <div 
          className="text-[#7DFFC5] uppercase tracking-wider text-xs md:text-sm mb-4 label-glow"
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          Section Label
        </div>
        <h2 className="text-[#EDEDED] text-3xl md:text-4xl lg:text-5xl">
          Section Title
        </h2>
      </div>

      {/* Your content here */}
    </section>
  );
}
```

### Card Grid Template
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div key={item.id} className="group cursor-pointer">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Text Content Block
```tsx
<div className="max-w-3xl">
  <h3 className="text-[#EDEDED] mb-4 text-xl md:text-2xl">
    Heading
  </h3>
  <p className="text-[#B3B3B3] leading-relaxed">
    Body text content.
  </p>
</div>
```

---

## File Organization

```
/components
  ├── Navigation.tsx        # Fixed navigation
  ├── Hero.tsx             # Landing section
  ├── ProjectGrid.tsx      # Work grid
  ├── CaseStudy.tsx        # Case study template
  ├── About.tsx            # About section
  ├── Footer.tsx           # Footer section
  ├── /library
  │   ├── ComponentLibrary.md
  │   ├── AccentLabel.tsx
  │   ├── PrimaryButton.tsx
  │   ├── SectionHeader.tsx
  │   └── ProjectCard.tsx
  ├── /ui                  # Shadcn components
  └── /figma
      └── ImageWithFallback.tsx
```

