"use client"

import * as React from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { GalleryItem } from "@/lib/content"
import { withBasePath } from "@/lib/paths"
import Autoplay from "embla-carousel-autoplay"

interface HeroCarouselProps {
  items: GalleryItem[]
}

export function HeroCarousel({ items }: HeroCarouselProps) {
  const [plugin] = React.useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin]}
      onMouseEnter={() => plugin.stop()}
      onMouseLeave={() => plugin.reset()}
    >
      <CarouselContent className="-ml-3 md:-ml-4">
        {items.map((item, i) => (
          <CarouselItem
            key={item.src}
            className="basis-4/5 pl-3 sm:basis-1/2 md:pl-4 lg:basis-1/3"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-md ring-1 ring-foreground/10">
              <Image
                src={withBasePath(item.src)}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw"
                priority={i === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className="left-3 bg-background/70 backdrop-blur-sm"
        disabled={false}
        suppressHydrationWarning
      />
      <CarouselNext
        className="right-3 bg-background/70 backdrop-blur-sm"
        disabled={false}
        suppressHydrationWarning
      />
    </Carousel>
  )
}
