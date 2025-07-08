import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="font-bold text-xl">
              <span className="text-primary">Sujal</span> Choudhary
            </div>
            <p className="text-muted-foreground text-sm">
              Full-Stack Developer passionate about creating amazing web experiences.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-4 h-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Services</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Web Development</p>
              <p>UI/UX Design</p>
              <p>Mobile Apps</p>
              <p>Consulting</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>sujal@gmail.com</p>
              <p>+91 99935XXXXX</p>
              <p>Indore , India</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Sujal Choudhary . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
