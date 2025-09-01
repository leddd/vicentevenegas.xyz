export type Project = {
  slug: string
  title: string
  summary: string
  image: string  // /images/djavu.jpg
  alt: string
  featured?: boolean // optional, for pinning
}

export const projects: Project[] = [
  { slug: 'djavu', title: 'Djavu', summary: 'DIY recording station...', image: '/images/djavu.png', alt: 'Djavu device on table', featured: true },
]
