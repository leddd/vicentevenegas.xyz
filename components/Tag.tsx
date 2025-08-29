export function Tag({ children }:{ children: React.ReactNode }){
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-stroke bg-bgTile px-3 py-1 text-sm text-textSecondary">{children}</span>
  )
}
