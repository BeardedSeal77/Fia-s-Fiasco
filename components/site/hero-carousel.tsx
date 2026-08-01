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
      <CarouselContent className="-ml-0">
        {items.map((item, i) => (
          <CarouselItem key={item.src} className="pl-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-4 ring-primary/25 shadow-lg">
              <Image
                src={withBasePath(item.src)}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 20rem, 15rem"
                priority={i === 0}
              />
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-3 pt-8">
                <p className="text-xs font-medium text-white">{item.caption}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 bg-background/70 backdrop-blur-sm" />
      <CarouselNext className="right-3 bg-background/70 backdrop-blur-sm" />
    </Carousel>
  )
}
