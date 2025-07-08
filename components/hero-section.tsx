import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { Hero3DClient } from "./hero-3d-client"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      <Hero3DClient />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/images/profile.jpeg"
                alt="Sujal Choudhary - Profile Picture"
                fill
                className="rounded-full object-cover border-4 border-primary/20 shadow-2xl dark:shadow-primary/10"
                priority
                sizes="(max-width: 768px) 160px, 160px"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent dark:from-primary/30"></div>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm <span className="text-primary">Sujal Choudhary</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl">
                Full-Stack Developer & UI/UX Designer passionate about creating beautiful, functional web experiences
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-4 h-4" />
              View Projects
            </Button>
          </div>

          <div className="flex gap-6">
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
