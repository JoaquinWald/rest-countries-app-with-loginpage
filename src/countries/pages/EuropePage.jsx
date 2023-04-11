import { useFetch } from "../../hooks/useFetch";
import { CountriesList } from "../components/CountriesList";

export const EuropePage = () => {

  const { data, isLoading } = useFetch('https://restcountries.com/v3.1/region/Europe');


  return (
    <div>

      {
        (isLoading)
          ? (
            <div>
              Loading...
            </div>
          )
          : (
            <div className="">
              <CountriesList data={data} />
            </div>
          )
      }
    </div>
  )
}
