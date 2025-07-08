import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

// Load Inter font
const inter = Inter({ subsets: ["latin"] })

// Metadata for SEO and favicon
export const metadata: Metadata = {
  title: "Portfolio | Abhishek U S",
  description: "Personal portfolio website of an MCA student and aspiring web developer",
  keywords: ["Abhishek U S", "Portfolio", "Web Developer", "MCA Student"],
  generator: "v0.dev",
  icons: {
    icon: "/abhilogo.png", // ✅ make sure this file exists in /public
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
