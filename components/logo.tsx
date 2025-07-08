"use client"

import { motion } from "framer-motion"

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-12 w-12"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-md" />
      <div className="relative h-full w-full flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M20 80L50 20L80 80L50 60L20 80Z"
            fill="url(#logo-gradient)"
            strokeWidth="4"
            stroke="url(#logo-stroke)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="logo-gradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(340, 90%, 65%)" />
              <stop offset="1" stopColor="hsl(190, 90%, 60%)" />
            </linearGradient>
            <linearGradient id="logo-stroke" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(340, 90%, 75%)" />
              <stop offset="1" stopColor="hsl(190, 90%, 70%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
}
