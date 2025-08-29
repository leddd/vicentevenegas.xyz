'use client'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  return (
    <html lang="en">
      <body className={`${space.variable} font-space bg-offblack text-textPrimary`}>
        <div className="max-w-frame mx-auto">
          <NavBar />
          <AnimatePresence mode="wait">
            <motion.main
              key={path}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="min-h-[70vh]"
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
        </div>
      </body>
    </html>
  )
}
