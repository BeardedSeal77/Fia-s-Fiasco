import { Section } from "@/components/site/section"
import type { ProcessStep } from "@/lib/content"

export function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <Section id="process" title="How it works">
      <ol className="grid gap-8 md:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title}>
            <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary">
              {i + 1}
            </div>
            <h3 className="mt-3 font-semibold">{step.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
