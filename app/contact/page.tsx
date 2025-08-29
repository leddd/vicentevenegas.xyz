import Section from '@/components/Section'
export default function Contact(){
  return (
    <Section className="py-16">
      <h1 className="text-[48px] font-bold">Contact</h1>
      <div className="mt-6 text-[20px] text-textSecondary">
        <p><a className="hover:text-textPrimary" href="mailto:hello@vicentevenegas.xyz">hello@vicentevenegas.xyz</a></p>
      </div>
    </Section>
  )
}
