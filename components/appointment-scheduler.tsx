"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { format, isBefore, startOfToday } from "date-fns"
import { es } from "date-fns/locale"
import { CheckCircle, CalendarIcon, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Service, AvailableTimeSlot, AppointmentFormData } from "@/types/appointment"

export default function AppointmentScheduler() {
  const { toast } = useToast()
  const [date, setDate] = useState<Date | undefined>()
  const [availableTimes, setAvailableTimes] = useState<AvailableTimeSlot[]>([])
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [step, setStep] = useState(1)
  const [services, setServices] = useState<Service[]>([])
  const [formData, setFormData] = useState<Partial<AppointmentFormData>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [availableDates, setAvailableDates] = useState<string[]>([])
  const [isLoadingDates, setIsLoadingDates] = useState(true)

  // Cargar servicios al iniciar
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services")
        const data = await response.json()
        if (data.services) {
          setServices(data.services)
        }
      } catch (error) {
        console.error("Error fetching services:", error)
        toast({
          title: "Error",
          description: "No se pudieron cargar los servicios disponibles",
          variant: "destructive",
        })
      }
    }

    const fetchAvailableDates = async () => {
      setIsLoadingDates(true)
      try {
        const response = await fetch("/api/available-dates")
        const data = await response.json()
        if (data.availableDates) {
          setAvailableDates(data.availableDates)
        }
      } catch (error) {
        console.error("Error fetching available dates:", error)
        toast({
          title: "Error",
          description: "No se pudieron cargar las fechas disponibles",
          variant: "destructive",
        })
      } finally {
        setIsLoadingDates(false)
      }
    }

    fetchServices()
    fetchAvailableDates()
  }, [toast])

  // Cargar horas disponibles cuando cambia la fecha
  useEffect(() => {
    if (!date) return

    const fetchAvailableTimes = async () => {
      setIsLoading(true)
      try {
        const formattedDate = format(date, "yyyy-MM-dd")
        const response = await fetch(`/api/available-times?date=${formattedDate}`)
        const data = await response.json()

        if (data.availableTimes) {
          setAvailableTimes(data.availableTimes)
        }
      } catch (error) {
        console.error("Error fetching available times:", error)
        toast({
          title: "Error",
          description: "No se pudieron cargar los horarios disponibles",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvailableTimes()
    setSelectedTime("")
  }, [date, toast])

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate)
    setStep(1)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setFormData((prev) => ({ ...prev, date, start_time: time }))
    setStep(2)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service_id: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.service_id || !date || !selectedTime || !formData.client_name || !formData.client_email) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          date: format(date, "yyyy-MM-dd"),
          start_time: selectedTime,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al reservar la cita")
      }

      setIsSuccess(true)
      toast({
        title: "¡Cita reservada!",
        description: "Tu cita ha sido programada correctamente",
      })
    } catch (error) {
      console.error("Error booking appointment:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "No se pudo reservar la cita",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setDate(undefined)
    setSelectedTime("")
    setFormData({})
    setStep(1)
    setIsSuccess(false)
  }

  // Función para deshabilitar fechas no disponibles
  const isDateDisabled = (date: Date) => {
    const today = startOfToday()
    const dateStr = format(date, "yyyy-MM-dd")

    return isBefore(date, today) || !availableDates.includes(dateStr)
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader className="bg-[#6E56A7]/10 text-center">
          <CardTitle className="text-2xl text-[#6E56A7]">¡Cita Reservada!</CardTitle>
          <CardDescription>Tu cita ha sido programada correctamente</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-4 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Detalles de tu cita:</h3>
            <p>
              <strong>Fecha:</strong> {date ? format(date, "EEEE d 'de' MMMM 'de' yyyy", { locale: es }) : ""}
            </p>
            <p>
              <strong>Hora:</strong> {selectedTime ? selectedTime.substring(0, 5) : ""}
            </p>
            <p>
              <strong>Servicio:</strong> {services.find((s) => s.id === formData.service_id)?.name || ""}
            </p>
            <p className="text-sm text-gray-500 mt-6">
              Recibirás un correo electrónico de confirmación con los detalles de tu cita. Si necesitas hacer algún
              cambio, por favor contáctanos directamente.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={resetForm} className="bg-[#6E56A7] hover:bg-[#5d4890]">
            Reservar otra cita
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="bg-[#6E56A7]/10">
        <CardTitle className="text-2xl text-[#6E56A7] flex items-center gap-2">
          <CalendarIcon className="h-6 w-6" />
          Reserva tu Cita
        </CardTitle>
        <CardDescription>Selecciona una fecha y hora disponible para tu cita en SCR Educaterapia</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-4">1. Selecciona una fecha</h3>
            {isLoadingDates ? (
              <div className="flex justify-center items-center h-[300px]">
                <Loader2 className="h-8 w-8 animate-spin text-[#6E56A7]" />
              </div>
            ) : (
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={isDateDisabled}
                locale={es}
                className="rounded-md border"
              />
            )}
          </div>

          <div>
            {date ? (
              <>
                <h3 className="text-lg font-medium mb-4">2. Selecciona una hora</h3>
                {isLoading ? (
                  <div className="flex justify-center items-center h-[200px]">
                    <Loader2 className="h-8 w-8 animate-spin text-[#6E56A7]" />
                  </div>
                ) : availableTimes.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2">
                    {availableTimes.map((slot) => (
                      <Button
                        key={slot.time}
                        variant={selectedTime === slot.time ? "default" : "outline"}
                        className={selectedTime === slot.time ? "bg-[#6E56A7] hover:bg-[#5d4890]" : ""}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                      >
                        {slot.time.substring(0, 5)}
                        {!slot.available && " (Ocupado)"}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <p className="text-yellow-600">
                    No hay horas disponibles para esta fecha. Por favor, selecciona otra fecha.
                  </p>
                )}
              </>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Por favor, selecciona una fecha para ver las horas disponibles</p>
              </div>
            )}
          </div>
        </div>

        {step === 2 && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <h3 className="text-lg font-medium">3. Completa tus datos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="client_name">Nombre completo</Label>
                <Input
                  id="client_name"
                  name="client_name"
                  required
                  value={formData.client_name || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client_email">Email</Label>
                <Input
                  id="client_email"
                  name="client_email"
                  type="email"
                  required
                  value={formData.client_email || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="client_phone">Teléfono</Label>
                <Input
                  id="client_phone"
                  name="client_phone"
                  type="tel"
                  required
                  value={formData.client_phone || ""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service_id">Servicio</Label>
                <Select value={formData.service_id} onValueChange={handleServiceChange}>
                  <SelectTrigger id="service_id">
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notas adicionales (opcional)</Label>
              <Textarea
                id="notes"
                name="notes"
                placeholder="Cuéntanos brevemente el motivo de tu consulta o cualquier información relevante"
                value={formData.notes || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="pt-4">
              <Button type="submit" className="w-full bg-[#6E56A7] hover:bg-[#5d4890]" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Reservando...
                  </>
                ) : (
                  "Confirmar Reserva"
                )}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
