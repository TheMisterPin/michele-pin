'use client'

import * as React from 'react'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import LanguageSelector from '../atoms/language-selector'
import MobileMenu from '../atoms/mobile-menu'

interface NavbarProps {
  activeSection: string
  scrolled: boolean
  scrollTo: (to: string) => void
  pastFullViewport: boolean
}

const navItems = [
  { to: 'home', name: 'Home' },
  { to: 'about', name: 'About' },
  { to: 'projects', name: 'Projects' },
  { to: 'contact', name: 'Contact' }
]

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  scrolled,
  pastFullViewport,
  scrollTo
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const router = useRouter()
  const handleSelect = (value: string) => {
    setSelectedLanguage(value)
    router.push(`/${value}`)
  }
  const toggleMenu = useCallback(() => setMobileMenuOpen((prev) => !prev), [])

  const navBackground = useMemo(() => {
    if (pastFullViewport)
      return 'bg-white/10 backdrop-blur-md shadow-lg w-11/12 rounded-full mx-auto'
    if (scrolled)
      return 'bg-white/10 backdrop-blur-md shadow-lg w-11/12 rounded-full mx-auto'

    return 'bg-transparent'
  }, [pastFullViewport, scrolled])

  const textColor = scrolled ? 'text-gray-800' : 'text-white'

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <motion.nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${navBackground}`}
      initial={{ height: '80px' }}
      animate={{ height: scrolled ? '60px' : '80px' }}
    >
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <img
          src="/images/logo.png"
          alt="Logo"
          className=" object-contain h-16"
        />

        {scrolled ? (
          <div className="hidden md:flex">
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => scrollTo(item.to)}
                className={`mx-2 px-3 py-2 rounded transition-colors ${
                  activeSection === item.to
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:text-primary hover:bg-primary/10'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <LanguageSelector
              onSelect={handleSelect}
              selectedLanguage={selectedLanguage}
            />
            <div className="flex items-center">
              <label className="switch inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="switch__checkbox sr-only"
                  checked={isDarkMode}
                  onChange={() => setIsDarkMode(!isDarkMode)}
                  aria-label="Toggle dark mode"
                />
                <span className="switch__toggle relative w-14 h-8 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out">
                  <span className="sr-only">Toggle dark mode</span>
                </span>
              </label>
            </div>
          </div>
        )}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground dark:bg-background mb-1.5"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-foreground dark:bg-background mb-1.5"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-foreground dark:bg-background"
          />
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background dark:bg-dark-down bg-opacity-90 backdrop-blur-sm"
          >
            {navItems.map((item) => (
              <button
                key={item.to}
                onClick={() => {
                  scrollTo(item.to)
                  setMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 ${
                  activeSection === item.to
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 py-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full justify-start"
              >
                {isDarkMode ? (
                  <Moon className="mr-2 h-4 w-4" />
                ) : (
                  <Sun className="mr-2 h-4 w-4" />
                )}
                Toggle Dark Mode
              </Button>
            </div>
            <div className="px-4 py-2"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
