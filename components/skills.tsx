"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, FileCode2, Layers, Database, Server, GitBranch, Palette, Cpu } from "lucide-react"

const skills = [
  { name: "HTML & CSS", icon: FileCode2, level: 90, color: "from-[#FF6D00] to-[#FF9E80]" },
  { name: "JavaScript", icon: Code2, level: 85, color: "from-[#FFD600] to-[#FFFF00]" },
  { name: "React", icon: Layers, level: 80, color: "from-[#61DAFB] to-[#00B0FF]" },
  { name: "Node.js", icon: Server, level: 75, color: "from-[#8BC34A] to-[#4CAF50]" },
  { name: "SQL", icon: Database, level: 70, color: "from-[#29B6F6] to-[#0288D1]" },
  { name: "MongoDB", icon: Database, level: 65, color: "from-[#4CAF50] to-[#2E7D32]" },
  { name: "Git/GitHub", icon: GitBranch, level: 80, color: "from-[#F05032] to-[#BD2C00]" },
  { name: "Python", icon: Palette, level: 60, color: "from-[#FF4081] to-[#F50057]" },
  { name: "TypeScript", icon: Cpu, level: 65, color: "from-[#3178C6] to-[#235A97]" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-secondary/5 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I've been working with during my academic and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden bg-background/50 border border-accent/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`h-10 w-10 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                    >
                      <skill.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-xs text-right text-muted-foreground">{skill.level}%</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
