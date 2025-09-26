import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "El próximo paso - Joaco Tomé | Podcast de Desarrollo Personal",
  description:
    "Descubre estrategias prácticas de desarrollo personal y crecimiento. Escucha El próximo paso en Spotify y YouTube.",
  generator: "v0.app",
  keywords: "desarrollo personal, podcast, crecimiento personal, Joaco Tomé, El próximo paso",
  authors: [{ name: "Joaco Tomé" }],
  openGraph: {
    title: "El próximo paso - Joaco Tomé",
    description: "Podcast de desarrollo personal y crecimiento",
    type: "website",
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
