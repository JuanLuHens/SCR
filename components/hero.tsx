import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#6E56A7]">
                Impulsando el Potencial de tu Hijo
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Apoyo educativo y terapéutico personalizado en SCR Educaterapia. Ofrecemos refuerzo educativo, logopedia
                y atención temprana con profesionales expertos en un entorno de confianza.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="bg-[#6E56A7] hover:bg-[#5d4890] text-white">
                <Link href="/citas">Reserva tu Cita</Link>
              </Button>
              <Button asChild variant="outline" className="border-[#F1CD44] text-[#6E56A7] hover:bg-[#F1CD44]/10">
                <Link href="#servicios">Conoce Nuestros Servicios</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-full">
              <Image
                src="https://www.scr-educaterapia.com/img/shere.png"
                alt=""
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
