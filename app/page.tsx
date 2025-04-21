import Hero from "@/components/hero"
import ProblemSolution from "@/components/problem-solution"
import Services from "@/components/services"
import Methodology from "@/components/methodology"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Methodology />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
