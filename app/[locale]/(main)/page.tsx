'use client'

import React, { useState, useEffect, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

import Title from '@/components/atoms/title'
import HeroSection from '@/components/templates/hero-section'
import Navbar from '@/components/organisms/navbar'
import ProjectsSection from '@/components/templates/projects-section'
import AboutMeSection from '../../../components/templates/about-me-section'

const sections = [
  {
    id: 'about',
    title: 'About Me',
    content: 'Passionate developer crafting innovative solutions'
  },
  {
    id: 'projects',
    title: 'My Projects',
    content: 'Showcasing a portfolio of creative web applications'
  },
  {
    id: 'contact',
    title: 'Get in Touch',
    content: "Let's collaborate on your next digital venture"
  }
]

// interface NavbarProps {
//   activeSection: string
//   scrolled: boolean
//   scrollTo: (to: string) => void
// }

// const Navbar: React.FC<NavbarProps> = ({
//   activeSection,
//   scrolled,
//   scrollTo
// }) => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all ${
//         scrolled
//           ? 'bg-gray-800 bg-opacity-90 backdrop-blur-sm shadow-lg'
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <div className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-500 text-transparent bg-clip-text">
//           Michele Pin
//         </div>
//         <div className="hidden md:flex">
//           {navItems.map((item) => (
//             <button
//               key={item.to}
//               onClick={() => scrollTo(item.to)}
//               className={`mx-2 px-3 py-2 rounded transition-colors ${
//                 activeSection === item.to
//                   ? 'bg-blue-600 text-white'
//                   : 'text-gray-300 hover:text-white hover:bg-blue-600'
//               }`}
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>
//         <button
//           className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <motion.span
//             animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
//             className="w-6 h-0.5 bg-white mb-1.5"
//           />
//           <motion.span
//             animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
//             className="w-6 h-0.5 bg-white mb-1.5"
//           />
//           <motion.span
//             animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
//             className="w-6 h-0.5 bg-white"
//           />
//         </button>
//       </div>
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden bg-gray-800 bg-opacity-90 backdrop-blur-sm"
//           >
//             {navItems.map((item) => (
//               <button
//                 key={item.to}
//                 onClick={() => {
//                   scrollTo(item.to)
//                   setMenuOpen(false)
//                 }}
//                 className={`block w-full text-left px-4 py-2 ${
//                   activeSection === item.to
//                     ? 'bg-blue-600 text-white'
//                     : 'text-gray-300 hover:bg-blue-600 hover:text-white'
//                 }`}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   )
// }

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

function Section({ id, title, children }: SectionProps) {
  return (
    <div
      id={id}
      className="h-screen snap-start flex items-center justify-center p-4"
    >
      <div className="text-center max-w-3xl mx-auto">
        <Title text={title} />
        {children}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const scrollPosition = mainRef.current.scrollTop

        setScrolled(scrollPosition > 0)

        sections.forEach(({ id }) => {
          const element = document.getElementById(id)

          if (element) {
            const { offsetTop, offsetHeight } = element

            if (
              scrollPosition >= offsetTop - window.innerHeight / 2 &&
              scrollPosition < offsetTop + offsetHeight - window.innerHeight / 2
            ) {
              setActiveSection(id)
            }
          }
        })
      }
    }

    mainRef.current?.addEventListener('scroll', handleScroll)

    return () => mainRef.current?.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (to: string) => {
    const element = document.getElementById(to)

    if (element && mainRef.current) {
      mainRef.current.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="h-screen">
      <Navbar
        activeSection={activeSection}
        pastFullViewport={scrolled}
        scrolled={scrolled}
        scrollTo={scrollTo}
      />
      <div
        ref={mainRef}
        className="h-full overflow-y-scroll snap-y snap-mandatory"
      >
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
      </div>
    </div>
  )
}
