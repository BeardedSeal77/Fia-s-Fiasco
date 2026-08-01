"use client"

import * as React from "react"

export function HtmlLang({ lang }: { lang: string }) {
  React.useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return null
}
