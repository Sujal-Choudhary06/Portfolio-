"use client"

import { useState, useEffect } from "react"
import { CSSBackground } from "./css-background"

export function Hero3DClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <CSSBackground />
  }

  // For now, let's use CSS background to avoid dependency issues
  return <CSSBackground />
}
