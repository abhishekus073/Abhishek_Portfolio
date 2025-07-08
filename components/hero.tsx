"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Rocket, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Hero() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([])

  useEffect(() => {
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Star background */}
      <div className="stars absolute inset-0 z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star absolute bg-white rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle 2s infinite`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Background blur circles */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-secondary/10 blur-3xl z-0" />
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-primary/10 blur-3xl z-0" />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Welcome tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="px-4 py-2 rounded-full border border-primary/50 bg-primary/5 text-primary flex items-center space-x-2">
              <Rocket size={16} className="animate-pulse" />
              <span>Welcome to My Portfolio!</span>
              <Rocket size={16} className="animate-pulse" />
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi   I'm <span className="gradient-text">Abhishek U S</span>
            <br />
            <span className="text-3xl md:text-5xl">Full Stack Developer</span>
          </h1>

          {/* About text */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Hello there! I'm Abhishek U S, a passionate Full Stack Developer with a keen eye for creating 
            seamless and dynamic web applications. My journey in the world of technology has led me to master a 
            versatile set of skills that span both frontend and backend development.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* View My Work button */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 group" asChild>
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </Link>
            </Button>
          </div>

          {/* Tech stack */}
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Globe size={18} className="text-accent" />
            <p className="text-sm">
              <span className="font-medium text-accent">Tech Stack:</span> HTML, CSS, JavaScript (React.js), Node.js,
              MongoDB, SQL, Git
            </p>
          </div>
        </motion.div>

        {/* Floating Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative mx-auto lg:ml-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/abhi22.png"
              alt="Abhishek U S"
              width={600}
              height={600}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-accent" />
      </div>
    </section>
  )
}
