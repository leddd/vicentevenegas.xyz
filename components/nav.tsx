import React from 'react'

export default function Nav() {
  return (
    <div className="px-[220px] flex justify-center items-center py-6">
      <nav
        className="inline-flex items-center gap-6 px-[18px] py-[10px] bg-[#151515] border border-[#3a3a3a] rounded-full text-[16px] font-light"
        aria-label="Primary"
      >
        <a className="text-[#ededed] no-underline hover:opacity-90" href="#projects">Project</a>
        <a className="text-[#ededed] no-underline hover:opacity-90" href="#about">About</a>
        <a className="text-[#ededed] no-underline hover:opacity-90" href="#contact">Contact</a>
      </nav>
    </div>
  )
}
