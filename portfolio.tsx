import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { ProjectsSection } from "./components/projects-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
