import { About } from "@/components/site/about"
import { Faq } from "@/components/site/faq"
import { Footer } from "@/components/site/footer"
import { Hero } from "@/components/site/hero"
import { Navbar, type NavSection } from "@/components/site/navbar"
import { Packages } from "@/components/site/packages"
import { Process } from "@/components/site/process"
import { Testimonials } from "@/components/site/testimonials"
import {
  type Locale,
  getAbout,
  getFaq,
  getGallery,
  getLabels,
  getPackages,
  getProcess,
  getSite,
  getTestimonials,
} from "@/lib/content"

export async function Home({ locale }: { locale: Locale }) {
  const [site, labels, about, gallery, packages, process, testimonials, faq] =
    await Promise.all([
      getSite(locale),
      getLabels(locale),
      getAbout(locale),
      getGallery(locale),
      getPackages(locale),
      getProcess(locale),
      getTestimonials(locale),
      getFaq(locale),
    ])

  const bookHref = `mailto:${site.email}?subject=${encodeURIComponent(labels.mailSubject)}`

  const NAV_SECTIONS: NavSection[] = [
    { id: "about", label: labels.nav.about },
    { id: "packages", label: labels.nav.packages },
    { id: "process", label: labels.nav.process },
    { id: "faq", label: labels.nav.faq },
    { id: "contact", label: labels.nav.contact },
  ]

  const langSwitch = {
    label: labels.switchLabel,
    href: locale === "en" ? "/de/" : "/",
  }

  return (
    <>
      <Navbar
        brand={site.brand}
        bookHref={bookHref}
        bookLabel={labels.book}
        sections={NAV_SECTIONS}
        langSwitch={langSwitch}
      />
      <main>
        <Hero
          site={site}
          bookHref={bookHref}
          items={gallery}
          labels={{ bookSession: labels.bookSession, callFia: labels.callFia }}
        />
        <About about={about} title={labels.titles.about} />
        <Packages
          packages={packages}
          title={labels.titles.packages}
          note={labels.packagesNote}
          mostPopular={labels.mostPopular}
        />
        <Process steps={process} title={labels.titles.process} />
        <Testimonials
          testimonials={testimonials}
          title={labels.titles.testimonials}
        />
        <Faq items={faq} title={labels.titles.faq} />
      </main>
      <Footer
        site={site}
        bookHref={bookHref}
        title={labels.footerTitle}
        bookLabel={labels.bookSession}
        builtWith={labels.builtWith}
      />
    </>
  )
}
