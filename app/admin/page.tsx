import { redirect } from "next/navigation"

export default async function AdminPage() {
  // Esta página es solo un placeholder para un futuro panel de administración
  // En una implementación real, aquí verificaríamos la autenticación del administrador

  // Redirigir a la página principal por ahora
  redirect("/")
}
