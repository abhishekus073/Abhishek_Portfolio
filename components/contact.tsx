"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Loader2, Linkedin, Github, Twitter } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast({
          title: "Failed to send",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 relative">
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
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-background/50 border border-accent/20 backdrop-blur-sm overflow-hidden h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-accent">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                          href="mailto:abhishekus073@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          abhishekus073@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                          href="tel:+91 9353241492"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          +91 9353241492
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                        <MapPin className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">Bangalore, Karnataka, India</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-medium mb-3">Social Profiles</h4>
                      <div className="flex space-x-3">
                        <Link href="https://www.linkedin.com/in/abhishek-u-s-/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-[#0077B5]/10 flex items-center justify-center hover:bg-[#0077B5]/20 transition-colors">
                          <Linkedin className="h-5 w-5 text-[#0077B5]" />
                        </Link>
                        <Link href="https://github.com/abhishekus073" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-700/10 flex items-center justify-center hover:bg-gray-700/20 transition-colors">
                          <Github className="h-5 w-5 text-gray-300" />
                        </Link>
                        <Link href="https://x.com/us006_abhishek" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center hover:bg-[#1DA1F2]/20 transition-colors">
                          <Twitter className="h-5 w-5 text-[#1DA1F2]" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-background/50 border border-accent/20 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-muted-foreground">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="bg-background/50 border-accent/20 focus:border-accent focus:ring-accent" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="bg-background/50 border-accent/20 focus:border-accent focus:ring-accent" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-muted-foreground">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange} required className="bg-background/50 border-accent/20 focus:border-accent focus:ring-accent" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
