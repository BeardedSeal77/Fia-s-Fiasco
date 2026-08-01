import { About } from "@/components/site/about"
import { Faq } from "@/components/site/faq"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Navbar, type NavSection } from "@/components/site/navbar"
import { Packages } from "@/components/site/packages"
import { Process } from "@/components/site/process"
import { Testimonials } from "@/components/site/testimonials"
import {
  getAbout,
  getFaq,
  getGallery,
  getPackages,
  getProcess,
  getSite,
  getTestimonials,
} from "@/lib/content"

const NAV_SECTIONS: NavSection[] = [
  { id: "about", label: "About" },
  { id: "packages", label: "Sessions" },
  { id: "process", label: "How it works" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
]

export default async function Page() {
  const [site, about, gallery, packages, process, testimonials, faq] =
    await Promise.all([
      getSite(),
      getAbout(),
      getGallery(),
      getPackages(),
      getProcess(),
      getTestimonials(),
      getFaq(),
    ])

  const bookHref = `mailto:${site.email}?subject=${encodeURIComponent("Pet portrait session inquiry")}`

  return (
    <>
      <Navbar brand={site.brand} bookHref={bookHref} sections={NAV_SECTIONS} />
      <main>
        <Hero site={site} bookHref={bookHref} items={gallery} />
        <About about={about} />
        <Packages packages={packages} />
        <Process steps={process} />
        <Testimonials testimonials={testimonials} />
        <Faq items={faq} />
      </main>
      <Footer site={site} bookHref={bookHref} />
    </>
  )
}
