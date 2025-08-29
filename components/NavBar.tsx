'use client'
import Link from 'next/link'

export default function NavBar(){
  return (
    <header className="frame-margins">
      <div className="flex items-center justify-between h-16 border-b border-stroke">
        <Link href="/" className="text-[24px] font-semibold tracking-tight">vicentevenegaas.</Link>
        <nav className="flex gap-6 text-[16px] font-medium text-textSecondary">
          <Link className="hover:text-textPrimary" href="/">Work</Link>
          <Link className="hover:text-textPrimary" href="/about">About</Link>
          <Link className="hover:text-textPrimary" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
