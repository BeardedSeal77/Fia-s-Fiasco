import { Camera, Heart, MapPin, MessageCircleHeart } from "lucide-react"

import { InstagramIcon } from "@/components/site/icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import type { SiteMeta } from "@/lib/content"

interface FooterProps {
  site: SiteMeta
  bookHref: string
}

export function Footer({ site, bookHref }: FooterProps) {
  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden border-t">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Heart
          className="absolute top-8 left-[6%] size-8 rotate-12 text-rp-love/20"
          fill="currentColor"
        />
        <MessageCircleHeart className="absolute top-12 right-[8%] size-10 -rotate-6 text-rp-iris/20" />
        <Heart
          className="absolute bottom-10 right-[25%] size-6 rotate-[-20deg] text-rp-rose/20"
          fill="currentColor"
        />
      </div>
      <div className="mx-auto max-w-5xl px-4 py-14 text-center md:py-20">
        <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
          Let&apos;s plan a session
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          {site.contactBlurb}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-4 inline-block text-lg font-medium text-primary hover:underline"
        >
          {site.email}
        </a>
        <div className="mt-2">
          <a
            href={site.phoneHref}
            className="text-sm text-foreground hover:underline"
          >
            {site.phone}
          </a>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <Button nativeButton={false} render={<a href={bookHref} />}>
            <Camera data-icon="inline-start" />
            Book a session
          </Button>
          <Button
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
            Instagram
          </Button>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {site.location}
        </p>

        <Separator className="mx-auto mt-10 max-w-xs" />
        <p className="mt-6 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {site.name} · {site.location} ·
          Built with &#9829; and Leckerlis
        </p>
      </div>
    </footer>
  )
}
