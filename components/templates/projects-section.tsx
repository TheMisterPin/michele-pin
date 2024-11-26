'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Github, Globe, ExternalLink } from 'lucide-react'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Section from '../organisms/section-container'
import ProjectDialog from '../organisms/project-dialog'

const projects = [
  {
    title: 'SoundSphere',
    favicon: '/favicon-soundsphere.ico',
    description:
      'A collaborative music streaming platform with real-time playlist management and social features.',
    techStack: ['react', 'nodejs', 'express', 'mongodb', 'socket.io'],
    repoLink: 'https://github.com/yourusername/soundsphere',
    liveLink: 'https://soundsphere.example.com',
    thumbnail: '/soundsphere-thumbnail.jpg',
    longDescription:
      'SoundSphere started as a passion project to combine my love for music and coding. I wanted to create a platform where music enthusiasts could come together, share their favorite tracks, and discover new music in real-time. The project presented unique challenges in implementing real-time features and managing concurrent users, which led me to explore WebSocket technology through Socket.io. One of the main lessons I learned was the importance of efficient data synchronization across multiple clients, and how to optimize database queries for real-time applications. The project also taught me a lot about user experience design in collaborative environments.'
  },
  {
    title: 'JustPark Backend',
    favicon: '/favicon-justpark.ico',
    description:
      'Robust backend system for a parking space rental application with geolocation and booking features.',
    techStack: ['nodejs', 'express', 'postgresql', 'redis', 'docker'],
    repoLink: 'https://github.com/yourusername/justpark-backend',
    liveLink: 'https://api.justpark.example.com',
    thumbnail: '/justpark-thumbnail.jpg',
    longDescription:
      "JustPark Backend was born out of the frustration of finding parking in busy urban areas. I wanted to create a robust backend that could handle complex geospatial queries and manage real-time booking systems. This project pushed me to dive deep into PostgreSQL's geospatial capabilities and learn about optimizing database performance for location-based services. I chose Node.js and Express for their excellent performance in I/O-heavy operations, which was crucial for handling multiple concurrent requests. Implementing JWT-based authentication and role-based access control taught me a lot about security best practices in API design. Docker was used to ensure consistency across development and production environments, which was a valuable lesson in DevOps practices."
  },
  {
    title: 'Note-Master',
    favicon: '/favicon-notemaster.ico',
    description:
      'A Notion-inspired note-taking application with rich text editing and organizational features.',
    techStack: ['react', 'nextjs', 'typescript', 'prisma', 'postgresql'],
    repoLink: 'https://github.com/yourusername/note-master',
    liveLink: 'https://notemaster.example.com',
    thumbnail: '/notemaster-thumbnail.jpg',
    longDescription:
      'Note-Master was inspired by my quest for the perfect note-taking app. I wanted to combine the flexibility of Notion with some unique features I felt were missing in existing solutions. This project was a deep dive into rich text editing in React, which led me to explore libraries like Draft.js and Slate.js. I chose Next.js for its excellent SEO capabilities and server-side rendering, which were crucial for a content-heavy application. TypeScript was used to ensure type safety across the complex state management required for a note-taking app. One of the biggest challenges was implementing a robust and flexible data model that could handle nested documents and various content types. This project significantly improved my skills in database design and state management in complex React applications.'
  },
  {
    title: 'Fashion Deck',
    favicon: '/favicon-fashiondeck.ico',
    description:
      'A wardrobe organizer and outfit planner with AI-powered style recommendations.',
    techStack: ['react', 'nodejs', 'tensorflow', 'mongodb', 'cloudinary'],
    repoLink: 'https://github.com/yourusername/fashion-deck',
    liveLink: 'https://fashiondeck.example.com',
    thumbnail: '/fashiondeck-thumbnail.jpg',
    longDescription:
      'Fashion Deck emerged from a personal need to organize my wardrobe and streamline the outfit selection process. The project presented an exciting opportunity to blend fashion with technology. I used React for the frontend to create a dynamic and responsive user interface, while Node.js powered the backend. One of the most challenging and rewarding aspects was integrating TensorFlow.js to provide AI-powered style recommendations. This required diving into machine learning concepts and figuring out how to train a model on fashion data. Cloudinary was used for efficient image management and manipulation. MongoDB was chosen for its flexibility in handling varied clothing item data. This project taught me a lot about working with external APIs, handling image processing in web applications, and the basics of implementing AI in practical, user-facing features.'
  }
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<{
    title: string
    favicon: string
    description: string
    techStack: string[]
    repoLink: string
    liveLink: string
    thumbnail: string
    longDescription: string
  } | null>(null)

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300 hover:shadow-lg h-[400px] flex flex-col"
          >
            <CardContent className="p-6 flex-grow">
              <div className="flex items-center mb-4">
                <Image
                  src={project.favicon}
                  alt={`${project.title} favicon`}
                  width={24}
                  height={24}
                  className="mr-2"
                />
                <h3 className="text-2xl font-bold text-primary">
                  {project.title}
                </h3>
              </div>
              <div className="mb-4">
                {project.techStack.map((tech, i) => (
                  <Image
                    key={i}
                    src={`https://skillicons.dev/icons?i=${tech}`}
                    alt={tech}
                    width={24}
                    height={24}
                    className="inline-block mr-2"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="bg-muted p-4">
              <div className="flex justify-between w-full">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Repository
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Live Site
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ProjectDialog
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  )
}
