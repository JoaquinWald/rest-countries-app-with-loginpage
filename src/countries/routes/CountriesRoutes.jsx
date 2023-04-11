import { Navigate, Route, Routes } from "react-router-dom";
import { FilterCountries, SearchCountries } from "../components";

import { AfricaPage, AllPage, AmericaPage, AsiaPage, EuropePage, OceaniaPage } from "../pages";


export const CountriesRoutes = () => {
  return (
    <>

      <div className="bg-slate-100 dark:bg-slate-800 animate__animated animate__fadeIn">

        <section className="grid grid-cols-1 lg:grid-cols-1 lg:items-center xl:grid-cols-1 ">
          <FilterCountries />
          <SearchCountries />
        </section>

        <hr className="dark:text-white" />

        <Routes>

          <Route path="all" element={<AllPage />} />
          <Route path="africa" element={<AfricaPage />} />
          <Route path="america" element={<AmericaPage />} />
          <Route path="asia" element={<AsiaPage />} />
          <Route path="europe" element={<EuropePage />} />
          <Route path="oceania" element={<OceaniaPage />} />

          <Route path="/" element={<Navigate to={"/all"} />} />
        </Routes>

      </div>

    </>
  )
}
