'use client'

import Image from "next/image"
import Link from "next/link"
import { CursorRing } from "./cursor-ring"
import { AnimateIn } from "./animate-in"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  isDark?: boolean
  className?: string
  slug?: string
}

export function ProjectCard({
  title,
  category,
  image,
  isDark = true,
  className = "",
  slug
}: ProjectCardProps) {
  const CardWrapper = slug ? Link : 'div'
  const wrapperProps = slug ? { href: `/${slug}` } : {}

  return (
    <AnimateIn className={className}>
      <CardWrapper {...wrapperProps} className="block space-y-4"> {/* Reduced space-y */}
        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-white project-cursor group">
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <CursorRing />
        </div>
        <div className="space-y-1">
          <h3 className={`text-lg font-medium ${  /* Reduced text size */
            isDark ? 'text-white' : 'text-[#1a2634]'
          }`}>
            {title}
          </h3>
          <p className={`text-sm ${  /* Reduced text size */
            isDark ? 'text-[#cbd5e0]' : 'text-[#2d403b]'
          }`}>
            {category}
          </p>
        </div>
      </CardWrapper>
    </AnimateIn>
  )
}

