"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with product listings, cart functionality, and payment integration.",
    image: "/aaaa1.png",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/abhishekus073/TechStore.git",
    demo: "https://v0-e-commerce-website-build-j85asz5cy-abhishekus073s-projects.vercel.app/",
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality and user authentication.",
    image: "/image.png",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/abhishekus073/Time-management.git",
    demo: "https://time-management-red.vercel.app/",
  },
  {
    title: "Smart Helmet for safety and Accident Detection using IOT",
    description: "An IoT-based smart helmet that detects accidents and alerts emergency contacts using GPS , with enforced helmet-wearing detection.",
    image: "/smart.jpg",
    technologies: ["Arduino Uno", "C++","c", "Thing Speak"],
    github: "https://github.com/abhishekus073/Smart-Helmet",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image: "/Portfolio.png",
    technologies: ["Next.js", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://abhishek-portfolio-gje1.vercel.app",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl -z-10" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on during my academic journey and personal exploration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-background/50 border border-accent/20 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:opacity-30 transition-opacity" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-accent">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-background/50 border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent/50 hover:border-accent text-accent hover:bg-accent/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.title !== "Smart Helmet for safety and Accident Detection using IOT" && project.demo && (
                    <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
