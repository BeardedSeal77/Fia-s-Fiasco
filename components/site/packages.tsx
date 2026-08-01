import { Check } from "lucide-react"

import { Section } from "@/components/site/section"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { ServicePackage } from "@/lib/content"

interface PackagesProps {
  packages: ServicePackage[]
  title: string
  note: string
  mostPopular: string
}

export function Packages({ packages, title, note, mostPopular }: PackagesProps) {
  return (
    <Section id="packages" title={title} className="bg-muted/30">
      <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {packages.map((pkg) => (
          <Card
            key={pkg.name}
            className={`h-full flex flex-col${pkg.featured ? " ring-2 ring-primary" : ""}`}
          >
            <CardHeader>
              <CardTitle>{pkg.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {pkg.tagline}
              </CardDescription>
              {pkg.featured && (
                <CardAction>
                  <Badge>{mostPopular}</Badge>
                </CardAction>
              )}
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <div className="mb-4">
                <span className="text-3xl font-bold font-heading">
                  {pkg.price}
                </span>
                <span className="ml-2 text-xs text-muted-foreground">
                  {pkg.duration}
                </span>
              </div>
              {pkg.html && (
                <div
                  className="markdown text-sm"
                  dangerouslySetInnerHTML={{ __html: pkg.html }}
                />
              )}
              <ul className="mt-4 space-y-2">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        {note}
      </p>
    </Section>
  )
}
