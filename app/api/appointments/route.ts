import { NextResponse } from "next/server"
import { getServerSupabaseClient } from "@/lib/supabase"
import { format, addMinutes, parse } from "date-fns"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { service_id, date, start_time, client_name, client_email, client_phone, notes } = body

    // Validar datos requeridos
    if (!service_id || !date || !start_time || !client_name || !client_email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = getServerSupabaseClient()

    // Obtener la duración del servicio
    const { data: service, error: serviceError } = await supabase
      .from("services")
      .select("duration")
      .eq("id", service_id)
      .single()

    if (serviceError || !service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 })
    }

    // Calcular la hora de finalización basada en la duración del servicio
    const startTimeObj = parse(start_time, "HH:mm:ss", new Date())
    const endTimeObj = addMinutes(startTimeObj, service.duration)
    const end_time = format(endTimeObj, "HH:mm:ss")

    // Verificar si la hora ya está reservada
    const formattedDate = format(new Date(date), "yyyy-MM-dd")
    const { data: existingAppointment, error: checkError } = await supabase
      .from("appointments")
      .select("id")
      .eq("date", formattedDate)
      .eq("start_time", start_time)
      .eq("status", "confirmed")
      .maybeSingle()

    if (checkError) {
      return NextResponse.json({ error: "Error checking appointment availability" }, { status: 500 })
    }

    if (existingAppointment) {
      return NextResponse.json({ error: "This time slot is already booked" }, { status: 409 })
    }

    // Crear la cita
    const { data: appointment, error: insertError } = await supabase
      .from("appointments")
      .insert({
        service_id,
        date: formattedDate,
        start_time,
        end_time,
        client_name,
        client_email,
        client_phone: client_phone || null,
        notes: notes || null,
        status: "confirmed",
      })
      .select()
      .single()

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 })
    }

    // Aquí se podría añadir el envío de email de confirmación

    return NextResponse.json({
      success: true,
      appointment,
      message: "Appointment booked successfully",
    })
  } catch (error) {
    console.error("Error booking appointment:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
