import { CountriesCard } from "./CountriesCard"

export const CountriesList = ({ data }) => {

  return (
    <div className="grid justify-center sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3 xl:grid-cols-4 dark:bg-slate-800">
      {
        data.map(data =>
          <CountriesCard
            key={data.name.common}
            {...data}
          />
        )
      }
    </div>
  )
}

// w-10/12