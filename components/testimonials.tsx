import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Estamos encantados con el progreso de nuestro hijo gracias a SCR Educaterapia. Shere es fantástica y ha sabido conectar perfectamente con él, haciendo que disfrute aprendiendo.",
      author: "Familia Rodríguez",
      service: "Refuerzo Educativo",
    },
    {
      quote:
        "Nuestra hija ha mejorado notablemente su pronunciación y fluidez verbal en pocos meses. Sherezades es muy cercana y trabaja con mucha dedicación. Totalmente recomendable.",
      author: "Familia Martínez",
      service: "Logopedia",
    },
    {
      quote:
        "La atención personalizada y el ambiente acogedor han sido clave para que mi hijo supere sus dificultades de aprendizaje. Ahora afronta los estudios con más confianza y mejores resultados.",
      author: "Familia García",
      service: "Apoyo al Aprendizaje",
    },
  ]

  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6E56A7]">
              Lo Que Dicen Nuestras Familias
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre las experiencias de quienes ya confían en nosotros
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-[#C3DB4E]/30 bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <QuoteIcon className="h-8 w-8 text-[#F1CD44]" />
                  <p className="text-gray-700 italic">{testimonial.quote}</p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                    <div className="rounded-full bg-[#6E56A7]/10 p-1">
                      <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Avatar"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
