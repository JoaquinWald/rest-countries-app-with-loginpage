import { Link } from "react-router-dom"

export const CountryBorders = ({ borders = [] }) => {


  const bordersCountries = Array.from(borders)?.map((e, index) => (
    <Link
      className="mx-1 dark:text-slate-100"
      key={index}
      to={`/country/${e}`}>
      <button className="shadow-md px-4 my-2 text-slate-900 hover:shadow-xl hover:bg-red-300 dark:text-slate-100 dark:bg-slate-900 dark:hover:bg-red-900">{e}</button>
    </Link>
  ))

  return (
    <>
      <h5 className="mb-0 pr-4">Border Countries:</h5>
      <br />
      <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid-cols-6">
        {bordersCountries}
      </div>
    </>
  )
}