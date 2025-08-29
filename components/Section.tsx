export default function Section({ children, className = '' }: { children: React.ReactNode, className?: string }){
  return (
    <section className={`frame-margins mx-auto w-full ${className}`}>{children}</section>
  )
}
