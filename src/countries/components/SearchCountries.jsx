import { RxMagnifyingGlass } from "react-icons/rx";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';
import { useFetch } from "../../hooks/useFetch";
import { CountriesCard } from "./CountriesCard";


export const SearchCountries = () => {

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const { searchText, onInputChange } = useForm({ searchText: q });


  const { data } = useFetch(searchText ? `https://restcountries.com/v3.1/name/${searchText}` : null);

  const filteredCountries = data || [];

  const onSearchSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="grid grid-cols-1 pt-4">
      <form
        onSubmit={onSearchSubmit}
        className="flex justify-center place-self-center p-2 m-4 rounded-md w-11/12 shadow bg-slate-50 dark:text-white dark:bg-slate-700">

        <figure className="relative top-2 text-gray-400">
          <RxMagnifyingGlass size={20} />
        </figure>

        <input
          className="w-10/12 ml-4 outline-none bg-slate-50 dark:bg-slate-700"
          type="text"
          placeholder="Search for a country..."
          name="searchText"
          value={searchText}
          onChange={onInputChange}
        />

      </form>
      <div className="grid justify-center sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3 xl:grid-cols-4">
        {
          searchText && Array.from(filteredCountries)?.map(country => (
            <CountriesCard
              key={country.name.common}
              {...country}
            />
          ))
        }
      </div>
      {/* <hr /> */}

    </div>
  )
}
