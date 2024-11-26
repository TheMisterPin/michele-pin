// import { AnimatePresence, motion } from 'framer-motion'
// import { LucideIcon, X } from 'lucide-react'

// import { Card, CardContent } from '../ui/card'

// interface Props {
//   data: AboutMeCardData
//   onClick: (id: string) => void
// }
// interface AboutMeCardData {
//   id: string
//   title: string
//   description: string
//   article: string
//   icon: LucideIcon
//   image: string
// }

// export default function AboutMeCard(props: Props) {
//   const { data, onClick } = props
//   const { id, title, description, article, icon: Icon, image } = data

//   <>
//     <Card
//       className=" flex-1 drop-sm cursor-pointer overflow-hidden transition-all duration-500 ease-in-out hover:shadow-lg hover:scale-105 border-2 border-primary top-0 bg-background-400/50 text-primary"
//       onClick={() => onClick(id)}
//     >
//       <CardContent className="p-4 flex flex-col place-items-center gap-y-4">
//         <div className="flex  w-full">
//           <Icon className=" text-primary  w-2/12 h-auto aspect-square" />
//           <h3 className="text-3xl text-center font-bold w-full ">
//             {title}
//           </h3>
//         </div>
//         <div>
//           <p className="text-sm text-background-100 font font-semibold">
//             {description}
//           </p>
//         </div>
//       </CardContent>
//     </Card>

//     <AnimatePresence>
//       {isExpanded && (
//         <motion.div
//           initial={animationProps.initial}
//           animate={animationProps.animate}
//           exit={animationProps.exit}
//           transition={springTransition}
//           className="fixed inset-0 z-50 flex items-center justify-center"
//         >
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20 }}
//             transition={{
//               type: 'spring',
//               stiffness: 150,
//               damping: 25,
//               mass: 0.8,
//               bounce: 0.2,
//               delay: 0.1
//             }}
//             className="w-full max-w-2xl overflow-hidden rounded-lg bg-background shadow-xl"
//           >
//             <Card className="bg-background-100">
//               <CardContent className="p-6">
//                 <div className="mb-4 flex items-start justify-between ">
//                   <div className="flex items-start space-x-4">
//                     <Icon className="h-6 w-6 text-primary" />
//                     <div>
//                       <h2 className="text-2xl font-bold">{card.title}</h2>
//                       <p className="text-sm text-muted-foreground">
//                         {card.description}
//                       </p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       toggleExpand(card.id)
//                     }}
//                     className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//                     aria-label="Close expanded card"
//                   >
//                     <X className="h-5 w-5" />
//                   </button>
//                 </div>
//                 <img
//                   src="/placeholder.svg?height=200&width=400"
//                   alt="Placeholder"
//                   className="mb-4 h-48 w-full object-cover"
//                 />
//                 <div className="max-h-64 overflow-y-auto pr-2">
//                   <p className="text-muted-foreground">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Nullam euismod, nisi vel consectetur interdum, nisl nunc
//                     egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed
//                     euismod, nisi vel consectetur interdum, nisl nunc egestas
//                     nunc, vitae tincidunt nisl nunc euismod nunc. Lorem ipsum
//                     dolor sit amet, consectetur adipiscing elit. Nullam euismod,
//                     nisi vel consectetur interdum, nisl nunc egestas nunc, vitae
//                     tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
//                     consectetur interdum, nisl nunc egestas nunc, vitae
//                     tincidunt nisl nunc euismod nunc.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   </>
// }
