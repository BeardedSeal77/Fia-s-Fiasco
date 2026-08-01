import type { Metadata } from "next"
import { Fraunces, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { getSite } from "@/lib/content"
import { cn } from "@/lib/utils"

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite("en")
  const title = `${site.brand} | ${site.title}`
  const description = `${site.tagline} Sessions in ${site.location} with ${site.name}.`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  }
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fraunces.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
