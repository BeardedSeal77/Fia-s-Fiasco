import { ChevronDown } from "lucide-react"

import { Section } from "@/components/site/section"
import type { FaqItem } from "@/lib/content"

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <Section id="faq" title="Frequently asked questions">
      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border bg-card px-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-4 text-sm text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
