import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://www.scr-educaterapia.com/img/logo.png"
              alt="SCR Educaterapia Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-[#6E56A7]">SCR Educaterapia</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#servicios" className="text-sm font-medium hover:text-[#6E56A7] transition-colors">
            Servicios
          </Link>
          <Link href="#metodologia" className="text-sm font-medium hover:text-[#6E56A7] transition-colors">
            Metodología
          </Link>
          <Link href="#testimonios" className="text-sm font-medium hover:text-[#6E56A7] transition-colors">
            Testimonios
          </Link>
          <Link href="/citas" className="text-sm font-medium hover:text-[#6E56A7] transition-colors">
            Reservar Cita
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-[#6E56A7] transition-colors">
            Contacto
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-[#6E56A7] transition-colors">
            <Button className="bg-[#6E56A7] hover:bg-[#5d4890] text-white">Solicitar Información</Button>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="#servicios" className="text-base font-medium hover:text-[#6E56A7] transition-colors">
                Servicios
              </Link>
              <Link href="#metodologia" className="text-base font-medium hover:text-[#6E56A7] transition-colors">
                Metodología
              </Link>
              <Link href="#testimonios" className="text-base font-medium hover:text-[#6E56A7] transition-colors">
                Testimonios
              </Link>
              <Link href="/citas" className="text-base font-medium hover:text-[#6E56A7] transition-colors">
                Reservar Cita
              </Link>
              <Link href="#contacto" className="text-base font-medium hover:text-[#6E56A7] transition-colors">
                Contacto
              </Link>
              <Button className="bg-[#6E56A7] hover:bg-[#5d4890] text-white w-full mt-2">Solicitar Información</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
