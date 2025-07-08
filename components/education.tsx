"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "CMR University",
    duration: "2024 - 2026",
    description: "Focused on developing strong technical skills in software design, development, and deployment. Coursework includes database management, web technologies, cloud solutions, and software project management, preparing for industry-ready software engineering roles.",
    achievements: ["Dean's List", "Best Project Award"],
  },
  {
    degree: "Bachelor of Vocational (B.Voc)",
    institution: "SDM Autonomous College, Ujire (Mangalore University)",
    duration: "2021 - 2024",
    description:
      "Studied the basics of software and app development, including programming, web design, and database management. Built  applications as part of the course.",
    achievements: ["First Class with Distinction", "Led a team of 4 members in developing a smart helmet IoT project"],
  },
]
 
export default function Education() {
  return (
    <section id="education" className="py-20 relative">
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
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey in the field of computer science and applications.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-background/50 border border-accent/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-accent">{item.degree}</CardTitle>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-secondary" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  {item.achievements.length > 0 && (
                    <div>
                      <h4 className="font-medium flex items-center gap-2 mb-2 text-primary">
                        <Award className="h-4 w-4" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement) => (
                          <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-accent mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
