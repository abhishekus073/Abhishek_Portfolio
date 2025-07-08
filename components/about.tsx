"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Lightbulb, Target } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 relative">
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
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative aspect-square max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-md -z-10" />
            <Image
              src="/Abhishek.png"
              alt="Profile"
              width={400}
              height={400}
              className="rounded-2xl object-cover border border-accent/20 backdrop-blur-sm"
            />
            <div
              className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary/10 rounded-full -z-10 animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute -top-5 -left-5 w-20 h-20 bg-accent/10 rounded-full -z-10 animate-pulse"
              style={{ animationDuration: "6s" }}
            ></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-accent">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm an enthusiastic MCA student with a passion for web development and software engineering. Currently
              pursuing my Master's in Computer Applications, I combine academic knowledge with practical coding skills
              to build modern, user-friendly web applications.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in technology began during my Bachelor's in Computer Applications, where I discovered my love
              for creating digital experiences. Now, I'm focused on expanding my expertise in full-stack development,
              with particular interest in React, Node.js, and modern web technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <Card className="bg-background/50 border border-primary/20 overflow-hidden backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Rocket className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary">Passion</h4>
                    <p className="text-sm text-muted-foreground">Driven by creativity and innovation</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border border-accent/20 overflow-hidden backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="font-semibold text-accent">Skills</h4>
                    <p className="text-sm text-muted-foreground">Full-stack development expertise</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background/50 border border-secondary/20 overflow-hidden backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Target className="h-5 w-5 text-secondary" />
                    </div>
                    <h4 className="font-semibold text-secondary">Goals</h4>
                    <p className="text-sm text-muted-foreground">Building innovative web solutions</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
