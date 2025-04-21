import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="https://www.scr-educaterapia.com/img/logo.png"
                alt="SCR Educaterapia Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-[#6E56A7]">SCR Educaterapia</span>
            </div>
            <p className="text-gray-700">
              Gabinete de aprendizaje infantil especializado en refuerzo educativo, logopedia y atención temprana.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-[#6E56A7]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#6E56A7]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#6E56A7]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-[#6E56A7]">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#servicios" className="text-gray-700 hover:text-[#6E56A7] transition-colors">
                Servicios
              </Link>
              <Link href="#metodologia" className="text-gray-700 hover:text-[#6E56A7] transition-colors">
                Metodología
              </Link>
              <Link href="#testimonios" className="text-gray-700 hover:text-[#6E56A7] transition-colors">
                Testimonios
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-[#6E56A7] transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-bold text-[#6E56A7]">Horario</h3>
            <div className="text-gray-700">
              <p>Lunes a Viernes: 9:00 - 21:00</p>
              <p>Sábados: 9:00 - 14:00</p>
              <p>Domingos: Cerrado</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} SCR Educaterapia. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
