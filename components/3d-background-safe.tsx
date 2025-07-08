"use client"

import { useState, useEffect, Suspense } from "react"
import dynamic from "next/dynamic"

// Simple CSS-based 3D effect as fallback
function CSSBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  )
}

function CSSBackgroundSimple() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5">
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-secondary/10 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>
    </div>
  )
}

// Try to load 3D, fallback to CSS if it fails
export function SafeThreeDBackground() {
  const [use3D, setUse3D] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check if WebGL is supported
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (gl) {
        setUse3D(true)
      }
    } catch (e) {
      console.log("WebGL not supported, using CSS fallback")
    }
  }, [])

  if (!mounted) {
    return <CSSBackground />
  }

  if (!use3D) {
    return <CSSBackground />
  }

  // Dynamically import 3D component only if WebGL is supported
  const ThreeDComponent = dynamic(
    () =>
      import("./3d-background")
        .then((mod) => ({ default: mod.ThreeDBackground }))
        .catch(() => ({ default: CSSBackground })),
    {
      ssr: false,
      loading: () => <CSSBackground />,
    },
  )

  return (
    <Suspense fallback={<CSSBackground />}>
      <ThreeDComponent />
    </Suspense>
  )
}

export function SafeThreeDBackgroundSimple() {
  const [use3D, setUse3D] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const canvas = document.createElement("canvas")
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
      if (gl) {
        setUse3D(true)
      }
    } catch (e) {
      console.log("WebGL not supported, using CSS fallback")
    }
  }, [])

  if (!mounted || !use3D) {
    return <CSSBackgroundSimple />
  }

  const ThreeDComponent = dynamic(
    () =>
      import("./3d-background-simple")
        .then((mod) => ({ default: mod.ThreeDBackgroundSimple }))
        .catch(() => ({ default: CSSBackgroundSimple })),
    {
      ssr: false,
      loading: () => <CSSBackgroundSimple />,
    },
  )

  return (
    <Suspense fallback={<CSSBackgroundSimple />}>
      <ThreeDComponent />
    </Suspense>
  )
}
