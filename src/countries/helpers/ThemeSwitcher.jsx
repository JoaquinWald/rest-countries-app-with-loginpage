import { useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export const ThemeSwitcher = () => {

  const [theme, setTheme] = useState('dark');

  //SI el user tiene el system en dark, ponemos 'theme' en dark.
  useEffect(() => {
    if (window.matchMedia('prefer-color-scheme: dark').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, []);

  //Ponemos la class que corresponda al documento completo.
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);

  //Actualiza el valor de 'theme'.
  const handleThemeSwitcher = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="flex items-center hover:animate-pulse"
      onClick={handleThemeSwitcher}>

      {theme === 'dark' ? <BsSunFill size={24} className='text-slate-200' /> : <FaMoon size={22} />}

      <div className="font-medium text-base ml-1 dark:text-slate-100 hidden">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  )
}
