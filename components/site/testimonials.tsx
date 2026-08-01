import { Quote } from "lucide-react"

import { Section } from "@/components/site/section"
import { Card, CardContent } from "@/components/ui/card"
import type { Testimonial } from "@/lib/content"

export function Testimonials({
  testimonials,
  title,
}: {
  testimonials: Testimonial[]
  title: string
}) {
  return (
    <Section id="testimonials" title={title} className="bg-muted/30">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <Card key={item.name}>
            <CardContent>
              <Quote className="size-5 text-primary" />
              <p className="mt-3 text-sm leading-relaxed">{item.quote}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                — {item.name} · {item.pet}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
