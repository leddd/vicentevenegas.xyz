'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({ href, title, description, image }:{ href:string, title:string, description:string, image:string }){
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }} className="group">
      <Link href={href} className="block rounded-2xl border border-stroke bg-bgTile overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-[24px] font-semibold leading-tight">{title}</h3>
          <p className="mt-2 text-[16px] font-medium text-textSecondary">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}
