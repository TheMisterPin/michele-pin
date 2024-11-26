import { motion } from 'framer-motion'

type NavItemType = {
  name: string
  to: string
}

export default function NavItem({
  item,
  activeSection,
  scrollTo,
  textColor
}: {
  item: NavItemType
  activeSection: string
  scrollTo: (to: string) => void
  textColor: string
}) {
  return (
    <button
      onClick={() => scrollTo(item.to)}
      className={`cursor-pointer relative group ${textColor} ${
        activeSection === item.to ? 'font-medium' : ''
      }`}
    >
      {item.name}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: activeSection === item.to ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  )
}
