"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certification", href: "#certification" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/abhilogo.png" alt="Logo" width={95} height={35} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-accent px-3 py-2 text-base font-medium transition-colors hover:scale-105" // Changed to text-base
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Connect Button */}
          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border border-primary/50 hover:border-primary/80 hover:bg-primary/10 text-primary"
              asChild
            >
              <Link href="#contact">Let's Connect</Link>
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 py-3">
              <Button
                variant="outline"
                className="w-full border border-primary/50 hover:border-primary/80 hover:bg-primary/10 text-primary"
                asChild
                onClick={() => setIsOpen(false)}
              >
                <Link href="#contact">Let's Connect</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
