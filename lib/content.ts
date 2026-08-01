import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"
import { remark } from "remark"
import remarkHtml from "remark-html"

const contentDir = path.join(process.cwd(), "content")

export type Locale = "en" | "de"

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
  addressName: string
  addressCity: string
  contactBlurb: string
}

export interface UiLabels {
  nav: { about: string; packages: string; process: string; faq: string; contact: string }
  titles: { about: string; packages: string; process: string; testimonials: string; faq: string }
  mostPopular: string
  bookSession: string
  callFia: string
  book: string
  mailSubject: string
  packagesNote: string
  footerTitle: string
  builtWith: string
  switchLabel: string
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

function readFile(locale: Locale, relativePath: string) {
  const raw = fs.readFileSync(path.join(contentDir, locale, relativePath), "utf8")
  return matter(raw)
}

async function readCollection<T>(locale: Locale, dir: string): Promise<T[]> {
  const dirPath = path.join(contentDir, locale, dir)
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith(".md"))
    .sort()
  return Promise.all(
    files.map(async (file) => {
      const { data, content } = readFile(locale, path.join(dir, file))
      return { ...data, html: await toHtml(content) } as T
    })
  )
}

export async function getSite(locale: Locale): Promise<SiteMeta> {
  return readFile(locale, "site.md").data as SiteMeta
}

export async function getLabels(locale: Locale): Promise<UiLabels> {
  return readFile(locale, "ui.md").data as UiLabels
}

export async function getAbout(locale: Locale): Promise<About> {
  const { data, content } = readFile(locale, "about.md")
  return { ...data, html: await toHtml(content) } as About
}

export async function getGallery(locale: Locale): Promise<GalleryItem[]> {
  return readFile(locale, "gallery.md").data.items as GalleryItem[]
}

export async function getPackages(locale: Locale): Promise<ServicePackage[]> {
  return readCollection<ServicePackage>(locale, "packages")
}

export async function getProcess(locale: Locale): Promise<ProcessStep[]> {
  return readFile(locale, "process.md").data.steps as ProcessStep[]
}

export async function getTestimonials(locale: Locale): Promise<Testimonial[]> {
  return readFile(locale, "testimonials.md").data.items as Testimonial[]
}

export async function getFaq(locale: Locale): Promise<FaqItem[]> {
  return readFile(locale, "faq.md").data.items as FaqItem[]
}
