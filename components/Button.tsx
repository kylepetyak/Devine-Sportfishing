import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles = `
    relative overflow-hidden px-8 py-4 font-bold rounded-lg
    transition-all duration-300 hover:scale-105 hover:shadow-xl
    inline-flex items-center justify-center gap-2
  `

  const variants = {
    primary: 'bg-gold hover:bg-gold-light text-ocean-deep',
    secondary:
      'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30',
  }

  const content = (
    <>
      {children}
      <span className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  )
}
