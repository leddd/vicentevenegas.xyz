import { ImageWithFallback } from './figma/ImageWithFallback';

export function CaseStudy() {
  return (
    <section className="min-h-screen snap-section px-6 md:px-12 lg:px-[220px] py-20 md:py-32 grid-overlay">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div
            className="text-[#00CE93] uppercase tracking-wider text-xs md:text-sm mb-4 label-glow"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Case Study
          </div>
          <h2 className="text-[#EDEDED] text-3xl md:text-4xl lg:text-5xl">Neural Interface System</h2>
        </div>

        {/* Featured Image */}
        <div className="mb-12 md:mb-16 aspect-video overflow-hidden bg-[#1D3C31]">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1762222687051-4c9926eba36d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MjMxMjkwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Neural Interface System"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Problem */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#EDEDED] mb-4 text-xl md:text-2xl">Problem</h2>
          <p className="text-[#B3B3B3] leading-relaxed">
            Modern creative workflows require seamless integration between design tools and
            development environments. Designers and developers often work in silos, leading to
            misalignment and inefficiencies. The challenge was to create an interface that bridges
            these two worlds with precision and clarity.
          </p>
        </div>

        {/* Process */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#EDEDED] mb-4 text-xl md:text-2xl">Process</h2>
          <p className="text-[#B3B3B3] leading-relaxed mb-6">
            I started with extensive user research, interviewing designers and developers to
            understand their workflows and pain points. This informed a design system that
            prioritized technical precision while maintaining creative flexibility.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="aspect-square overflow-hidden bg-[#1D3C31]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1567943183748-3a7542120c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjIzNDMzMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Process 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden bg-[#1D3C31]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MjI1MjU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Process 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-[#B3B3B3] leading-relaxed">
            Iterative prototyping and user testing allowed us to refine the interface, focusing on
            reducing cognitive load while providing powerful functionality for advanced users.
          </p>
        </div>

        {/* Solution */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#EDEDED] mb-4 text-xl md:text-2xl">Solution</h2>
          <p className="text-[#B3B3B3] leading-relaxed mb-6">
            The final system features a context-aware interface that adapts to different workflows,
            unified design tokens, and real-time collaboration capabilities. The result is a
            tool that feels native to both designers and developers.
          </p>
          <div className="aspect-video overflow-hidden bg-[#1D3C31]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1529926542502-77aceca00aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYyMjg0ODA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Solution"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}