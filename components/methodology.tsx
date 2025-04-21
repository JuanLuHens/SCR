import { Users, Award, Heart, School, Clock } from "lucide-react"

export default function Methodology() {
  const reasons = [
    {
      icon: <Users className="h-8 w-8 text-[#6E56A7]" />,
      title: "Equipo Cualificado",
      description: "Profesionales con amplia formación y experiencia en educación y terapia infantil.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#6E56A7]" />,
      title: "Enfoque Individualizado",
      description: "Cada plan se adapta a las necesidades específicas y ritmo de aprendizaje de cada niño.",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#6E56A7]" />,
      title: "Ambiente Positivo",
      description: "Creamos un espacio acogedor donde los niños se sienten seguros y motivados para aprender.",
    },
    {
      icon: <School className="h-8 w-8 text-[#6E56A7]" />,
      title: "Colaboración Integral",
      description: "Trabajamos en estrecha colaboración con familias y centros educativos para un apoyo completo.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#6E56A7]" />,
      title: "Resultados Comprobados",
      description: "Nuestra metodología ha demostrado mejoras significativas en el desarrollo y aprendizaje.",
    },
  ]

  return (
    <section id="metodologia" className="w-full py-12 md:py-24 lg:py-32 bg-[#F9F7FF]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6E56A7]">
              Por Qué Elegirnos
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              En SCR Educaterapia nos distinguimos por nuestro compromiso con la excelencia y el bienestar de cada niño
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-sm text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1CD44]/20">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-[#6E56A7]">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
