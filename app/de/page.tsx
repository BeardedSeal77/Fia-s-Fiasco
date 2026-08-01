import type { Metadata } from "next"

import { Home } from "@/components/site/home"
import { HtmlLang } from "@/components/site/html-lang"
import { getSite } from "@/lib/content"

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSite("de")
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

export default function Page() {
  return (
    <>
      <HtmlLang lang="de" />
      <Home locale="de" />
    </>
  )
}
