'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  X,
  Coffee,
  Sun,
  Moon,
  Star,
  Cloud,
  MapPin,
  Code,
  LucideTarget,
  Lamp,
  Book,
  Map
} from 'lucide-react'
import { PersonIcon, QuestionMarkIcon } from '@radix-ui/react-icons'

import { Card, CardContent } from '@/components/ui/card'

const cardData = [
  {
    id: 1,
    title: 'My Path',
    icon: Map,
    description:
      'I am a software engineer with a passion for building things. I am currently working on a project called JustPark. I am also a big fan of the open source community.'
  },
  {
    id: 2,
    title: 'My Goals',
    icon: LucideTarget,
    description: 'Boost your productivity'
  },
  {
    id: 3,
    title: 'My Tech',
    icon: Code,
    description: 'Illuminate your workflow'
  },
  {
    id: 4,
    title: 'My Projects',
    icon: Book,
    description: 'Work through the night'
  },
  {
    id: 5,
    title: 'Why Me',
    icon: QuestionMarkIcon,
    description: 'Reach for the stars'
  },
  {
    id: 6,
    title: 'My Style',
    icon: PersonIcon,
    description: 'Cloud-based solutions'
  }
]

export default function ExpandableCardGrid() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, cardData.length)
  }, [])

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const springTransition = {
    type: 'spring',
    stiffness: 150,
    damping: 25,
    mass: 0.8,
    bounce: 0.2
  }

  const getAnimationProperties = (index: number) => {
    const isBottomRow = index >= 3
    const isRightSide = index % 3 === 2
    const isLeftSide = index % 3 === 0

    const getXOffset = () => {
      if (!isBottomRow) return 0
      if (isRightSide) return window.innerWidth
      if (isLeftSide) return -window.innerWidth

      return 0
    }

    const rect = cardRefs.current[index]?.getBoundingClientRect()
    const top = rect?.top ?? 0
    const left = rect?.left ?? 0
    const width = rect?.width ?? 0
    const height = rect?.height ?? 0

    return {
      initial: {
        opacity: 0,
        top: isBottomRow ? window.innerHeight : top,
        left,
        x: getXOffset(),
        width,
        height,
        scale: 0.95
      },
      animate: {
        opacity: 1,
        top: 0,
        left: 0,
        x: 0,
        width: '100%',
        height: '100%',
        scale: 1
      },
      exit: {
        opacity: 0,
        top: isBottomRow ? window.innerHeight : top,
        left,
        x: getXOffset(),
        width,
        height,
        scale: 0.95
      }
    }
  }

  return (
    <div className="container mx-auto p-4 h-[75vh]" ref={containerRef}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 h-full">
        {cardData.map((card, index) => {
          const isExpanded = expandedId === card.id
          const Icon = card.icon
          const animationProps = getAnimationProperties(index)

          return (
            <div
              key={card.id}
              ref={(el: HTMLDivElement | null) => {
                cardRefs.current[index] = el
              }}
              className="flex"
            >
              <Card
                className=" flex-1 drop-sm cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2 border-primary top-0 bg-background-400/50 text-primary"
                onClick={() => toggleExpand(card.id)}
              >
                <CardContent className="p-4 flex flex-col place-items-center gap-y-4">
                  <div className="flex  w-full">
                    <Icon className=" text-primary  w-2/12 h-auto aspect-square" />
                    <h3 className="text-3xl text-center font-bold w-full ">
                      {card.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm text-background-100 font font-semibold">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={animationProps.initial}
                    animate={animationProps.animate}
                    exit={animationProps.exit}
                    transition={springTransition}
                    className="fixed inset-0 z-50 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      transition={{
                        type: 'spring',
                        stiffness: 150,
                        damping: 25,
                        mass: 0.8,
                        bounce: 0.2,
                        delay: 0.1
                      }}
                      className="w-full max-w-2xl overflow-hidden rounded-lg bg-background shadow-xl"
                    >
                      <Card className="bg-background-100">
                        <CardContent className="p-6">
                          <div className="mb-4 flex items-start justify-between ">
                            <div className="flex items-start space-x-4">
                              <Icon className="h-6 w-6 text-primary" />
                              <div>
                                <h2 className="text-2xl font-bold">
                                  {card.title}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                  {card.description}
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleExpand(card.id)
                              }}
                              className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                              aria-label="Close expanded card"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                          <img
                            src="/placeholder.svg?height=200&width=400"
                            alt="Placeholder"
                            className="mb-4 h-48 w-full object-cover"
                          />
                          <div className="max-h-64 overflow-y-auto pr-2">
                            <p className="text-muted-foreground">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nullam euismod, nisi vel consectetur
                              interdum, nisl nunc egestas nunc, vitae tincidunt
                              nisl nunc euismod nunc. Sed euismod, nisi vel
                              consectetur interdum, nisl nunc egestas nunc,
                              vitae tincidunt nisl nunc euismod nunc. Lorem
                              ipsum dolor sit amet, consectetur adipiscing elit.
                              Nullam euismod, nisi vel consectetur interdum,
                              nisl nunc egestas nunc, vitae tincidunt nisl nunc
                              euismod nunc. Sed euismod, nisi vel consectetur
                              interdum, nisl nunc egestas nunc, vitae tincidunt
                              nisl nunc euismod nunc.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
