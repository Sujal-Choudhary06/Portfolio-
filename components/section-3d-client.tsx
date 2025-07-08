"use client"

import { useState, useEffect } from "react"
import { CSSBackgroundSimple } from "./css-background"

export function Section3DClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <CSSBackgroundSimple />
  }

  // For now, let's use CSS background to avoid dependency issues
  return <CSSBackgroundSimple />
}
