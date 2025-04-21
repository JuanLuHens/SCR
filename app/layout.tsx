import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/toaster"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "SCR Educaterapia",
  description: "Gabinete de aprendizaje infantil especializado en refuerzo educativo, logopedia y atención temprana",
  generator: "0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}


import './globals.css'