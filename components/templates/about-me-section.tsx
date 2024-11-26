'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { MapPin, Rocket, Brain, Target, Code, Heart } from 'lucide-react'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import Section from '../organisms/section-container'
import AboutMeGrid from '../organisms/about-me-grid'

const aboutMeContent = [
  {
    title: 'The Coding Adventure Begins',
    content:
      "Picture this: over 15 years, 24 different homes across three countries, and a whirlwind romance with the hospitality industry. I was living the dream—or so I thought. Then, about a year and a half ago, I did something radical: I got my driver's license. Late to the party, I know! But that tiny plastic card made me question everything. If I could conquer the open road, what else was I holding myself back from? Enter coding—a world that had always intrigued me from the sidelines. So, I swapped out my apron for a keyboard, dove headfirst into a grueling 9-month bootcamp, and emerged on the other side wondering why I hadn't done it sooner. Talk about a plot twist!",
    icon: MapPin,
    gradient: 'from-primary-300 to-primary-500',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=500&fit=crop'
  },
  {
    title: 'Why I Love Code',
    content:
      "Ah, coding—the Swiss Army knife of careers. No matter what mood I'm in, there's always a facet of coding that fits. Feeling creative? Time to whip up a sleek, eye-catching interface. Need a mental workout? Let's dive into trimming nested objects in Prisma—guaranteed to keep those neurons firing. It's like having an endless box of LEGO bricks; the same pieces can build anything from a spaceship to a medieval castle. The versatility and endless possibilities are what hooked me. Plus, let's be honest, there's nothing quite like the adrenaline rush of finally squashing that elusive bug at 2 AM. It's addictive.",
    icon: Heart,
    gradient: 'from-secondary-300 to-secondary-500',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=500&fit=crop'
  },
  {
    title: 'My Coding Style',
    content:
      "Organized chaos, sprinkled with a generous helping of trial and error—that's me in a nutshell. I like to think of myself as methodically experimental. Sure, I plan things out (thank you, Kanban boards!), but I'm not afraid to dive in and get my hands dirty. When bugs rear their ugly heads—which, of course, is a rare occurrence (who are we kidding?)—I consult the holy trinity: documentation, Google, and a dash of GPT magic. I believe in breaking things to learn how they work. After all, it's just code; it won't bite... unless you deploy on a Friday. Then all bets are off.",
    icon: Brain,
    gradient: 'from-accent-300 to-accent-500',
    image:
      'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=500&h=500&fit=crop'
  },
  {
    title: 'What Sets Me Apart',
    content:
      "Here's the thing: years in hospitality taught me more about pressure than any deadline ever could. While chefs get to hide in the kitchen (thanks for that misconception, Mr. Ramsay), I was out front, juggling a dozen tables and keeping my cool when a customer changed their order for the fifth time. Dealing with people who spend 12 minutes deciding on adding chips to their meal teaches you patience, adaptability, and how to think on your feet—all skills that transfer beautifully to coding. I thrive under pressure, value clear communication, and I'm a firm believer that no idea is too crazy to consider. Plus, I bring a dash of humor to every project because, let's face it, we could all use a good laugh when the code doesn't compile.",
    icon: Target,
    gradient: 'from-primary-400 to-accent-400',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=500&fit=crop'
  },
  {
    title: 'Favorite Projects',
    content:
      "Choosing a favorite project is like picking your favorite child—impossible, but I'll give it a shot. JustPark Backend holds a special place in my heart. Imagine transforming addresses into coordinates with the Google Maps API, juggling encrypted passwords, mastering JWT tokens, and setting up a robust RBAC system—all without the distraction of a user interface. It was pure, unfiltered logic, and I loved every second of it. Then there's Soundsphere, the team project that redefined collaboration for me. We quickly learned that even the most talented developers can't outperform a well-coordinated team. It wasn't just about writing code; it was about syncing our brains to create something bigger than ourselves.",
    icon: Code,
    gradient: 'from-secondary-400 to-primary-400',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop'
  },
  {
    title: "What's Next",
    content:
      "The next challenge, of course! I'm all about raising the bar with each new project. I want to tackle problems that make me scratch my head and keep me up at night—not out of frustration, but because I can't wait to find the solution. Whether it's getting lost in the labyrinth of a new framework or wrestling with stubborn tests, I'm ready for it. So here's to the future—unpredictable, exciting, and just a tad bit daunting. But hey, if it doesn't scare you a little, what's the point?",
    icon: Rocket,
    gradient: 'from-accent-400 to-secondary-400',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop'
  }
]

export default function AboutMeSection() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Section id="about">
      <div className="container mx-auto px-4 py-8" ref={ref}>
        <motion.h2
          className="xl:text-[70px] lg:text-[60px] sm:text-[35px] text-[45px] font-semibold text-primary sfumato"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
          }}
        >
          About Me
        </motion.h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutMeContent.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      delay: 0.1 * (index + 1)
                    }
                  }
                }}
              >
                <Card
                  className="cursor-pointer overflow-hidden h-[250px] flex flex-col relative group hover:shadow-lg transition-all duration-300"
                  onClick={() => setOpenDialog(index)}
                >
                  <div
                    className={`absolute inset-0 opacity-50 bg-gradient-to-br ${item.gradient} transition-opacity duration-300 group-hover:opacity-30`}
                  />
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:opacity-70"
                  />
                  <CardContent className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-t from-background/80 via-background/50 to-transparent">
                    <div className={`p-3 rounded-full bg-background mb-4`}>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground line-clamp-2 text-sm">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>

                <Dialog
                  open={openDialog === index}
                  onOpenChange={() => setOpenDialog(null)}
                >
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="relative h-[200px] rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <DialogDescription className="text-muted-foreground">
                        {item.content}
                      </DialogDescription>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            )
          })}
        </div> */}
        <AboutMeGrid />
      </div>
    </Section>
  )
}
