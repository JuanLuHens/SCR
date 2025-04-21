import { BookOpen, MessageSquare, Brain, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-[#6E56A7]" />,
      title: "Refuerzo Educativo",
      description:
        "Apoyo académico para todas las etapas escolares, ayudando a mejorar el rendimiento y la comprensión de las materias. Adaptamos nuestra metodología a las necesidades específicas de cada estudiante.",
      cta: "Más sobre Refuerzo Educativo",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-[#6E56A7]" />,
      title: "Apoyo al Aprendizaje",
      description:
        "Abordamos dificultades específicas de aprendizaje y enseñamos técnicas de estudio efectivas. Ayudamos a desarrollar habilidades para un aprendizaje autónomo y exitoso.",
      cta: "Más sobre Apoyo al Aprendizaje",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#6E56A7]" />,
      title: "Audición y Lenguaje",
      description:
        "Servicios de logopedia para mejorar la comunicación, pronunciación y comprensión del lenguaje. Trabajamos con niños de todas las edades para superar dificultades del habla y lenguaje.",
      cta: "Más sobre Logopedia",
    },
    {
      icon: <Brain className="h-10 w-10 text-[#6E56A7]" />,
      title: "Atención Temprana",
      description:
        "Estimulación y desarrollo en las primeras etapas de la vida. Potenciamos habilidades cognitivas, motoras y sociales fundamentales para un desarrollo óptimo desde la primera infancia.",
      cta: "Más sobre Atención Temprana",
    },
  ]

  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6E56A7]">
              Nuestros Servicios
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ofrecemos un enfoque integral para el desarrollo y aprendizaje de tu hijo
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="space-y-2">
                <div className="flex justify-center md:justify-start mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-[#6E56A7]">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
              <Button asChild variant="outline" className="border-[#F1CD44] text-[#6E56A7] hover:bg-[#F1CD44]/10 mt-4">
                <Link href="#contacto">{service.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
