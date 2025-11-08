/**
 * Component Library Usage Examples
 * 
 * This file demonstrates how to use the component library
 * in real-world scenarios.
 */

import { ArrowRight, ExternalLink } from 'lucide-react';
import {
  AccentLabel,
  PrimaryButton,
  SectionHeader,
  SectionContainer,
  NavLink,
  ProjectCard,
  MetadataItem,
} from './index';

// Example 1: Basic Section with Header
export function ExampleSection1() {
  return (
    <SectionContainer id="example-1">
      <SectionHeader 
        label="Our Services" 
        title="What We Offer" 
      />
      
      <div className="max-w-3xl">
        <p className="text-[#B3B3B3] leading-relaxed">
          Content goes here...
        </p>
      </div>
    </SectionContainer>
  );
}

// Example 2: Section with Custom Padding
export function ExampleSection2() {
  return (
    <SectionContainer 
      id="example-2" 
      fullScreen={false}
      className="py-12 md:py-20"
    >
      <SectionHeader 
        label="Get in Touch" 
        title="Contact" 
      />
    </SectionContainer>
  );
}

// Example 3: Hero Section with Button
export function ExampleHero() {
  const handleViewWork = () => {
    const element = document.getElementById('work');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionContainer id="hero">
      <div className="max-w-5xl w-full">
        <AccentLabel>Designer & Technologist</AccentLabel>
        
        <h1 className="text-[#EDEDED] my-6 text-4xl md:text-5xl lg:text-7xl">
          Vicente Venegas
        </h1>
        
        <p className="text-[#B3B3B3] mb-12 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed">
          Building digital experiences at the intersection of design and technology.
        </p>
        
        <PrimaryButton 
          onClick={handleViewWork}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          View Work
        </PrimaryButton>
      </div>
    </SectionContainer>
  );
}

// Example 4: Navigation with NavLinks
export function ExampleNavigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#151515]/80 backdrop-blur-md">
      <div className="mx-auto px-6 md:px-12 lg:px-[220px] py-6">
        <div className="flex justify-between items-center">
          <NavLink onClick={() => scrollToSection('home')}>
            Home
          </NavLink>
          
          <div className="flex gap-6 lg:gap-8">
            <NavLink onClick={() => scrollToSection('work')}>
              Work
            </NavLink>
            <NavLink onClick={() => scrollToSection('about')}>
              About
            </NavLink>
            <NavLink onClick={() => scrollToSection('contact')}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Example 5: Project Grid
