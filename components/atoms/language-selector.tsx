'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Languages } from 'lucide-react'
import { useRouter } from 'next/navigation'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import DarkModeSwitch from './dark-mode-switch'

const t = (key: string) => {
  const translations: { [key: string]: string } = {
    title: 'Language',
    'value.en': 'English',
    'value.it': 'Italiano',
    'value.es': 'Español'
  }

  return translations[key] || key
}

export default function LanguageSelector({
  onSelect,
  selectedLanguage
}: {
  onSelect: (value: string) => void
  selectedLanguage: string
}) {
  const locales = ['en', 'it', 'es']

  return (
    <div className="flex items-center space-x-4">
      <div className="grid w-full items-center gap-4">
        <Label htmlFor="language" className="sr-only">
          {t('title')}
        </Label>
        <Select onValueChange={onSelect} value={selectedLanguage}>
          <SelectTrigger id="language" className="w-[120px]">
            <Languages className="mr-2 h-4 w-4" />
            <SelectValue placeholder={t(`value.${selectedLanguage}`)} />
          </SelectTrigger>
          <SelectContent position="popper">
            <AnimatePresence>
              {locales.map((locale, index) => (
                <motion.div
                  key={locale}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <SelectItem value={locale}>{t(`value.${locale}`)}</SelectItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
