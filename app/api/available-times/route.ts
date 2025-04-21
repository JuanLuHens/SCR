import { NextResponse } from "next/server"
import { getServerSupabaseClient } from "@/lib/supabase"
import { format, getDay, parse } from "date-fns"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const dateParam = searchParams.get("date")

    if (!dateParam) {
      return NextResponse.json({ error: "Date parameter is required" }, { status: 400 })
    }

    const date = parse(dateParam, "yyyy-MM-dd", new Date())
    const dayOfWeek = getDay(date)
    const formattedDate = format(date, "yyyy-MM-dd")

    const supabase = getServerSupabaseClient()

    // Obtener franjas horarias disponibles para ese día de la semana
    const { data: availableSlots, error: slotsError } = await supabase
      .from("available_slots")
      .select("start_time, end_time")
      .eq("day_of_week", dayOfWeek)
      .eq("is_active", true)
      .order("start_time")

    if (slotsError) {
      return NextResponse.json({ error: slotsError.message }, { status: 500 })
    }

    // Obtener citas ya reservadas para esa fecha
    const { data: bookedAppointments, error: appointmentsError } = await supabase
      .from("appointments")
      .select("start_time, end_time")
      .eq("date", formattedDate)
      .eq("status", "confirmed")

    if (appointmentsError) {
      return NextResponse.json({ error: appointmentsError.message }, { status: 500 })
    }

    // Crear un conjunto de horas ya reservadas
    const bookedTimes = new Set(bookedAppointments?.map((app) => app.start_time) || [])

    // Generar array de horas disponibles
    const availableTimes = availableSlots.map((slot) => ({
      time: slot.start_time,
      available: !bookedTimes.has(slot.start_time),
    }))

    return NextResponse.json({ availableTimes })
  } catch (error) {
    console.error("Error getting available times:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
