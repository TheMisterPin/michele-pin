import Image from 'next/image'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'

interface ProjectDialogProps {
  project: {
    title: string
    thumbnail: string
    longDescription: string
    techStack: string[]
  } | null
  onClose: () => void
}

export default function ProjectDialog({
  project,
  onClose
}: ProjectDialogProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <DialogDescription className="text-muted-foreground">
            {project.longDescription}
          </DialogDescription>
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
