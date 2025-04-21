import { Check } from "lucide-react"

export default function ProblemSolution() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F9F7FF]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6E56A7]">
              Cómo Te Ayudamos
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Entendemos los desafíos que enfrentan los padres cuando sus hijos presentan dificultades en el aprendizaje
              o el desarrollo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
          <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#6E56A7]">Los Desafíos</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#F1CD44]" />
                  <span>Dificultades en el rendimiento escolar</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#F1CD44]" />
                  <span>Problemas de lenguaje o comunicación</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#F1CD44]" />
                  <span>Preocupaciones sobre el desarrollo</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#F1CD44]" />
                  <span>Falta de técnicas de estudio efectivas</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#6E56A7]">Nuestra Solución</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#C3DB4E]" />
                  <span>Evaluación personalizada de las necesidades</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#C3DB4E]" />
                  <span>Plan de intervención individualizado</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#C3DB4E]" />
                  <span>Profesionales especializados y comprometidos</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-[#C3DB4E]" />
                  <span>Ambiente acogedor y positivo para el aprendizaje</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
