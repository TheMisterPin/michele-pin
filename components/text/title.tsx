import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  text: string
  className?: string
}

export default function Title(props: Props) {
  const { text, className } = props

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-500 text-transparent bg-clip-text ${className}`}
    >
      {text}
    </motion.h1>
  )
}
