import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import React from 'react'

interface SectionProps {
  id: string
  title?: string
  children: ReactNode
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen snap-start flex flex-col items-center justify-start py-16 px-4 bg-background text-text overflow-y-auto"
    >
      <div className="w-full max-w-5xl mx-auto">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6 sfumato text-center"
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  )
}
