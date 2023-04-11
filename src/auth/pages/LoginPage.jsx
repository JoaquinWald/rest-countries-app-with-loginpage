import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthCountext';


export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Username')

    navigate(lastPath, {
      replace: true
    })

  };

  return (
    <div className="grid h-screen bg-gray-200">

      <div className='self-center justify-self-center'>
        <button
          onClick={onLogin}
          className="text-4xl font-bold cursor-pointer bg-gray-500 p-16 rounded-md hover:animate-pulse"
        >
          Login
        </button>
      </div>

    </div>
  )
};
