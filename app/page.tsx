"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  // Create star background effect
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.createElement("div")
      starsContainer.className = "stars"
      document.body.appendChild(starsContainer)

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div")
        star.className = "star"
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.width = `${Math.random() * 2 + 1}px`
        star.style.height = star.style.width
        star.style.animationDelay = `${Math.random() * 5}s`
        starsContainer.appendChild(star)
      }
    }

    createStars()

    return () => {
      const starsContainer = document.querySelector(".stars")
      if (starsContainer) {
        document.body.removeChild(starsContainer)
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}
