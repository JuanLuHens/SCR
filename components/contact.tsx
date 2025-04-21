"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-[#F9F7FF]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6E56A7]">
              Contacta con Nosotros
            </h2>
            <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes dudas? ¿Quieres más información? Estamos aquí para ayudarte
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
          <div className="flex flex-col space-y-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#6E56A7] mb-4">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mr-4 h-5 w-5 text-[#6E56A7]" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-gray-700">+34 XXX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 h-5 w-5 text-[#6E56A7]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-700">contacto@scr-educaterapia.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-5 w-5 text-[#6E56A7]" />
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-gray-700">Plaza De la Marina Española, s/n, 14001</p>
                    <p className="text-gray-700">Club Figueroa</p>
                    <p className="text-gray-700">Cordoba</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 h-5 w-5 text-[#6E56A7]" />
                  <div>
                    <p className="font-medium">Horario</p>
                    <p className="text-gray-700">Lunes a Viernes: 9:00 - 20:00</p>
                    <p className="text-gray-700">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-[300px]">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Mapa de ubicación</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-[#6E56A7] mb-4">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-[#6E56A7] focus:ring-[#6E56A7]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-300 focus:border-[#6E56A7] focus:ring-[#6E56A7]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Teléfono (opcional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-[#6E56A7] focus:ring-[#6E56A7]"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] border-gray-300 focus:border-[#6E56A7] focus:ring-[#6E56A7]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#6E56A7] hover:bg-[#5d4890] text-white"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? "Enviando..." : "Enviar Mensaje"}
              </Button>
              {formStatus === "success" && (
                <p className="text-green-600 text-center mt-2">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </p>
              )}
              {formStatus === "error" && (
                <p className="text-red-600 text-center mt-2">Ha ocurrido un error. Por favor, inténtalo de nuevo.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
