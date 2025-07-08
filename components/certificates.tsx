"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Calendar, ExternalLink, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const certificates = [
  {
    id: 1,
    name: "Internet Of Things (IOT)",
    organization: "KARUNADU TECHNOLOGIES PRIVATE LIMITED",
    date: "April 2024",
    image: "/img20240815_17041095.jpg",
    skills: ["IoT", "Arduino"],
    verifyLink: "", 
  },
  {
    id: 2,
    name: "Crash Course on Python",
    organization: "Google (Coursera)",
    date: "March 10, 2022",
    image: "/CERTIFICATE1.jpeg",
    skills: ["Python", "Programming Basics"],
    verifyLink: "https://coursera.org/verify/YNTVX6Y4K46Q",
  },
  {
    id: 3,
    name: "Machine Learning And Artificial Intelligence",
    organization: "Google (Coursera)",
    date: "Nov, 2023",
    image: "/img20240815_17000934.jpg",
    skills: ["Python", "Machine Learning", "AI"],
    verifyLink: "",
  },
]

export default function Certificates() {
  return (
    <section id="certification" className="py-16 relative bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key certifications validating my skills in modern technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="flex flex-col border border-accent/10 shadow-sm rounded-xl overflow-hidden bg-background/70 backdrop-blur-sm">
                
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] w-full bg-white flex items-center justify-center">
                  <Image
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.name}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute top-2 right-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                </div>

                {/* Certificate Content */}
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                    <Award className="h-4 w-4 text-accent" />
                    {certificate.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{certificate.organization}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    {certificate.date}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {certificate.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Certificate Footer */}
                {certificate.verifyLink && (
                  <CardFooter className="px-4 pb-4">
                    <Button variant="link" size="sm" asChild className="p-0 text-accent hover:text-primary">
                      <a href={certificate.verifyLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        Verify
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
