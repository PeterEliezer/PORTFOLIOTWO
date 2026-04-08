import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { CursorSpotlight } from "@/components/portfolio/cursor-spotlight"
import { AIAssistant } from "@/components/portfolio/ai-assistant"
import { FloatingParticles } from "@/components/portfolio/floating-particles"
import { AnimatedDivider } from "@/components/portfolio/animated-divider"

export default function Home() {
  return (
    <main className="relative">
      <FloatingParticles />
      <CursorSpotlight />
      <Header />
      <Hero />
      <AnimatedDivider />
      <About />
      <AnimatedDivider />
      <Experience />
      <AnimatedDivider />
      <Projects />
      <AnimatedDivider />
      <Contact />
      <Footer />
      <AIAssistant />
    </main>
  )
}
