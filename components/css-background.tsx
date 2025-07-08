"use client"

export function CSSBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-accent/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/2 w-20 h-20 bg-primary/15 rounded-full blur-lg animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-secondary/15 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>
    </div>
  )
}

export function CSSBackgroundSimple() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5">
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-secondary/10 rounded-full blur-lg animate-pulse delay-700"></div>
        <div className="absolute top-2/3 left-2/3 w-14 h-14 bg-accent/10 rounded-full blur-lg animate-pulse delay-400"></div>
      </div>
    </div>
  )
}
