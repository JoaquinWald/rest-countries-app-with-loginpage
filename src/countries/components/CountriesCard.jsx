import { Link } from "react-router-dom"


export const CountriesCard = ({ cca3, flags, name, capital, population, region }) => {
  return (

    <div
      key={name.common}
      className="w-72 mb-10 bg-stone-50 shadow-md rounded-xl hover:shadow-xl dark:bg-gray-700">

      <figure className="flex justify-center rounded-xl m-0">
        <img className="rounded-t-lg h-44 w-full" src={flags.png} alt={flags.alt} />
      </figure>

      <div className="px-4 pb-4 pt-4 rounded-b-md dark:bg-gray-700 dark:text-slate-100">

        <h2>
          {name.common}
        </h2>
        <hr />
        <div>
          <strong>Capital:</strong> {capital}
        </div>
        <div>
          <strong>Population:</strong> {population.toLocaleString()}
        </div>
        <div>
          <strong>Region:</strong> {region}
        </div>

        <div className="flex justify-center mt-2">
          <Link to={`/country/${cca3}`} className="p-2 px-5 w-full text-center mt-3 rounded-md no-underline hover:shadow-sm hover:shadow-slate-400 hover:text-slate-500 text-slate-800 bg-zinc-200 dark:bg-slate-800 dark:text-white dark:hover:shadow-sm dark:hover:shadow-slate-500">
            More...
          </Link>
        </div>

      </div>

    </div>
  )
}
