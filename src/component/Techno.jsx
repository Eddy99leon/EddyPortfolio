import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Techno = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className='max-w-5xl w-full mx-auto pt-12 pb-20 px-3' id='skills'>
      <div></div>
      <div className='relative text-center font-bold dark:text-gray-300 text-gray-900  text-base mt-16 mb-24 transition-all duration-700'>
        Mes Compétences
        <span className='absolute bg-ColorVert w-24 h-[6px] mx-auto top-7 inset-x-0'></span>
      </div>
      <div className='grid grid-cols-4 justify-items-center gap-14 items-center'>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
            className='w-[70px]' 
          />
        </div>
        <div className='transition-all duration-700'>
            { theme === "dark" ? 
              <i className="devicon-express-original text-gray-300 text-5xl sm:text-8xl"></i>
              :
              <i className="devicon-express-original text-gray-950 text-5xl sm:text-8xl"></i>
            }
        </div>
        <div className='transition-all duration-700'>
            { theme === "dark" ? 
              <i className="devicon-nextjs-original text-gray-300 text-5xl sm:text-7xl"></i>
              :
              <i className="devicon-nextjs-original text-gray-950 text-5xl sm:text-7xl"></i>
            }
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div className='transition-all duration-700'>
            { theme === "dark" ? 
              <i className="devicon-github-original-wordmark text-gray-300 text-5xl sm:text-7xl"></i>
              :
              <i className="devicon-github-original-wordmark text-gray-950 text-5xl sm:text-7xl"></i>
            }
        </div>
      </div>
    </div>
  )
}

export default Techno