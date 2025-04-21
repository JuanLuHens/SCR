import { NextResponse } from "next/server"
import { getServerSupabaseClient } from "@/lib/supabase"
import { addDays, format, getDay, isBefore, startOfToday } from "date-fns"

// Obtener fechas disponibles para los próximos 60 días
export async function GET() {
  try {
    const supabase = getServerSupabaseClient()
    const today = startOfToday()
    const maxDate = addDays(today, 60)

    // Obtener fechas no disponibles
    const { data: unavailableDates, error: unavailableError } = await supabase
      .from("unavailable_dates")
      .select("date")
      .gte("date", format(today, "yyyy-MM-dd"))
      .lte("date", format(maxDate, "yyyy-MM-dd"))

    if (unavailableError) {
      return NextResponse.json({ error: unavailableError.message }, { status: 500 })
    }

    // Obtener días de la semana con horarios disponibles
    const { data: availableSlots, error: slotsError } = await supabase
      .from("available_slots")
      .select("day_of_week", { distinct: true })
      .eq("is_active", true)
      .order("day_of_week")
      

    if (slotsError) {
      return NextResponse.json({ error: slotsError.message }, { status: 500 })
    }

    // Crear un conjunto de días de la semana disponibles (0 = domingo, 1 = lunes, etc.)
    const availableDaysOfWeek = new Set(availableSlots.map((slot) => slot.day_of_week))

    // Crear un conjunto de fechas no disponibles
    const unavailableDateSet = new Set(unavailableDates?.map((d) => d.date) || [])

    // Generar array de fechas disponibles
    const availableDates = []
    let currentDate = today

    while (isBefore(currentDate, maxDate) || currentDate.getTime() === maxDate.getTime()) {
      const dateStr = format(currentDate, "yyyy-MM-dd")
      const dayOfWeek = getDay(currentDate)

      // Una fecha está disponible si:
      // 1. No está en el conjunto de fechas no disponibles
      // 2. Es un día de la semana con horarios disponibles
      if (!unavailableDateSet.has(dateStr) && availableDaysOfWeek.has(dayOfWeek)) {
        availableDates.push(dateStr)
      }

      currentDate = addDays(currentDate, 1)
    }

    return NextResponse.json({ availableDates })
  } catch (error) {
    console.error("Error getting available dates:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
