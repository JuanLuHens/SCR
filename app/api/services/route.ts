import { NextResponse } from "next/server"
import { getServerSupabaseClient } from "@/lib/supabase"

export async function GET() {
  try {
    const supabase = getServerSupabaseClient()

    const { data: services, error } = await supabase.from("services").select("*").order("name")

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ services })
  } catch (error) {
    console.error("Error getting services:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
