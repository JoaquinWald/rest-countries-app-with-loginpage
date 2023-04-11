import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"

export const RestCountriesApp = () => {
  return (
    <AuthProvider>

      <AppRouter />

    </AuthProvider>
  )
}
