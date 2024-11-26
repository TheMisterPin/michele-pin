'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

import TypeWriteEffect from '../atoms/typewriter-effect'
import HeroImage from '../atoms/hero-image'

export default function HeroSection() {
  const t = useTranslations('Hero')

  const imgSrc = '/images/michele-pin-software-developer-portfolio-picture.png'

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center w-full min-h-full snap-start bg-gradient-to-t from-background to-background-200 overflow-auto px-24"
    >
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] place-items-center md:pt-1">
          <div>
            {' '}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-text-400 hidden md:block"
            >
              {t('subtitle')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="xl:text-[70px] lg:text-[60px] sm:text-[35px] text-[45px] font-semibold text-primary">
                {t('title')} <span className="sfumato">Michele</span>
              </h2>
              <TypeWriteEffect />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-[1.2rem] text-[15px] md:text-[17px] text-text-400"
            >
              {t('description')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-[2rem] flex items-center space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-[50px] w-40 items-center bg-primary justify-center rounded-xl font-semibold overflow-hidden gradient text-primary-foreground shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:duration-1000 before:ease-out hover:before:h-56 hover:before:w-56 hover:before:rounded-none"
              >
                <a
                  href="mailto:pin.michele23@gmail.com"
                  className="relative z-10"
                >
                  {t('ctaContact')}
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-[50px] w-40 items-center justify-center rounded-xl font-semibold overflow-hidden border-primary border-2 text-primary shadow-2xl transition-all before:absolute gradient before:h-0 before:w-0 before:rounded-full before:duration-1000 before:ease-out hover:before:h-56 hover:before:w-56 hover:before:rounded-none hover:text-primary-foreground hover:border-white  "
              >
                <a
                  href="/Michele-Pin.pdf"
                  download="Michele-Pin.pdf"
                  className="relative z-10"
                >
                  {t('ctaDownload')}
                </a>
              </motion.button>
            </motion.div>
          </div>

          <HeroImage source={imgSrc} />
        </div>
      </div>
    </section>
  )
}
