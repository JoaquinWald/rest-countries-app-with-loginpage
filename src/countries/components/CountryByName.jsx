import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { CountryBorders } from "./CountryBorders";


const CountryByName = ({ cca3 }) => {
  const { data } = useFetch('https://restcountries.com/v3.1/all');
  const country = data?.find(data => data.cca3 === cca3);


  const navigate = useNavigate();
  const onNavigateBack = () => {
    navigate(-1)
  }


  return (
    <div className="grid grid-cols-1 p-4 bg-zinc-100 dark:bg-slate-800">
      {country ? (
        <div className="lg:grid lg:grid-cols-1 place-content-start md:h-screen">

          <button
            className="flex items-center px-4 py-1 mb-5 rounded-md shadow-md bg-slate-100 lg:w-28 lg:h-10 dark:bg-slate-700 dark:text-slate-200 border-solid border-2 border-gray-300 hover:shadow-lg dark:border-none"
            onClick={onNavigateBack}
          >
            <figure className="m-0 pr-1">
              <AiOutlineArrowLeft />
            </figure>
            <p className="m-0 pl-1">
              Back
            </p>
          </button>

          <section className="md:flex md:justify-around lg:flex dark:text-slate-100">

            <figure className="mb-6 animate__animated animate__fadeInLeft animate__fast">
              <img
                className="h-48 w-auto"
                src={country.flags.png}
                alt=""
              />
            </figure>

            <div className="animate__animated animate__fadeInUp">

              <div className="lg:flex">

                <article className="md:w-56 lg:ml-16 ">

                  <h2>{country.name.common}</h2>
                  <p className="mb-2">
                    <b>Native Name:</b> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}
                  </p>
                  <p className="mb-2">
                    <b>Population:</b> {country.population.toLocaleString()}
                  </p>
                  <p className="mb-2">
                    <b> Region:</b> {country.region}
                  </p>
                  <p className="mb-2">
                    <b> Sub Region:</b> {country.subregion}
                  </p>
                  <p className="mb-2">
                    <b> Capital:</b> {country.capital}
                  </p>

                </article>

                <br />

                <article className="md:w-56 lg:ml-16 lg:pt-[46px] xl:ml-32 xl:pt-[46px]">

                  <p className="mb-2">
                    <b> Top Level Domain:</b> {country.tld}
                  </p>
                  <p className="mb-2">
                    <b> Currencies:</b> {country.currencies[Object.keys(country.currencies)[0]].name}
                  </p>
                  <p className="mb-2">
                    <b> Languages:</b> {Object.values(country.languages).join(", ")}
                  </p>
                </article>

              </div>

              <br />

              {/* <h5>Border Countries:</h5> */}
              <div className="md:lg:flex items-center lg:ml-16">

                <CountryBorders borders={country.borders} />

              </div>
            </div>

          </section>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default CountryByName;
