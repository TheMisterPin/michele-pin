import { motion } from 'framer-motion'
import React from 'react'

type NavItemType = {
  name: string
  to: string
}

export default function MobileMenu({
  navItems,
  activeSection,
  scrollTo,
  toggleMenu,
  textColor,
  pastFullViewport
}: {
  navItems: NavItemType[]
  activeSection: string
  scrollTo: (to: string) => void
  toggleMenu: () => void
  textColor: string
  pastFullViewport: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`md:hidden ${
        pastFullViewport ? 'bg-white/10 backdrop-blur-md' : 'bg-black/50'
      }`}
    >
      <div className="container px-6 py-4 mx-auto">
        {navItems.map((item) => (
          <button
            key={item.to}
            onClick={() => {
              scrollTo(item.to)
              toggleMenu()
            }}
            className={`block w-full text-left py-2 cursor-pointer ${textColor} ${
              activeSection === item.to ? 'font-medium' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </motion.div>
  )
}
