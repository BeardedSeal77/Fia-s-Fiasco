import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

const contentDir = path.join(process.cwd(), "content")

export interface SiteMeta {
  brand: string
  name: string
  title: string
  greeting: string
  tagline: string
  location: string
  email: string
  phone: string
  phoneHref: string
  instagram: string
  instagramLabel: string
  contactBlurb: string
}

export interface Stat {
  value: string
  label: string
}

export interface Highlight {
  title: string
  text: string
}

export interface About {
  stats: Stat[]
  highlights: Highlight[]
  html: string
}

export interface GalleryItem {
  src: string
  alt: string
  category: string
  caption: string
}

export interface ServicePackage {
  name: string
  tagline: string
  price: string
  duration: string
  featured?: boolean
  includes: string[]
  html: string
}

export interface ProcessStep {
  title: string
  text: string
}

export interface Testimonial {
  quote: string
  name: string
  pet: string
}

export interface FaqItem {
  question: string
  answer: string
}

async function toHtml(markdown: string): Promise<string> {
  if (!markdown.trim()) return ""
  const processed = await remark().use(remarkHtml).process(markdown)
  return processed.toString().trim()
}

function readFile(relativePath: string) {
  const raw = fs.readFileSync(path.join(contentDir, relativePath), "utf8")
  return matter(raw)
}

async function readCollection<T>(dir: string): Promise<T[]> {
  const dirPath = path.join(contentDir, dir)
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .sort()
  return Promise.all(
    files.map(async (file) => {
      const { data, content } = readFile(path.join(dir, file))
      return { ...data, html: await toHtml(content) } as T
    })
  )
}

export async function getSite(): Promise<SiteMeta> {
  return readFile("site.md").data as SiteMeta
}

export async function getAbout(): Promise<About> {
  const { data, content } = readFile("about.md")
  return { ...data, html: await toHtml(content) } as About
}

export async function getGallery(): Promise<GalleryItem[]> {
  return readFile("gallery.md").data.items as GalleryItem[]
}

export async function getPackages(): Promise<ServicePackage[]> {
  return readCollection<ServicePackage>("packages")
}

export async function getProcess(): Promise<ProcessStep[]> {
  return readFile("process.md").data.steps as ProcessStep[]
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return readFile("testimonials.md").data.items as Testimonial[]
}

export async function getFaq(): Promise<FaqItem[]> {
  return readFile("faq.md").data.items as FaqItem[]
}
