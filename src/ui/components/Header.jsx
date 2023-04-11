import { useNavigate } from "react-router-dom";
import { ThemeSwitcher } from "../../countries/helpers/ThemeSwitcher";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthCountext";

export const Header = () => {

  const { user, logout } = useContext(AuthContext);



  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/all")
  }

  const onLogout = () => {
    logout();
    navigate('/login', {
      replace: true
    });
  };


  return (

    <header className="bg-white-500 p-3 shadow-sm dark:bg-slate-700">

      <nav className="flex justify-between items-center">
        <div>
          <h1
            className="text-lg cursor-pointer mb-0 lg:text-2xl animate__animated animate__tada"
            onClick={handleNavigate}
          >
            <strong className="dark:text-slate-100">Where in the world?</strong>
          </h1>
        </div>

        <div className="flex">

          <div className="inline-grid sm:flex mr-6 sm:mr-8">
            <span className="text-blue-700 sm:mr-8">
              {user?.name}
            </span>

            <button
              onClick={onLogout}
              className="font-medium dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400"
            >
              Logout
            </button>
          </div>

          <ThemeSwitcher />

        </div>

      </nav>

    </header>

  )
}
