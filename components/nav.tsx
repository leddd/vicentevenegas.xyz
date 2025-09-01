import React from 'react'

export default function Nav() {
  return (
    <div className="px-[220px] flex justify-center items-center py-4">
      <nav
          className="
            inline-flex items-center gap-12
            px-12 py-3
            bg-[#151515] border border-[#3a3a3a]
            rounded-full
            text-[16px] font-light
          "
        aria-label="Primary"
      >
        <a className="text-gray-300 hover:text-white no-underline" href="#projects">Projects</a>
        <a className="text-gray-300 hover:text-white no-underline" href="#about">About</a>
        <a className="text-gray-300 hover:text-white no-underline" href="#contact">Contact</a>
      </nav>
    </div>
  )
}
