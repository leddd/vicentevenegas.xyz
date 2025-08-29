import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        offblack: '#0B0B0B',
        bgTile: '#151515',
        stroke: '#3A3A3A',
        textPrimary: '#FFFFFF',
        textSecondary: '#9C9C9C',
      },
      fontFamily: {
        space: ['var(--font-space-grotesk)'],
      },
      spacing: {
        gutter: '20px',
        col: '230px',
        marginX: '220px',
      },
      maxWidth: {
        frame: '1920px',
        container: '1480px', // 1920 - (220 * 2)
      },
      boxShadow: {
        tile: '0 8px 24px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
export default config
