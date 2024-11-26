'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function HeroImage({ source }: { source: string }) {
  const [imageLoaded, setImageLoaded] = useState(false)

  const borderVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const imageVariants = {
    hidden: { y: 300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        delay: 0.5
      }
    }
  }

  return (
    <div className="relative w-96 h-96">
      <motion.div
        className="shadow-lg shadow-black absolute w-[24rem] h-[24rem] drop rounded-full border-8 border-primary top-0 bg-background-400/50"
        variants={borderVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute w-[96%] h-[110%] overflow-hidden rounded-full bottom-2 right-2 drop-shadow-2xl"
        variants={imageVariants}
        initial="hidden"
        animate={imageLoaded ? 'visible' : 'hidden'}
      >
        <Image
          src={source}
          alt="Michele Pin - Software Developer"
          fill
          className="drop-shadow-2xl"
          onLoad={() => setImageLoaded(true)}
        />
      </motion.div>
    </div>
  )
}

export default HeroImage
