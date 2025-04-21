export interface Service {
  id: string
  name: string
  description: string | null
  duration: number
  color: string
}

export interface AvailableSlot {
  id: string
  day_of_week: number
  start_time: string
  end_time: string
  is_active: boolean
}

export interface UnavailableDate {
  id: string
  date: string
  reason: string | null
}

export interface Appointment {
  id: string
  service_id: string
  date: string
  start_time: string
  end_time: string
  client_name: string
  client_email: string
  client_phone: string | null
  notes: string | null
  status: "confirmed" | "cancelled" | "completed"
  created_at: string
  updated_at: string
}

export interface AppointmentFormData {
  service_id: string
  date: Date
  start_time: string
  client_name: string
  client_email: string
  client_phone?: string
  notes?: string
}

export interface AvailableTimeSlot {
  time: string
  available: boolean
}
