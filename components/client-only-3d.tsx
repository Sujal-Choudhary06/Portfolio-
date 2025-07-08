"use client"

import dynamic from "next/dynamic"
import { useState, useEffect } from "react"

// Create a simple fallback component
function ThreeDFallback() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse" />
    </div>
  )
}

function ThreeDFallbackSimple() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-10">
      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
    </div>
  )
}

// Dynamic imports with proper error handling
const ThreeDBackground = dynamic(
  () =>
    import("./3d-background")
      .then((mod) => ({ default: mod.ThreeDBackground }))
      .catch(() => ({ default: ThreeDFallback })),
  {
    ssr: false,
    loading: () => <ThreeDFallback />,
  },
)

const ThreeDBackgroundSimple = dynamic(
  () =>
    import("./3d-background-simple")
      .then((mod) => ({ default: mod.ThreeDBackgroundSimple }))
      .catch(() => ({ default: ThreeDFallbackSimple })),
  {
    ssr: false,
    loading: () => <ThreeDFallbackSimple />,
  },
)

export function ClientOnly3DBackground() {
  const [mounted, setMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || hasError) {
    return <ThreeDFallback />
  }

  return (
    <div onError={() => setHasError(true)}>
      <ThreeDBackground />
    </div>
  )
}

export function ClientOnly3DBackgroundSimple() {
  const [mounted, setMounted] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || hasError) {
    return <ThreeDFallbackSimple />
  }

  return (
    <div onError={() => setHasError(true)}>
      <ThreeDBackgroundSimple />
    </div>
  )
}
