import { Routes, Route } from 'react-router-dom'
import { Header } from '../../ui/components/Header'
import { CountriesRoutes } from './CountriesRoutes'
import { CountryPage } from '../pages/CountryPage'

export const CountriesPreRoutes = () => {
  return (
    <>

      <Header />

      <Routes>

        <Route path="country/:cca3" element={<CountryPage />} />

        <Route path="/*" element={<CountriesRoutes />} />

      </Routes>

    </>
  )
}
