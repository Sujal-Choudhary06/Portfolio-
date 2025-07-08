import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap } from "lucide-react"
import { Section3DClient } from "./section-3d-client"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <Section3DClient />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground text-lg">
              I'm a passionate developer with 2+ years of experience creating digital solutions that make a difference.
              I love turning complex problems into simple, beautiful designs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 w-full max-w-4xl">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Building robust applications with modern technologies and best practices
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Design</h3>
                <p className="text-muted-foreground">
                  Creating intuitive user interfaces with attention to detail and user experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, accessibility, and scalability
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 text-center max-w-2xl">
            <h3 className="text-2xl font-semibold">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "AWS",
                "Docker",
                "Tailwind CSS",
                "Figma",
                "Git",
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
