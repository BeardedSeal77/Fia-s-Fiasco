import { Camera, Heart, MapPin, MessageCircleHeart, Phone } from "lucide-react"

import { HeroCarousel } from "@/components/site/hero-carousel"
import { InstagramIcon } from "@/components/site/icons"
import { Button } from "@/components/ui/button"
import type { GalleryItem, SiteMeta } from "@/lib/content"

interface HeroProps {
  site: SiteMeta
  bookHref: string
  items: GalleryItem[]
  labels: { bookSession: string; callFia: string }
}

export function Hero({ site, bookHref, items, labels }: HeroProps) {
  return (
    <div id="top" className="relative overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-12%] -z-10 size-136 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-primary)_16%,transparent),transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 left-[-12%] -z-10 size-104 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-brand-2)_14%,transparent),transparent_72%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Heart
          className="absolute top-8 left-[8%] size-10 rotate-12 text-rp-love/25"
          fill="currentColor"
        />
        <MessageCircleHeart className="absolute top-12 right-[10%] hidden size-12 -rotate-6 text-rp-iris/25 md:block" />
        <Heart
          className="absolute top-1/2 left-[5%] size-6 -rotate-12 text-rp-rose/40"
          fill="currentColor"
        />
        <MessageCircleHeart className="absolute bottom-16 left-[15%] hidden size-8 rotate-6 text-rp-foam/30 md:block" />
        <Heart
          className="absolute right-[12%] bottom-10 size-8 rotate-3 text-rp-gold/30"
          fill="currentColor"
        />
        <Heart
          className="absolute top-1/3 right-[30%] size-4 rotate-45 text-rp-love/30"
          fill="currentColor"
        />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 pt-16 pb-14 md:grid-cols-[1fr_auto] md:pt-24 md:pb-20">
        <div>
          <p className="font-heading text-3xl italic text-primary">
            {site.greeting}
          </p>
          <h1 className="mt-1 font-heading text-4xl font-bold tracking-tight md:text-5xl">
            {site.brand}
          </h1>
          <p className="mt-3 text-sm font-semibold tracking-widest text-primary uppercase">
            {site.title}
          </p>
          <p className="mt-4 max-w-xl text-lg text-muted-foreground">
            {site.tagline}
          </p>
          <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {site.location}
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={bookHref} />}
            >
              <Camera data-icon="inline-start" />
              {labels.bookSession}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href={site.phoneHref} />}
            >
              <Phone data-icon="inline-start" />
              {labels.callFia}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                />
              }
            >
              <InstagramIcon data-icon="inline-start" />
              {site.instagramLabel}
            </Button>
          </div>
        </div>

        <div className="mx-auto w-60 shrink-0 md:w-80">
          <HeroCarousel items={items} />
        </div>
      </div>
    </div>
  )
}
