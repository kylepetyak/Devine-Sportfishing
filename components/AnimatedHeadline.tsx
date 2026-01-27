'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedHeadlineProps {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export default function AnimatedHeadline({
  children,
  className = '',
  as: Tag = 'h2',
  delay = 0,
  staggerDelay = 0.08,
  once = true,
}: AnimatedHeadlineProps) {
  const words = children.split(' ')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-50px' }}
        variants={containerVariants}
        className="inline-flex flex-wrap"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
            style={{ transformOrigin: 'center bottom' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}

// Variant for character-by-character animation
interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  staggerDelay?: number
}

export function AnimatedTextChars({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
}: AnimatedTextProps) {
  const characters = children.split('')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const charVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 150,
        damping: 15,
      },
    },
  }

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={className}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          variants={charVariants}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Highlight variant - animates with accent color highlight
interface AnimatedHighlightProps {
  children: ReactNode
  className?: string
  highlightColor?: string
}

export function AnimatedHighlight({
  children,
  className = '',
  highlightColor = 'bg-gold/20',
}: AnimatedHighlightProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className={`absolute inset-0 ${highlightColor} origin-left -z-10 rounded`}
      />
      {children}
    </span>
  )
}
