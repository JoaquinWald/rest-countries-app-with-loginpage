import { useParams } from 'react-router-dom'
import CountryByName from '../components/CountryByName';


export const CountryPage = () => {

  const { cca3 } = useParams();

  return (

    <div className=''>
      <CountryByName cca3={cca3} />
    </div>

  )
}
