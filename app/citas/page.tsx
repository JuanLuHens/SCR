import AppointmentScheduler from "@/components/appointment-scheduler"

export default function AppointmentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6E56A7]">
                  Reserva tu Cita
                </h1>
                <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Selecciona la fecha y hora que mejor te convenga para tu consulta en SCR Educaterapia
                </p>
              </div>
            </div>
            <AppointmentScheduler />
          </div>
        </section>
      </main>
    </div>
  )
}