export function ExampleProjectGrid() {
  const projects = [
    {
      id: 1,
      title: 'Neural Interface System',
      role: 'Product Design, Development',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1762222687051-4c9926eba36d',
    },
    {
      id: 2,
      title: 'Studio Architecture',
      role: 'Brand Identity, Web Design',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1567943183748-3a7542120c90',
    },
  ];

  const handleProjectClick = (id: number) => {
    console.log('Project clicked:', id);
    // Navigate to project details
  };

  return (
    <SectionContainer id="work">
      <SectionHeader 
        label="Selected Work" 
        title="Projects" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            role={project.role}
            year={project.year}
            image={project.image}
            onClick={() => handleProjectClick(project.id)}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

// Example 6: Case Study Hero with Metadata
export function ExampleCaseStudyHero() {
  return (
    <SectionContainer id="case-study">
      <div className="max-w-5xl">
        <AccentLabel>Case Study</AccentLabel>
        
        <h1 className="text-[#EDEDED] my-6 text-4xl md:text-5xl lg:text-6xl">
          Neural Interface System
        </h1>
        
        <p className="text-[#B3B3B3] mb-12 max-w-2xl text-base md:text-lg leading-relaxed">
          A comprehensive design system for next-generation neural interfaces.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <MetadataItem 
            label="Client" 
            value="NeuroTech Inc" 
          />
          <MetadataItem 
            label="Year" 
            value="2025" 
          />
          <MetadataItem 
            label="Role" 
            value="Product Design" 
          />
          <MetadataItem 
            label="Duration" 
            value="6 months" 
          />
        </div>
        
        <PrimaryButton 
          onClick={() => window.open('https://example.com', '_blank')}
          icon={<ExternalLink className="w-4 h-4" />}
        >
          View Live
        </PrimaryButton>
      </div>
    </SectionContainer>
  );
}

// Example 7: Features Grid with Accent Labels
export function ExampleFeaturesGrid() {
  const features = [
    {
      id: 1,
      label: 'Design Systems',
      title: 'Comprehensive Systems',
      description: 'Building scalable design systems for complex products.',
    },
    {
      id: 2,
      label: 'Interface Design',
      title: 'User-Centered Design',
      description: 'Creating intuitive interfaces for web and mobile.',
    },
    {
      id: 3,
      label: 'Development',
      title: 'Frontend Engineering',
      description: 'Building performant web applications with React.',
    },
  ];

  return (
    <SectionContainer id="services" fullScreen={false}>
      <SectionHeader 
        label="Services" 
        title="What I Do" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className="border border-[#7DFFC5]/20 p-6 hover:border-[#7DFFC5]/40 transition-colors duration-300"
          >
            <AccentLabel variant="soft">
              {feature.label}
            </AccentLabel>
            
            <h3 className="text-[#EDEDED] my-4 text-xl md:text-2xl">
              {feature.title}
            </h3>
            
            <p className="text-[#B3B3B3] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

// Example 8: CTA Section
export function ExampleCTA() {
  const handleContact = () => {
    window.location.href = 'mailto:hello@vicentevenegas.com';
  };

  return (
    <SectionContainer id="cta" fullScreen={false}>
      <div className="max-w-3xl mx-auto text-center">
        <AccentLabel>Let's Work Together</AccentLabel>
        
        <h2 className="text-[#EDEDED] my-6 text-3xl md:text-4xl lg:text-5xl">
          Have a project in mind?
        </h2>
        
        <p className="text-[#B3B3B3] mb-12 text-base md:text-lg leading-relaxed">
          I'm always open to discussing new projects, creative ideas, 
          or opportunities to be part of your vision.
        </p>
        
        <PrimaryButton 
          onClick={handleContact}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Get in Touch
        </PrimaryButton>
      </div>
    </SectionContainer>
  );
}

// Example 9: Image Gallery with Labels
export function ExampleGallery() {
  const images = [
    { id: 1, src: 'image1.jpg', label: 'Interface Design' },
    { id: 2, src: 'image2.jpg', label: 'Mobile App' },
    { id: 3, src: 'image3.jpg', label: 'Web Platform' },
  ];

  return (
    <SectionContainer id="gallery">
      <SectionHeader 
        label="Process" 
        title="Design Exploration" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((image) => (
          <div key={image.id} className="relative aspect-[4/3] bg-[#1D3C31]">
            <img 
              src={image.src} 
              alt={image.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <AccentLabel>{image.label}</AccentLabel>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

// Example 10: Two-Column Layout
export function ExampleTwoColumn() {
  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <SectionHeader 
            label="About Me" 
            title="Vicente Venegas"
            className="mb-8"
          />
          
          <p className="text-[#B3B3B3] leading-relaxed mb-6">
            I'm a multidisciplinary designer and creative technologist 
            with a passion for building digital experiences.
          </p>
          
          <p className="text-[#B3B3B3] leading-relaxed">
            My work sits at the intersection of design and technology, 
            focused on systems, interfaces, and creative tools.
          </p>
        </div>
        
        <div>
          <AccentLabel className="mb-6">Skills</AccentLabel>
          
          <div className="space-y-4">
            {['Product Design', 'Interface Design', 'Design Systems', 'Frontend Development', 'Creative Coding'].map((skill) => (
              <div 
                key={skill}
                className="text-[#EDEDED] border-l-2 border-[#7DFFC5] pl-4"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
