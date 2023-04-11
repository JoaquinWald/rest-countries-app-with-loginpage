import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { CountriesPreRoutes } from "../countries/routes/CountriesPreRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>

      {/* <Header /> */}

      <Routes>

        <Route path="login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path="/*" element={
          <PrivateRoute>
            <CountriesPreRoutes />
          </PrivateRoute>
        } />

        {/* <Route path="country/:cca3" element={<CountryPage />} />

        <Route path="/*" element={<CountriesRoutes />} /> */}

      </Routes>

    </>
  )
}
