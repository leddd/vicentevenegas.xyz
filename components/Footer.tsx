export default function Footer(){
  return (
    <footer className="frame-margins py-10 border-t border-stroke text-textSecondary">
      <div className="flex items-center justify-between text-[20px]">
        <p>© {new Date().getFullYear()} Vicente Venegas</p>
        <div className="flex gap-6 text-[16px]">
          <a href="mailto:hello@vicentevenegas.xyz" className="hover:text-textPrimary">Email</a>
          <a href="https://www.linkedin.com" className="hover:text-textPrimary">LinkedIn</a>
          <a href="https://www.instagram.com" className="hover:text-textPrimary">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
